'use strict';
const leftCard = document.getElementById("left");
const rightCard = document.getElementById("right");
let resultHtml = document.getElementById("result");

let leftNum = 0;
let rightNum = 0;

//スタート
function start() {
  leftNum = Math.floor(Math.random() * 13) + 1;
  rightNum = Math.floor(Math.random() * 13) + 1;
  leftCard.src = "card/c" + leftNum + ".png"
}

function judge() {
  let result = "";
  if(leftNum > rightNum) {
    result = true;
  } else {
    result = false;
  }
  rightCard.src = "card/c" + rightNum + ".png"
  //結果を表示
  if (result === true) {
    resultHtml.innertext = "Win!";
  } else {
    resultHtml.innertext = "Lose...";
  }
}

window.onload(start());