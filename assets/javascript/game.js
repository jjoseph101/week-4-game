// CRYSTAL COLLECTOR JAVASCRIPT FILE //

//declaring global variables//
var randGoal = Math.floor((Math.random()*200)+20);//pick random number 19-220//
var playScore = 0;
var gemA = Math.floor((Math.random()*11)+1); //pick random number 1-12//
var gemB = Math.floor((Math.random()*11)+1); //pick random number 1-12//
var gemC = Math.floor((Math.random()*11)+1); //pick random number 1-12//
var gemD = Math.floor((Math.random()*11)+1); //pick random number 1-12//
var totWins = 0;
var totLoss = 0;

//initiate drawing of random numbers
function initVars () {
	randGoal = Math.floor((Math.random()*200)+20);  //pick random number 19-220//
	playScore = 0;
	gemA = Math.floor((Math.random()*11)+1); //pick random number 1-12//
	gemB = Math.floor((Math.random()*11)+1); //pick random number 1-12//
	gemC = Math.floor((Math.random()*11)+1); //pick random number 1-12//
	gemD = Math.floor((Math.random()*11)+1); //pick random number 1-12//
	$("#randomGoal").html(randGoal);
	$("#totalScore").html("0");

	//testing that random numbers initiated//
	console.log("Random Results:")
	console.log(randGoal);
	console.log(gemA);
	console.log(gemB);
	console.log(gemC);
	console.log(gemD);
};

//initializing random numbers
initVars (); 

//waiting for an event//
$(document).ready(function() { 

	$("#gem1").on("click", function () {
		playScore=playScore+gemA;
		$("#totalScore").html(playScore);
		if (playScore>randGoal) {
			totLoss=totLoss+1;
			$("#losses").html("Losses: "+ totLoss);
			alert("You LOSE!");
			initVars ();
		} else if (playScore==randGoal && playScore!=0) {
			totWins=totWins+1;
			$("#wins").html("Wins: "+totWins);
			alert("You WIN!");
			initVars ();
		} else { };
	});

	$("#gem2").on("click", function () {
		playScore=playScore+gemB;
		$("#totalScore").html(playScore);
		if (playScore>randGoal) {
			totLoss=totLoss+1;
			$("#losses").html("Losses: "+ totLoss);
			alert("You LOSE!");
			initVars ();
		} else if (playScore==randGoal && playScore!=0) {
			totWins=totWins+1;
			$("#wins").html("Wins: "+totWins);
			alert("You WIN!");
			initVars ();
		} else { };
	});

	$("#gem3").on("click", function () {
		playScore=playScore+gemC;
		$("#totalScore").html(playScore);
		console.log(playScore);
		if (playScore>randGoal) {
			totLoss=totLoss+1;
			$("#losses").html("Losses: "+ totLoss);
			alert("You LOSE!");
			initVars ();
		} else if (playScore==randGoal && playScore!=0) {
			totWins=totWins+1;
			$("#wins").html("Wins: "+totWins);
			alert("You WIN!");
			initVars ();
		} else { };
	});

	$("#gem4").on("click", function () {
		playScore=playScore+gemD;
		$("#totalScore").html(playScore);
		if (playScore>randGoal) {
			totLoss=totLoss+1;
			$("#losses").html("Losses: "+ totLoss);
			alert("You LOSE!");
			initVars ();
		} else if (playScore==randGoal && playScore!=0) {
			totWins=totWins+1;
			$("#wins").html("Wins: "+totWins);
			alert("You WIN!");
			initVars ();
		} else { };
	});
});