'use strict';
/* 
  環境的にモジュール化が難しそうなのでゴリ押す
  const deco = require('./moon/deco'); 
*/

const bodyColor = document.getElementById('right')
const backSwitch = document.getElementById('switchOn');

//スイッチの画像制御
backSwitch.addEventListener("click", () => {
  if (backSwitch.id === 'switchOn') {
    backSwitch.id = "switchOff";
    bodyColor.id = "dark"
    console.log('OFF');
  } else {
    backSwitch.id = "switchOn";
    bodyColor.id = "right"
    console.log('ON');
  }
  decoration();
});

//ランダムイベント
function decoration() {
  const probability = 10
  let draw = 0
  draw = Math.floor(Math.random() * probability);
  console.log(draw);
  switch (draw) {
    case 1:
      //月が出るような仕組み作る
        console.log('月がでたでたヨイヨイ');
      break;
    default:
      break;
  }
}