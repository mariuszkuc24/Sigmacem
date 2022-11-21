const inputNum = document.getElementById("inp");
const btnCheck = document.getElementById("btn-submit");
const listInfo = document.getElementById("list-info");
const listSection = document.getElementById("list-section");
const listSectors = document.getElementById("list-sectors");
const logText = document.getElementById("log-number");
let shopSection = "";
let shopSectors = [];

const removePreviousInfo = () => {
  if (listSection.hasChildNodes()) {
    listSection.removeChild(listSection.firstChild);
  }

  while (listSectors.hasChildNodes()) {
    listSectors.removeChild(listSectors.firstChild);
  }
};
const showInfo = () => {
  const listSectionEl = document.createElement("li");
  listSectionEl.innerText = shopSection;
  listSection.append(listSectionEl);
  for (listEl of shopSectors) {
    const listSectorsEl = document.createElement("li");
    listSectorsEl.innerText = listEl;
    console.log(listSectorsEl);
    listSectors.append(listSectorsEl);
  }
};

const checkSectionSectors = () => {
  removePreviousInfo();
  const inputedSku = inputNum.value;
  const enteredSku = inputedSku.trim();
  console.log(enteredSku);
  const firstNumAtEnteredSku = parseInt(enteredSku.charAt(0));

  if (enteredSku.length == 6) {
    let messageForSku;
    console.log(firstNumAtEnteredSku);
    switch (firstNumAtEnteredSku) {
      case 1:
        shopSection = "Metalowy";
        shopSectors = ["Techniczny", "Remontujesz"];
        break;
      case 2:
        shopSection = "Narzędzia";
        shopSectors = ["Techniczny", "Remontujesz"];
        break;
      case 3:
        shopSection = "Drewno";
        shopSectors = ["Budujesz"];
        break;
      case 4:
        shopSection = "Pokrycia podłogowe";
        shopSectors = ["Urządzasz"];
        break;
      case 5:
        shopSection = "Sanitarny";
        shopSectors = ["Techniczny", "Remontujesz", "Urządzasz"];
        break;
      case 6:
        shopSection = "Ogród";
        shopSectors = ["Ogród"];
        break;
      case 7:
        shopSection = "Dekorujesz";
        shopSectors = ["Dekoracje"];
        break;
      case 8:
        shopSection = "Elektryczny";
        shopSectors = ["Metalowy", "Remontujesz"];
        break;
      case 9:
        shopSection = "Budowlany";
        shopSectors = ["Budujesz"];
        break;
      default:
        shopSection = "Nie ta takiego działu, spróbuj ponownie!";
        shopSectors = ["Nie ta takiego sektoru, spróbuj ponownie!"];
        break;
    }
    logText.innerText = inputedSku;
    listInfo.style.display = "block";
    showInfo();
  } else {
    logText.innerText = ` ${inputedSku} nie jest prawidłowy, spróbuj ponownie!`;
    listInfo.style.display = "none";
  }
  inputNum.value = "";
};

inputNum.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkSectionSectors();
  }
});

btnCheck.addEventListener("click", checkSectionSectors);
