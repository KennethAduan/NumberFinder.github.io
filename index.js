document.getElementById("strBtn").onclick = function () {
  let numRandom = Math.floor(Math.random() * 9) + 1;
  var firstNum,
    secondNum,
    thirdNum,
    fourthNum,
    fifthNum,
    sixNum,
    sevenNum,
    eightNum,
    nineNum;
  let count = 0;

  document.getElementById("first1").onclick = function () {
    firstNum = document.getElementById("first1").value;
    if (numRandom == firstNum) {
      count++;
      firstNum = document.getElementById("first1").style.color = "gray";
      document.getElementById("result").innerHTML =
        "Correct! " + count + " attempt(s)";
      alert("CONGRATS! YOU MUST CLICK RESET BUTTON TO PLAY AGAIN");
    } else {
      document.getElementById("result").innerHTML = "SORRY TRY AGAIN!";
      count++;
      firstNum = document.getElementById("first1").style.color = "red";
    }
  };

  document.getElementById("second2").onclick = function () {
    secondNum = document.getElementById("second2").value;

    if (numRandom == secondNum) {
      count++;
      firstNum = document.getElementById("second2").style.color = "gray";
      document.getElementById("result").innerHTML =
        "Correct! " + count + " attempt(s)";
      alert("CONGRATS! YOU MUST CLICK RESET BUTTON TO PLAY AGAIN");
    } else {
      document.getElementById("result").innerHTML = "SORRY TRY AGAIN!";
      count++;
      firstNum = document.getElementById("second2").style.color = "red";
    }
  };

  document.getElementById("third3").onclick = function () {
    thirdNum = document.getElementById("third3").value;

    if (numRandom == thirdNum) {
      count++;
      firstNum = document.getElementById("third3").style.color = "gray";
      document.getElementById("result").innerHTML =
        "Correct! " + count + " attempt(s)";
      alert("CONGRATS! YOU MUST CLICK RESET BUTTON TO PLAY AGAIN");
    } else {
      document.getElementById("result").innerHTML = "SORRY TRY AGAIN!";
      count++;
      firstNum = document.getElementById("third3").style.color = "red";
    }
  };

  document.getElementById("fourth4").onclick = function () {
    fourthNum = document.getElementById("fourth4").value;

    if (numRandom == fourthNum) {
      count++;
      firstNum = document.getElementById("fourth4").style.color = "gray";
      document.getElementById("result").innerHTML =
        "Correct! " + count + " attempt(s)";
      alert("CONGRATS! YOU MUST CLICK RESET BUTTON TO PLAY AGAIN");
    } else {
      document.getElementById("result").innerHTML = "SORRY TRY AGAIN!";
      count++;
      firstNum = document.getElementById("fourth4").style.color = "red";
    }
  };

  document.getElementById("fifth5").onclick = function () {
    fifthNum = document.getElementById("fifth5").value;
    if (numRandom == fifthNum) {
      count++;
      firstNum = document.getElementById("fifth5").style.color = "gray";
      document.getElementById("result").innerHTML =
        "Correct! " + count + " attempt(s)";
      alert("CONGRATS! YOU MUST CLICK RESET BUTTON TO PLAY AGAIN");
    } else {
      document.getElementById("result").innerHTML = "SORRY TRY AGAIN!";
      count++;
      firstNum = document.getElementById("fifth5").style.color = "red";
    }
  };
  document.getElementById("six6").onclick = function () {
    sixNum = document.getElementById("six6").value;

    if (numRandom == sixNum) {
      count++;
      firstNum = document.getElementById("six6").style.color = "gray";
      document.getElementById("result").innerHTML =
        "Correct! " + count + " attempt(s)";
      alert("CONGRATS! YOU MUST CLICK RESET BUTTON TO PLAY AGAIN");
    } else {
      document.getElementById("result").innerHTML = "SORRY TRY AGAIN!";
      count++;
      firstNum = document.getElementById("six6").style.color = "red";
    }
  };
  document.getElementById("seven7").onclick = function () {
    sevenNum = document.getElementById("seven7").value;
    if (numRandom == sevenNum) {
      count++;
      firstNum = document.getElementById("seven7").style.color = "gray";
      document.getElementById("result").innerHTML =
        "Correct! " + count + " attempt(s)";
      alert("CONGRATS! YOU MUST CLICK RESET BUTTON TO PLAY AGAIN");
    } else {
      document.getElementById("result").innerHTML = "SORRY TRY AGAIN!";
      count++;
      firstNum = document.getElementById("seven7").style.color = "red";
    }
  };
  document.getElementById("eight8").onclick = function () {
    eightNum = document.getElementById("eight8").value;

    if (numRandom == eightNum) {
      count++;
      firstNum = document.getElementById("eight8").style.color = "gray";
      document.getElementById("result").innerHTML =
        "Correct! " + count + " attempt(s)";
      alert("CONGRATS! YOU MUST CLICK RESET BUTTON TO PLAY AGAIN");
    } else {
      document.getElementById("result").innerHTML = "SORRY TRY AGAIN!";
      count++;
      firstNum = document.getElementById("eight8").style.color = "red";
    }
  };
  document.getElementById("nine9").onclick = function () {
    nineNum = document.getElementById("nine9").value;

    if (numRandom == nineNum) {
      count++;
      firstNum = document.getElementById("nine9").style.color = "gray";
      document.getElementById("result").innerHTML =
        "Correct! " + count + " attempt(s)";
      alert("CONGRATS! YOU MUST CLICK RESET BUTTON TO PLAY AGAIN");
    } else {
      document.getElementById("result").innerHTML = "SORRY TRY AGAIN!";
      count++;
      firstNum = document.getElementById("nine9").style.color = "red";
    }
  };
  console.log("Random Number: " + numRandom);
};

document.getElementById("rstBtn").onclick = function () {
  window.location.reload();
};
