/* ==========  冠智問卷邏輯 ========== */
document.addEventListener('DOMContentLoaded', () => {
  /* ── 1. 題庫 ──  (每個職業 9 題) */
  const spinQuestions = {
    "一般上班族":[
      {q:"你現在做的這份工作穩定嗎？",        options:["穩定","偶爾變動","很不穩定"]},
      {q:"這份工作對你來說壓力大不大？",        options:["正常","壓力大","非常疲憊"]},
      {q:"你目前有固定在儲蓄嗎？還是存了就花？", options:["有固定存","幾乎沒存"]},
      {q:"公司有提撥勞退，你還有另外規劃退休金嗎？", options:["有額外規劃","想規劃但還沒做","沒有規劃"]},
      {q:"若突發大筆支出（家人生病醫療費等），你覺得夠用嗎？", options:["可能夠","完全沒有準備"]},
      {q:"退休後勞退每月2萬的生活費你覺得夠嗎？", options:["應該夠用","還想更多"]},
      {q:"若裁員或生病無法上班幾個月，生活開銷有個備案嗎？", options:["有一筆緊急避難金","有想過但還沒準備"]},
      {q:"如果有個方式，可以每月幫你存一點…重要嗎？", options:["重要","還好"]},
      {q:"這方式像準備『備用電池』…你想進一步了解嗎？", options:["想了解","觀望"]}
    ],
    "自營業者":[
      {q:"你目前生意穩定嗎？",               options:["穩定","偶爾波動"]},
      {q:"你覺得當老闆一人多職辛苦嗎？",     options:["可接受","略辛苦"]},
      {q:"你固定存錢？還是全部投入事業？",     options:["固定存錢","少量存款","全部投入"]},
      {q:"老闆沒有勞退，你有自主退休或投資規劃嗎？", options:["部分有安排","還沒有想過"]},
      {q:"店面修繕/突發大筆支出時，會有壓力感嗎？", options:["可應付","多少有壓力"]},
      {q:"你估算過退休後每月要花多少嗎？",     options:["已估算並準備","略擔心"]},
      {q:"若生病不能工作幾個月，家裡開銷有備案嗎？", options:["部分準備","還沒有準備"]},
      {q:"若每月撥幾千做備用金/退休準備，實用嗎？", options:["要看方案","不需要"]},
      {q:"這像替生意準備保險…想了解嗎？",     options:["想了解","再觀望"]}
    ],
    "領導主管":[
      {q:"你目前團隊工作量是否滿檔？",           options:["非常忙碌","偶爾加班","時間彈性"]},
      {q:"領導公司同時會犧牲與家人時間嗎？",       options:["常常犧牲","偶爾","無影響"]},
      {q:"你固定安排資產儲蓄嗎？",                 options:["固定儲蓄","部分儲蓄","幾乎不存"]},
      {q:"若生病休息幾個月，財務準備充足嗎？",     options:["部分準備","沒準備"]},
      {q:"現在收入足以支撐退休生活嗎？",           options:["應該足夠","可能不足","完全不擔心"]},
      {q:"資產配置有長期穩定型保障/退休金嗎？",     options:["部分有規劃","還沒有"]},
      {q:"考慮過讓資產同時產生現金流嗎？",         options:["已布局","正在考慮"]},
      {q:"每月撥小額打造保障，覺得有幫助嗎？",     options:["可以評估","暫不需要"]},
      {q:"這像替家庭建防線，有興趣了解嗎？",       options:["想了解","再觀望"]}
    ],
    "計程車司機":[
      {q:"您一天大約開幾小時？",                options:["12小時以上","8到12小時","少於8小時"]},
      {q:"開車收入是否波動？",                   options:["很穩定","稍有波動"]},
      {q:"平均一月可存多少？",                   options:["超過2萬","5000-1萬","3000-5000"]},
      {q:"若無法跑車時有其他收入來源嗎？",       options:["部分收入","完全沒有"]},
      {q:"淡季／疫情期間載客少時會吃緊嗎？",      options:["晚點下班就好","稍微吃緊"]},
      {q:"若身體不適影響收入，家用受影響嗎？",    options:["稍微影響","完全不影響"]},
      {q:"車子大修或急需用錢時會有壓力嗎？",      options:["能應付","稍微擔心"]},
      {q:"每月存2~5000作預備金，覺得實用嗎？",    options:["我不會車禍","會覺得好險"]},
      {q:"此筆錢可當退休補貼，想了解嗎？",        options:["想了解","可以考慮"]}
    ],
    "公職/醫療":[
      {q:"目前公部門/醫療單位工作還習慣嗎？",      options:["還行","不太習慣"]},
      {q:"值班/輪班對健康或家庭影響？",           options:["無影響","些微影響"]},
      {q:"有另外固定做儲蓄或投資嗎？",            options:["少量儲蓄/投資","幾乎沒有"]},
      {q:"有再額外規劃退休金嗎？",                options:["做過規劃","正在考慮"]},
      {q:"遇重大醫療支出時現金流夠嗎？",          options:["應該足夠","可能不足"]},
      {q:"退休後每月生活費估算夠用嗎？",          options:["應該夠","勉強夠"]},
      {q:"若制度調整或高風險導致停工，備案？",    options:["應該有備案","還沒有想過"]},
      {q:"每月小額補醫療缺口&退休金，實用嗎？",    options:["可考慮","還好"]},
      {q:"多一層防護網，想深入了解嗎？",          options:["想了解","再看看"]}
    ]
  };

  /* ── 2. DOM 快捷 ── */
  const $  = id => document.getElementById(id);
  const show = (id, f)=>{ $(id).style.display = f ? 'block':'none' };

  const form   = $('questionForm');
  const jobSel = $('job');

  /* ── 3. 下一步 ── */
  $('nextBtn').addEventListener('click', ()=>{
    if(!($('name').value.trim()&&$('phone').value.trim()&&
         $('lineId').value.trim()&&$('birthday').value)){
      alert('請完整填寫所有基本資料！'); return;
    }
    show('basicInfoSection',false);
    show('questionSection',true);
  });

  /* ── 4. 產生問卷 ── */
  jobSel.addEventListener('change', ()=> jobSel.value && buildQuestions());

  function buildQuestions(){
    const qs = spinQuestions[jobSel.value] || [];
    form.innerHTML='';
    qs.forEach((item,i)=>{
      form.insertAdjacentHTML('beforeend',`<label>Q${i+1}. ${item.q}</label>`);
      item.options.forEach(opt=>{
        form.insertAdjacentHTML('beforeend',
          `<div><input type="radio" name="q${i}" value="${opt}" required> ${opt}</div>`);
      });
    });
    const btn=document.createElement('button');
    btn.textContent='開始評估';
    btn.type='button';
    btn.style.marginTop='25px';
    btn.onclick=()=>showResult(qs);
    form.appendChild(btn);
    form.scrollIntoView({behavior:'smooth'});
  }

  /* ── 5. 顯示結果 ── */
  async function showResult(qs){
    const ans = qs.map((_,i)=>form.querySelector(`input[name="q${i}"]:checked`));
    const miss= ans.findIndex(a=>!a);
    if(miss!==-1) return alert(`請回答第 ${miss+1} 題！`);

    $('jobSection').style.display='none';
    form.innerHTML='';
    const box=document.createElement('div');
    box.className='result-container';
    box.style.maxWidth='340px';
    box.style.margin='0 auto';

    box.innerHTML=`
      <p style="background:#fffae6;border:1px solid #f2c94c;
                padding:10px;text-align:center;font-weight:600;
                margin-bottom:15px;">
        請自行截圖此評估結果，傳送至 LINE 諮詢
      </p>`;

    const info={
      name:$('name').value, phone:$('phone').value,
      line:$('lineId').value, bday:$('birthday').value,
      job: jobSel.value
    };
    box.insertAdjacentHTML('beforeend',`
      <table>
        <tr><th style="width:35%">姓名</th><td>${info.name}</td></tr>
        <tr><th>電話</th><td>${info.phone}</td></tr>
        <tr><th>Line ID</th><td>${info.line}</td></tr>
        <tr><th>生日</th><td>${info.bday}</td></tr>
        <tr><th>職業</th><td>${info.job}</td></tr>
      </table>`);

    qs.forEach((item,i)=>{
      box.insertAdjacentHTML('beforeend',`
        <div class="qa-card">
          <div class="question">Q${i+1}. ${item.q}</div>
          <div class="answer">👉 ${ans[i].value}</div>
        </div>`);
    });

    form.appendChild(box);
    await html2canvas(box,{scale:2});   // 供使用者截圖

    const btnWrap=document.createElement('div');
    btnWrap.style.cssText='text-align:center;margin:20px 0;';
    const addUrl='https://line.me/R/ti/p/%40637zzurf';
    const lineA=document.createElement('a');
    lineA.textContent='LINE 諮詢';
    lineA.href=addUrl;
    lineA.target='_blank';
    lineA.style.cssText=`
      display:inline-block;padding:8px 16px;font-size:15px;
      background:#06c755;color:#fff;border:none;border-radius:6px;
      cursor:pointer;text-decoration:none;`;
    lineA.addEventListener('click',e=>{
      const ua=navigator.userAgent;
      const isIOS=/\(iP(hone|od|ad);/i.test(ua);
      const isAndroid=/\bAndroid\b/i.test(ua)&&!/Windows/i.test(ua);
      const scheme='line://ti/p/637zzurf';
      if(isIOS||isAndroid){
        e.preventDefault();
        location.href=scheme;
        setTimeout(()=>location.href=addUrl,800);
      }
    });

    btnWrap.append(lineA);
    box.insertBefore(btnWrap, box.children[1]);
    box.scrollIntoView({behavior:'smooth'});
  }
});
