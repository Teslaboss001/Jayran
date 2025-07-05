const spinQuestions = {
  "一般上班族": [
    "您目前的主要收入來源是什麼？",
    "是否有遇到支出比收入多的情況？",
    "若突發狀況發生，是否影響您家庭財務？",
    "若每月有多的資金，會考慮怎麼運用？",
    "是否曾思考退休後的生活費來源？"
  ],
  "自營業者": [
    "目前的收入是否穩定？",
    "生意淡季是否對家庭支出造成壓力？",
    "若身體出狀況，事業是否會受影響？",
    "有沒有安排緊急預備金？",
    "是否考慮透過保險做收入替代？"
  ],
  "領導主管": [
    "目前年收入大約落在哪個區間？",
    "若現在停下來工作，是否還能維持生活？",
    "是否有投資做財務槓桿或稅務規劃？",
    "是否關注資產傳承與風險保障？",
    "有沒有為家人做過財務防火牆規劃？"
  ],
  "計程車司機": [
    "目前每日工作幾小時？",
    "若生病幾天沒跑，是否影響收入？",
    "車子或人身發生事故是否有保障？",
    "您是否希望未來收入更穩定？",
    "是否願意了解有保障又能存錢的方式？"
  ],
  "公職/醫療": [
    "目前是否已有基本退休制度？",
    "覺得未來退休金是否足夠？",
    "是否擔心未來醫療與長照支出？",
    "有想過補強哪些保障不足的地方？",
    "是否希望透過制度提早佈局？"
  ]
};

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
    input.style.width = "100%";
    input.style.marginBottom = "15px";
    form.appendChild(label);
    form.appendChild(document.createElement("br"));
    form.appendChild(input);
    form.appendChild(document.createElement("br"));
  });

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "開始評估";
  submitBtn.type = "button";
  submitBtn.style.marginTop = "20px";

  form.appendChild(submitBtn);
}
