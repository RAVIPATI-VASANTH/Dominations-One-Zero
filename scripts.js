var cards0 = [
  "Save Right",
  "Save Left",
  "Save Top",
  "Save Bottom",
  "Delete Right",
  "Delete Left",
  "Delete Top",
  "Delete Bottom",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Print Right",
  "Print Left",
  "Print Top",
  "Print Bottom",
  "Enter Top",
  "Enter Bottom",
  "If 1 Then 0 Right",
  "If 1 Then 0 Left",
  "If 1 Then 0 Top",
  "If 1 Then 0 Bottom",
];
var card0 = [];
var cards1 = [
  "Save Right",
  "Save Left",
  "Save Top",
  "Save Bottom",
  "Delete Right",
  "Delete Left",
  "Delete Top",
  "Delete Bottom",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Print Right",
  "Print Left",
  "Print Top",
  "Print Bottom",
  "Enter Top",
  "Enter Bottom",
  "If 0 Then 1 Right",
  "If 0 Then 1 Left",
  "If 0 Then 1 Top",
  "If 0 Then 1 Bottom",
];
var card1 = [];
var i = 0;
var k = 22;
var cs = "";
var csid = "";
var player = "";
var playboard = new Array(5);
var savedcards = new Array(5);
var f = "";
var r = 0;
var domination_array = new Array(5);
for (var i = 0; i < 5; i++) {
  playboard[i] = new Array(6);
  savedcards[i] = new Array(5);
  domination_array[i] = "";
}
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 6; j++) {
    if (j == 5) playboard[i][j] = 0;
    else {
      playboard[i][j] = "";
      savedcards[i][j] = 0;
    }
  }
}
var playerchance = ["Zero", "One"];
var chance = "";

var game_music;
function byload() {
  game_music = new sound("Domination_game_sound.mp3");
  game_music.play();
  for (i = 0; i < 3; i++) {
    var x = Math.floor(Math.random() * k);
    document.getElementById("c0" + (i + 1)).innerHTML = cards0[x];
    cards0.splice(x, 1);
    k = k - 1;
  }
  k = 22;
  for (i = 0; i < 3; i++) {
    var x = Math.floor(Math.random() * k);
    document.getElementById("c1" + (i + 1)).innerHTML = cards1[x];
    cards1.splice(x, 1);
    k = k - 1;
  }
  chance = playerchance[Math.floor(Math.random() * 2 + 0)];
  if (chance == "Zero") {
    document.getElementById("chance").style.backgroundColor = "#EEFC04";
    document.getElementById("c11").style.pointerEvents = "none";
    document.getElementById("c12").style.pointerEvents = "none";
    document.getElementById("c13").style.pointerEvents = "none";
  }
  if (chance == "One") {
    document.getElementById("chance").style.backgroundColor = "#1CFC04";
    document.getElementById("c01").style.pointerEvents = "none";
    document.getElementById("c02").style.pointerEvents = "none";
    document.getElementById("c03").style.pointerEvents = "none";
  }
  document.getElementById("chance").innerHTML = chance;
  var i = 0;
  var x = setInterval(function () {
    var k = 15 - i;
    document.getElementById("timer").innerHTML = k;
    if (f == "0") {
      f = "";
      i = -1;
      document.getElementById("c01").style.pointerEvents = "none";
      document.getElementById("c02").style.pointerEvents = "none";
      document.getElementById("c03").style.pointerEvents = "none";
      document.getElementById("c11").style.pointerEvents = "auto";
      document.getElementById("c12").style.pointerEvents = "auto";
      document.getElementById("c13").style.pointerEvents = "auto";
      document.getElementById("chance").innerHTML = "One";
      document.getElementById("chance").style.backgroundColor = "#1CFC04";
    }
    if (f == "1") {
      f = "";
      i = -1;
      document.getElementById("c11").style.pointerEvents = "none";
      document.getElementById("c12").style.pointerEvents = "none";
      document.getElementById("c13").style.pointerEvents = "none";
      document.getElementById("c01").style.pointerEvents = "auto";
      document.getElementById("c02").style.pointerEvents = "auto";
      document.getElementById("c03").style.pointerEvents = "auto";
      document.getElementById("chance").innerHTML = "Zero";
      document.getElementById("chance").style.backgroundColor = "#EEFC04";
    }
    if (k == 0) {
      i = -1;

      if (chance == "Zero") {
        document.getElementById("c01").style.pointerEvents = "none";
        document.getElementById("c02").style.pointerEvents = "none";
        document.getElementById("c03").style.pointerEvents = "none";
        document.getElementById("c11").style.pointerEvents = "auto";
        document.getElementById("c12").style.pointerEvents = "auto";
        document.getElementById("c13").style.pointerEvents = "auto";
        document.getElementById("chance").style.backgroundColor = "#1CFC04";
        chance = "one";
      } else {
        document.getElementById("c11").style.pointerEvents = "none";
        document.getElementById("c12").style.pointerEvents = "none";
        document.getElementById("c13").style.pointerEvents = "none";
        document.getElementById("c01").style.pointerEvents = "auto";
        document.getElementById("c02").style.pointerEvents = "auto";
        document.getElementById("c03").style.pointerEvents = "auto";
        document.getElementById("chance").style.backgroundColor = "#EEFC04";
        chance = "Zero";
      }
      document.getElementById("chance").innerHTML = chance;
    }
    if (r == 1) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "00";
    }
    i++;
  }, 1000);
}
function cardselected(card, p) {
  csid = card;
  cs = document.getElementById(card).textContent;
  document.getElementById("test1").innerHTML = cs;
  player = p;
}
function insert(pos) {
  var t = 0;
  if (cs == "Blank") t = Blank(pos);
  if (cs == "Delete Right") t = Delete_Right(pos);
  if (cs == "Delete Left") t = Delete_Left(pos);
  if (cs == "Delete Top") t = Delete_Top(pos);
  if (cs == "Delete Bottom") t = Delete_Bottom(pos);
  if (cs == "Print Right") t = Print_Right(pos);
  if (cs == "Print Left") t = Print_Left(pos);
  if (cs == "Print Top") t = Print_Top(pos);
  if (cs == "Print Bottom") t = Print_Bottom(pos);
  if (cs == "If 1 Then 0 Right" || cs == "If 0 Then 1 Right")
    t = If_x_Then_y_Right(pos);
  if (cs == "If 1 Then 0 Left" || cs == "If 0 Then 1 Left")
    t = If_x_Then_y_Left(pos);
  if (cs == "If 1 Then 0 Top" || cs == "If 0 Then 1 Top")
    t = If_x_Then_y_Top(pos);
  if (cs == "If 1 Then 0 Bottom" || cs == "If 0 Then 1 Bottom")
    t = If_x_Then_y_Bottom(pos);
  if (cs == "Enter Top") t = Enter_Top(pos);
  if (cs == "Enter Bottom") t = Enter_Bottom(pos);
  if (cs == "Save Top") t = Save_Top(pos);
  if (cs == "Save Bottom") t = Save_Bottom(pos);
  if (cs == "Save Right") t = Save_Right(pos);
  if (cs == "Save Left") t = Save_Left(pos);
  color_domination();
  if (playboard[4][2] != "") run_result();
  /*var t = "";
	for(var i=0;i<5;i++)
	{
		for(var j=0;j<6;j++)
		{
			if(playboard[i][j] == "")
				t += "#" + " ";
			else
				t+=playboard[i][j].toString()+" ";
		}
		t+="<br>"
	}

	document.getElementById("test1").innerHTML=t;*/
  if (player == "0" && t == 1) {
    card0.push(cs);
    document.getElementById(csid).innerHTML = "";
    if (cards0.length != 0) {
      var x = Math.floor(Math.random() * cards0.length);
      document.getElementById(csid).innerHTML = cards0[x];
      card0.push(cards0[x]);
      cards0.splice(x, 1);
    } else {
      cards0 = Array.from(card0);
      card0.splice(0, card0.length);
      var x = Math.floor(Math.random() * cards0.length);
      document.getElementById(csid).innerHTML = cards0[x];
      card0.push(cards0[x]);
      cards0.splice(x, 1);
    }
    f = "0";
    player = "";
  }
  if (player == "1" && t == 1) {
    card1.push(cs);
    document.getElementById(csid).innerHTML = "";
    if (cards1.length != 0) {
      var x = Math.floor(Math.random() * cards1.length);
      document.getElementById(csid).innerHTML = cards1[x];
      card1.push(cards1[x]);
      cards1.splice(x, 1);
    } else {
      cards1 = Array.from(card1);
      card1.splice(0, card1.length);
      var x = Math.floor(Math.random() * cards1.length);
      document.getElementById(csid).innerHTML = cards1[x];
      card1.push(cards1[x]);
      cards1.splice(x, 1);
    }
    f = "1";
    player = "";
  }
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
}

function color_domination() {
  for (var i = 0; i < 5; i++) {
    var count0 = 0;
    var count1 = 0;
    for (var j = 0; j < 5; j++) {
      if (j < 5 && playboard[i][j] == "0") {
        count0 += 1;
      }
      if (j < 5 && playboard[i][j] == "1") {
        count1 += 1;
      }
    }
    if (count0 > count1) {
      document.getElementById("d" + (i + 1)).style.backgroundColor = "#EEFC04";
      domination_array[i] = "0";
    } else if (count0 < count1) {
      document.getElementById("d" + (i + 1)).style.backgroundColor = "#1CFC04";
      domination_array[i] = "1";
    } else {
      document.getElementById("d" + (i + 1)).style.backgroundColor = "#ffffff";
      domination_array[i] = "";
    }
  }
}

function run_result() {
  r = 1;
  document.getElementById("c01").style.pointerEvents = "none";
  document.getElementById("c02").style.pointerEvents = "none";
  document.getElementById("c03").style.pointerEvents = "none";
  document.getElementById("c11").style.pointerEvents = "none";
  document.getElementById("c12").style.pointerEvents = "none";
  document.getElementById("c13").style.pointerEvents = "none";
  // document.getElementById("test1").innerHTML+="hello";
  var zero_domination = 0;
  var one_domination = 0;
  for (var i = 0; i < 5; i++) {
    if (domination_array[i] == "0") {
      zero_domination = zero_domination + (i + 1) * 10;
    }
    if (domination_array[i] == "1") {
      one_domination = one_domination + (i + 1) * 10;
    }
  }
  if (one_domination < zero_domination) {
    document.getElementById("test1").innerHTML =
      "Zero dominated the board with " + zero_domination;
  }
  if (one_domination > zero_domination) {
    document.getElementById("test1").innerHTML =
      "One dominated the board with " + one_domination;
  }
}

function Blank(pos) {
  var x = document.getElementById(pos).textContent;
  var i = parseInt(pos[1]);
  var j = parseInt(pos[2]);
  if (i == 0 && x == "" && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    return 1;
  }
  if (i == 1 && x == "" && playboard[0][5] >= 3 && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    return 1;
  }
  if (
    i == 2 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    return 1;
  }
  if (
    i == 3 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    return 1;
  }
  if (
    i == 4 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    playboard[3][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    return 1;
  }
  return 0;
}

function Delete_Right(pos) {
  var x = document.getElementById(pos).textContent;
  var i = parseInt(pos[1]);
  var j = parseInt(pos[2]);
  if (i == 0 && x == "" && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      j < 4 &&
      playboard[0][j + 1] != player &&
      playboard[0][j + 1] != "" &&
      savedcards[i][j + 1] != 1
    ) {
      playboard[0][j + 1] = "";
      document.getElementById(pos[0] + i + "" + (j + 1)).style.backgroundColor =
        "#ffffff";
      document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = "";
      playboard[i][5] -= 1;
      color_domination();
    }
    return 1;
  }
  if (i == 1 && x == "" && playboard[0][5] >= 3 && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      j < 4 &&
      playboard[1][j + 1] != player &&
      playboard[1][j + 1] != "" &&
      savedcards[i][j + 1] != 1
    ) {
      playboard[1][j + 1] = "";
      document.getElementById(pos[0] + i + "" + (j + 1)).style.backgroundColor =
        "#ffffff";
      document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = "";
      playboard[i][5] -= 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 2 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      j < 4 &&
      playboard[2][j + 1] != player &&
      playboard[2][j + 1] != "" &&
      savedcards[i][j + 1] != 1
    ) {
      playboard[2][j + 1] = "";
      document.getElementById(pos[0] + i + "" + (j + 1)).style.backgroundColor =
        "#ffffff";
      document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = "";
      playboard[i][5] -= 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 3 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      j < 4 &&
      playboard[3][j + 1] != player &&
      playboard[3][j + 1] != "" &&
      savedcards[i][j + 1] != 1
    ) {
      playboard[3][j + 1] = "";
      document.getElementById(pos[0] + i + "" + (j + 1)).style.backgroundColor =
        "#ffffff";
      document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = "";
      playboard[i][5] -= 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 4 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    playboard[3][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      j < 2 &&
      playboard[4][j + 1] != player &&
      playboard[4][j + 1] != "" &&
      savedcards[i][j + 1] != 1
    ) {
      playboard[4][j + 1] = "";
      document.getElementById(pos[0] + i + "" + (j + 1)).style.backgroundColor =
        "#ffffff";
      document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = "";
      playboard[i][5] -= 1;
      color_domination();
    }
    return 1;
  }
  return 0;
}
function Delete_Left(pos) {
  var x = document.getElementById(pos).textContent;
  var i = parseInt(pos[1]);
  var j = parseInt(pos[2]);
  if (i == 0 && x == "" && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      j > 0 &&
      playboard[0][j - 1] != player &&
      playboard[0][j - 1] != "" &&
      savedcards[i][j - 1] != 1
    ) {
      playboard[0][j - 1] = "";
      document.getElementById(pos[0] + i + "" + (j - 1)).style.backgroundColor =
        "#ffffff";
      document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = "";
      playboard[i][5] -= 1;
      color_domination();
    }
    return 1;
  }
  if (i == 1 && x == "" && playboard[0][5] >= 3 && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      j > 0 &&
      playboard[1][j - 1] != player &&
      playboard[1][j - 1] != "" &&
      savedcards[i][j - 1] != 1
    ) {
      playboard[1][j - 1] = "";
      document.getElementById(pos[0] + i + "" + (j - 1)).style.backgroundColor =
        "#ffffff";
      document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = "";
      playboard[i][5] -= 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 2 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      j > 0 &&
      playboard[2][j - 1] != player &&
      playboard[2][j - 1] != "" &&
      savedcards[i][j - 1] != 1
    ) {
      playboard[2][j - 1] = "";
      document.getElementById(pos[0] + i + "" + (j - 1)).style.backgroundColor =
        "#ffffff";
      document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = "";
      playboard[i][5] -= 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 3 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      j > 0 &&
      playboard[3][j - 1] != player &&
      playboard[3][j - 1] != "" &&
      savedcards[i][j - 1] != 1
    ) {
      playboard[3][j - 1] = "";
      document.getElementById(pos[0] + i + "" + (j - 1)).style.backgroundColor =
        "#ffffff";
      document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = "";
      playboard[i][5] -= 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 4 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    playboard[3][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      j > 0 &&
      playboard[4][j - 1] != player &&
      playboard[4][j - 1] != "" &&
      savedcards[i][j - 1] != 1
    ) {
      playboard[4][j - 1] = "";
      document.getElementById(pos[0] + i + "" + (j - 1)).style.backgroundColor =
        "#ffffff";
      document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = "";
      playboard[i][5] -= 1;
      color_domination();
    }
    return 1;
  }
  return 0;
}
function Delete_Top(pos) {
  var x = document.getElementById(pos).textContent;
  var i = parseInt(pos[1]);
  var j = parseInt(pos[2]);
  if (i == 0 && x == "" && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    return 1;
  }
  if (i == 1 && x == "" && playboard[0][5] >= 3 && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      playboard[0][j] != player &&
      playboard[0][j] != "" &&
      savedcards[i - 1][j] != 1
    ) {
      playboard[0][j] = "";
      document.getElementById(pos[0] + (i - 1) + "" + j).style.backgroundColor =
        "#ffffff";
      document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = "";
      playboard[i - 1][5] -= 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 2 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      playboard[1][j] != player &&
      playboard[1][j] != "" &&
      savedcards[i - 1][j] != 1
    ) {
      playboard[1][j] = "";
      document.getElementById(pos[0] + (i - 1) + "" + j).style.backgroundColor =
        "#ffffff";
      document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = "";
      playboard[i - 1][5] -= 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 3 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      playboard[2][j] != player &&
      playboard[2][j] != "" &&
      savedcards[i - 1][j] != 1
    ) {
      playboard[2][j] = "";
      document.getElementById(pos[0] + (i - 1) + "" + j).style.backgroundColor =
        "#ffffff";
      document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = "";
      playboard[i - 1][5] -= 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 4 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    playboard[3][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      playboard[3][j] != player &&
      playboard[3][j] != "" &&
      savedcards[i - 1][j] != 1
    ) {
      playboard[3][j] = "";
      document.getElementById(pos[0] + (i - 1) + "" + j).style.backgroundColor =
        "#ffffff";
      document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = "";
      playboard[i - 1][5] -= 1;
      color_domination();
    }
    return 1;
  }
  return 0;
}
function Delete_Bottom(pos) {
  var x = document.getElementById(pos).textContent;
  var i = parseInt(pos[1]);
  var j = parseInt(pos[2]);
  if (i == 0 && x == "" && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      playboard[1][j] != player &&
      playboard[1][j] != "" &&
      savedcards[i + 1][j] != 1
    ) {
      playboard[1][j] = "";
      document.getElementById(
        pos[0] + "" + (i + 1) + "" + j
      ).style.backgroundColor = "#ffffff";
      document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML = "";
      playboard[i + 1][5] -= 1;
      color_domination();
    }
    return 1;
  }
  if (i == 1 && x == "" && playboard[0][5] >= 3 && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      playboard[2][j] != player &&
      playboard[2][j] != "" &&
      savedcards[i + 1][j] != 1
    ) {
      playboard[2][j] = "";
      document.getElementById(
        pos[0] + "" + (i + 1) + "" + j
      ).style.backgroundColor = "#ffffff";
      document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML = "";
      playboard[i + 1][5] -= 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 2 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      playboard[3][j] != player &&
      playboard[3][j] != "" &&
      savedcards[i + 1][j] != 1
    ) {
      playboard[3][j] = "";
      document.getElementById(
        pos[0] + "" + (i + 1) + "" + j
      ).style.backgroundColor = "#ffffff";
      document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML = "";
      playboard[i + 1][5] -= 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 3 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      playboard[4][j] != player &&
      playboard[4][j] != "" &&
      savedcards[i + 1][j] != 1
    ) {
      playboard[4][j] = "";
      document.getElementById(
        pos[0] + "" + (i + 1) + "" + j
      ).style.backgroundColor = "#ffffff";
      document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML = "";
      playboard[i + 1][5] -= 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 4 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    playboard[3][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    return 1;
  }
  return 0;
}
function Print_Right(pos) {
  var x = document.getElementById(pos).textContent;
  var i = parseInt(pos[1]);
  var j = parseInt(pos[2]);
  if (i == 0 && x == "" && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j < 4 && playboard[0][j + 1] == "") {
      playboard[0][j + 1] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + i + "" + (j + 1)
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + i + "" + (j + 1)
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = player;
      }
      playboard[i][5] += 1;
      color_domination();
    }
    return 1;
  }
  if (i == 1 && x == "" && playboard[0][5] >= 3 && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j < 4 && playboard[1][j + 1] == "") {
      playboard[1][j + 1] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + i + "" + (j + 1)
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + i + "" + (j + 1)
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = player;
      }
      playboard[i][5] += 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 2 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j < 4 && playboard[2][j + 1] == "") {
      playboard[2][j + 1] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + i + "" + (j + 1)
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + i + "" + (j + 1)
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = player;
      }
      playboard[i][5] += 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 3 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j < 4 && playboard[3][j + 1] == "") {
      playboard[3][j + 1] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + i + "" + (j + 1)
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + i + "" + (j + 1)
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = player;
      }
      playboard[i][5] += 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 4 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    playboard[3][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j < 2 && playboard[4][j + 1] == "") {
      playboard[4][j + 1] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + i + "" + (j + 1)
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + i + "" + (j + 1)
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = player;
      }
      playboard[i][5] += 1;
      color_domination();
    }
    return 1;
  }
  return 0;
}

function Print_Left(pos) {
  var x = document.getElementById(pos).textContent;
  var i = parseInt(pos[1]);
  var j = parseInt(pos[2]);
  if (i == 0 && x == "" && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j > 0 && playboard[0][j - 1] == "") {
      playboard[0][j - 1] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + i + "" + (j - 1)
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + i + "" + (j - 1)
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = player;
      }
      playboard[i][5] += 1;
      color_domination();
    }
    return 1;
  }
  if (i == 1 && x == "" && playboard[0][5] >= 3 && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j > 0 && playboard[1][j - 1] == "") {
      playboard[1][j - 1] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + i + "" + (j - 1)
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + i + "" + (j - 1)
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = player;
      }
      playboard[i][5] += 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 2 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j > 0 && playboard[2][j - 1] == "") {
      playboard[2][j - 1] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + i + "" + (j - 1)
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + i + "" + (j - 1)
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = player;
      }
      playboard[i][5] += 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 3 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j > 0 && playboard[3][j - 1] == "") {
      playboard[3][j - 1] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + i + "" + (j - 1)
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + i + "" + (j - 1)
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = player;
      }
      playboard[i][5] += 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 4 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    playboard[3][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j > 0 && playboard[4][j - 1] == "") {
      playboard[4][j - 1] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + i + "" + (j - 1)
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + i + "" + (j - 1)
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = player;
      }
      playboard[i][5] += 1;
      color_domination();
    }
    return 1;
  }
  return 0;
}
function Print_Top(pos) {
  var x = document.getElementById(pos).textContent;
  var i = parseInt(pos[1]);
  var j = parseInt(pos[2]);
  if (i == 0 && x == "" && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    return 1;
  }
  if (i == 1 && x == "" && playboard[0][5] >= 3 && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (playboard[0][j] == "") {
      playboard[0][j] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + (i - 1) + "" + j
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + (i - 1) + "" + j
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = player;
      }
      playboard[i - 1][5] += 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 2 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (playboard[1][j] == "") {
      playboard[1][j] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + (i - 1) + "" + j
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + (i - 1) + "" + j
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = player;
      }
      playboard[i - 1][5] += 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 3 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (playboard[2][j] == "") {
      playboard[2][j] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + (i - 1) + "" + j
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + (i - 1) + "" + j
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = player;
      }
      playboard[i - 1][5] += 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 4 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    playboard[3][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (playboard[3][j] == "") {
      playboard[3][j] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + (i - 1) + "" + j
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + (i - 1) + "" + j
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = player;
      }
      playboard[i - 1][5] += 1;
      color_domination();
    }
    return 1;
  }
  return 0;
}
function Print_Bottom(pos) {
  var x = document.getElementById(pos).textContent;
  var i = parseInt(pos[1]);
  var j = parseInt(pos[2]);
  if (i == 0 && x == "" && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (playboard[1][j] == "" && playboard[0][5] >= 3) {
      playboard[1][j] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + "" + (i + 1) + "" + j
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML =
          player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + "" + (i + 1) + "" + j
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML =
          player;
      }
      playboard[i + 1][5] += 1;
      color_domination();
    }
    return 1;
  }
  if (i == 1 && x == "" && playboard[0][5] >= 3 && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (playboard[2][j] == "" && playboard[1][5] >= 3) {
      playboard[2][j] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + "" + (i + 1) + "" + j
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML =
          player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + "" + (i + 1) + "" + j
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML =
          player;
      }
      playboard[i + 1][5] += 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 2 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (playboard[3][j] == "" && playboard[2][5] >= 3) {
      playboard[3][j] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + "" + (i + 1) + "" + j
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML =
          player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + "" + (i + 1) + "" + j
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML =
          player;
      }
      playboard[i + 1][5] += 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 3 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j < 3 && playboard[4][j] == "" && playboard[3][5] >= 3) {
      playboard[4][j] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + "" + (i + 1) + "" + j
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML =
          player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + "" + (i + 1) + "" + j
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML =
          player;
      }
      playboard[i + 1][5] += 1;
      color_domination();
    }
    return 1;
  }
  if (
    i == 4 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    playboard[3][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    color_domination();
    return 1;
  }
  return 0;
}

function If_x_Then_y_Right(pos) {
  var x = document.getElementById(pos).textContent;
  var i = parseInt(pos[1]);
  var j = parseInt(pos[2]);
  if (i == 0 && x == "" && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      j < 4 &&
      playboard[0][j + 1] != player &&
      playboard[0][j + 1] != "" &&
      savedcards[i][j + 1] != 1
    ) {
      playboard[0][j + 1] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + i + "" + (j + 1)
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + i + "" + (j + 1)
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = player;
      }
    }
    return 1;
  }
  if (i == 1 && x == "" && playboard[0][5] >= 3 && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      j < 4 &&
      playboard[1][j + 1] != player &&
      playboard[1][j + 1] != "" &&
      savedcards[i][j + 1] != 1
    ) {
      playboard[1][j + 1] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + i + "" + (j + 1)
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + i + "" + (j + 1)
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = player;
      }
    }
    return 1;
  }
  if (
    i == 2 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      j < 4 &&
      playboard[2][j + 1] != player &&
      playboard[2][j + 1] != "" &&
      savedcards[i][j + 1] != 1
    ) {
      playboard[2][j + 1] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + i + "" + (j + 1)
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + i + "" + (j + 1)
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = player;
      }
    }
    return 1;
  }
  if (
    i == 3 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      j < 4 &&
      playboard[3][j + 1] != player &&
      playboard[3][j + 1] != "" &&
      savedcards[i][j + 1] != 1
    ) {
      playboard[3][j + 1] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + i + "" + (j + 1)
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + i + "" + (j + 1)
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = player;
      }
    }
    return 1;
  }
  if (
    i == 4 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    playboard[3][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      j < 2 &&
      playboard[4][j + 1] != player &&
      playboard[4][j + 1] != "" &&
      savedcards[i][j + 1] != 1
    ) {
      playboard[4][j + 1] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + i + "" + (j + 1)
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + i + "" + (j + 1)
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + i + "" + (j + 1)).innerHTML = player;
      }
    }
    return 1;
  }
  return 0;
}

function If_x_Then_y_Left(pos) {
  var x = document.getElementById(pos).textContent;
  var i = parseInt(pos[1]);
  var j = parseInt(pos[2]);
  if (i == 0 && x == "" && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      j > 0 &&
      playboard[0][j - 1] != player &&
      playboard[0][j - 1] != "" &&
      savedcards[i][j - 1] != 1
    ) {
      playboard[0][j - 1] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + i + "" + (j - 1)
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + i + "" + (j - 1)
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = player;
      }
    }
    return 1;
  }
  if (i == 1 && x == "" && playboard[0][5] >= 3 && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      j > 0 &&
      playboard[1][j - 1] != player &&
      playboard[1][j - 1] != "" &&
      savedcards[i][j - 1] != 1
    ) {
      playboard[1][j - 1] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + i + "" + (j - 1)
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + i + "" + (j - 1)
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = player;
      }
    }
    return 1;
  }
  if (
    i == 2 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      j > 0 &&
      playboard[2][j - 1] != player &&
      playboard[2][j - 1] != "" &&
      savedcards[i][j - 1] != 1
    ) {
      playboard[2][j - 1] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + i + "" + (j - 1)
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + i + "" + (j - 1)
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = player;
      }
    }
    return 1;
  }
  if (
    i == 3 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      j > 0 &&
      playboard[3][j - 1] != player &&
      playboard[3][j - 1] != "" &&
      savedcards[i][j - 1] != 1
    ) {
      playboard[3][j - 1] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + i + "" + (j - 1)
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + i + "" + (j - 1)
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = player;
      }
    }
    return 1;
  }
  if (
    i == 4 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    playboard[3][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      j > 0 &&
      playboard[4][j - 1] != player &&
      playboard[4][j - 1] != "" &&
      savedcards[i][j - 1] != 1
    ) {
      playboard[4][j - 1] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + i + "" + (j - 1)
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + i + "" + (j - 1)
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + i + "" + (j - 1)).innerHTML = player;
      }
    }
    return 1;
  }
  return 0;
}
function If_x_Then_y_Top(pos) {
  var x = document.getElementById(pos).textContent;
  var i = parseInt(pos[1]);
  var j = parseInt(pos[2]);
  if (i == 0 && x == "" && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    return 1;
  }
  if (i == 1 && x == "" && playboard[0][5] >= 3 && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      playboard[0][j] != player &&
      playboard[0][j] != "" &&
      savedcards[i - 1][j] != 1
    ) {
      playboard[0][j] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + (i - 1) + "" + j
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + (i - 1) + "" + j
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = player;
      }
    }
    return 1;
  }
  if (
    i == 2 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      playboard[1][j] != player &&
      playboard[1][j] != "" &&
      savedcards[i - 1][j] != 1
    ) {
      playboard[1][j] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + (i - 1) + "" + j
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + (i - 1) + "" + j
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = player;
      }
    }
    return 1;
  }
  if (
    i == 3 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      playboard[2][j] != player &&
      playboard[2][j] != "" &&
      savedcards[i - 1][j] != 1
    ) {
      playboard[2][j] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + (i - 1) + "" + j
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + (i - 1) + "" + j
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = player;
      }
    }
    return 1;
  }
  if (
    i == 4 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    playboard[3][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      playboard[3][j] != player &&
      playboard[3][j] != "" &&
      savedcards[i - 1][j] != 1
    ) {
      playboard[3][j] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + (i - 1) + "" + j
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + (i - 1) + "" + j
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = player;
      }
    }
    return 1;
  }
  return 0;
}
function If_x_Then_y_Bottom(pos) {
  var x = document.getElementById(pos).textContent;
  var i = parseInt(pos[1]);
  var j = parseInt(pos[2]);
  if (i == 0 && x == "" && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      playboard[1][j] != player &&
      playboard[1][j] != "" &&
      savedcards[i + 1][j] != 1
    ) {
      playboard[1][j] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + "" + (i + 1) + "" + j
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML =
          player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + "" + (i + 1) + "" + j
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML =
          player;
      }
    }
    return 1;
  }
  if (i == 1 && x == "" && playboard[0][5] >= 3 && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      playboard[2][j] != player &&
      playboard[2][j] != "" &&
      savedcards[i + 1][j] != 1
    ) {
      playboard[2][j] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + "" + (i + 1) + "" + j
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML =
          player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + "" + (i + 1) + "" + j
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML =
          player;
      }
    }
    return 1;
  }
  if (
    i == 2 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      playboard[3][j] != player &&
      playboard[3][j] != "" &&
      savedcards[i + 1][j] != 1
    ) {
      playboard[3][j] = player;
      if (player == "0") {
        document.getElementById(
          pos[0] + "" + (i + 1) + "" + j
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML =
          player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + "" + (i + 1) + "" + j
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML =
          player;
      }
    }
    return 1;
  }
  if (
    i == 3 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (
      playboard[4][j] != player &&
      playboard[4][j] != "" &&
      savedcards[i + 1][j] != 1
    ) {
      playboard[4][j] = player;
      {
        document.getElementById(
          pos[0] + "" + (i + 1) + "" + j
        ).style.backgroundColor = "#EEFC04";
        document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML =
          player;
      }
      if (player == "1") {
        document.getElementById(
          pos[0] + "" + (i + 1) + "" + j
        ).style.backgroundColor = "#1CFC04";
        document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML =
          player;
      }
    }
    return 1;
  }
  if (
    i == 4 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    playboard[3][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    return 1;
  }
  return 0;
}
function Enter_Top(pos) {
  var x = document.getElementById(pos).textContent;
  var i = parseInt(pos[1]);
  var j = parseInt(pos[2]);
  if (i == 0 && x == "" && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    return 1;
  }
  if (i == 1 && x == "" && playboard[0][5] >= 3 && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    var index = 0;
    if (playboard[0][j] != "" && savedcards[i - 1][j] != 1) {
      var value = playboard[0][j];
      playboard[0][j] = "";
      document.getElementById(pos[0] + (i - 1) + "" + j).style.backgroundColor =
        "#ffffff";
      document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = "";
      playboard[i - 1][5] -= 1;
      for (var k = j; k <= 4; k++) {
        if (playboard[i][k] == "") {
          index = k;
          if (value == "0") {
            document.getElementById(
              pos[0] + i + "" + index
            ).style.backgroundColor = "#EEFC04";
            document.getElementById(pos[0] + i + "" + index).innerHTML = value;
            playboard[i][index] = value;
          }
          if (value == "1") {
            document.getElementById(
              pos[0] + i + "" + index
            ).style.backgroundColor = "#1CFC04";
            document.getElementById(pos[0] + i + "" + index).innerHTML = value;
            playboard[i][index] = value;
          }
          playboard[i][5] += 1;
          color_domination();
          break;
        }
      }
    }
    return 1;
  }
  if (
    i == 2 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    var index = 0;
    if (playboard[1][j] != "" && savedcards[i - 1][j] != 1) {
      var value = playboard[1][j];
      playboard[1][j] = "";
      document.getElementById(pos[0] + (i - 1) + "" + j).style.backgroundColor =
        "#ffffff";
      document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = "";
      playboard[i - 1][5] -= 1;
      for (var k = j; k <= 4; k++) {
        if (playboard[i][k] == "") {
          index = k;
          if (value == "0") {
            document.getElementById(
              pos[0] + i + "" + index
            ).style.backgroundColor = "#EEFC04";
            document.getElementById(pos[0] + i + "" + index).innerHTML = value;
            playboard[i][index] = value;
          }
          if (value == "1") {
            document.getElementById(
              pos[0] + i + "" + index
            ).style.backgroundColor = "#1CFC04";
            document.getElementById(pos[0] + i + "" + index).innerHTML = value;
            playboard[i][index] = value;
          }
          playboard[i][5] += 1;
          color_domination();
          break;
        }
      }
    }
    return 1;
  }
  if (
    i == 3 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    var index = 0;
    if (playboard[2][j] != "" && savedcards[i - 1][j] != 1) {
      var value = playboard[2][j];
      playboard[2][j] = "";
      document.getElementById(pos[0] + (i - 1) + "" + j).style.backgroundColor =
        "#ffffff";
      document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = "";
      playboard[i - 1][5] -= 1;
      for (var k = j; k <= 4; k++) {
        if (playboard[i][k] == "") {
          index = k;
          if (value == "0") {
            document.getElementById(
              pos[0] + i + "" + index
            ).style.backgroundColor = "#EEFC04";
            document.getElementById(pos[0] + i + "" + index).innerHTML = value;
            playboard[i][index] = value;
          }
          if (value == "1") {
            document.getElementById(
              pos[0] + i + "" + index
            ).style.backgroundColor = "#1CFC04";
            document.getElementById(pos[0] + i + "" + index).innerHTML = value;
            playboard[i][index] = value;
          }
          playboard[i][5] += 1;
          color_domination();
          break;
        }
      }
    }
    return 1;
  }
  if (
    i == 4 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    playboard[3][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    var index = 0;
    if (playboard[3][j] != "" && savedcards[i - 1][j] != 1) {
      var value = playboard[3][j];
      playboard[3][j] = "";
      document.getElementById(pos[0] + (i - 1) + "" + j).style.backgroundColor =
        "#ffffff";
      document.getElementById(pos[0] + (i - 1) + "" + j).innerHTML = "";
      playboard[i - 1][5] -= 1;
      for (var k = j; k <= 4; k++) {
        if (playboard[i][k] == "") {
          index = k;
          if (value == "0") {
            document.getElementById(
              pos[0] + i + "" + index
            ).style.backgroundColor = "#EEFC04";
            document.getElementById(pos[0] + i + "" + index).innerHTML = value;
            playboard[i][index] = value;
          }
          if (value == "1") {
            document.getElementById(
              pos[0] + i + "" + index
            ).style.backgroundColor = "#1CFC04";
            document.getElementById(pos[0] + i + "" + index).innerHTML = value;
            playboard[i][index] = value;
          }
          playboard[i][5] += 1;
          color_domination();
          break;
        }
      }
    }
    return 1;
  }
  return 0;
}
function Enter_Bottom(pos) {
  var x = document.getElementById(pos).textContent;
  var i = parseInt(pos[1]);
  var j = parseInt(pos[2]);
  if (i == 0 && x == "" && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    var index = 0;
    if (playboard[1][j] != "" && savedcards[i + 1][j] != 1) {
      var value = playboard[1][j];
      playboard[1][j] = "";
      document.getElementById(
        pos[0] + "" + (i + 1) + "" + j
      ).style.backgroundColor = "#ffffff";
      document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML = "";
      playboard[i + 1][5] -= 1;
      for (var k = j + 1; k <= 4; k++) {
        if (playboard[i][k] == "") {
          index = k;
          if (value == "0") {
            document.getElementById(
              pos[0] + i + "" + index
            ).style.backgroundColor = "#EEFC04";
            document.getElementById(pos[0] + i + "" + index).innerHTML = value;
            playboard[i][index] = value;
          }
          if (value == "1") {
            document.getElementById(
              pos[0] + i + "" + index
            ).style.backgroundColor = "#1CFC04";
            document.getElementById(pos[0] + i + "" + index).innerHTML = value;
            playboard[i][index] = value;
          }
          playboard[i][5] += 1;
          color_domination();
          break;
        }
      }
    }
    return 1;
  }
  if (i == 1 && x == "" && playboard[0][5] >= 3 && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    var index = 0;
    if (playboard[2][j] != "" && savedcards[i + 1][j] != 1) {
      var value = playboard[2][j];
      playboard[2][j] = "";
      document.getElementById(
        pos[0] + "" + (i + 1) + "" + j
      ).style.backgroundColor = "#ffffff";
      document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML = "";
      playboard[i + 1][5] -= 1;
      for (var k = j; k <= 4; k++) {
        if (playboard[i][k] == "") {
          index = k;
          if (value == "0") {
            document.getElementById(
              pos[0] + i + "" + index
            ).style.backgroundColor = "#EEFC04";
            document.getElementById(pos[0] + i + "" + index).innerHTML = value;
            playboard[i][index] = value;
          }
          if (value == "1") {
            document.getElementById(
              pos[0] + i + "" + index
            ).style.backgroundColor = "#1CFC04";
            document.getElementById(pos[0] + i + "" + index).innerHTML = value;
            playboard[i][index] = value;
          }
          playboard[i][5] += 1;
          color_domination();
          break;
        }
      }
    }
    return 1;
  }
  if (
    i == 2 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    var index = 0;
    if (playboard[3][j] != "" && savedcards[i + 1][j] != 1) {
      var value = playboard[3][j];
      playboard[3][j] = "";
      document.getElementById(
        pos[0] + "" + (i + 1) + "" + j
      ).style.backgroundColor = "#ffffff";
      document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML = "";
      playboard[i + 1][5] -= 1;
      for (var k = j; k <= 4; k++) {
        if (playboard[i][k] == "") {
          index = k;
          if (value == "0") {
            document.getElementById(
              pos[0] + i + "" + index
            ).style.backgroundColor = "#EEFC04";
            document.getElementById(pos[0] + i + "" + index).innerHTML = value;
            playboard[i][index] = value;
          }
          if (value == "1") {
            document.getElementById(
              pos[0] + i + "" + index
            ).style.backgroundColor = "#1CFC04";
            document.getElementById(pos[0] + i + "" + index).innerHTML = value;
            playboard[i][index] = value;
          }
          playboard[i][5] += 1;
          color_domination();
          break;
        }
      }
    }
    return 1;
  }
  if (
    i == 3 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    var index = 0;
    if (j < 3 && playboard[4][j] != "" && savedcards[i + 1][j] != 1) {
      var value = playboard[4][j];
      playboard[4][j] = "";
      document.getElementById(
        pos[0] + "" + (i + 1) + "" + j
      ).style.backgroundColor = "#ffffff";
      document.getElementById(pos[0] + "" + (i + 1) + "" + j).innerHTML = "";
      playboard[i + 1][5] -= 1;
      for (var k = j; k <= 4; k++) {
        if (playboard[i][k] == "") {
          index = k;
          if (value == "0") {
            document.getElementById(
              pos[0] + i + "" + index
            ).style.backgroundColor = "#EEFC04";
            document.getElementById(pos[0] + i + "" + index).innerHTML = value;
            playboard[i][index] = value;
          }
          if (value == "1") {
            document.getElementById(
              pos[0] + i + "" + index
            ).style.backgroundColor = "#1CFC04";
            document.getElementById(pos[0] + i + "" + index).innerHTML = value;
            playboard[i][index] = value;
          }
          playboard[i][5] += 1;
          color_domination();
          break;
        }
      }
    }
    return 1;
  }
  if (
    i == 4 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    playboard[3][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    return 1;
  }
  return 0;
}
function Save_Top(pos) {
  var x = document.getElementById(pos).textContent;
  var i = parseInt(pos[1]);
  var j = parseInt(pos[2]);
  if (i == 0 && x == "" && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    return 1;
  }
  if (i == 1 && x == "" && player != "" && playboard[0][5] >= 3) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (playboard[i - 1][j] != "") {
      savedcards[i - 1][j] = 1;
      document.getElementById(pos[0] + (i - 1) + "" + j).style.color =
        "#ff0000";
    }
    return 1;
  }
  if (i == 2 && x == "" && player != "" && playboard[1][5] >= 3) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (playboard[i - 1][j] != "") {
      savedcards[i - 1][j] = 1;
      document.getElementById(pos[0] + (i - 1) + "" + j).style.color =
        "#ff0000";
    }
    return 1;
  }
  if (i == 3 && x == "" && player != "" && playboard[2][5] >= 3) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (playboard[i - 1][j] != "") {
      savedcards[i - 1][j] = 1;
      document.getElementById(pos[0] + (i - 1) + "" + j).style.color =
        "#ff0000";
    }
    return 1;
  }
  if (i == 4 && x == "" && player != "" && playboard[3][5] >= 3) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (playboard[i - 1][j] != "") {
      savedcards[i - 1][j] = 1;
      document.getElementById(pos[0] + (i - 1) + "" + j).style.color =
        "#ff0000";
    }
    return 1;
  }
  return 0;
}

function Save_Bottom(pos) {
  var x = document.getElementById(pos).textContent;
  var i = parseInt(pos[1]);
  var j = parseInt(pos[2]);
  if (i == 0 && x == "" && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (playboard[i + 1][j] != "") {
      savedcards[i + 1][j] = 1;
      document.getElementById(pos[0] + (i + 1) + "" + j).style.color =
        "#ff0000";
    }
    return 1;
  }
  if (i == 1 && x == "" && playboard[0][5] >= 3 && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (playboard[i + 1][j] != "") {
      savedcards[i + 1][j] = 1;
      document.getElementById(pos[0] + (i + 1) + "" + j).style.color =
        "#ff0000";
    }
    return 1;
  }
  if (
    i == 2 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (playboard[i + 1][j] != "") {
      savedcards[i + 1][j] = 1;
      document.getElementById(pos[0] + (i + 1) + "" + j).style.color =
        "#ff0000";
    }
    return 1;
  }
  if (
    i == 3 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j < 3 && playboard[i + 1][j] != "") {
      savedcards[i + 1][j] = 1;
      document.getElementById(pos[0] + (i + 1) + "" + j).style.color =
        "#ff0000";
    }
    return 1;
  }
  if (
    i == 4 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    playboard[3][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    return 1;
  }
  return 0;
}

function Save_Left(pos) {
  var x = document.getElementById(pos).textContent;
  var i = parseInt(pos[1]);
  var j = parseInt(pos[2]);
  if (i == 0 && x == "" && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j > 0 && playboard[0][j - 1] != "") {
      savedcards[i][j - 1] = 1;
      document.getElementById(pos[0] + i + "" + (j - 1)).style.color =
        "#ff0000";
    }
    return 1;
  }
  if (i == 1 && x == "" && playboard[0][5] >= 3 && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j > 0 && playboard[1][j - 1] != "") {
      savedcards[i][j - 1] = 1;
      document.getElementById(pos[0] + i + "" + (j - 1)).style.color =
        "#ff0000";
    }
    return 1;
  }
  if (
    i == 2 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j > 0 && playboard[2][j - 1] != "") {
      savedcards[i][j - 1] = 1;
      document.getElementById(pos[0] + i + "" + (j - 1)).style.color =
        "#ff0000";
    }
    return 1;
  }
  if (
    i == 3 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j > 0 && playboard[3][j - 1] != "") {
      savedcards[i][j - 1] = 1;
      document.getElementById(pos[0] + i + "" + (j - 1)).style.color =
        "#ff0000";
    }
    return 1;
  }
  if (
    i == 4 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    playboard[3][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j > 0 && playboard[4][j - 1] != "") {
      savedcards[i][j - 1] = 1;
      document.getElementById(pos[0] + i + "" + (j - 1)).style.color =
        "#ff0000";
    }
    return 1;
  }
  return 0;
}

function Save_Right(pos) {
  var x = document.getElementById(pos).textContent;
  var i = parseInt(pos[1]);
  var j = parseInt(pos[2]);
  if (i == 0 && x == "" && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j < 4 && playboard[0][j + 1] != "") {
      savedcards[i][j + 1] = 1;
      document.getElementById(pos[0] + i + "" + (j + 1)).style.color =
        "#ff0000";
    }
    return 1;
  }
  if (i == 1 && x == "" && playboard[0][5] >= 3 && player != "") {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j < 4 && playboard[1][j + 1] != "") {
      savedcards[i][j + 1] = 1;
      document.getElementById(pos[0] + i + "" + (j + 1)).style.color =
        "#ff0000";
    }
    return 1;
  }
  if (
    i == 2 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j < 4 && playboard[2][j + 1] != "") {
      savedcards[i][j + 1] = 1;
      document.getElementById(pos[0] + i + "" + (j + 1)).style.color =
        "#ff0000";
    }
    return 1;
  }
  if (
    i == 3 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j < 4 && playboard[3][j + 1] != "") {
      savedcards[i][j + 1] = 1;
      document.getElementById(pos[0] + i + "" + (j + 1)).style.color =
        "#ff0000";
    }
    return 1;
  }
  if (
    i == 4 &&
    x == "" &&
    playboard[0][5] >= 3 &&
    playboard[1][5] >= 3 &&
    playboard[2][5] >= 3 &&
    playboard[3][5] >= 3 &&
    player != ""
  ) {
    if (player == "0") {
      document.getElementById(pos).style.backgroundColor = "#EEFC04";
      document.getElementById(pos).innerHTML = player;
    }
    if (player == "1") {
      document.getElementById(pos).style.backgroundColor = "#1CFC04";
      document.getElementById(pos).innerHTML = player;
    }
    playboard[i][j] = player;
    playboard[i][5] += 1;
    if (j < 2 && playboard[4][j + 1] != "") {
      savedcards[i][j + 1] = 1;
      document.getElementById(pos[0] + i + "" + (j + 1)).style.color =
        "#ff0000";
    }
    return 1;
  }
  return 0;
}
