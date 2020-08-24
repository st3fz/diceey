// Responding to Dropdown Button
let links = document.querySelectorAll("#list li");
links.forEach((el) => {
  el.addEventListener("click", (event) => {
    let val = event.target.innerText;
    document.getElementById(
      "dropdownMenu"
    ).innerHTML = `${val}<span class="caret"></span>`;

    if (val === "2") { /* numberOfChoices changed to val */
      $("#img3, #img4, .threeChoices, .fourChoices").addClass("invisible");
    }
    if (val === "3") { /* numberOfChoices changed to val */
      $("#img4, .fourChoices").addClass("invisible");
      $("#img3, .threeChoices").removeClass("invisible");
    }
    if (val === "4") { /* numberOfChoices changed to val */
      $("#img3, #img4, .threeChoices, .fourChoices").removeClass("invisible");
    }
  });
});

// Responding to Submit
document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();

  // Storing Data into variables
  var choice1 = $("#choice1").val();
  var choice2 = $("#choice2").val();
  var choice3 = $("#choice3").val();
  var choice4 = $("#choice4").val();
  var noOfChoices = $("#dropdownMenu").text().trim(); /* adding .trim() here */

  // Rotate animation
  $(".dice").addClass("rotate");
  setTimeout(() => {
    $(".dice").removeClass("rotate");
  }, 1000);

  // Changing text to user input
  $("#caption1").html(choice1);
  $("#caption2").html(choice2);
  $("#caption3").html(choice3);
  $("#caption4").html(choice4);


  // Displaying no. of Captions that User Chose
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

  // Rolling Dice
  diceRoll();
});
