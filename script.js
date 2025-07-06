// === 問題資料庫（SPIN） ===
const spinQuestions = {
  "一般上班族": [
    "你現在做哪一行的啊？工作穩定嗎？",
    "平常上下班時間會不會很長，工作壓力大不大？",
    "你目前有固定在儲蓄嗎？還是存了就花？",
    "像你們公司有幫忙提撥勞退，那你有另外幫自己規劃退休金嗎？",
    "如果哪天突然要用一大筆錢（像家人醫療或車子出問題），你覺得夠用嗎？",
    "你有沒有算過，退休後每月需要多少生活費？如果公司那一筆不夠，會不會擔心？",
    "如果未來工作變動、裁員，或生病不能上班幾個月，你的生活開銷有備案嗎？",
    "如果有個方式，每月存一點，未來變成一筆退休補貼，或遇急用也能用，你覺得是不是很重要嗎？",
    "這種方式就像幫自己準備一個『備用電池』，平常不用，但哪天斷電就知道多重要了，你會想知道嗎？",
  ],
  "自營業者": [
  "你目前經營的是哪個行業？這幾年生意穩定嗎？",
  "平常工時會不會很長？有沒有覺得一人身兼多職比較辛苦？",
  "你現在有固定在存錢嗎？還是都投入在事業上？",
  "像你自己沒勞退，現在有幫自己安排退休規劃或資產配置嗎？",
  "如果哪天突然有大筆支出（像店面修繕或家裡急用），你會覺得壓力大嗎？",
  "你有沒有算過，未來退休後每月要花多少？若少了事業收入怎麼辦？",
  "如果哪天生病、不能工作幾個月，家裡的開銷有備案嗎？",
  "如果有個方式，每月撥個幾千塊，幫你建立一筆備用金或退休準備，你會覺得實用嗎？",
  "這就像替自己生意準備一份保險，不怕景氣不好、也不怕突發狀況，你會想了解一下嗎？"
],
  "領導主管": [
  "你目前帶的是幾人的團隊？工作時間是不是幾乎都被行程填滿？",
  "在帶領公司的同時，有時會不會犧牲掉一些自己與家人的時間？",
  "你現在有固定安排資產儲蓄嗎？還是大多投入在事業或投資上？",
  "像你這樣的工作強度，如果哪天突然生病或不得不休息幾個月，財務有準備嗎？",
  "你覺得現在的收入足夠支撐未來退休生活嗎？或是會擔心生活水準會下降？",
  "目前的資產配置中，有安排長期穩定型的保障或退休金計劃嗎？",
  "你是否考慮過讓資產除了成長外，也能兼具穩定現金流的功能？",
  "如果有一個方式，每月撥一小部分資金，幫自己打造一份未來保障或家人風險備案，你會覺得有幫助嗎？",
  "這樣的安排就像你在為團隊建系統，幫家庭建一道防線，有興趣了解如何規劃嗎？"
  ],
  "計程車司機": [
    "大哥，您一天大概開 幾個小時？",
    "哪個時段 最好載客、比較好賺？",
    "這樣跑，收入算穩定嗎？一個月大概能存多少？",
    "會擔心若無法跑車，是否沒有其他收入來源？",
    "疫情又爆發或載客量低時，會不會比較吃緊？",
    "萬一身體不舒服 不能開車幾天，收入中斷會不會影響家用？",
    "如果車子需要大修、孩子學費臨時要繳，急用錢會不會讓你煩惱？",
    "如果有一個方法，每月撥 二千～五千，就像幫自己準備備用基金，萬一需要一筆錢（出狀況）也不會慌，您覺得有沒有幫助？",
    "這筆錢還可以當退休補貼，多一份保障，您有興趣了解怎麼做嗎？",
  ],
  "公職/醫療": [
  "你目前在公部門／醫療單位服務多久了？工作排班還習慣嗎？",
  "平常值班或輪班時間長不長？對健康或家庭時間有影響嗎？",
  "公務／醫護薪資相對穩定，但你有另外固定做儲蓄或投資嗎？",
  "雖然有公保／退撫制度，你有幫自己再額外規劃退休金嗎？",
  "如果突然遇到重大醫療支出或家人急需用錢，你覺得現金流夠嗎？",
  "你有沒有算過，退休後每月還需要多少生活費？公保給付夠不夠？",
  "若將來政府制度調整、或醫療本身高風險導致無法工作，你的收入備案是什麼？",
  "如果有一個方案，讓你每月撥一小筆，未來可同時補足醫療缺口又累積退休金，你覺得實用嗎？",
  "這就像替自己加裝一層額外防護網，平常用不到，但關鍵時刻保護你和家人，你會想深入了解嗎？"
],
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

// === 問卷載入 ===
function loadQuestions() {
  const job = document.getElementById("job").value;
  const form = document.getElementById("questionForm");
  form.innerHTML = "";

  spinQuestions[job].forEach((q, i) => {
    const label = document.createElement("label");
    label.innerText = `${i + 1}. ${q}`;
    const input = document.createElement("input");
    input.type = "text";
    input.name = `q${i}`;
    input.required = true;
    input.style.marginTop = "5px";
    input.style.marginBottom = "12px";
    input.style.width = "100%";
    form.appendChild(label);
    form.appendChild(input);
  });

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "開始評估";
  submitBtn.type = "button";
  submitBtn.style.marginTop = "20px";

  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // 讀取使用者資料
    const age = document.getElementById("age").value;
    const income = document.getElementById("income").value;
    const saving = document.getElementById("saving").value;
    const job = document.getElementById("job").value;
    const answers = [...form.querySelectorAll("input[name^='q']")].map(i => i.value);

    // 清空表單顯示區
    form.innerHTML = "";

    // 結果容器
    const resultBox = document.createElement("div");
    resultBox.className = "result-container";

    const header = document.createElement("h2");
    header.textContent = "📝 您的健檢問卷結果如下";
    resultBox.appendChild(header);

    // 基本資料顯示
    const userInfo = document.createElement("p");
    userInfo.innerHTML = `
      年齡：${age} 歲<br>
      平均月收入：${income} 元<br>
      是否有儲蓄習慣：${saving}<br>
      職業類別：${job}
    `;
    resultBox.appendChild(userInfo);

    // 顯示每一題問與答
    spinQuestions[job].forEach((q, i) => {
      const card = document.createElement("div");
      card.className = "qa-card";

      const qEl = document.createElement("div");
      qEl.className = "question";
      qEl.innerHTML = `Q${i + 1}. ${q}`;

      const aEl = document.createElement("div");
      aEl.className = "answer";
      aEl.innerHTML = `👉 ${answers[i]}`;

      card.appendChild(qEl);
      card.appendChild(aEl);
      resultBox.appendChild(card);
    });

    form.appendChild(resultBox);
  });

  form.appendChild(submitBtn);
}
