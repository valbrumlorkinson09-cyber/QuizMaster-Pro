let currentLanguage = "fr";

let currentQuestion = 0;

let score = 0;

let xp = 0;

let timer;

let timeLeft = 15;



const quizData = {


fr:{

title:"Testez vos connaissances",

questions:[

{
question:"Quelle équipe a gagné la Coupe du Monde 2022 ?",

answers:[
"France",
"Argentine",
"Brésil",
"Allemagne"
],

correct:1

},


{
question:"Combien de planètes existe-t-il dans le système solaire ?",

answers:[
"7",
"8",
"9",
"10"
],

correct:1

},


{
question:"Qui a peint la Joconde ?",

answers:[
"Picasso",
"Van Gogh",
"Leonardo da Vinci",
"Michel-Ange"
],

correct:2

}

]

},


ht:{

title:"Teste konesans ou",

questions:[

{
question:"Ki ekip ki te genyen Koup di Mond 2022 la?",

answers:[
"Lafrans",
"Ajantin",
"Brezil",
"Almay"
],

correct:1

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

}

]

}

};


// ELEMENTS

const playBtn = document.getElementById("playBtn");

const quizArea = document.getElementById("quizArea");

const questionText = document.getElementById("questionText");

const answersBox = document.getElementById("answers");

const nextBtn = document.getElementById("nextQuestion");

const resultArea = document.getElementById("resultArea");

const finalScore = document.getElementById("finalScore");

const earnedXP = document.getElementById("earnedXP");

const xpText = document.getElementById("xp");

const profileXP = document.getElementById("profileXP");

const levelText = document.getElementById("level");

const xpBar = document.getElementById("xpBar");





function startQuiz(){

currentQuestion = 0;

score = 0;


quizArea.style.display="block";

resultArea.style.display="none";


showQuestion();

}






playBtn.onclick = startQuiz;






document.querySelectorAll(".startQuiz").forEach(btn=>{


btn.onclick=startQuiz;


});



// AFFICHER QUESTION

function showQuestion(){


clearInterval(timer);


timeLeft = 15;


document.getElementById("time").innerHTML = timeLeft;



let question = quizData[currentLanguage].questions[currentQuestion];



questionText.innerHTML =

(currentQuestion + 1) + ". " + question.question;



answersBox.innerHTML = "";



question.answers.forEach((answer,index)=>{


let button = document.createElement("button");


button.className = "answer";


button.innerHTML = answer;



button.onclick = function(){


checkAnswer(index);


};



answersBox.appendChild(button);



});



startTimer();


}




// VERIFIER REPONSE


function checkAnswer(answer){



let question = quizData[currentLanguage].questions[currentQuestion];



let buttons = document.querySelectorAll(".answer");



buttons.forEach(btn=>{

btn.disabled = true;

});



if(answer === question.correct){


score++;


xp += 20;



}



updateProfile();


nextBtn.style.display="block";



}






// TIMER


function startTimer(){


timer = setInterval(()=>{


timeLeft--;


document.getElementById("time").innerHTML = timeLeft;



if(timeLeft <=0){


clearInterval(timer);


nextQuestion();


}



},1000);



}


// QUESTION SUIVANTE

nextBtn.onclick = function(){

nextQuestion();

};



function nextQuestion(){


clearInterval(timer);



currentQuestion++;



if(currentQuestion < quizData[currentLanguage].questions.length){


showQuestion();


}

else{


finishQuiz();


}



}





// FIN DU QUIZ


function finishQuiz(){


quizArea.style.display="none";


resultArea.style.display="block";



finalScore.innerHTML =

"🏆 Score : " + score + "/" + quizData[currentLanguage].questions.length;



earnedXP.innerHTML =

xp;



updateProfile();



}





// PROFIL XP


function updateProfile(){



xpText.innerHTML = xp;


profileXP.innerHTML = xp;



let level = Math.floor(xp / 100) + 1;


levelText.innerHTML = level;



let progress = xp % 100;


xpBar.style.width = progress + "%";



}





// RECOMMENCER


document.getElementById("playAgain").onclick = function(){


startQuiz();


};


// CHANGEMENT DE LANGUE

function changeLanguage(language){


currentLanguage = language;



if(language === "fr"){


document.getElementById("mainTitle").innerHTML =
"Testez vos connaissances";


document.getElementById("description").innerHTML =
"Des milliers de quiz. Des défis. Des récompenses.";


}



if(language === "ht"){


document.getElementById("mainTitle").innerHTML =
"Teste konesans ou";


document.getElementById("description").innerHTML =
"Plizyè milye quiz. Defi. Rekonpans.";


}




// Reset quiz si lang chanje

currentQuestion = 0;

score = 0;

}





// SELECTION CATEGORIE

function selectCategory(category){


alert("Catégorie choisie : " + category);


startQuiz();


  }


// SAUVEGARDE PWOGRÈ JWÈ A


function savePlayer(){


localStorage.setItem("quizXP", xp);


localStorage.setItem("quizLevel", levelText.innerHTML);



}



// CHARGER PWOGRÈ JWÈ A


function loadPlayer(){


let savedXP = localStorage.getItem("quizXP");


let savedLevel = localStorage.getItem("quizLevel");



if(savedXP){


xp = Number(savedXP);


}



if(savedLevel){


levelText.innerHTML = savedLevel;


}



updateProfile();



}





// SAUVEGARDER APRÈ CHAK CHANJMAN XP


setInterval(()=>{


savePlayer();


},2000);





// DEMARE PROFIL LA LÈ PAJ LA LOUVRI


loadPlayer();





// KACHE BOUTON QUESTION SUIVANTE OKÒMANSE


nextBtn.style.display="none";
