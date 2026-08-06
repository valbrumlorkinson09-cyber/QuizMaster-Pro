const questions = [

{
question:"Ki peyi ki genyen plis Koup di Mond?",
answers:[
"Brezil",
"Almay",
"Ajantin",
"Lafrans"
],
correct:0
},

{
question:"Konbyen planèt ki genyen nan sistèm solè a?",
answers:[
"7",
"8",
"9",
"10"
],
correct:1
},

{
question:"Ki moun ki pentire Mona Lisa?",
answers:[
"Picasso",
"Van Gogh",
"Leonardo da Vinci",
"Michelangelo"
],
correct:2
},

{
question:"Ki lang yo pale plis nan mond lan?",
answers:[
"Franse",
"Anglè",
"Mandaren",
"Panyòl"
],
correct:2
},

{
question:"Ki ekip ki genyen plis Champions League?",
answers:[
"Barcelona",
"Real Madrid",
"Manchester United",
"Bayern Munich"
],
correct:1
}

];


let currentQuestion = 0;
let score = 0;



const playBtn = document.getElementById("playBtn");
const startButtons = document.querySelectorAll(".startQuiz");

const quizSection = document.getElementById("quizSection");
const questionText = document.getElementById("question");
const answersBox = document.getElementById("answers");

const nextBtn = document.getElementById("nextBtn");

const resultBox = document.getElementById("result");
const scoreText = document.getElementById("scoreText");

const restartBtn = document.getElementById("restartBtn");




playBtn.addEventListener("click", startQuiz);


startButtons.forEach(button=>{

button.addEventListener("click",startQuiz);

});




function startQuiz(){

currentQuestion = 0;

score = 0;

quizSection.style.display="block";

resultBox.style.display="none";

showQuestion();

}




function showQuestion(){


answersBox.innerHTML="";


let q = questions[currentQuestion];


questionText.innerHTML =
(currentQuestion + 1) + ". " + q.question;



q.answers.forEach((answer,index)=>{


let btn=document.createElement("button");


btn.innerHTML=answer;


btn.onclick=function(){

checkAnswer(index);

};


answersBox.appendChild(btn);


});


}




function checkAnswer(answer){


if(answer === questions[currentQuestion].correct){

score++;

}


nextBtn.style.display="block";


}




nextBtn.onclick=function(){


currentQuestion++;


if(currentQuestion < questions.length){

showQuestion();

}

else{

finishQuiz();

}


};





function finishQuiz(){


quizSection.style.display="none";

resultBox.style.display="block";


scoreText.innerHTML =
"Ou jwenn "+score+" sou "+questions.length+" pwen 🎯";


}





restartBtn.onclick=function(){

startQuiz();

};
