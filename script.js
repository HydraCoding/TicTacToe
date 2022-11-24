let player = 0;
let fields = [];
let player0 = [];
let player1 = [];
let counter = 0;
let stripes = [];

let winner_numbers = [
  {
    number0: "[0,1,2]",
    number1: "[0,4,8]",
    number2: "[0,3,6]",
    number3: "[1,4,7]",
    number4: "[2,5,8]",
    number5: "[6,4,2]",
    number6: "[3,4,5]",
    number7: "[6,7,8]",
  },
];
let winner_stripes = [
  {
    class0: "stripe0",
    class1: "stripe1",
    class2: "stripe2",
    class3: "stripe3",
    class4: "stripe4",
    class5: "stripe5",
    class6: "stripe6",
    class7: "stripe7",
  },
];

function addMark(position) {
  if (player == 0) {
    addX(position);
    selectedPlayer();
  } else {
    addCircle(position);
    selectedPlayer();
  }
}

function addX(position) {
  document.getElementById(
    position
  ).innerHTML = `<img src="img/x.png" class="pic">`;
  player = 1;
}

function addCircle(position) {
  document.getElementById(
    position
  ).innerHTML = `<img src="img/circle.png" class="pic">`;
  player = 0;
}

function getField(position) {
  let field = position.slice(-1);
  fieldChecker(field, position);
}

function fieldChecker(field, position) {
  if (fields.includes(field)) {
    changeBackground(position);
    setTimeout(changeBackground, 1000, position);
  } else {
    fields.push(field);
    addMark(position);
    playersNumber(field);
  }
}

function changeBackground(position) {
  document.getElementById(position).classList.toggle("red-background");
}

function blockInput() {
  setTimeout(hoverGray, 300);
  hoverGray();
}

function hoverGray() {
  document.getElementById("body").classList.toggle("hover-body");
}

function theWinnerIs() {
  if (player0.length > 2) {
    checkPlayer0();
  }
  checkPlayer1();
}

function checkPlayer0() {
  activateDraw();
  for (let j = 0; j < winner_numbers[0]["number0"].length + 1; j++) {
    let num = winner_numbers[0]["number" + j];
    checkPlayer0Insight(num, j);
    if (counter < 3) {
      counter = 0;
    } else if (counter == 3) break;
  }
}

function checkPlayer0Insight(num, j) {
  for (let i = 0; i < player0.length; i++) {
    a = player0[i];

    if (num.includes(a)) {
      counter++;
    }

    if (counter == 3) {
      stripes = j;
      console.log("stripes is :" + stripes);
      activateStripe(stripes);
      winner(player);
    }
  }
}

function checkPlayer1() {
  activateDraw();
  for (let j = 0; j < winner_numbers[0]["number0"].length + 1; j++) {
    let num = winner_numbers[0]["number" + j];
    checkPlayer1Insight(num, j);
    if (counter < 3) {
      counter = 0;
    } else if (counter == 3) break;
  }
}

function checkPlayer1Insight(num, j) {
  for (let i = 0; i < player1.length; i++) {
    a = player1[i];

    if (num.includes(a)) {
      counter++;
    }

    if (counter == 3) {
      stripes = j;
      console.log("stripes is :" + stripes);
      activateStripe(stripes);
      winner(player);
    }
  }
}

function playersNumber(field) {
  let field_as_number = Number(field);
  if (player == 0) {
    player0.push(field_as_number);
    theWinnerIs();
  } else {
    player1.push(field_as_number);
    theWinnerIs();
  }
}

function winner(player) {
  if (player == 1) {
    document.getElementById("h1").innerHTML = "X";
    document.getElementById("win").classList.remove("d-none");
  } else {
    document.getElementById("h1").innerHTML = "O";
    document.getElementById("win").classList.remove("d-none");
  }
}

function draw() {
  document.getElementById("h1").innerHTML = "Keiner";
  document.getElementById("win").classList.remove("d-none");
}

function activateDraw() {
  if (player1.length == 5) {
    draw();
  }
}

function activateStripe(stripes) {
  document.getElementById("change-stripe").classList.remove("d-none");
  document.getElementById("change-stripe").classList.add("stripe" + stripes);
}

function selectedPlayer() {
  document.getElementById("playerX").classList.toggle("player-background");
  document.getElementById("playerO").classList.toggle("player-background");
}
