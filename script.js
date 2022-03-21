let ask = document.querySelector(".ask");
let agree = document.querySelector(".agree");
let thanks = document.querySelector(".thanks");

let yesBtn = document.querySelector(".yesBtn");
let noBtn = document.querySelector(".noBtn");
let agreeBtn = document.querySelectorAll(".agreeBtn");

yesBtn.addEventListener("click", function () {
    ask.style.display = "none";
    agree.style.display = "block";
});

for (let i = 0; i < agreeBtn.length; i++) {
    agreeBtn[i].addEventListener("click", function () {
        ask.style.display = "none";
        agree.style.display = "none";
        thanks.style.display = "block";
    })
}

function random() {
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}
