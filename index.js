function diceRoll() {
  // 1st dice
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  var Image1 = "dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", Image1);

  // 2nd dice
  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  var Image2 = "dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[2].setAttribute("src", Image2);

  // 3rd dice
  var randomNumber3 = Math.floor(Math.random() * 6 + 1);
  var Image3 = "dice" + randomNumber3 + ".png";
  document.querySelectorAll("img")[3].setAttribute("src", Image3);

  // 4th dice
  var randomNumber3 = Math.floor(Math.random() * 6 + 1);
  var Image4 = "dice" + randomNumber3 + ".png";
  document.querySelectorAll("img")[4].setAttribute("src", Image4);
}


// Responding to Dropdown Button
let links = document.querySelectorAll('#list li')
links.forEach((el) => {
  el.addEventListener('click', (event) => {
    let numberOfChoices = event.target.innerText
    document.getElementById('dropdownMenu').innerHTML = `${numberOfChoices}<span class="caret"></span>`

    if (numberOfChoices === "2") {
      $("#img3, #img4, .threeChoices, .fourChoices").addClass("invisible")
    }
    if (numberOfChoices === "3") {
      $("#img4, .fourChoices").addClass("invisible");
      $("#img3, .threeChoices").removeClass("invisible")
    }
    if (numberOfChoices === "4") {
      $("#img3, #img4, .threeChoices, .fourChoices").removeClass("invisible");
    }
  })
})

// Responding to Submit
document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();

// Storing Data into variables
  var choice1 = $("#choice1").val();
  var choice2 = $("#choice2").val();
  var choice3 = $("#choice3").val();
  var choice4 = $("#choice4").val();
  var noOfChoices = $("#dropdownMenu").text();

// Rotate animation
  $(".dice").addClass("rotate");

// Changing text to user input
      $("#caption1").html(choice1);
      $("#caption2").html(choice2);
      $("#caption3").html(choice3);
      $("#caption4").html(choice4);
console.log(noOfChoices);

// Displaying no. of dices that user chose
    if (noOfChoices === "2") {
      $("#caption1, #caption2").removeClass("invisible");
      $("#caption3, #caption4").addClass("invisible");
    }

    if (noOfChoices === "3") {
      $("#caption1, #caption2, #caption3").removeClass("invisible");
      $("#caption4").addClass("invisible");
    }

    if (noOfChoices === "4") {
      $(".caption").removeClass("invisible");
    }

$("#submit").html("Again");

// Rolling Dice
  diceRoll();

// Determining winner
if (noOfChoices === "2") {if (randomNumber1 > randomNumber2) {$("#title").html(choice1 + "wins! 🏆");}

else if (randomNumber2 > randomNumber1) {$("#title").html(choice2 + "wins! 🏆");}

else if (randomNumber2 = randomNumber1){$("#title").html("Oops, try again!");}


}

})


var diceNumbers = []
