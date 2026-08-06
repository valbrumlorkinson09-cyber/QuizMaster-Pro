const data = {

fr:{
title:"Testez vos connaissances",
subtitle:"Des milliers de quiz. Des défis. Des récompenses.",
play:"Jouer Maintenant",
cat:"Catégories",
popular:"🔥 Quiz Populaires",
culture:"Culture Générale",
football:"Football",
cinema:"Cinéma",
music:"Musique",
science:"Sciences",
tech:"Technologie",
geo:"Géographie",
history:"Histoire",
start:"Commencer",
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
}
]
},


en:{
title:"Test your knowledge",
subtitle:"Thousands of quizzes. Challenges. Rewards.",
play:"Play Now",
cat:"Categories",
popular:"🔥 Popular Quizzes",
culture:"General Knowledge",
football:"Football",
cinema:"Movies",
music:"Music",
science:"Science",
tech:"Technology",
geo:"Geography",
history:"History",
start:"Start",
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
}
]
},


ht:{
title:"Teste konesans ou",
subtitle:"Plizyè milye quiz. Defi. Rekonpans.",
play:"Jwe Kounya",
cat:"Kategori",
popular:"🔥 Quiz Popilè",
culture:"Konesans Jeneral",
football:"Foutbòl",
cinema:"Sinema",
music:"Mizik",
science:"Syans",
tech:"Teknoloji",
geo:"Jewografi",
history:"Istwa",
start:"Kòmanse",
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
}
]
},


es:{
title:"Prueba tus conocimientos",
subtitle:"Miles de quiz. Retos. Recompensas.",
play:"Jugar Ahora",
cat:"Categorías",
popular:"🔥 Quiz Populares",
culture:"Cultura General",
football:"Fútbol",
cinema:"Cine",
music:"Música",
science:"Ciencias",
tech:"Tecnología",
geo:"Geografía",
history:"Historia",
start:"Comenzar",
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
}
]
}

};



let lang="fr";
let index=0;
let score=0;



function changeLanguage(l){

lang=l;

document.getElementById("title").innerHTML=data[l].title;
document.getElementById("subtitle").innerHTML=data[l].subtitle;
document.getElementById("playBtn").innerHTML=data[l].play;

document.getElementById("catTitle").innerHTML=data[l].cat;
document.getElementById("popular").innerHTML=data[l].popular;

document.getElementById("culture").innerHTML="🌍 "+data[l].culture;
document.getElementById("football").innerHTML="⚽ "+data[l].football;
document.getElementById("cinema").innerHTML="🎬 "+data[l].cinema;
document.getElementById("music").innerHTML="🎵 "+data[l].music;
document.getElementById("science").innerHTML="🧪 "+data[l].science;
document.getElementById("tech").innerHTML="💻 "+data[l].tech;
document.getElementById("geo").innerHTML="🌎 "+data[l].geo;
document.getElementById("history").innerHTML="📜 "+data[l].history;

}



const playBtn=document.getElementById("playBtn");
const quiz=document.getElementById("quizSection");
const question=document.getElementById("question");
const answers=document.getElementById("answers");
const next=document.getElementById("nextBtn");
const result=document.getElementById("result");
const scoreText=document.getElementById("scoreText");


playBtn.onclick=start;


function start(){

index=0;
score=0;

quiz.style.display="block";
result.style.display="none";

show();

}



function show(){

answers.innerHTML="";

let q=data[lang].questions[index];

question.innerHTML=q.q;


q.a.forEach((x,i)=>{

let b=document.createElement("button");

b.innerHTML=x;

b.onclick=()=>{

if(i===q.c){
score++;
}

};

answers.appendChild(b);

});


}



next.onclick=()=>{

index++;

if(index<data[lang].questions.length){

show();

}else{

quiz.style.display="none";
result.style.display="block";

scoreText.innerHTML=
"🏆 Score : "+score+"/"+data[lang].questions.length;

}

};
