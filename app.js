const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
  alert("Bienvenue dans QuizMaster Pro 🧠🔥");
});


const buttons = document.querySelectorAll(".quiz-card button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Quiz lancé 🚀 Bonne chance !");
  });
});
