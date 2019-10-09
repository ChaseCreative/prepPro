//get function for getElementByID - x is a parameter for arguments
function get(x){
  return document.getElementById(x);
}


	var startButton = get("startButton");
    var answerOne = get("answerOne");
    var answerTwo = get("answerTwo");
    var answeThree = get("answerThree");
    var answerFour = get("answerFour");
    var responseButton = get("responseButton");
    var responseNext = get("responseNext");

  //CHANGE THE NAMES OF THE GAMES HERE
    var game1Title = get("answerOne").innerHTML = "SID SPACE";
    var game2Title = get("answerTwo").innerHTML = "PrepAccusative";
    var game3Title = get("answerThree").innerHTML = "PrepMashUp";
    var game4Title = get("answerFour").innerHTML = "";


//This sets up the name of the app and four seoparate games
function appName() {get("boxTwo").innerHTML = "prepPro";}

function gameTitle() {get("startButton").innerHTML = "Are you a Prep Pro";}

function gameOneTitle() {return game1Title;}

function gameTwoTitle() {return game2Title;}

function gameThreeTitle(){return game3Title;}

function gameFourTitle(){return game4Title;}

//This loads the names of the games

    appName();
    gameTitle();
    gameOneTitle();
    gameTwoTitle();
    gameThreeTitle();
    gameFourTitle();



    //Here specific data are loaded
    //var sidSpacePreps = [["sub", "under"], ["in", "in/on"], ["de", "about/down from"],["sine", "without"], ["pro", "in front of"], ["ē/ex","outof/from"]];

    var nounsFirst = [["puell", "girl"], ["ancill", "maid servant"], ["vi", "road"], ["vill", "house"], ["mens", "table"],["fam", "rumor"], ["fortun", "fortune"],  ["pecuni", "money"], ["sententi", "opinion"], ["form", "form"],["ir", "anger"], ["patri", "country"], ["port", "gate"],["ros", "rose"], ["vit", "life"]];

    var nounsFirstPlural = [["puell", "girls"], ["ancill", "maid servants"], ["vi", "roads"], ["vill", "houses"], ["mens", "tables"], ["fam", "rumors"], ["fortun", "fortunes"],  ["pecuni", "monies"], ["sententi", "opinions"], ["form", "forms"],["ir", "angers"], ["patri", "countries"], ["port", "gates"],["ros", "roses"], ["vit", "lives"]];

    //var verbsFirstPer = [["Amav", "loved"], ["laborav", "worked"], ["habitav", "lived"], ["cogitav", "thought"], ["cantav", "sang"], ["ded", "gave"]];

    var perEndingsFirst = ["a", "ae", "ae", "am", "ā", "a", "ae", "ae", "am", "ā"];
    var perEndingsFirstPlural = ["ae", "ārum", "īs", "ās", "īs", "ae", "ārum", "īs", "ās", "īs"];


    var nounsSecond = [["serv", "servant"], ["hort", "garden"], ["lect", "couch"], ["coqu", "cook"], ["cerv", "deer"],["cib", "food"], ["anul", "ring"], ["domin", "master"], ["candidat", "candidate"],["lup", "wolf"]];
    var perEndingsSecond = ["us", "ī", "ō", "um", "ō", "us", "ī", "ō", "um", "ō"];


    var nounsSecondPlural = [["serv", "servants"], ["hort", "gardens"], ["lect", "couches"], ["argentari", "bankers"], ["coqu", "cooks"], ["cerv", "deer"],["cib", "food"], ["anul", "rings"], ["nunti", "messengers"], ["fili", "sons"],["domin", "masters"], ["venalici", "slave dealers"], ["candidat", "candidates"],["lup", "wolves"]];
    var perEndingsSecondPlural = ["ī", "ōrum", "īs", "ōs", "īs", "ī", "ōrum", "īs", "ōs", "īs"];

    var nounsSecondNeuter = [["don", "gift"], ["pericul", "danger"], ["plaustr", "cart"], ["cubicul", "bedroom"], ["triclini", "dining room"]];
    var perEndingsSecondNeuter = ["um", "ī", "ō", "um", "ō", "um", "ī", "ō", "um", "ō"];


    var nounsSecondNeuterPlural = [["don", "gifts"], ["pericul", "dangers"], ["plaustr", "carts"], ["cubicul", "bedrooms"], ["triclini", "dining rooms"]];
    var perEndingsSecondNeuterPlural = ["a", "ōrum", "īs", "a", "īs", "a", "ōrum", "īs", "a", "īs"];




    var perEndingsThird = ["is ", "ī ", "em ", "e ","is ", "ī ", "em ", "e "];
    //var perEndingsThird = [["is ", "of the "], ["ī ", "to/for the "], ["em ", "the "], ["e ", "by/with/in/from the "]];
    var perEndingsThirdPlural = ["ēs ", "um ", "is ", "ibus ","ēs ", "um ", "is ", "ibus "];


    //var perEndingsSecond = [["us", "the (Subject) "], ["ī (genitive)", "of the "], ["ō (dative)", "to/for the "], ["um", "the (Direct Object) "], ["ō (ablative)", "by/with/in/from the "], ["e!", "Oh, "]];



    //var perEndingsFirstPlural = [["ae", "the (Subject) "], ["ārum", "of the "], ["īs (Dative)", "to/for the "], ["ās", "the (Direct Object) "], ["īs (Ablative)", "by/with/in/from the "], ["ae!", "Oh, "]];

    //var perEndingsFirstImp = [["ābam", "I was "], ["ābas", "You were "], ["ābat", "She/he/it was "], ["ābamus", "We were "], ["ābatis", "Ya'll were "], ["ābant", "They were "]];

    //var perEndingsFirstPerfect = [["ī", "I "], ["isti", "You "], ["it", "She/he/it "], ["imus", "We "], ["istis", "Ya'll "], ["ērunt", "They "]];
    //var nounsSecond = [["serv", "servant"], ["hort", "garden"], ["lect", "couch"], ["coqu", "cook"], ["cerv", "deer"],["cib", "food"], ["anul", "ring"], ["domin", "master"], ["candidat", "candidate"],["lup", "wolf"]];

    //var perEndingsSecond = [["us", "the (Subject) "], ["ī (genitive)", "of the "], ["ō (dative)", "to/for the "], ["um", "the (Direct Object) "], ["ō (ablative)", "by/with/in/from the "], ["e!", "Oh, "]];

    var nounsSecondIus = [["argentari", "banker"], ["nunti", "messenger"], ["fili", "son"],["venalici", "slave dealer"]];
    var nounsSecondEr = [["puer", "puer", "boy"], ["liber", "libr", "book"], ["magister", "magistr", "teacher"],["vir", "vir","man"]];
    var perEndingsSecondIusEr = [["us", "the (Subject) "], ["i (genitive)", "of the "], ["ō (dative)", "to/for the "], ["um", "the (Direct Object) "], ["ō (ablative)", "by/with/in/from the "], ["!", "Oh, "]];

    var perEndingsSecondPlural = [["ī", "the (Subject) "], ["ōrum ", "of the "], ["īs (dative)", "to/for the "], ["ōs", "the (Direct Object) "], ["īs (ablative)", "by/with/in/from the "], ["ī!", "Oh, "]];

    var nounsThird = [["reg", "king"], ["pac", "peace"],["labor", "work"], ["homin", "man"], ["virtut", "virtue"], ["civitat", "state"], ["can", "dog"], ["mercator", "merchant"], ["patr", "father"], ["matr", "mother"]];

    //var perEndingsThird = [["is", "of the "], ["ī ", "to/for the "], ["em", "the "], ["e", "by/with/in/from the "]];
    //var perEndingsThirdPlural = [["ēs", "the "], ["um", "of the "], ["ibus ", "to/for the (Dative) "], ["ēs", "the "], ["ibus", "by/with/in/from the (Ablative) "]];

    var sidSpacePreps = [["sub ", "under the "], ["in ", "in/on the "], ["de ", "about/down from the "],["sine ", "without the "], ["pro ", "in front of the "], ["ā/ab ","away from the "],["cum ", "with the "], ["ē/ex ","out of the "]];
    var sidSpacePrepsNot = [["in ", "into the "], ["circum ", "around the "], ["per ", "through the "],["trans ", "across the "], ["ad ", "to the "], ["prope ","near the "],["intrā ", "within the "], ["ante ","before the "], ["inter ", "between the "], ["post ","after the "]];


    var answers = ["answerOne", "answerTwo", "answerThree", "answerFour"];

    //Random index for thatGirl
    var randIndex = Math.floor(Math.random() * 5);


    //Random index for Shuffle
    	 var randomIndex = 0;

    function resetQuestions(){

    randIndex = Math.floor(Math.random() * 5);

    nounsFirst = [["puell", "girl"], ["ancill", "maid servant"], ["vi", "road"], ["vill", "house"], ["mens", "table"], ["fam", "rumor"], ["fortun", "fortune"],  ["pecuni", "money"], ["sententi", "opinion"], ["form", "form"],["ir", "anger"], ["patri", "country"], ["port", "gate"],["ros", "rose"], ["vit", "life"]];

    nounsFirstPlural = [["puell", "girls"], ["ancill", "maid servants"], ["vi", "roads"], ["vill", "houses"], ["mens", "tables"], ["fam", "rumors"], ["fortun", "fortunes"],  ["pecuni", "monies"], ["sententi", "opinions"], ["form", "forms"],["ir", "angers"], ["patri", "countries"], ["port", "gates"],["ros", "roses"], ["vit", "lives"]];

    nounsSecond = [["serv", "servant"], ["hort", "garden"], ["lect", "couch"], ["coqu", "cook"], ["cerv", "deer"],["cib", "food"], ["anul", "ring"], ["domin", "master"], ["candidat", "candidate"],["lup", "wolf"]];

      //var verbsFirstPer = [["Amav", "loved"], ["laborav", "worked"], ["habitav", "lived"], ["cogitav", "thought"], ["cantav", "sang"], ["ded", "gave"]];

    perEndingsFirst = ["a", "ae", "ae", "am", "ā", "a", "ae", "ae", "am", "ā"];
    perEndingsFirstPlural = ["ae", "ārum", "īs", "ās", "īs", "ae", "ārum", "īs", "ās", "īs"];
    perEndingsSecond = ["us", "ī", "ō", "um", "ō", "us", "ī", "ō", "um", "ō"];


    nounsSecondPlural = [["serv", "servants"], ["hort", "gardens"], ["lect", "couches"], ["argentari", "bankers"], ["coqu", "cooks"], ["cerv", "deer"],["cib", "food"], ["anul", "rings"], ["nunti", "messengers"], ["fili", "sons"],["domin", "masters"], ["venalici", "slave dealers"], ["candidat", "candidates"],["lup", "wolves"]];
    perEndingsSecondPlural = ["ī", "ōrum", "īs", "ōs", "īs", "ī", "ōrum", "īs", "ōs", "īs"];

    nounsSecondNeuter = [["don", "gift"], ["pericul", "danger"], ["plaustr", "cart"], ["cubicul", "bedroom"], ["triclini", "dining room"]];
    perEndingsSecondNeuter = ["um", "ī", "ō", "um", "ō", "um", "ī", "ō", "um", "ō"];

    nounsSecondNeuterPlural = [["don", "gifts"], ["pericul", "dangers"], ["plaustr", "carts"], ["cubicul", "bedrooms"], ["triclini", "dining rooms"]];
    perEndingsSecondNeuterPlural = ["a", "ōrum", "īs", "a", "īs", "a", "ōrum", "īs", "a", "īs"];


    sidSpacePreps = [["sub ", "under the "], ["in ", "in/on the "], ["de ", "about/down from the "],["sine ", "without the "], ["pro ", "in front of the "], ["ā/ab ","away from the "],["cum ", "with the "], ["ē/ex ","out of the "]];
    sidSpacePrepsNot = [["in ", "into the "], ["circum ", "around the "], ["per ", "through the "],["trans ", "across the "], ["ad ", "to the "], ["prope ","near the "],["intrā ", "within the "], ["ante ","before the "], ["inter ", "between the "], ["post ","after the "]];

    nounsThird = [["reg", "king"], ["labor", "work"], ["homin", "man"], ["can", "dog"], ["mercator", "merchant"], ["patr", "father"],["pac", "peace"], ["virtut", "virtue"], ["civitat", "state"], ["matr", "mother"]];
    nounsThirdPlural = [["reg", "kings"], ["labor", "works"], ["homin", "men"], ["can", "dogs"], ["mercator", "merchants"], ["patr", "fathers"], ["virtut", "virtues"], ["civitat", "states"], ["matr", "mothers"]];

    perEndingsThird = ["is ", "ī ", "em ", "e ","is ", "ī ", "em ", "e "];
    perEndingsThirdPlural = ["ēs ", "um ", "is ", "ibus ","ēs ", "um ", "is ", "ibus "];

    }

//This declares a function for the audio files which are embodied in the Body
function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }



//Score Variables

	var correctAnswer = "";

    var points = 0;

    var pointsPerCorrectAnswer = 10;



//Function for adding and subtracting points based on correct or wrong answers

    function addPoints(){
    	points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;

    }


    function subtractPoints(){
    	points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;

    }

//Counter variable for number of questions to be asked for each game

var num_questions = 5;
var count = 11;

function decrementCount(){
	count--;
}


//Timer variable set for 15 seconds
var timeleft = 15;
var countdown = setInterval(x,1000);


function countDownTimer(){

		document.getElementById("boxOne").innerHTML = timeleft;
  		timeleft -= 1;
  			if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;
    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Tempus Fugit!"
    			resetAnswerColors();
    			answerOne.innerHTML = "";
				answerTwo.innerHTML = "";
				answerThree.innerHTML = "";
				answerFour.innerHTML = "";

  }

}





function stopTimer() {


	clearInterval(countdown);


}



//This randomizes an array. The parameter array takes as its argument the questions.


function shuffle(array){
	var currentIndex = array.length;
	var temporaryValue;
	//var randIndex;

	while (currentIndex > 0){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex --;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
		return array;
}



function answerSetup(){
		answerOne.innerHTML = "";
		answerTwo.innerHTML = "";
		answerThree.innerHTML = "";
		answerFour.innerHTML = "";
		responseButton.innerHTML = "";
		answerOne.onclick = function(){clickedAnswerOne()};
		answerTwo.onclick = function(){clickedAnswerTwo()};
		answerThree.onclick = function(){clickedAnswerThree()};
		answerFour.onclick = function(){clickedAnswerFour()};
}



 function selectGame1(){

 	startButton.disabled = false;
 	startButton.onclick = function(){prepProAblative()};
	startButton.innerHTML = "Click to Start " + game1Title;
    answerSetup();
    gameOverAudio();
 	return true;


}


function selectGame2(){

	startButton.disabled = false;
 	startButton.onclick = function(){prepProAccusative()};
 	startButton.innerHTML = "Click to Start " + game2Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame3(){

	startButton.disabled = false;
 	startButton.onclick = function(){prepProMashup()};
 	startButton.innerHTML = "Click to Start " + game3Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame4(){

	startButton.disabled = false;
 	startButton.onclick = function(){allSecondDeclensionNounShuffle()};
 	startButton.innerHTML = "Click to Start " + game4Title;
    answerSetup();
    gameOverAudio();
 }









function prepProAblative(){

resetQuestions();

countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;


shuffle(nounsFirst);
shuffle(nounsFirstPlural);
shuffle(nounsSecond);
shuffle(nounsSecondPlural);
shuffle(nounsSecondNeuter);
shuffle(nounsSecondNeuterPlural);
shuffle(sidSpacePreps);

shuffle(nounsThird);
shuffle(nounsThirdPlural);


//shuffle(verbsFirstPer);

//shuffle(femIlla);

//shuffle(perEndingsFirstImp);
//shuffle(perEndingsFirstPerfect);



shuffle(answers);


function shuffleAblativeSecond(){
document.getElementById("startButton").innerHTML =  sidSpacePreps[0][1] + nounsSecond[0][1];


document.getElementById(answers[0]).innerHTML = sidSpacePreps[0][0] + nounsSecond[0][0] + perEndingsSecond[4];


document.getElementById(answers[1]).innerHTML = sidSpacePreps[0][0] + nounsSecond[0][0] + perEndingsSecond[0];

document.getElementById(answers[2]).innerHTML = sidSpacePreps[0][0] + nounsSecond[0][0] + perEndingsSecond[1];

document.getElementById(answers[3]).innerHTML = sidSpacePreps[0][0] + nounsSecond[0][0] + perEndingsSecond[3];
}



function shuffleAblativeFirst(){
  document.getElementById("startButton").innerHTML =  sidSpacePreps[0][1] + nounsFirst[0][1];


  document.getElementById(answers[0]).innerHTML = sidSpacePreps[0][0] + nounsFirst[0][0] + perEndingsFirst[4];


  document.getElementById(answers[1]).innerHTML = sidSpacePreps[0][0] + nounsFirst[0][0] + perEndingsFirst[0];

  document.getElementById(answers[2]).innerHTML = sidSpacePreps[0][0] + nounsFirst[0][0] + perEndingsFirst[1];

  document.getElementById(answers[3]).innerHTML = sidSpacePreps[0][0] + nounsFirst[0][0] + perEndingsFirst[3];
}







function shuffleAblativeFirstPlural(){
  document.getElementById("startButton").innerHTML =  sidSpacePreps[0][1] + nounsFirstPlural[0][1];


  document.getElementById(answers[0]).innerHTML = sidSpacePreps[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[4];


  document.getElementById(answers[1]).innerHTML = sidSpacePreps[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[0];

  document.getElementById(answers[2]).innerHTML = sidSpacePreps[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[1];

  document.getElementById(answers[3]).innerHTML = sidSpacePreps[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[3];
}







function shuffleAblativeSecondPlural(){
document.getElementById("startButton").innerHTML =  sidSpacePreps[0][1] + nounsSecondPlural[0][1];


document.getElementById(answers[0]).innerHTML = sidSpacePreps[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[4];


document.getElementById(answers[1]).innerHTML = sidSpacePreps[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[0];

document.getElementById(answers[2]).innerHTML = sidSpacePreps[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[1];

document.getElementById(answers[3]).innerHTML = sidSpacePreps[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[3];
}




function shuffleAblativeThird(){
document.getElementById("startButton").innerHTML =  sidSpacePreps[0][1] + nounsThird[0][1];


document.getElementById(answers[0]).innerHTML = sidSpacePreps[0][0] + nounsThird[0][0] + perEndingsThird[3];


document.getElementById(answers[1]).innerHTML = sidSpacePreps[0][0] + nounsThird[0][0] + perEndingsThird[0];

document.getElementById(answers[2]).innerHTML = sidSpacePreps[0][0] + nounsThird[0][0] + perEndingsThird[1];

document.getElementById(answers[3]).innerHTML = sidSpacePreps[0][0] + nounsThird[0][0] + perEndingsThird[2];
}




function shuffleAblativeThirdPlural(){
document.getElementById("startButton").innerHTML =  sidSpacePreps[0][1] + nounsThirdPlural[0][1];


document.getElementById(answers[0]).innerHTML = sidSpacePreps[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[3];


document.getElementById(answers[1]).innerHTML = sidSpacePreps[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[2];

document.getElementById(answers[2]).innerHTML = sidSpacePreps[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[1];

document.getElementById(answers[3]).innerHTML = sidSpacePreps[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[0];
}



var randomAblIndex = Math.floor(Math.random() * 6);
var mixUp = [shuffleAblativeThirdPlural, shuffleAblativeThird, shuffleAblativeSecondPlural, shuffleAblativeFirstPlural,shuffleAblativeFirst, shuffleAblativeSecond];

mixUp[randomAblIndex]();




//var randomIllaIndex = Math.floor(Math.random() * 6);
//var mixUp = [shuffleFemIlla, shuffleFemIllaPlural, shuffleMascIlle, shuffleMascIllePlural, shuffleNeutIllud, shuffleNeutIlludPlural];

//mixUp[randomIllaIndex]();





	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;


     //if (answerOne.value == "1") {document.getElementById("boxTwo").innerHTML = "HI!");}


     //var newArray = shuffle(questions);

 	decrementCount();






	if (count == 0){

		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;


    }



}





function prepProAccusative(){

resetQuestions();

countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;


shuffle(nounsFirst);
shuffle(nounsFirstPlural);
shuffle(nounsSecond);
shuffle(nounsSecondPlural);
shuffle(nounsSecondNeuter);
shuffle(nounsSecondNeuterPlural);
shuffle(nounsThird);
shuffle(nounsThirdPlural);

shuffle(sidSpacePrepsNot);

//shuffle(verbsFirstPer);

//shuffle(femIlla);

//shuffle(perEndingsFirstImp);
//shuffle(perEndingsFirstPerfect);



shuffle(answers);


function shuffleAccusativeSecond(){
document.getElementById("startButton").innerHTML =  sidSpacePrepsNot[0][1] + nounsSecond[0][1];


document.getElementById(answers[0]).innerHTML = sidSpacePrepsNot[0][0] + nounsSecond[0][0] + perEndingsSecond[3];


document.getElementById(answers[1]).innerHTML = sidSpacePrepsNot[0][0] + nounsSecond[0][0] + perEndingsSecond[0];

document.getElementById(answers[2]).innerHTML = sidSpacePrepsNot[0][0] + nounsSecond[0][0] + perEndingsSecond[1];

document.getElementById(answers[3]).innerHTML = sidSpacePrepsNot[0][0] + nounsSecond[0][0] + perEndingsSecond[4];
}

//shuffleAccusativeSecond();

function shuffleAccusativeFirst(){
  document.getElementById("startButton").innerHTML =  sidSpacePrepsNot[0][1] + nounsFirst[0][1];


  document.getElementById(answers[0]).innerHTML = sidSpacePrepsNot[0][0] + nounsFirst[0][0] + perEndingsFirst[3];


  document.getElementById(answers[1]).innerHTML = sidSpacePrepsNot[0][0] + nounsFirst[0][0] + perEndingsFirst[0];

  document.getElementById(answers[2]).innerHTML = sidSpacePrepsNot[0][0] + nounsFirst[0][0] + perEndingsFirst[1];

  document.getElementById(answers[3]).innerHTML = sidSpacePrepsNot[0][0] + nounsFirst[0][0] + perEndingsFirst[4];
}



//shuffleAccusativeFirst();



function shuffleAccusativeFirstPlural(){
  document.getElementById("startButton").innerHTML =  sidSpacePrepsNot[0][1] + nounsFirstPlural[0][1];


  document.getElementById(answers[0]).innerHTML = sidSpacePrepsNot[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[3];


  document.getElementById(answers[1]).innerHTML = sidSpacePrepsNot[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[0];

  document.getElementById(answers[2]).innerHTML = sidSpacePrepsNot[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[1];

  document.getElementById(answers[3]).innerHTML = sidSpacePrepsNot[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[2];
}



//shuffleAccusativeFirstPlural();



function shuffleAccusativeSecondPlural(){
document.getElementById("startButton").innerHTML =  sidSpacePrepsNot[0][1] + nounsSecondPlural[0][1];


document.getElementById(answers[0]).innerHTML = sidSpacePrepsNot[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[3];


document.getElementById(answers[1]).innerHTML = sidSpacePrepsNot[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[0];

document.getElementById(answers[2]).innerHTML = sidSpacePrepsNot[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[1];

document.getElementById(answers[3]).innerHTML = sidSpacePrepsNot[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[4];
}

//shuffleAccusativeSecondPlural();


function shuffleAccusativeThird(){
document.getElementById("startButton").innerHTML =  sidSpacePrepsNot[0][1] + nounsThird[0][1];


document.getElementById(answers[0]).innerHTML = sidSpacePrepsNot[0][0] + nounsThird[0][0] + perEndingsThird[2];


document.getElementById(answers[1]).innerHTML = sidSpacePrepsNot[0][0] + nounsThird[0][0] + perEndingsThird[0];

document.getElementById(answers[2]).innerHTML = sidSpacePrepsNot[0][0] + nounsThird[0][0] + perEndingsThird[1];

document.getElementById(answers[3]).innerHTML = sidSpacePrepsNot[0][0] + nounsThird[0][0] + perEndingsThird[3];
}

//shuffleAccusativeThird();


function shuffleAccusativeThirdPlural(){
document.getElementById("startButton").innerHTML =  sidSpacePrepsNot[0][1] + nounsThirdPlural[0][1];


document.getElementById(answers[0]).innerHTML = sidSpacePrepsNot[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[0];


document.getElementById(answers[1]).innerHTML = sidSpacePrepsNot[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[2];

document.getElementById(answers[2]).innerHTML = sidSpacePrepsNot[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[1];

document.getElementById(answers[3]).innerHTML = sidSpacePrepsNot[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[3];
}

//shuffleAccusativeThirdPlural();


var randomAccIndex = Math.floor(Math.random() * 6);
var mixUp = [shuffleAccusativeThirdPlural, shuffleAccusativeThird, shuffleAccusativeSecondPlural, shuffleAccusativeFirstPlural,shuffleAccusativeFirst, shuffleAccusativeSecond];

mixUp[randomAccIndex]();




//var randomIllaIndex = Math.floor(Math.random() * 6);
//var mixUp = [shuffleFemIlla, shuffleFemIllaPlural, shuffleMascIlle, shuffleMascIllePlural, shuffleNeutIllud, shuffleNeutIlludPlural];

//mixUp[randomIllaIndex]();





	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;


     //if (answerOne.value == "1") {document.getElementById("boxTwo").innerHTML = "HI!");}


     //var newArray = shuffle(questions);

 	decrementCount();






	if (count == 0){

		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;


    }



}




function prepProMashup(){

resetQuestions();

countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;


shuffle(nounsFirst);
shuffle(nounsFirstPlural);
shuffle(nounsSecond);
shuffle(nounsSecondPlural);
shuffle(nounsSecondNeuter);
shuffle(nounsSecondNeuterPlural);
shuffle(nounsThird);
shuffle(nounsThirdPlural);
shuffle(sidSpacePreps);
shuffle(sidSpacePrepsNot);

//shuffle(verbsFirstPer);

//shuffle(femIlla);

//shuffle(perEndingsFirstImp);
//shuffle(perEndingsFirstPerfect);



shuffle(answers);


function shuffleAblativeSecond(){
document.getElementById("startButton").innerHTML =  sidSpacePreps[0][1] + nounsSecond[0][1];


document.getElementById(answers[0]).innerHTML = sidSpacePreps[0][0] + nounsSecond[0][0] + perEndingsSecond[4];


document.getElementById(answers[1]).innerHTML = sidSpacePreps[0][0] + nounsSecond[0][0] + perEndingsSecond[0];

document.getElementById(answers[2]).innerHTML = sidSpacePreps[0][0] + nounsSecond[0][0] + perEndingsSecond[1];

document.getElementById(answers[3]).innerHTML = sidSpacePreps[0][0] + nounsSecond[0][0] + perEndingsSecond[3];
}



function shuffleAblativeFirst(){
  document.getElementById("startButton").innerHTML =  sidSpacePreps[0][1] + nounsFirst[0][1];


  document.getElementById(answers[0]).innerHTML = sidSpacePreps[0][0] + nounsFirst[0][0] + perEndingsFirst[4];


  document.getElementById(answers[1]).innerHTML = sidSpacePreps[0][0] + nounsFirst[0][0] + perEndingsFirst[0];

  document.getElementById(answers[2]).innerHTML = sidSpacePreps[0][0] + nounsFirst[0][0] + perEndingsFirst[1];

  document.getElementById(answers[3]).innerHTML = sidSpacePreps[0][0] + nounsFirst[0][0] + perEndingsFirst[3];
}







function shuffleAblativeFirstPlural(){
  document.getElementById("startButton").innerHTML =  sidSpacePreps[0][1] + nounsFirstPlural[0][1];


  document.getElementById(answers[0]).innerHTML = sidSpacePreps[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[4];


  document.getElementById(answers[1]).innerHTML = sidSpacePreps[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[0];

  document.getElementById(answers[2]).innerHTML = sidSpacePreps[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[1];

  document.getElementById(answers[3]).innerHTML = sidSpacePreps[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[3];
}







function shuffleAblativeSecondPlural(){
document.getElementById("startButton").innerHTML =  sidSpacePreps[0][1] + nounsSecondPlural[0][1];


document.getElementById(answers[0]).innerHTML = sidSpacePreps[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[4];


document.getElementById(answers[1]).innerHTML = sidSpacePreps[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[0];

document.getElementById(answers[2]).innerHTML = sidSpacePreps[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[1];

document.getElementById(answers[3]).innerHTML = sidSpacePreps[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[3];
}




function shuffleAblativeThird(){
document.getElementById("startButton").innerHTML =  sidSpacePreps[0][1] + nounsThird[0][1];


document.getElementById(answers[0]).innerHTML = sidSpacePreps[0][0] + nounsThird[0][0] + perEndingsThird[3];


document.getElementById(answers[1]).innerHTML = sidSpacePreps[0][0] + nounsThird[0][0] + perEndingsThird[0];

document.getElementById(answers[2]).innerHTML = sidSpacePreps[0][0] + nounsThird[0][0] + perEndingsThird[1];

document.getElementById(answers[3]).innerHTML = sidSpacePreps[0][0] + nounsThird[0][0] + perEndingsThird[2];
}




function shuffleAblativeThirdPlural(){
document.getElementById("startButton").innerHTML =  sidSpacePreps[0][1] + nounsThirdPlural[0][1];


document.getElementById(answers[0]).innerHTML = sidSpacePreps[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[3];


document.getElementById(answers[1]).innerHTML = sidSpacePreps[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[2];

document.getElementById(answers[2]).innerHTML = sidSpacePreps[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[1];

document.getElementById(answers[3]).innerHTML = sidSpacePreps[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[0];
}


function shuffleAccusativeSecond(){
document.getElementById("startButton").innerHTML =  sidSpacePrepsNot[0][1] + nounsSecond[0][1];


document.getElementById(answers[0]).innerHTML = sidSpacePrepsNot[0][0] + nounsSecond[0][0] + perEndingsSecond[3];


document.getElementById(answers[1]).innerHTML = sidSpacePrepsNot[0][0] + nounsSecond[0][0] + perEndingsSecond[0];

document.getElementById(answers[2]).innerHTML = sidSpacePrepsNot[0][0] + nounsSecond[0][0] + perEndingsSecond[1];

document.getElementById(answers[3]).innerHTML = sidSpacePrepsNot[0][0] + nounsSecond[0][0] + perEndingsSecond[4];
}



function shuffleAccusativeFirst(){
  document.getElementById("startButton").innerHTML =  sidSpacePrepsNot[0][1] + nounsFirst[0][1];


  document.getElementById(answers[0]).innerHTML = sidSpacePrepsNot[0][0] + nounsFirst[0][0] + perEndingsFirst[3];


  document.getElementById(answers[1]).innerHTML = sidSpacePrepsNot[0][0] + nounsFirst[0][0] + perEndingsFirst[0];

  document.getElementById(answers[2]).innerHTML = sidSpacePrepsNot[0][0] + nounsFirst[0][0] + perEndingsFirst[1];

  document.getElementById(answers[3]).innerHTML = sidSpacePrepsNot[0][0] + nounsFirst[0][0] + perEndingsFirst[4];
}







function shuffleAccusativeFirstPlural(){
  document.getElementById("startButton").innerHTML =  sidSpacePrepsNot[0][1] + nounsFirstPlural[0][1];


  document.getElementById(answers[0]).innerHTML = sidSpacePrepsNot[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[3];


  document.getElementById(answers[1]).innerHTML = sidSpacePrepsNot[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[0];

  document.getElementById(answers[2]).innerHTML = sidSpacePrepsNot[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[1];

  document.getElementById(answers[3]).innerHTML = sidSpacePrepsNot[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[2];
}






function shuffleAccusativeSecondPlural(){
document.getElementById("startButton").innerHTML =  sidSpacePrepsNot[0][1] + nounsSecondPlural[0][1];


document.getElementById(answers[0]).innerHTML = sidSpacePrepsNot[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[3];


document.getElementById(answers[1]).innerHTML = sidSpacePrepsNot[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[0];

document.getElementById(answers[2]).innerHTML = sidSpacePrepsNot[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[1];

document.getElementById(answers[3]).innerHTML = sidSpacePrepsNot[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[4];
}




function shuffleAccusativeThird(){
document.getElementById("startButton").innerHTML =  sidSpacePrepsNot[0][1] + nounsThird[0][1];


document.getElementById(answers[0]).innerHTML = sidSpacePrepsNot[0][0] + nounsThird[0][0] + perEndingsThird[2];


document.getElementById(answers[1]).innerHTML = sidSpacePrepsNot[0][0] + nounsThird[0][0] + perEndingsThird[0];

document.getElementById(answers[2]).innerHTML = sidSpacePrepsNot[0][0] + nounsThird[0][0] + perEndingsThird[1];

document.getElementById(answers[3]).innerHTML = sidSpacePrepsNot[0][0] + nounsThird[0][0] + perEndingsThird[3];
}




function shuffleAccusativeThirdPlural(){
document.getElementById("startButton").innerHTML =  sidSpacePrepsNot[0][1] + nounsThirdPlural[0][1];


document.getElementById(answers[0]).innerHTML = sidSpacePrepsNot[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[0];


document.getElementById(answers[1]).innerHTML = sidSpacePrepsNot[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[2];

document.getElementById(answers[2]).innerHTML = sidSpacePrepsNot[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[1];

document.getElementById(answers[3]).innerHTML = sidSpacePrepsNot[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[3];
}

//shuffleAccusativeThirdPlural();






var randomAblAccIndex = Math.floor(Math.random() * 12);
var mixUp = [shuffleAblativeThirdPlural, shuffleAblativeThird, shuffleAblativeSecondPlural, shuffleAblativeFirstPlural, shuffleAblativeFirst, shuffleAblativeSecond, shuffleAccusativeThirdPlural, shuffleAccusativeThird, shuffleAccusativeSecondPlural, shuffleAccusativeFirstPlural,shuffleAccusativeFirst, shuffleAccusativeSecond];

mixUp[randomAblAccIndex]();




//var randomIllaIndex = Math.floor(Math.random() * 6);
//var mixUp = [shuffleFemIlla, shuffleFemIllaPlural, shuffleMascIlle, shuffleMascIllePlural, shuffleNeutIllud, shuffleNeutIlludPlural];

//mixUp[randomIllaIndex]();





	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;


     //if (answerOne.value == "1") {document.getElementById("boxTwo").innerHTML = "HI!");}


     //var newArray = shuffle(questions);

 	decrementCount();






	if (count == 0){

		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;


    }



}













   function resetAnswerColors(){

	A1.style.backgroundColor = "white";
	A2.style.backgroundColor = "white";
	A3.style.backgroundColor = "white";
	A4.style.backgroundColor = "white";

	answerOne.style.backgroundColor = "white";
	answerTwo.style.backgroundColor = "white";
	answerThree.style.backgroundColor = "white";
	answerFour.style.backgroundColor = "white";

	answerOne.style.color = "black";
	answerTwo.style.color = "black";
	answerThree.style.color = "black";
	answerFour.style.color = "black";

}




function enableButtons(){

	answerOne.disabled = false;
	answerTwo.disabled = false;
	answerThree.disabled = false;
	answerFour.disabled = false;

}

function disableButtons(){
		answerOne.disabled = true;
		answerTwo.disabled = true;
		answerThree.disabled = true;
		answerFour.disabled = true;
}







function clickedAnswerOne(){




	if (document.getElementById("answerOne").innerHTML == sidSpacePreps[0][0] + nounsSecond[0][0] + perEndingsSecond[4]||
      document.getElementById("answerOne").innerHTML == sidSpacePreps[0][0] + nounsFirst[0][0] + perEndingsFirst[4]||
      document.getElementById("answerOne").innerHTML == sidSpacePreps[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[4]||
      document.getElementById("answerOne").innerHTML == sidSpacePreps[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[4]||
      document.getElementById("answerOne").innerHTML == sidSpacePreps[0][0] + nounsThird[0][0] + perEndingsThird[3]||
      document.getElementById("answerOne").innerHTML == sidSpacePreps[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[3]||
      document.getElementById("answerOne").innerHTML == sidSpacePreps[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[3]||

      document.getElementById("answerOne").innerHTML == sidSpacePrepsNot[0][0] + nounsSecond[0][0] + perEndingsSecond[3]||
      document.getElementById("answerOne").innerHTML == sidSpacePrepsNot[0][0] + nounsFirst[0][0] + perEndingsFirst[3]||
      document.getElementById("answerOne").innerHTML == sidSpacePrepsNot[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[3]||
      document.getElementById("answerOne").innerHTML == sidSpacePrepsNot[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[3]||
      document.getElementById("answerOne").innerHTML == sidSpacePrepsNot[0][0] + nounsThird[0][0] + perEndingsThird[2]||
      document.getElementById("answerOne").innerHTML == sidSpacePrepsNot[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[0]
      ){

		correctAnswerAudio();
		//clickedCorrectAnswerOneAudio ();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerOne.style.backgroundColor = "yellow";
		answerOne.style.border = "yellow";
		document.getElementById("A1").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Optime!";
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();



	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerOneAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerOne.style.color = "red";
		answerOne.style.backgroundColor = "black";
		answerOne.style.border = "black";
		answerOne.disabled = true;
		document.getElementById("A1").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}


function clickedAnswerTwo(){



	if (document.getElementById("answerTwo").innerHTML == sidSpacePreps[0][0] + nounsSecond[0][0] + perEndingsSecond[4]||
      document.getElementById("answerTwo").innerHTML == sidSpacePreps[0][0] + nounsFirst[0][0] + perEndingsFirst[4]||
      document.getElementById("answerTwo").innerHTML == sidSpacePreps[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[4]||
      document.getElementById("answerTwo").innerHTML == sidSpacePreps[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[4]||
      document.getElementById("answerTwo").innerHTML == sidSpacePreps[0][0] + nounsThird[0][0] + perEndingsThird[3]||
      document.getElementById("answerTwo").innerHTML == sidSpacePreps[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[3]||
      document.getElementById("answerTwo").innerHTML == sidSpacePreps[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[3]||

      document.getElementById("answerTwo").innerHTML == sidSpacePrepsNot[0][0] + nounsSecond[0][0] + perEndingsSecond[3]||
      document.getElementById("answerTwo").innerHTML == sidSpacePrepsNot[0][0] + nounsFirst[0][0] + perEndingsFirst[3]||
      document.getElementById("answerTwo").innerHTML == sidSpacePrepsNot[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[3]||
      document.getElementById("answerTwo").innerHTML == sidSpacePrepsNot[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[3]||
      document.getElementById("answerTwo").innerHTML == sidSpacePrepsNot[0][0] + nounsThird[0][0] + perEndingsThird[2]||
      document.getElementById("answerTwo").innerHTML == sidSpacePrepsNot[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[0]

    ){

		correctAnswerAudio();
		//clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerTwo.style.backgroundColor = "yellow";
		answerTwo.style.border = "yellow";
		document.getElementById("A2").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Optime!";
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerTwoAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerTwo.style.color = "red";
		answerTwo.style.backgroundColor = "black";
		answerTwo.style.border = "black";
		answerTwo.disabled = true;
		document.getElementById("A2").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}
}

function clickedAnswerThree(){



	if (document.getElementById("answerThree").innerHTML == sidSpacePreps[0][0] + nounsSecond[0][0] + perEndingsSecond[4]||
      document.getElementById("answerThree").innerHTML == sidSpacePreps[0][0] + nounsFirst[0][0] + perEndingsFirst[4]||
      document.getElementById("answerThree").innerHTML == sidSpacePreps[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[4]||
      document.getElementById("answerThree").innerHTML == sidSpacePreps[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[4]||
      document.getElementById("answerThree").innerHTML == sidSpacePreps[0][0] + nounsThird[0][0] + perEndingsThird[3]||
      document.getElementById("answerThree").innerHTML == sidSpacePreps[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[3]||
      document.getElementById("answerThree").innerHTML == sidSpacePreps[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[3]||

      document.getElementById("answerThree").innerHTML == sidSpacePrepsNot[0][0] + nounsSecond[0][0] + perEndingsSecond[3]||
      document.getElementById("answerThree").innerHTML == sidSpacePrepsNot[0][0] + nounsFirst[0][0] + perEndingsFirst[3]||
      document.getElementById("answerThree").innerHTML == sidSpacePrepsNot[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[3]||
      document.getElementById("answerThree").innerHTML == sidSpacePrepsNot[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[3]||
      document.getElementById("answerThree").innerHTML == sidSpacePrepsNot[0][0] + nounsThird[0][0] + perEndingsThird[2]||
      document.getElementById("answerThree").innerHTML == sidSpacePrepsNot[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[0]

    ){

		correctAnswerAudio();
		//clickedCorrectAnswerThreeAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerThree.style.backgroundColor = "yellow";
		answerThree.style.border = "yellow";
		document.getElementById("A3").style.backgroundColor = "yellow";
		responseButton.innerHTML = "Optime!";

		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerThreeAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerThree.style.color = "red";
		answerThree.style.backgroundColor = "black";
		answerThree.style.border = "black";
		answerThree.disabled = true;
		document.getElementById("A3").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}

function clickedAnswerFour(){



	if (document.getElementById("answerFour").innerHTML == sidSpacePreps[0][0] + nounsSecond[0][0] + perEndingsSecond[4]||
      document.getElementById("answerFour").innerHTML == sidSpacePreps[0][0] + nounsFirst[0][0] + perEndingsFirst[4]||
      document.getElementById("answerFour").innerHTML == sidSpacePreps[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[4]||
      document.getElementById("answerFour").innerHTML == sidSpacePreps[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[4]||
      document.getElementById("answerFour").innerHTML == sidSpacePreps[0][0] + nounsThird[0][0] + perEndingsThird[3]||
      document.getElementById("answerFour").innerHTML == sidSpacePreps[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[3]||
      document.getElementById("answerFour").innerHTML == sidSpacePreps[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[3]||

      document.getElementById("answerFour").innerHTML == sidSpacePrepsNot[0][0] + nounsSecond[0][0] + perEndingsSecond[3]||
      document.getElementById("answerFour").innerHTML == sidSpacePrepsNot[0][0] + nounsFirst[0][0] + perEndingsFirst[3]||
      document.getElementById("answerFour").innerHTML == sidSpacePrepsNot[0][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[3]||

      document.getElementById("answerFour").innerHTML == sidSpacePrepsNot[0][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[3]||
      document.getElementById("answerFour").innerHTML == sidSpacePrepsNot[0][0] + nounsThird[0][0] + perEndingsThird[2]||
      document.getElementById("answerFour").innerHTML == sidSpacePrepsNot[0][0] + nounsThirdPlural[0][0] + perEndingsThirdPlural[0]



    ){

		correctAnswerAudio();
		//clickedCorrectAnswerFourAudio;
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerFour.style.backgroundColor = "yellow";
		answerFour.style.border = "yellow";
		document.getElementById("A4").style.backgroundColor = "yellow";
		responseButton.innerHTML = "Optime!";

		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerFourAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerFour.style.color = "red";
		answerFour.style.backgroundColor = "black";
		answerFour.style.border = "black";
		answerFour.disabled = true;
		document.getElementById("A4").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}
