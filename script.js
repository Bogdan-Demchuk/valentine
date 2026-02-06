let yesBtn = document.getElementById("yes");
let noBtn = document.getElementById("no");
let message = document.querySelector("h1");
let topImage = document.getElementById("top-image");
let finalScreen = document.getElementById("final-screen");

let yesScale = 1;
let noScale = 1;
let noX = 0;
let noY = 0;
const NO_MIN_SIZE = 0.3;

// «НЕТ» убегает при наведении
noBtn.addEventListener("mouseenter", () => {
    noX = Math.random() * 300 - 150;
    noY = Math.random() * 100 - 50;
    noBtn.style.transform = `translate(${noX}px, ${noY}px) scale(${noScale})`;
});

// Клик по «НЕТ»
noBtn.addEventListener("click", () => {
    noScale -= 0.2;
    if (noScale <= NO_MIN_SIZE) {
        noBtn.style.display = "none";
        message.textContent = "А теперь? :)"; 
        return;
    }

    noBtn.style.transform = `translate(${noX}px, ${noY}px) scale(${noScale})`;

    yesScale += 0.3;
    yesBtn.style.transform = `scale(${yesScale})`;

    let messages = [
        "Ты уверена?..",
        "Последний шанс...",
        "Давай, подумай ещё!",
    ];
    message.textContent = messages[Math.floor(Math.random() * messages.length)];
});

// Клик по «ДА» — финальный экран + падающие сердечки
yesBtn.addEventListener("click", () => {
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    message.style.display = "none";
    topImage.style.display = "none";     // прячем первую картинку
    finalScreen.style.display = "block"; // показываем гифку с котиком

    // запускаем падающие сердечки
    setInterval(createHeart, 300); // каждые 300мс создаётся новое сердечко
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
