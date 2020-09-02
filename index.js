function diceRoll() {

  // Dice animation
  $(".dice").addClass("rotate");
  $(".dice").on("animationend", function() {
    $(".dice").removeClass("rotate");
  })

  // Diceroll
  randomNumber1 = Math.floor(Math.random() * 6 + 1);
  Image1 = "dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", Image1);

  randomNumber2 = Math.floor(Math.random() * 6 + 1);
  Image2 = "dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[2].setAttribute("src", Image2);

  randomNumber3 = Math.floor(Math.random() * 6 + 1);
  Image3 = "dice" + randomNumber3 + ".png";
  document.querySelectorAll("img")[3].setAttribute("src", Image3);

  randomNumber4 = Math.floor(Math.random() * 6 + 1);
  Image4 = "dice" + randomNumber4 + ".png";
  document.querySelectorAll("img")[4].setAttribute("src", Image4);
}

// Responding to Dropdown Button
let links = document.querySelectorAll('#list li')
links.forEach((el) => {
  el.addEventListener('click', (event) => {

    let numberOfChoices = event.target.innerText
    document.getElementById('dropdownMenu').innerHTML = `${numberOfChoices}<span class="caret"></span>`

    if (numberOfChoices === "2") {
      $(".3Choices, .4Choices").addClass("invisible")
    }
    if (numberOfChoices === "3") {
      $(".4Choices").addClass("invisible");
      $(".3Choices").removeClass("invisible")
    }
    if (numberOfChoices === "4") {
      $(".3Choices, .4Choices").removeClass("invisible");
    }
  })
})


// Variables
var randomNumber1;
var randomNumber2;
var randomNumber3;
var randomNumber4;
var Image1;
var Image2;
var Image3;
var Image4;
var isTie;
var winNo;
var userChoices = [];
var chosen;
var winnerPosition;
function printWin() {$("#title").html(chosen + " wins! 🏆");
$("#title").addClass("green bigger").removeClass("red");}

// Responding to Submit
$("#submit").click(function(e) {
  e.preventDefault();

  $("#submit").html("Again");
  diceRoll();
  // Storing Data into variables
  var choice1 = $("#choice1").val();
  var choice2 = $("#choice2").val();
  var choice3 = $("#choice3").val();
  var choice4 = $("#choice4").val();
  var noOfChoices = $("#dropdownMenu").text();
  var diceValues = [];

  // Display user input
  $("#caption1").html(choice1);
  $("#caption2").html(choice2);
  $("#caption3").html(choice3);
  $("#caption4").html(choice4);

  // Winner
  if (noOfChoices === "2") {
    if (randomNumber1 > randomNumber2) {
      chosen = choice1
      printWin();
    } else if (randomNumber2 > randomNumber1) {
      chosen = choice2
      printWin();
    } else if (randomNumber2 = randomNumber1) {
      $("#title").html("Oops, try again!").addClass("red bigger").removeClass("green");;
    }
  }

  if (noOfChoices === "3") {
    userChoices = [choice1, choice2, choice3];

    diceValues.push(randomNumber1, randomNumber2, randomNumber3);
    let maxDice = Math.max(...diceValues);
    diceValues.filter(x => x === maxDice).length > 1 ? isTie = "True" : isTie = "False";
    if (isTie === "True") {
      $("#title").html("Oops, try again!").addClass("red bigger").removeClass("green");;


    } else if (isTie === "False") {
      winnerPosition = diceValues.indexOf(maxDice);
      chosen = userChoices[winnerPosition];
    printWin();
    console.log("winner: " + winnerPosition + " and chosen: " + chosen);
    }
  }

  if (noOfChoices === "4") {
    userChoices = [choice1, choice2, choice3, choice4];

    diceValues.push(randomNumber1, randomNumber2, randomNumber3, randomNumber4);
    let maxDice = Math.max(...diceValues);
    winnerPosition = diceValues.indexOf(maxDice);
    console.log("diceValues: " + diceValues + " \n userChoices: " + userChoices +
     "\n  maxDice " + maxDice );
    diceValues.pop(maxDice);
    let newMaxDice = Math.max(...diceValues);
    if (newMaxDice === maxDice) {
      $("#title").html("Oops, try again!").addClass("red bigger").removeClass("green");
    } else  {
      chosen = userChoices[winnerPosition];
    printWin();

    }
    console.log("diceValues: " + diceValues + " \n userChoices: " + userChoices +
     "\n  maxDice " + maxDice +"\n newMaxDice: " + newMaxDice);
  }

    // diceValues.push(randomNumber1, randomNumber2, randomNumber3, randomNumber4);
    // let maxDice = Math.max(...diceValues);
    // diceValues.filter(x => x === maxDice).length > 1 ? isTie = "True" : isTie = "False";
    // if (isTie === "True") {
    //   $("#title").html("Oops, try again!").addClass("red bigger").removeClass("green");
    //
    // } else if (isTie === "False") {
    //   winnerPosition = diceValues.indexOf(maxDice);
    //   chosen = userChoices[winnerPosition];
    // printWin();
    // console.log("winner: " + winnerPosition + " and chosen: " + chosen + "and isTie " + isTie);
    // }
    // 

});

