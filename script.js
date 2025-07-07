/* ========= 冠智問卷 ========= */
document.addEventListener('DOMContentLoaded', () => {

  /* === 1. 題庫（↓請補完其它職業題目） === */
  const spinQuestions = {
    '一般上班族': [
      { q: '你現在做的這份工作穩定嗎？',  options: ['穩定','偶爾變動','很不穩定'] },
      { q: '這份工作對你來說壓力大不大？', options: ['正常','壓力大','非常疲憊'] },
      // …其餘題目
    ],
    // '自營業者': [ … ],
    // …
  };

  /* === 2. DOM 快捷 === */
  const $    = id => document.getElementById(id);
  const show = (id, f) => { $(id).style.display = f ? 'block' : 'none'; };

  const form   = $('questionForm');
  const jobSel = $('job');

  /* === 3. 下一步 === */
  $('nextBtn').addEventListener('click', () => {
    if (!($('name').value.trim() && $('phone').value.trim() &&
          $('lineId').value.trim() && $('birthday').value)) {
      alert('請完整填寫所有基本資料！');
      return;
    }
    show('basicInfoSection', false);
    show('questionSection',  true);
  });

  /* === 4. 選職業 → 產生問卷 === */
  jobSel.addEventListener('change', () => jobSel.value && buildQuestions());

  function buildQuestions () {
    const qs = spinQuestions[jobSel.value] || [];
    form.innerHTML = '';

    qs.forEach((item, i) => {
      form.insertAdjacentHTML('beforeend', `<label>Q${i+1}. ${item.q}</label>`);
      item.options.forEach(opt=>{
        form.insertAdjacentHTML('beforeend',
          `<div><input type="radio" name="q${i}" value="${opt}" required> ${opt}</div>`);
      });
    });

    const btn = document.createElement('button');
    btn.textContent = '開始評估';
    btn.type = 'button';
    btn.style.marginTop = '25px';
    btn.onclick = () => showResult(qs);
    form.appendChild(btn);
    form.scrollIntoView({behavior:'smooth'});
  }

  /* === 5. 顯示結果 === */
  async function showResult (qs){
    /* 5-1 取答案 */
    const ans  = qs.map((_,i)=>form.querySelector(`input[name="q${i}"]:checked`));
    const miss = ans.findIndex(a=>!a);
    if (miss!==-1) return alert(`請回答第 ${miss+1} 題！`);

    /* 5-2 組版面 */
    form.innerHTML='';
    const box=document.createElement('div');
    box.className='result-container';
    box.innerHTML=`
      <p style="background:#fffae6;border:1px solid #f2c94c;
                padding:10px;text-align:center;font-weight:600;
                margin-bottom:15px;">請先下載健檢資料，再前往 LINE 諮詢</p>`;

    const info = {
      name:$('name').value,   phone:$('phone').value,
      line:$('lineId').value, bday:$('birthday').value,
      job :jobSel.value
    };
    box.insertAdjacentHTML('beforeend',`
      <table style="width:100%;border:1px solid #ddd;font-size:15px">
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

    /* 5-3 轉成圖片 */
    const canvas  = await html2canvas(box,{scale:2});
    const dataURL = canvas.toDataURL('image/png');

    /* 5-4 按鈕區 */
    const btnWrap=document.createElement('div');
    btnWrap.style.cssText='text-align:center;margin:20px 0;';

    /* --- 下載按鈕 --- */
    const ua      = navigator.userAgent;
    const inLINE  = /\bLine\//i.test(ua);
    const isiOS   = /\(iP(hone|od|ad);/i.test(ua);

    const dl = document.createElement('a');
    dl.textContent='下載健檢成果';
    dl.style.cssText=`
      display:inline-block;padding:8px 16px;font-size:15px;
      background:#e0f0ff;color:#000;border:1px solid #66aadd;
      border-radius:6px;text-decoration:none;`;

    if (!inLINE && !isiOS){            /* 一般瀏覽器：直接下載 */
      dl.href     = dataURL;
      dl.download = '健檢問卷結果.png';
      dl.target   = '_blank';
    }else{                             /* LINE / iOS：開子視窗 → 長按 */
      dl.href='javascript:void(0)';
      dl.addEventListener('click',()=>{
        const w = window.open('', '_blank');
        if(!w){alert('瀏覽器阻擋了新視窗，請改用系統瀏覽器開啟再試！');return;}
        w.document.write(`
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <title>長按圖片下載</title>
          <p style="text-align:center;font-weight:600">
            ⏬ 長按以下圖片 → 儲存 ⏬
          </p>
          <img src="${dataURL}" style="width:100%;max-width:600px;display:block;margin:0 auto">
        `);
      });
    }

    /* --- LINE 按鈕 (anchor) --- */
    const addUrl = 'https://line.me/R/ti/p/%40637zzurf';
    const lineA  = document.createElement('a');
    lineA.textContent='LINE 諮詢';
    lineA.href=addUrl; lineA.target='_blank';
    lineA.style.cssText=`
      display:inline-block;padding:8px 16px;font-size:15px;
      background:#06c755;color:#fff;border:none;border-radius:6px;
      margin-left:10px;text-decoration:none;`;
    lineA.addEventListener('click',e=>{
      const isAndroid=/\bAndroid\b/i.test(ua)&&!/Windows/i.test(ua);
      const scheme='line://ti/p/637zzurf';
      if(isiOS||isAndroid){
        e.preventDefault();
        location.href=scheme;
        setTimeout(()=>location.href=addUrl,800);
      }
    });

    btnWrap.append(dl,lineA);
    box.insertBefore(btnWrap, box.children[1]);
    box.scrollIntoView({behavior:'smooth'});
  }

});
