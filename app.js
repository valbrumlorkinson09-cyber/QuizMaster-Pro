const languages = {

fr:{
title:"Testez vos connaissances",
subtitle:"Des milliers de quiz. Des défis. Des récompenses.",
play:"Jouer Maintenant",
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


en:{
title:"Test your knowledge",
subtitle:"Thousands of quizzes. Challenges. Rewards.",
play:"Play Now",
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


ht:{
title:"Teste konesans ou",
subtitle:"Plizyè milye quiz. Defi. Rekonpans.",
play:"Jwe Kounya",
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
title:"Prueba tus conocimientos",
subtitle:"Miles de quizzes. Retos. Recompensas.",
play:"Jugar Ahora",
questions:[
{
q:"¿Qué equipo ganó el Mundial 2022?",
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
let currentQuestion=0;
let score=0;



const playBtn=document.getElementById("playBtn");
const questionBox=document.getElementById("question");
const answersBox=document.getElementById("answers");
const quizSection=document.getElementById("quizSection");
const nextBtn=document.getElementById("nextBtn");
const result=document.getElementById("result");
const scoreText=document.getElementById("scoreText");




function changeLanguage(lang){

currentLang=lang;

document.getElementById("title").innerHTML=
languages[lang].title;

document.getElementById("subtitle").innerHTML=
languages[lang].subtitle;

document.getElementById("playBtn").innerHTML=
languages[lang].play;

}





function startQuiz(){

currentQuestion=0;
score=0;

quizSection.style.display="block";
result.style.display="none";

showQuestion();

}




playBtn.onclick=startQuiz;



document.querySelectorAll(".startQuiz").forEach(btn=>{

btn.onclick=startQuiz;

});





function showQuestion(){

answersBox.innerHTML="";

let q=languages[currentLang].questions[currentQuestion];


questionBox.innerHTML=
(currentQuestion+1)+". "+q.q;



q.a.forEach((answer,index)=>{


let btn=document.createElement("button");

btn.innerHTML=answer;


btn.onclick=()=>{


if(index===q.c){

score++;

}


nextBtn.style.display="block";


};


answersBox.appendChild(btn);


});


}





nextBtn.onclick=()=>{


currentQuestion++;


if(currentQuestion < languages[currentLang].questions.length){

showQuestion();

}else{

finishQuiz();

}


};






function finishQuiz(){

quizSection.style.display="none";

result.style.display="block";


scoreText.innerHTML=
"🏆 Score : "+score+"/"+languages[currentLang].questions.length;


}




document.getElementById("restartBtn").onclick=startQuiz;
