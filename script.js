// === 問題資料庫（SPIN｜選擇題版） ===
const spinQuestions = {
  /* ─── 一般上班族 ─── */
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
    { q: "你目前生意穩定嗎？", options: ["穩定", "偶爾波動",] },
    { q: "你覺得當老闆一人多職辛苦嗎？", options: ["可接受", "略辛苦",] },
    { q: "你固定存錢？還是全部投入事業？", options: ["固定存錢", "少量存款", "全部投入"] },
    { q: "老闆沒有勞退，你有自主退休或投資規劃嗎？", options: ["部分有安排", "還沒有想過"] },
    { q: "店面修繕/突發大筆支出時，會有壓力感嗎？", options: ["可應付", "多少有壓力"] },
    { q: "你有沒有算過，未來退休後每月要花多少？若少了事業收入怎麼辦？", options: ["已估算並準備", "略擔心",] },
    { q: "如果哪天生病、不能工作幾個月，家裡的開銷有備案嗎？", options: ["部分準備", "還沒有準備"] },
    { q: "如果有個方式，每月撥個幾千塊，幫你建立一筆備用金或退休準備，你會覺得實用嗎？", options: [ "要看什麼方案", "不需要"] },
    { q: "這就像替自己生意準備一份保險，不怕景氣不好、也不怕突發狀況，你會想了解一下嗎？", options: ["想了解", "再觀望",] }
  ],

  /* ─── 領導主管 ─── */
  "領導主管": [
    { q: "你目前團隊們工作量是否滿檔？", options: ["非常忙碌", "偶爾加班", "時間彈性"] },
    { q: "在帶領公司的同時，有時會不會犧牲掉一些自己與家人的時間？", options: ["常常犧牲", "偶爾", "無影響"] },
    { q: "你現在有固定安排資產儲蓄嗎？還是大多投入在事業或投資上？", options: ["固定儲蓄", "部分儲蓄", "幾乎不存"] },
    { q: "像你這樣的工作強度，如果哪天突然生病或不得不休息幾個月，財務有準備嗎？", options: ["部分準備", "沒準備"] },
    { q: "你覺得現在的收入足夠支撐未來退休生活嗎？或是會擔心生活水準會下降？", options: ["應該足夠", "可能不足", "完全不擔心"] },
    { q: "目前的資產配置中，有安排長期穩定型的保障或退休金計劃嗎？", options: ["部分有規劃", "還沒有"] },
    { q: "你是否考慮過讓資產除了成長外，也能兼具穩定現金流的功能？", options: ["已布局", "正在考慮",] },
    { q: "如果有一個方式，每月撥一小部分資金，幫自己打造一份未來保障或家人風險備案，你會覺得有幫助嗎？", options: ["可以評估", "暫不需要"] },
    { q: "這樣的安排就像你在為團隊建系統，幫家庭建一道防線，有興趣了解如何規劃嗎？", options: ["想了解", "再觀望",] }
  ],

  /* ─── 計程車司機 ─── */
  "計程車司機": [
    { q: "大哥您一天大約開幾小時？", options: ["12小時以上", "8到12小時", "少於 8小時"] },
    { q: "開車收入是否波動？", options: ["很穩定", "稍有波動",] },
    { q: "平均一月可存多少？", options: ["超過2 萬", "5000-1萬", "3000-5000"] },
    { q: "若無法跑車時有其他收入來源嗎？", options: ["有副業", "部分收入", "完全沒有"] },
    { q: "淡季／疫情期間載客少時會不會吃緊？", options: ["不緊", "稍緊", "很緊"] },
    { q: "生病停工幾天會影響家用嗎？", options: ["影響小", "影響中", "影響大"] },
    { q: "車子大修或家人急需用錢時壓力？", options: ["能應付", "壓力大", "資金短缺"] },
    { q: "如果有一個方法，每月撥2千，就像幫自己準備 備用基金，萬一爆胎（出狀況）也不會慌，您覺得有沒有幫助？", options: ["有幫助", "可能有用",] },
    { q: "這筆錢還可以當退休補貼，多一份保障，您有興趣了解怎麼操作嗎？", options: ["想了解", "可以考慮",] }
  ],

  /* ─── 公職 / 醫療 ─── */
  "公職/醫療": [
    { q: "你在單位服務多久？排班習慣嗎？", options: ["很習慣", "還行", "不太習慣"] },
    { q: "輪班長時數對健康/家庭影響？", options: ["影響小", "些微影響", "影響大"] },
    { q: "薪資穩定，你另有投資或儲蓄嗎？", options: ["固定投資", "少量儲蓄", "幾乎沒有"] },
    { q: "除退撫制度外，額外退休規劃？", options: ["做過規劃", "正在考慮", "沒有"] },
    { q: "若遇重大醫療支出，現金流足夠嗎？", options: ["很足夠", "可能不足", "不足"] },
    { q: "退休後每月生活費估算夠不夠？", options: ["夠", "勉強", "不夠"] },
    { q: "制度調整或高風險無法工作時收入？", options: ["有備案", "部分備案", "沒有"] },
    { q: "每月小額同時補醫療缺口+退休金，實用？", options: ["實用", "可考慮", "還好"] },
    { q: "加裝防護網保護家人，想了解方案？", options: ["想了解", "再看看", "先不用"] }
  ]
};

// === 基本資料下一步 ===
document.getElementById("nextBtn").addEventListener("click", () => {
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const saving = document.getElementById("saving").value;

  if (!age || !income || !saving) {
    alert("請完整填寫基本資料");
    return;
  }

  // 隱藏第一階段，顯示第二階段
  document.getElementById("basicInfoSection").style.display = "none";
  document.getElementById("questionSection").style.display = "block";
});

// === 問卷載入（改為 radio 選擇題版）===
function loadQuestions() {
  const job = document.getElementById("job").value;
  const form = document.getElementById("questionForm");
  form.innerHTML = "";

  const qList = spinQuestions[job];       // 取出該職業題目陣列

  qList.forEach((item, i) => {
    /* 問題文字 */
    const label = document.createElement("label");
    label.innerText = `Q${i + 1}. ${item.q}`;
    label.style.display = "block";
    label.style.marginTop = "15px";
    form.appendChild(label);

    /* 產生 radio 選項 */
    item.options.forEach(opt => {
      const line = document.createElement("div");
      line.style.marginLeft = "12px";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `q${i}`;
      radio.value = opt;
      radio.required = true;

      const span = document.createElement("span");
      span.innerText = " " + opt;

      line.appendChild(radio);
      line.appendChild(span);
      form.appendChild(line);
    });
  });

  /* 送出按鈕 */
  const submitBtn = document.createElement("button");
  submitBtn.textContent = "開始評估";
  submitBtn.type = "button";
  submitBtn.style.marginTop = "25px";

  submitBtn.onclick = () => {
    // 先確認每題都有勾
    const answers = [];
    for (let i = 0; i < qList.length; i++) {
      const sel = form.querySelector(`input[name="q${i}"]:checked`);
      if (!sel) {
        alert(`請回答第 ${i + 1} 題`);
        return;
      }
      answers.push(sel.value);
    }

    /* 讀基本資料 */
    const age    = document.getElementById("age").value;
    const income = document.getElementById("income").value;
    const saving = document.getElementById("saving").value;

    /* 顯示結果 */
    form.innerHTML = "";
    const box = document.createElement("div");
    box.className = "result-container";

    box.innerHTML = `
      <h2>📝 您的健檢問卷結果如下</h2>
      <p>
        年齡：${age} 歲<br>
        平均月收入：${income} 元<br>
        是否有儲蓄習慣：${saving}<br>
        職業類別：${job}
      </p>
    `;

    qList.forEach((item, i) => {
      const card = document.createElement("div");
      card.className = "qa-card";
      card.innerHTML = `
        <div class="question">Q${i + 1}. ${item.q}</div>
        <div class="answer">👉 ${answers[i]}</div>
      `;
      box.appendChild(card);
    });

    form.appendChild(box);
  };

  form.appendChild(submitBtn);
}喔
