let yesBtn = document.getElementById("yes");
let noBtn = document.getElementById("no");

let yesSize = 1;
let noSize = 1;

noBtn.addEventListener("click", () => {
    noSize -= 0.1;
    yesSize += 0.1;

    noBtn.style.transform = `scale(${noSize})`;
    yesBtn.style.transform = `scale(${yesSize})`;

    if (noSize <= 0.4) {
        noBtn.style.display = "none";
    }
});

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = "<h1>УРААА 💖💖💖</h1><p style='font-size:30px;'>Я знал 😍</p>";
});