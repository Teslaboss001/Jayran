// 引入 html2canvas（放在 HTML 裡，不在 JS 檔）
// <script src="https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.min.js"></script>

document.addEventListener('DOMContentLoaded', () => {
  const spinQuestions = {
    "一般上班族": [
      { q: "你現在做的這份工作穩定嗎？", options: ["穩定", "偶爾變動", "很不穩定"] },
      { q: "這份工作對你來說壓力大不大？", options: ["正常", "壓力大", "非常疲憊"] },
      { q: "你目前有固定在儲蓄嗎？還是存了就花？", options: ["有固定存", "幾乎沒存"] },
      { q: "公司有提撥勞退，你還有另外規劃退休金嗎？", options: ["有額外規劃", "想規劃但還沒做", "沒有規劃"] },
      { q: "若突發大筆支出（家人生病醫療費等），你覺得夠用嗎？", options: ["可能夠", "完全沒有準備"] },
      { q: "退休後勞退每月2萬的生活費你覺得夠嗎？", options: ["應該夠用", "還想更多"] },
      { q: "若裁員或生病無法上班幾個月，生活開銷有個備案嗎？", options: ["有一筆緊急避難金", "有想過但還沒準備"] },
      { q: "如果有個方式，可以每月幫你存一點，未來變成一筆退休補貼，或遇急用也能用，你覺得重要嗎？", options: ["重要", "還好"] },
      { q: "這種方式就像幫自己準備一個『備用電池』，平常不用，但哪天斷電就知道多重要了，你想進一步了解嗎？", options: ["想了解", "觀望"] }
    ],
    // ... 其餘職業題目照原本繼續補上 ...
  };

  const $ = id => document.getElementById(id);
  const show = (id, f) => { $(id).style.display = f ? 'block' : 'none'; };

  const form = $('questionForm');
  const jobSel = $('job');

  $('nextBtn').addEventListener('click', () => {
    if (!($('name').value.trim() && $('phone').value.trim() && $('lineId').value.trim() && $('birthday').value)) {
      alert('請完整填寫所有基本資料！');
      return;
    }
    show('basicInfoSection', false);
    show('questionSection', true);
  });

  jobSel.addEventListener('change', () => jobSel.value && buildQuestions());

  function buildQuestions() {
    const qs = spinQuestions[jobSel.value] || [];
    form.innerHTML = '';

    qs.forEach((item, i) => {
      form.insertAdjacentHTML('beforeend', `<label>Q${i + 1}. ${item.q}</label>`);
      item.options.forEach(opt => {
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
    form.scrollIntoView({ behavior: 'smooth' });
  }

  async function showResult(qs) {
    const ans = qs.map((_, i) => form.querySelector(`input[name="q${i}"]:checked`));
    const miss = ans.findIndex(a => !a);
    if (miss !== -1) return alert(`請回答第 ${miss + 1} 題！`);

    form.innerHTML = '';
    const box = document.createElement('div');
    box.className = 'result-container';
    box.innerHTML = `
      <p style="background:#fffae6;border:1px solid #f2c94c;
                padding:10px;text-align:center;font-weight:600;
                margin-bottom:15px;">
        請先下載健檢資料，再前往 LINE 諮詢
      </p>`;
    const info = {
      name: $('name').value,
      phone: $('phone').value,
      line: $('lineId').value,
      bday: $('birthday').value,
      job: jobSel.value
    };

    box.insertAdjacentHTML('beforeend', `
      <table style="width:100%;border:1px solid #ddd;font-size:15px">
        <tr><th style="width:35%">姓名</th><td>${info.name}</td></tr>
        <tr><th>電話</th><td>${info.phone}</td></tr>
        <tr><th>Line ID</th><td>${info.line}</td></tr>
        <tr><th>生日</th><td>${info.bday}</td></tr>
        <tr><th>職業</th><td>${info.job}</td></tr>
      </table>`);

    qs.forEach((item, i) => {
      box.insertAdjacentHTML('beforeend', `
        <div class="qa-card">
          <div class="question">Q${i + 1}. ${item.q}</div>
          <div class="answer">👉 ${ans[i].value}</div>
        </div>`);
    });

    form.appendChild(box);
    const canvas = await html2canvas(box, { scale: 2 });
    const dataURL = canvas.toDataURL('image/png');

    const btnWrap = document.createElement('div');
    btnWrap.style.cssText = 'text-align:center;margin:20px 0;';
    const isLINE = /\bLine\//i.test(navigator.userAgent);
    const downloadHref = isLINE ? 'javascript:void(0)' : dataURL;

    const dl = document.createElement('a');
    dl.textContent = '下載健檢成果';
    dl.href = downloadHref;
    dl.download = '健檢問卷結果.png';
    dl.target = isLINE ? '_self' : '_blank';
    dl.style.cssText = `
      display:inline-block;padding:8px 16px;font-size:15px;
      background:#e0f0ff;color:#000;border:1px solid #66aadd;
      border-radius:6px;text-decoration:none;`;
    dl.addEventListener('click', () => {
      if (isLINE) {
        location.href = dataURL;
        alert('長按圖片 → 儲存到相簿');
      }
    });

    const addUrl = `https://line.me/R/ti/p/%40637zzurf`;
    const lineA = document.createElement('a');
    lineA.textContent = 'LINE 諮詢';
    lineA.href = addUrl;
    lineA.target = '_blank';
    lineA.style.cssText = `
      display:inline-block;padding:8px 16px;font-size:15px;
      background:#06c755;color:#fff;border:none;border-radius:6px;
      margin-left:10px;cursor:pointer;text-decoration:none;`;
    lineA.addEventListener('click', e => {
      const ua = navigator.userAgent;
      const isIOS = /\(iP(hone|od|ad);/i.test(ua);
      const isAndroid = /\bAndroid\b/i.test(ua) && !/Windows/i.test(ua);
      const scheme = `line://ti/p/637zzurf`;
      if (isIOS || isAndroid) {
        e.preventDefault();
        location.href = scheme;
        setTimeout(() => location.href = addUrl, 800);
      }
    });

    btnWrap.append(dl, lineA);
    box.insertBefore(btnWrap, box.children[1]);
    box.scrollIntoView({ behavior: 'smooth' });
  }
});
