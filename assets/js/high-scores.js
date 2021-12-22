let highScore = JSON.parse(localStorage.getItem("highScore"));
let scoresOl = document.getElementById("scoresOl");



function postScores() {

    highScore.sort(function (a, b) {
        return b.score - a.score

    })
    for (i = 0; i < highScore.length; i++) {
        let renderLi = document.createElement("li");
        renderLi.className = "high-score";
        renderLi.textContent = highScore[i].initials + " - " + highScore[i].score;
        scoresOl.appendChild(renderLi);

    }

}
postScores();

let clearBtn = document.getElementById("clear")

clearBtn.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});