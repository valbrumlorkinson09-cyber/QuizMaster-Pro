const questions = [
  {
    question: "Ki peyi ki genyen plis tit Koup di Mond?",
    answers: [
      "Brezil",
      "Almay",
      "Ajantin",
      "Lafrans"
    ],
    correct: 0
  },

  {
    question: "Konbyen planèt ki genyen nan sistèm solè a?",
    answers: [
      "7",
      "8",
      "9",
      "10"
    ],
    correct: 1
  },

  {
    question: "Ki moun ki ekri Mona Lisa?",
    answers: [
      "Picasso",
      "Van Gogh",
      "Leonardo da Vinci",
      "Michelangelo"
    ],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;

const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", startQuiz);


function startQuiz(){
  currentQuestion = 0;
  score = 0;

  showQuestion();
}


function showQuestion(){

  const q = questions[currentQuestion];

  alert(
    "K kestyon: " + q.question +
    "\n\n1️⃣ " + q.answers[0] +
    "\n2️⃣ " + q.answers[1] +
    "\n3️⃣ " + q.answers[2] +
    "\n4️⃣ " + q.answers[3]
  );

  let answer = prompt("Chwazi repons lan (1-4)");

  if(answer - 1 === q.correct){
    score++;
    alert("✅ Bon repons!");
  }else{
    alert("❌ Move repons!");
  }


  currentQuestion++;

  if(currentQuestion < questions.length){
    showQuestion();
  }else{
    finishQuiz();
  }

}


function finishQuiz(){

  alert(
    "🏆 Quiz fini!\n\nOu fè: " +
    score +
    "/" +
    questions.length +
    " pwen"
  );

}
