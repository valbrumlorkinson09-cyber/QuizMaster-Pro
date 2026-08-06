const languages = {

fr: {
name:"Français",

questions:[

{
q:"Quelle équipe a gagné la Coupe du Monde 2022 ?",
a:["France","Argentine","Brésil","Allemagne"],
c:1
},

{
q:"Combien de planètes existe-t-il dans le système solaire ?",
a:["7","8","9","10"],
c:1
},

{
q:"Qui a peint la Joconde ?",
a:["Picasso","Van Gogh","Leonardo da Vinci","Michel-Ange"],
c:2
}

]

},


en: {
name:"English",

questions:[

{
q:"Which team won the 2022 World Cup?",
a:["France","Argentina","Brazil","Germany"],
c:1
},

{
q:"How many planets are in the Solar System?",
a:["7","8","9","10"],
c:1
},

{
q:"Who painted the Mona Lisa?",
a:["Picasso","Van Gogh","Leonardo da Vinci","Michelangelo"],
c:2
}

]

},


ht: {
name:"Kreyòl",

questions:[

{
q:"Ki ekip ki te genyen Koup di Mond 2022 la?",
a:["Lafrans","Ajantin","Brezil","Almay"],
c:1
},

{
q:"Konbyen planèt ki genyen nan sistèm solè a?",
a:["7","8","9","10"],
c:1
},

{
q:"Ki moun ki pentire Mona Lisa?",
a:["Picasso","Van Gogh","Leonardo da Vinci","Michelangelo"],
c:2
}

]

},


es:{
name:"Español",

questions:[

{
q:"¿Qué equipo ganó la Copa Mundial 2022?",
a:["Francia","Argentina","Brasil","Alemania"],
c:1
},

{
q:"¿Cuántos planetas hay en el sistema solar?",
a:["7","8","9","10"],
c:1
},

{
q:"¿Quién pintó la Mona Lisa?",
a:["Picasso","Van Gogh","Leonardo da Vinci","Miguel Ángel"],
c:2
}

]

}

};



let currentLang="fr";
let questions=languages[currentLang].questions;

let currentQuestion=0;
let score=0;



const playBtn=document.getElementById("playBtn");
const startButtons=document.querySelectorAll(".startQuiz");

const quizSection=document.getElementById("quizSection");
const questionText=document.getElementById("question");
const answersBox=document.getElementById("answers");

const nextBtn=document.getElementById("nextBtn");

const resultBox=document.getElementById("result");
const scoreText=document.getElementById("scoreText");

const restartBtn=document.getElementById("restartBtn");



function startQuiz(){

currentQuestion=0;
score=0;

questions=languages[currentLang].questions;

quizSection.style.display="block";
resultBox.style.display="none";

showQuestion();

}



playBtn.onclick=startQuiz;


startButtons.forEach(btn=>{
btn.onclick=startQuiz;
});



function showQuestion(){

answersBox.innerHTML="";

let q=questions[currentQuestion];

questionText.innerHTML=
(currentQuestion+1)+". "+q.q;


q.a.forEach((answer,index)=>{

let button=document.createElement("button");

button.innerHTML=answer;

button.onclick=()=>{

if(index===q.c){

score++;

}

nextBtn.style.display="block";

};

answersBox.appendChild(button);

});

}




nextBtn.onclick=()=>{


currentQuestion++;


if(currentQuestion < questions.length){

showQuestion();

}else{

finishQuiz();

}


};



function finishQuiz(){

quizSection.style.display="none";

resultBox.style.display="block";


scoreText.innerHTML=
"🏆 Score : "+score+"/"+questions.length;

}




restartBtn.onclick=startQuiz;
