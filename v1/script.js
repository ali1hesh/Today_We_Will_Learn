const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];
document.title = "Today We Will Learn";
// Selecting DOM Elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");
// Create DOM Elements: Render Facts List
factsList.innerHTML = "";
// Load Data from Supabase
loadFacts();
async function loadFacts() {
  const res = await fetch(
    "https://vqjkeuvmttmgemsjwelh.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxamtldXZtdHRtZ2Vtc2p3ZWxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwMzMwMzcsImV4cCI6MjAzMzYwOTAzN30.0VwMmqT_h_dYDI30Lv2mdWTr-kK71VoAuO0_ZvTX6hw",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxamtldXZtdHRtZ2Vtc2p3ZWxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwMzMwMzcsImV4cCI6MjAzMzYwOTAzN30.0VwMmqT_h_dYDI30Lv2mdWTr-kK71VoAuO0_ZvTX6hw",
      },
    }
  );
  const data = await res.json();
  createFactsList(data);
}

// createFactsList(initialFacts);
function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class ="fact">
  <p>${fact.text}
     <a class="source"
         href="${fact.source}"
          target="_blank">(Source)</a>
   </p>
        <span class="tag" style="background-color: ${
          CATEGORIES.find((cat) => cat.name === fact.category).color
        }">${fact.category}</span>
  </li>`
  );
  console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

//Toggle Form Visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "share a fact";
  }
});

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];
