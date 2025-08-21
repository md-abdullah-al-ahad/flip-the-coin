const buttonPress = document.getElementById("randomButton");
const coinImage = document.getElementById("coinImage");
const headsortails = document.getElementById("headsortails");
const randomNumber = function () {
    return Math.random() < 0.5 ? 0 : 1;
};
const game = function () {
    coinImage.classList.add("flip");
    setTimeout(() => coinImage.classList.remove("flip"), 600);
    const num = randomNumber();
    coinImage.src = num === 0 ? "./assets/heads.svg" : "./assets/tails.svg";
    headsortails.innerText = num === 0 ? "Heads" : "Tails";
};

buttonPress.addEventListener("click", game);
coinImage.addEventListener("click", game);
