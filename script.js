/* ==========  冠智問卷  ========== */
document.addEventListener("DOMContentLoaded", () => {
  /* === 1. 題庫 === */
  const spinQuestions = {
    "一般上班族": [
    { q: "你現在做的這份工作穩定嗎？", options: ["穩定", "偶爾變動", "很不穩定"] },
    { q: "這份工作對你來說壓力大不大？", options: ["正常", "壓力大", "非常疲憊"] },
    { q: "你目前有固定在儲蓄嗎？還是存了就花？", options: ["有固定存","幾乎沒存"] },
    { q: "公司有提撥勞退，你還有另外規劃退休金嗎？", options: ["有額外規劃", "想規劃但還沒做", "沒有規劃"] },
    { q: "若突發大筆支出（家人生病醫療費等），你覺得夠用嗎？", options: ["可能夠", "完全沒有準備"] },
    { q: "退休後勞退每月2萬的生活費你覺得夠嗎？", options: ["應該夠用","還想更多"] },
    { q: "若裁員或生病無法上班幾個月，生活開銷有個備案嗎？", options: ["有一筆緊急避難金", "有想過但還沒準備"] },
    { q: "如果有個方式，可以每月幫你存一點，未來變成一筆退休補貼，或遇急用也能用，你覺得重要嗎？", options: ["重要", "還好"] },
    { q: "這種方式就像幫自己準備一個『備用電池』，平常不用，但哪天斷電就知道多重要了，你想進一步了解嗎？", options: ["想了解", "觀望"] }
  ],

  /* ─── 自營業者 ─── */
  "自營業者": [
    { q: "你目前生意穩定嗎？", options: ["穩定", "偶爾波動"] },
    { q: "你覺得當老闆一人多職辛苦嗎？", options: ["可接受", "略辛苦"] },
    { q: "你固定存錢？還是全部投入事業？", options: ["固定存錢", "少量存款", "全部投入"] },
    { q: "老闆沒有勞退，你有自主退休或投資規劃嗎？", options: ["部分有安排", "還沒有想過"] },
    { q: "店面修繕/突發大筆支出時，會有壓力感嗎？", options: ["可應付", "多少有壓力"] },
    { q: "你有沒有算過，未來退休後每月要花多少？若少了事業收入怎麼辦？", options: ["已估算並準備", "略擔心"] },
    { q: "如果哪天生病、不能工作幾個月，家裡的開銷有備案嗎？", options: ["部分準備", "還沒有準備"] },
    { q: "如果有個方式，每月撥個幾千塊，幫你建立一筆備用金或退休準備，你會覺得實用嗎？", options: [ "要看什麼方案", "不需要"] },
    { q: "這就像替自己生意準備一份保險，不怕景氣不好、也不怕突發狀況，你會想了解一下嗎？", options: ["想了解", "再觀望"] }
  ],

  /* ─── 領導主管 ─── */
  "領導主管": [
    { q: "你目前團隊們工作量是否滿檔？", options: ["非常忙碌", "偶爾加班", "時間彈性"] },
    { q: "在帶領公司的同時，有時會不會犧牲掉一些自己與家人的時間？", options: ["常常犧牲", "偶爾", "無影響"] },
    { q: "你現在有固定安排資產儲蓄嗎？還是大多投入在事業或投資上？", options: ["固定儲蓄", "部分儲蓄", "幾乎不存"] },
    { q: "像你這樣的工作強度，如果哪天突然生病或不得不休息幾個月，財務有準備嗎？", options: ["部分準備", "沒準備"] },
    { q: "你覺得現在的收入足夠支撐未來退休生活嗎？或是會擔心生活水準會下降？", options: ["應該足夠", "可能不足", "完全不擔心"] },
    { q: "目前的資產配置中，有安排長期穩定型的保障或退休金計劃嗎？", options: ["部分有規劃", "還沒有"] },
    { q: "你是否考慮過讓資產除了成長外，也能兼具穩定現金流的功能？", options: ["已布局", "正在考慮"] },
    { q: "如果有一個方式，每月撥一小部分資金，幫自己打造一份未來保障或家人風險備案，你會覺得有幫助嗎？", options: ["可以評估", "暫不需要"] },
    { q: "這樣的安排就像你在為團隊建系統，幫家庭建一道防線，有興趣了解如何規劃嗎？", options: ["想了解", "再觀望"] }
  ],

  "計程車司機": [
    { q: "您一天大約開幾小時？", options: ["12小時以上", "8到12小時", "少於 8小時"] },
    { q: "開車收入是否波動？", options: ["很穩定", "稍有波動"] },
    { q: "平均一月可存多少？", options: ["超過2萬", "5000-1萬", "3000-5000"] },
    { q: "若無法跑車時有其他收入來源嗎？", options: ["部分收入", "完全沒有"] },
    { q: "淡季／疫情期間載客少時會不會吃緊？", options: ["晚點下班就好", "稍微吃緊"] },
    { q: "萬一身體不舒服 不能開車幾天，收入中斷會不會影響家用", options: ["稍微影響","完全不影響"] },
    { q: "有一天車子大修或家人急需用錢時會不會突然有壓力？", options: ["能應付", "稍微擔心"] },
    { q: "如果有一個方法，每月撥2～5000，就像幫自己準備預備基金，萬一車禍（對方沒保險）身邊還有活錢可以運用，您會不會覺得好加在？", options: ["我不會車禍", "會覺得好險"] },
    { q: "這筆錢還可以當退休補貼，多一份保障，您有興趣了解怎麼操作嗎？", options: ["想了解", "可以考慮"] }
  ],

  /* ─── 公職 / 醫療 ─── */
  "公職/醫療": [
  { q: "你目前在公部門／醫療單位服務還習慣嗎？", options: ["還行", "不太習慣"] },
  { q: "平常值班或輪班時間長不長？對健康或家庭時間有影響嗎？", options: ["無影響", "些微影響"] },
    { q: "公務／醫護薪資相對穩定，但你有另外固定做儲蓄或投資嗎？", options: ["少量儲蓄/投資", "幾乎沒有"] },
    { q: "雖然有公保／退撫制度，你有幫自己再額外規劃退休金嗎？", options: ["做過規劃", "正在考慮"] },
    { q: "如果突然遇到重大醫療支出或家人急需用錢，你覺得現金流夠嗎？", options: ["應該足夠", "可能不足"] },
    { q: "你有沒有算過，退休後每月還需要多少生活費？公保給付夠不夠？", options: ["應該夠", "勉強夠"] },
    { q: "若將來政府制度調整、或醫療本身高風險導致無法工作，你的收入備案是什麼？", options: ["應該有備案", "還沒有想過"] },
    { q: "如果有一個方案，讓你每月撥一小筆，未來可同時補足醫療缺口又累積退休金，你覺得實用嗎？", options: ["可考慮", "還好"] },
    { q: "這就像替自己加裝一層額外防護網，平常用不到，但關鍵時刻保護你和家人，你會想深入了解嗎？", options: ["想了解", "再看看"] }
  ]
};
    <script src="https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.min.js"></script>
<script>
/* ==========  冠智問卷  ========== */
document.addEventListener('DOMContentLoaded', () => {
  const spinQuestions = { /* ← 保留你的題庫，這裡省略 */ };

  const $ = id => document.getElementById(id);
  const show = (id, f) => { $(id).style.display = f ? 'block' : 'none'; };

  const form   = $('questionForm');
  const jobSel = $('job');

  $('nextBtn').addEventListener('click', () => {
    if (!($('name').value.trim() && $('phone').value.trim()
        && $('lineId').value.trim() && $('birthday').value)) {
      alert('請完整填寫所有基本資料！'); return;
    }
    show('basicInfoSection', false);
    show('questionSection', true);
  });

  jobSel.addEventListener('change', () => jobSel.value && buildQuestions());

  function buildQuestions () {
    const qs = spinQuestions[jobSel.value] || [];
    form.innerHTML = '';
    qs.forEach((item, i) => {
      form.insertAdjacentHTML('beforeend', `<label>Q${i+1}. ${item.q}</label>`);
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
        請截圖以下健檢資料，並點選下方按鈕前往 LINE 諮詢
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
          <div class="question">Q${i+1}. ${item.q}</div>
          <div class="answer">👉 ${ans[i].value}</div>
        </div>`);
    });

    form.appendChild(box);
    // 產生圖片後，只顯示 LINE 按鈕（鼓勵使用者截圖）
await html2canvas(box, { scale: 2 });

const btnWrap = document.createElement('div');
btnWrap.style.cssText = 'text-align:center;margin:20px 0;';

const addUrl = `https://line.me/R/ti/p/%40637zzurf`;
const lineA = document.createElement('a');
lineA.textContent = 'LINE 諮詢';
lineA.href = addUrl;
lineA.target = '_blank';
lineA.style.cssText = `
  display:inline-block;padding:8px 16px;font-size:15px;
  background:#06c755;color:#fff;border:none;border-radius:6px;
  cursor:pointer;text-decoration:none;`;

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

btnWrap.append(lineA);
box.insertBefore(btnWrap, box.children[1]);
box.scrollIntoView({ behavior: 'smooth' });
