let inits = localStorage.getItem("scoreInitials");
let scores = localStorage.getItem("finalScore");
let scoresOl = document.getElementById("scoresOl");

let player = {
    playerInits: "",
    playerScore: 0
};
player.playerInits = inits;
player.playerScore = scores;

let renderLi = document.createElement("li");
function postScores() {
    for (i = 0; i < localStorage.length; i++)
        scoresOl.appendChild(renderLi);
    renderLi.textContent = player[i].playerInits + " - " + player[i].playerScore;
    renderLi.className = "high-score";
}
postScores();


let clearBtn = document.getElementById("clear")

clearBtn.addEventListener("click", function () {
    localStorage.clear();
    renderLi.remove();
});