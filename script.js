let yesBtn = document.getElementById("yes");
let noBtn = document.getElementById("no");
let mainText = document.getElementById("main-text");
let topImage = document.getElementById("top-image");
let finalScreen = document.getElementById("final-screen");
let giftScreen = document.getElementById("gift-screen");
let podarokBtn = document.getElementById("podarok");

let yesScale = 1;
let noScale = 1;
const NO_MIN_SIZE = 0.3;

// НЕТ убегает
noBtn.addEventListener("mouseenter", () => {
    let x = Math.random() * 300 - 150;
    let y = Math.random() * 100 - 50;
    noBtn.style.transform = `translate(${x}px, ${y}px) scale(${noScale})`;
});

// НЕТ уменьшается, ДА растёт
noBtn.addEventListener("click", () => {
    noScale -= 0.2;
    if (noScale <= NO_MIN_SIZE) {
        noBtn.style.display = "none";
        mainText.textContent = "А теперь? :)";
        return;
    }

    yesScale += 0.3;
    yesBtn.style.transform = `scale(${yesScale})`;

    mainText.textContent = "Последний шанс…";
});

// ДА — финал
yesBtn.addEventListener("click", () => {
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    mainText.style.display = "none";
    topImage.style.display = "none";

    finalScreen.style.display = "block";
    setInterval(createHeart, 300);
});

// ПОДАРОЧЕК
podarokBtn.addEventListener("click", () => {
    finalScreen.style.display = "none";
    giftScreen.style.display = "block";
});

function createHeart() {
    let heart = document.createElement("i");
    heart.className = "bi bi-heart-fill text-danger"; // красные сердечки
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-50px";
    heart.style.fontSize = (14 + Math.random() * 26) + "px"; // размер
    heart.style.pointerEvents = "none"; 
    document.body.appendChild(heart);

    let fall = setInterval(() => {
        let top = parseFloat(heart.style.top);
        if(top > window.innerHeight) {
            heart.remove();
            clearInterval(fall);
        } else {
            heart.style.top = top + 3 + "px"; // скорость падения
        }
    }, 20);
}
