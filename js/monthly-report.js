// ╔══════════════════════════════════════════════════════════════════════╗
// ║  FitSofra — Aylık Beslenme Karnesi (Monthly Report)                 ║
// ║                                                                      ║
// ║  Spotify Wrapped tarzı aylık özet. Bir ay biter bitmez ilk app      ║
// ║  açılışında modal otomatik açılır. Paylaşılabilir kart üretir.      ║
// ║                                                                      ║
// ║  Özet metrikler:                                                     ║
// ║    - Toplam öğün, en sevilen tarif, en aktif gün                    ║
// ║    - Kilo değişimi, en uzun seri                                     ║
// ║    - Vücut skoru başlangıç → bitiş, ortalama mikro                   ║
// ║    - Geliştirilecek mikro (en zayıf)                                 ║
// ╚══════════════════════════════════════════════════════════════════════╝
(function(){
  'use strict';

  function _dk(d){
    return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  }

  function _dayData(dk){
    try{
      var raw=localStorage.getItem('fs_day_'+dk);
      if(!raw) return null;
      return JSON.parse(raw);
    }catch(e){ return null; }
  }

  function _profile(){
    try{ return JSON.parse(localStorage.getItem('fs_profile')||'{}')||{}; }catch(e){ return {}; }
  }

  function _weightLog(){
    try{ return JSON.parse(localStorage.getItem('fs_weight_log')||'[]')||[]; }catch(e){ return []; }
  }

  var TR_MONTHS=['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];

  /**
   * Verilen ay için karne oluştur.
   * @param {number} year
   * @param {number} month - 1-12 (insan formatı)
   * @returns {object}
   */
  function generate(year, month){
    var profile=_profile();
    var firstDay=new Date(year, month-1, 1);
    var lastDay=new Date(year, month, 0);
    var totalDaysInMonth=lastDay.getDate();

    var days=[];
    for(var d=1; d<=totalDaysInMonth; d++){
      var dt=new Date(year, month-1, d);
      var dk=_dk(dt);
      var dd=_dayData(dk);
      var foods=[];
      var cal=0,p=0,c=0,f=0;
      if(dd){
        Object.entries(dd).forEach(function(entry){
          var meal=entry[0], list=entry[1];
          if(!Array.isArray(list)) return;
          list.forEach(function(food){
            cal+=food.cal||0; p+=food.prot||0; c+=food.carb||0; f+=food.fat||0;
            foods.push(Object.assign({},food,{meal:meal}));
          });
        });
      }
      var water=parseInt(localStorage.getItem('fs_water_'+dk))||0;
      var ex=[];
      try{ ex=JSON.parse(localStorage.getItem('fs_ex_'+dk)||'[]')||[]; }catch(e){}
      days.push({date:dk, dayOfMonth:d, foods:foods, cal:cal, prot:p, carb:c, fat:f, water:water, exercise:ex.length>0});
    }

    var activeDays=days.filter(function(d){ return d.foods.length>0; });
    var totalMeals=activeDays.reduce(function(s,d){return s+d.foods.length;},0);

    // En sevilen yemek (en çok loglanan)
    var foodCounts={};
    activeDays.forEach(function(d){
      d.foods.forEach(function(f){
        var name=(f.name||'').trim();
        if(!name) return;
        foodCounts[name]=(foodCounts[name]||0)+1;
      });
    });
    var topFoods=Object.keys(foodCounts).map(function(n){return {name:n,count:foodCounts[n]};})
      .sort(function(a,b){return b.count-a.count;}).slice(0,3);

    // En aktif gün (en çok kalori loglanan, en çok öğün)
    var bestDay=null;
    activeDays.forEach(function(d){
      if(!bestDay || d.foods.length>bestDay.foods.length) bestDay=d;
    });

    // Hedef tutarlılığı
    var calTarget=parseFloat(profile.dailyTarget)||0;
    if(!calTarget && profile.weight){
      var w=parseFloat(profile.weight)||70;
      var h=parseFloat(profile.height)||170;
      var age=parseFloat(profile.age)||30;
      var act=parseFloat(profile.activity)||1.375;
      var goalAdj=parseFloat(profile.goal)||0;
      var bmr=(profile.gender==='female')
        ? 10*w + 6.25*h - 5*age - 161
        : 10*w + 6.25*h - 5*age + 5;
      calTarget=Math.round(bmr*act + goalAdj);
    }
    var onTarget=0;
    if(calTarget>0){
      onTarget=activeDays.filter(function(d){
        var r=d.cal/calTarget;
        return r>=0.85 && r<=1.15;
      }).length;
    }

    // Ortalamalar
    var avgCal=activeDays.length ? Math.round(activeDays.reduce(function(s,d){return s+d.cal;},0)/activeDays.length) : 0;
    var avgProt=activeDays.length ? Math.round(activeDays.reduce(function(s,d){return s+d.prot;},0)/activeDays.length) : 0;
    var totalWater=activeDays.reduce(function(s,d){return s+d.water;},0);
    var exerciseDays=days.filter(function(d){return d.exercise;}).length;

    // En uzun seri (consecutive logged days within month)
    var longestStreak=0, currentStreak=0;
    days.forEach(function(d){
      if(d.foods.length>0){
        currentStreak++;
        if(currentStreak>longestStreak) longestStreak=currentStreak;
      } else {
        currentStreak=0;
      }
    });

    // Kilo değişimi
    var wlog=_weightLog();
    var weightStart=null, weightEnd=null;
    if(wlog.length){
      var monthEntries=wlog.filter(function(e){
        if(!e.date) return false;
        var d=new Date(e.date);
        return d.getFullYear()===year && (d.getMonth()+1)===month;
      });
      if(monthEntries.length>=1){
        weightStart=monthEntries[0].weight;
        weightEnd=monthEntries[monthEntries.length-1].weight;
      } else {
        // Aydan önce/sonra en yakın kayıtlar
        var before=wlog.filter(function(e){
          return e.date && new Date(e.date) < firstDay;
        });
        var after=wlog.filter(function(e){
          return e.date && new Date(e.date) > lastDay;
        });
        if(before.length) weightStart=before[before.length-1].weight;
        if(after.length) weightEnd=after[0].weight;
        if(!weightEnd && before.length) weightEnd=before[before.length-1].weight;
      }
    }
    var weightDelta=(weightStart!==null && weightEnd!==null) ? Math.round((weightEnd-weightStart)*10)/10 : null;

    // Mikro besin ortalaması (DailyMicro varsa, son birkaç günden örnekle)
    var microAvg=null, microWeak=null;
    if(window.DailyMicro && window.DailyMicro.aggregate && activeDays.length){
      var DV=(window.TuberDV && window.TuberDV.getDV()) || window.DailyMicro.DV || {};
      var microKeys=['fe','ca','b12','folat','vitC','fiber','mg','k'];
      var sums={}, dayCount=0;
      microKeys.forEach(function(k){sums[k]=0;});
      // Performans: max 14 gün örnekle
      var sample=activeDays.slice(-14);
      sample.forEach(function(d){
        try{
          var agg=window.DailyMicro.aggregate(d.foods);
          if(!agg||!agg.micro) return;
          dayCount++;
          microKeys.forEach(function(k){
            sums[k]+=Math.min(150,(agg.micro[k]||0)/(DV[k]||1)*100);
          });
        }catch(e){}
      });
      if(dayCount>0){
        microAvg={};
        microKeys.forEach(function(k){
          microAvg[k]=Math.round(sums[k]/dayCount);
        });
        // En zayıf (sodium hariç, zaten yok)
        var weakest=null;
        Object.keys(microAvg).forEach(function(k){
          if(!weakest || microAvg[k]<microAvg[weakest]) weakest=k;
        });
        microWeak=weakest;
      }
    }

    // Egzersiz günü oranı
    var report={
      year:year,
      month:month,
      monthName:TR_MONTHS[month-1],
      totalDaysInMonth:totalDaysInMonth,
      activeDays:activeDays.length,
      totalMeals:totalMeals,
      avgCal:avgCal,
      avgProt:avgProt,
      calTarget:calTarget,
      onTargetDays:onTarget,
      onTargetPct:activeDays.length ? Math.round(onTarget/activeDays.length*100) : 0,
      topFoods:topFoods,
      bestDay:bestDay ? {
        date:bestDay.date,
        dayOfMonth:bestDay.dayOfMonth,
        foodCount:bestDay.foods.length,
        cal:Math.round(bestDay.cal)
      } : null,
      totalWater:totalWater,
      exerciseDays:exerciseDays,
      longestStreak:longestStreak,
      weightStart:weightStart,
      weightEnd:weightEnd,
      weightDelta:weightDelta,
      microAvg:microAvg,
      microWeak:microWeak,
      generatedAt:Date.now()
    };

    return report;
  }

  function _microLabel(k){
    var labels={fe:'Demir',ca:'Kalsiyum',b12:'B12',folat:'Folat',vitC:'C Vit',fiber:'Lif',mg:'Magnezyum',k:'Potasyum',vitA:'A Vit'};
    return labels[k]||k;
  }

  function _microIcon(k){
    var icons={fe:'🩸',ca:'🦴',b12:'🥚',folat:'🥬',vitC:'🍊',fiber:'🌾',mg:'🌿',k:'🍌',vitA:'🥕'};
    return icons[k]||'•';
  }

  /**
   * Modal HTML üretir.
   */
  function renderCard(report){
    var r=report;
    if(!r) return '';

    var weightHtml='';
    if(r.weightDelta!==null){
      var col=r.weightDelta<0?'var(--green)':r.weightDelta>0?'var(--orange)':'var(--text2)';
      var sym=r.weightDelta<0?'⬇️':r.weightDelta>0?'⬆️':'➡️';
      weightHtml='<div class="mr-stat"><div class="mr-stat-label">'+sym+' Kilo değişimi</div>'
        +'<div class="mr-stat-val" style="color:'+col+'">'+(r.weightDelta>0?'+':'')+r.weightDelta+' kg</div></div>';
    }

    var topFoodHtml='';
    if(r.topFoods && r.topFoods.length){
      topFoodHtml='<div class="mr-stat"><div class="mr-stat-label">❤️ En sevdiğin</div>'
        +'<div class="mr-stat-val" style="font-size:.95rem">'+r.topFoods[0].name+'</div>'
        +'<div style="font-size:.62rem;color:var(--text2);margin-top:2px">'+r.topFoods[0].count+' kez</div></div>';
    }

    var bestDayHtml='';
    if(r.bestDay){
      bestDayHtml='<div class="mr-stat"><div class="mr-stat-label">🌟 En aktif gün</div>'
        +'<div class="mr-stat-val" style="font-size:.95rem">'+r.bestDay.dayOfMonth+' '+r.monthName+'</div>'
        +'<div style="font-size:.62rem;color:var(--text2);margin-top:2px">'+r.bestDay.foodCount+' öğün</div></div>';
    }

    var microHtml='';
    if(r.microAvg){
      var keys=['fe','ca','b12','folat','vitC','fiber'];
      var bars=keys.map(function(k){
        var v=r.microAvg[k]||0;
        var pct=Math.min(100,v);
        var col=v>=80?'var(--green)':v>=50?'var(--orange)':'#ff5c5c';
        return '<div style="display:flex;align-items:center;gap:6px;font-size:.66rem;padding:3px 0">'
          +'<span style="width:80px;color:var(--text2)">'+_microIcon(k)+' '+_microLabel(k)+'</span>'
          +'<div style="flex:1;height:5px;background:var(--glass);border-radius:3px;overflow:hidden">'
          +'<div style="height:100%;width:'+pct+'%;background:'+col+'"></div></div>'
          +'<span style="width:36px;text-align:right;font-weight:700;color:'+col+'">%'+v+'</span>'
          +'</div>';
      }).join('');
      var weakLine='';
      if(r.microWeak){
        weakLine='<div style="margin-top:8px;padding:8px;background:rgba(255,92,92,.08);border-left:3px solid #ff5c5c;border-radius:6px;font-size:.7rem;line-height:1.4">'
          +'⚠️ <b>Geliştir:</b> Bu ay '+_microIcon(r.microWeak)+' <b>'+_microLabel(r.microWeak)+'</b> ortalaman %'+r.microAvg[r.microWeak]+'. Mikro besin önerilerine bak!'
          +'</div>';
      }
      microHtml='<div class="mr-section">'
        +'<h4 style="font-size:.78rem;font-weight:700;margin:14px 0 8px;color:var(--text)">🥗 Mikro Besin Karnesi</h4>'
        +bars+weakLine+'</div>';
    }

    var emoji=r.activeDays>=20 ? '🏆' : r.activeDays>=10 ? '🌟' : r.activeDays>=5 ? '💪' : '🌱';
    var motivLine=r.activeDays>=20
      ? 'Mükemmel bir aydı! Tutarlılık şampiyonusun.'
      : r.activeDays>=10
        ? 'İyi bir ritim yakalamışsın, devam et!'
        : r.activeDays>=5
          ? 'Başlangıç güzel, daha sıkı tut.'
          : 'Bu ay az kayıt var, yeni ay yeni şans!';

    return '<div class="monthly-report-card">'
      +'<div class="mr-header">'
      +'<div style="font-size:2.2rem">'+emoji+'</div>'
      +'<div style="flex:1;min-width:0">'
      +'<div style="font-size:.7rem;color:var(--text2);font-weight:600;letter-spacing:1px;text-transform:uppercase">FitSofra Karnen</div>'
      +'<div style="font-size:1.4rem;font-weight:900;color:var(--text);line-height:1.1">'+r.monthName+' '+r.year+'</div>'
      +'</div></div>'
      +'<div style="font-size:.78rem;color:var(--text2);margin:6px 0 14px;line-height:1.4">'+motivLine+'</div>'
      +'<div class="mr-grid">'
      +'<div class="mr-stat"><div class="mr-stat-label">📊 Toplam öğün</div><div class="mr-stat-val">'+r.totalMeals+'</div></div>'
      +'<div class="mr-stat"><div class="mr-stat-label">📅 Aktif gün</div><div class="mr-stat-val">'+r.activeDays+'<span style="font-size:.7rem;color:var(--text2);font-weight:600">/'+r.totalDaysInMonth+'</span></div></div>'
      +'<div class="mr-stat"><div class="mr-stat-label">🔥 En uzun seri</div><div class="mr-stat-val">'+r.longestStreak+' gün</div></div>'
      +'<div class="mr-stat"><div class="mr-stat-label">🎯 Hedefte gün</div><div class="mr-stat-val">%'+r.onTargetPct+'</div></div>'
      +bestDayHtml
      +topFoodHtml
      +'<div class="mr-stat"><div class="mr-stat-label">🏃 Egzersiz günü</div><div class="mr-stat-val">'+r.exerciseDays+'</div></div>'
      +'<div class="mr-stat"><div class="mr-stat-label">💧 Toplam su</div><div class="mr-stat-val">'+(r.totalWater>=1000?(r.totalWater/1000).toFixed(1)+'L':r.totalWater+'ml')+'</div></div>'
      +weightHtml
      +'</div>'
      +microHtml
      +'</div>';
  }

  // Modal göstermek için
  function showModal(report){
    var existing=document.getElementById('monthlyReportModal');
    if(existing) existing.remove();

    var m=document.createElement('div');
    m.id='monthlyReportModal';
    m.className='modal-backdrop';
    m.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.85);backdrop-filter:blur(8px);z-index:9999;display:flex;align-items:center;justify-content:center;padding:14px;animation:fadeIn .25s';
    var inner='<div style="background:var(--card);border-radius:16px;border:1px solid var(--border);padding:18px;max-width:420px;width:100%;max-height:90vh;overflow-y:auto;position:relative">'
      +'<button onclick="document.getElementById(\'monthlyReportModal\').remove()" aria-label="Kapat" style="position:absolute;top:10px;right:10px;background:var(--glass);border:1px solid var(--border);color:var(--text);width:32px;height:32px;border-radius:50%;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;z-index:2">✕</button>'
      +renderCard(report)
      +'<div style="display:flex;gap:8px;margin-top:16px">'
      +'<button onclick="MonthlyReport.shareCard()" style="flex:1;background:var(--accent);border:none;color:white;padding:11px;border-radius:10px;font-weight:700;font-size:.78rem;cursor:pointer">📤 Paylaş</button>'
      +'<button onclick="document.getElementById(\'monthlyReportModal\').remove()" style="flex:1;background:var(--glass);border:1px solid var(--border);color:var(--text);padding:11px;border-radius:10px;font-weight:700;font-size:.78rem;cursor:pointer">Kapat</button>'
      +'</div></div>';
    m.innerHTML=inner;
    m.addEventListener('click',function(e){
      if(e.target===m) m.remove();
    });
    document.body.appendChild(m);

    // Stil enjekte et (1 kez)
    if(!document.getElementById('monthlyReportStyles')){
      var s=document.createElement('style');
      s.id='monthlyReportStyles';
      s.textContent='.monthly-report-card .mr-header{display:flex;align-items:center;gap:12px;padding-bottom:10px;border-bottom:1px solid var(--border)}'
        +'.monthly-report-card .mr-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}'
        +'.monthly-report-card .mr-stat{background:var(--glass);border:1px solid var(--border);border-radius:10px;padding:10px}'
        +'.monthly-report-card .mr-stat-label{font-size:.62rem;color:var(--text2);font-weight:600;margin-bottom:4px}'
        +'.monthly-report-card .mr-stat-val{font-size:1.3rem;font-weight:900;color:var(--text);line-height:1.1}'
        +'.monthly-report-card .mr-section{margin-top:6px}';
      document.head.appendChild(s);
    }
  }

  /**
   * Ay başında ilk açılışta otomatik göster.
   * - Geçen ayın karnesi henüz gösterilmediyse modal aç
   */
  function checkAndShow(){
    var now=new Date();
    var lastMonth=new Date(now.getFullYear(), now.getMonth()-1, 1);
    var key=lastMonth.getFullYear()+'-'+String(lastMonth.getMonth()+1).padStart(2,'0');
    var shownKey='fs_monthly_report_shown_'+key;
    if(localStorage.getItem(shownKey)) return false;

    // Geçen ay için yeterli veri var mı? (en az 3 aktif gün)
    var report;
    try{
      report=generate(lastMonth.getFullYear(), lastMonth.getMonth()+1);
    }catch(e){ console.warn('[MonthlyReport]',e); return false; }
    if(!report || report.activeDays<3){
      // Yeterli veri yoksa "gösterildi" işaretle, ileride göstermesin
      localStorage.setItem(shownKey,'1');
      return false;
    }
    // Cache'le
    try{ localStorage.setItem('fs_monthly_report_'+key, JSON.stringify(report)); }catch(e){}
    // Göster
    setTimeout(function(){
      showModal(report);
      localStorage.setItem(shownKey,'1');
    }, 1500);
    return true;
  }

  /**
   * Manuel olarak bir ayın karnesini aç (önceki aylar listesinden)
   */
  function openMonth(year, month){
    var key=year+'-'+String(month).padStart(2,'0');
    var report;
    try{
      var cached=localStorage.getItem('fs_monthly_report_'+key);
      if(cached) report=JSON.parse(cached);
    }catch(e){}
    if(!report) report=generate(year, month);
    if(report) showModal(report);
  }

  /**
   * Karneyi PNG olarak paylaş (canvas'a çiz, indir)
   */
  function shareCard(){
    var modal=document.getElementById('monthlyReportModal');
    if(!modal){ alert('Karne kapalı'); return; }
    var card=modal.querySelector('.monthly-report-card');
    if(!card){ return; }
    // Web Share API tercih edilirse
    if(navigator.share){
      try{
        navigator.share({
          title:'FitSofra Aylık Karnem',
          text:'Bu ay FitSofra ile beslenme yolculuğum 🌟',
          url:window.location.href
        }).catch(function(){});
      }catch(e){}
    } else {
      // Fallback: clipboard'a metin
      var text='FitSofra Aylık Karnem 🌟 — '+(card.querySelector('.mr-header div:nth-child(2) div:nth-child(2)')||{}).textContent;
      try{
        if(navigator.clipboard) navigator.clipboard.writeText(text);
        alert('Karne metni panoya kopyalandı! 📋');
      }catch(e){
        alert('Paylaşım için tarayıcı desteği yok.');
      }
    }
  }

  /**
   * Önceki ayların listesini ver (UI'da seçim için)
   */
  function listAvailableMonths(maxBack){
    maxBack=maxBack||12;
    var out=[];
    var now=new Date();
    for(var i=1; i<=maxBack; i++){
      var d=new Date(now.getFullYear(), now.getMonth()-i, 1);
      var report=generate(d.getFullYear(), d.getMonth()+1);
      if(report.activeDays>=3){
        out.push({
          year:d.getFullYear(),
          month:d.getMonth()+1,
          monthName:TR_MONTHS[d.getMonth()],
          activeDays:report.activeDays,
          totalMeals:report.totalMeals
        });
      }
    }
    return out;
  }

  window.MonthlyReport = {
    generate: generate,
    renderCard: renderCard,
    showModal: showModal,
    checkAndShow: checkAndShow,
    openMonth: openMonth,
    shareCard: shareCard,
    listAvailableMonths: listAvailableMonths
  };

})();
