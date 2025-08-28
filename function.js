// call button functionality 
let coin = 100;

function spendCoin(buttonID) {
    document.getElementById(buttonID).addEventListener("click", function () {
        if (coin >= 20) {
            coin = coin - 20
            const increseCoin = document.getElementById("coin-count")
            increseCoin.innerText = coin
        }
        else {
            alert("You have no coin!")
        }
    })
}

spendCoin("call1")
spendCoin("call2")
spendCoin("call3")
spendCoin("call4")
spendCoin("call5")
spendCoin("call6")
spendCoin("call7")
spendCoin("call8")
spendCoin("call9")

// copy button functionality


let copyCount = 0;

document.getElementById("copy-btn-1").addEventListener("click", function () {
    copyText("number1");
});

document.getElementById("copy-btn-2").addEventListener("click", function () {
    copyText("number2");
});

document.getElementById("copy-btn-3").addEventListener("click", function () {
    copyText("number3");
});

document.getElementById("copy-btn-4").addEventListener("click", function () {
    copyText("number4");
});

document.getElementById("copy-btn-5").addEventListener("click", function () {
    copyText("number5");
});

document.getElementById("copy-btn-6").addEventListener("click", function () {
    copyText("number6");
});

document.getElementById("copy-btn-7").addEventListener("click", function () {
    copyText("number7");
});

document.getElementById("copy-btn-8").addEventListener("click", function () {
    copyText("number8");
});

document.getElementById("copy-btn-9").addEventListener("click", function () {
    copyText("number9");
});

//reusable function
function copyText(numberId) {
    const number = document.getElementById(numberId).innerText;

    const input = document.createElement("input");
    input.value = number;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);

    copyCount++;
    document.getElementById("copy-count").innerText = copyCount;

    alert("Copied: " + number);
}

//   call history functionality


const historyList = document.getElementById("history-list");
const clearBtn = document.getElementById("clear-history");

function addHistory(name, number) {
    const time = new Date().toLocaleTimeString(); // current time

    const li = document.createElement("li");
    li.className = "flex justify-between items-center border-b pb-2";

    li.innerHTML = `
      <div>
        <p class="font-semibold">${name}</p>
        <p class="text-sm text-gray-500">${number}</p>
      </div>
      <span class="text-xs text-gray-400">${time}</span>
    `;

    historyList.appendChild(li);
}

document.getElementById("call1").addEventListener("click", function () {
    addHistory("জাতীয় জরুরি সেবা", "999");
});

document.getElementById("call2").addEventListener("click", function () {
    addHistory("পুলিশ", "999");
});

document.getElementById("call3").addEventListener("click", function () {
    addHistory("ফায়ার সার্ভিস", "999");
});

document.getElementById("call4").addEventListener("click", function () {
    addHistory("এম্বুলেন্স", "1994-999999");
});

document.getElementById("call5").addEventListener("click", function () {
    addHistory("নারী ও শিশু সহায়তা", "109");
});

document.getElementById("call6").addEventListener("click", function () {
    addHistory("দুদক", "106");
});

document.getElementById("call7").addEventListener("click", function () {
    addHistory("বিদ্যুৎ বিভ্রাট", "16216");
});

document.getElementById("call8").addEventListener("click", function () {
    addHistory("ব্র্যাক", "16445");
});

document.getElementById("call9").addEventListener("click", function () {
    addHistory("বাংলাদেশ রেলওয়ে", "163");
});

clearBtn.addEventListener("click", function () {
    historyList.innerHTML = "";
});

