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
    "您是否有投保足夠的醫療與意外險？",
    "若車無法跑，是否有其他收入來源？",
    "您目前有穩定的儲蓄計劃嗎？",
    "退休後每月生活費怎麼安排？",
    "如果能提早準備，會願意開始嗎？"
  ],
  "公職/醫療": [
    "您目前對退休制度是否清楚？",
    "您希望在退休前額外增加收入嗎？",
    "目前是否有固定儲蓄？",
    "退休後是否希望能旅遊或自由生活？",
    "若每月穩定多一筆現金，是否會安心？"
  ]
};

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
    alert("感謝填寫，我們將引導您前往 LINE。可將資料發送給我們進一步服務！");
    window.location.href = "https://line.me/ti/p/%40dvjch";
  });

  form.appendChild(submitBtn);
}
