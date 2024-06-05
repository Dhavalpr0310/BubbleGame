var timerval = 30;
var scoreval = 0;

function increaseScore() {
  scoreval += 10;
  document.querySelector(".score").textContent = scoreval;
}
var hitrn;
function hit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector(".hit").textContent = hitrn;
}

function bubble() {
  var cluster = "";

  for (var i = 1; i < 134; i++) {
    var rn = Math.floor(Math.random() * 10);
    cluster += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#plnbm").innerHTML = cluster;
}

function timer() {
  var time = setInterval(function () {
    if (timerval > 0) {
      timerval--;
      document.querySelector(".timerval").textContent = timerval;
    } else {
      clearInterval(time);
      document.querySelector(
        "#plnbm"
      ).innerHTML = `<h1> Game Over...</h1><h1>score = ${scoreval}</h1>`;
    }
  }, 1000);
}

document.querySelector("#plnbm").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitrn) {
    increaseScore();
    bubble();
    hit();
  }
});
hit();
bubble();
timer();
