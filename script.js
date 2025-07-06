// === 問題資料庫（SPIN） ===
const spinQuestions = {
  "一般上班族": [
    "您目前有固定的勞保／勞退嗎？",
    "是否擔心工作變動對未來生活的影響？",
    "若突發疾病，您是否有足夠應急資金？",
    "您知道退休後每月預估生活費嗎？",
    "如果每月多一筆穩定收入，會有幫助嗎？"
  ],
  "自營業者": [
    "您的收入是否穩定？",
    "遇到淡季時是否會感到財務壓力？",
    "您是否已有完整的醫療與意外保障？",
    "您知道退休後可領多少？",
    "您希望資產如何配置以更安心？"
  ],
  "領導主管": [
    "您的時間是否多投入在工作上？",
    "若無法工作，家庭財務會受到影響嗎？",
    "您是否安排好家庭與退休的資產規劃？",
    "是否考慮過用資產創造被動收入？",
    "若有低風險高彈性的規劃，會有興趣嗎？"
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
    "您目前對退休制度是否清楚？",
    "您希望在退休前額外增加收入嗎？",
    "目前是否有固定儲蓄？",
    "退休後是否希望能旅遊或自由生活？",
    "若每月穩定多一筆現金，是否會安心？"
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
