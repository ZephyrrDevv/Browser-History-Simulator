const urlInput = document.getElementById("urlInput");
const visitBtn = document.getElementById("visitBtn");
const backBtn = document.getElementById("backBtn");
const currentPage = document.getElementById("currentPage");
const historyList = document.getElementById("historyList");

let browserHistory = [];

function visitPage() {
  userInput = urlInput.value;
  if (userInput.trim() === "" || !/^https?:\/\/.+/.test(userInput))
    return alert("Input a Valid URL");
  browserHistory.push(userInput);
  urlInput.value = "";
  currentPage.textContent = browserHistory[browserHistory.length - 1];

  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = "";
  for (let i = 0; i < browserHistory.length; i++) {
    historyList.innerHTML += `
     <div class="history-item active">
              <span class="history-num">${i + 1}</span>
              <span class="history-url">${browserHistory[i]}</span>
              <span class="badge">${i === browserHistory.length - 1 ? "current" : ""}</span>
            </div>
    `;
  }
}

function goBack() {
  if (browserHistory.length === 0) {
    return alert("No page visited yet");
  } else {
    browserHistory.pop();
    currentPage.textContent = browserHistory[browserHistory.length - 1];
    if (browserHistory.length === 0) {
      currentPage.textContent = "No page visited yet";
    } else {
      currentPage.textContent = browserHistory[browserHistory.length - 1];
    }
  }
  renderHistory();
}

visitBtn.addEventListener("click", visitPage);
backBtn.addEventListener("click", goBack);
