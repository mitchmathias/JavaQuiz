window.onload = function() {
    document.getElementById("highscores1").textContent = window.localStorage.getItem("highscores")
    document.getElementById("highscores1Name").textContent = window.localStorage.getItem("highscoresName")
}