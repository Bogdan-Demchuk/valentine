let noBtn = document.getElementById("no");

noBtn.addEventListener("mouseenter", () => {
    let x = Math.random() * 300; // случайное смещение по X
    let y = Math.random() * 100; // случайное смещение по Y
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
let yesBtn = document.getElementById("yes");
let yesSize = 1;

yesBtn.addEventListener("click", () => {
    yesSize += 0.2;
    yesBtn.style.transform = `scale(${yesSize})`;
    document.body.innerHTML = "<h1>УРААА 💖💖💖</h1><p style='font-size:30px;'>Я знал 😍</p>";
});
noBtn.addEventListener("click", () => {
    let messages = [
        "Ты уверена?..",
        "Последний шанс...",
        "Давай, подумай ещё!",
        "Не уходи 💔"
    ];
    let msg = messages[Math.floor(Math.random() * messages.length)];
    document.querySelector("h1").textContent = msg;
});
function createHeart() {
    let heart = document.createElement("div");
    heart.textContent = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-50px";
    heart.style.fontSize = (10 + Math.random() * 20) + "px";
    document.body.appendChild(heart);

    let fall = setInterval(() => {
        let top = parseFloat(heart.style.top);
        if(top > window.innerHeight) {
            heart.remove();
            clearInterval(fall);
        } else {
            heart.style.top = top + 2 + "px";
        }
    }, 20);
}

setInterval(createHeart, 300);
