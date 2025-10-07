//this code is not AI generated, it was written painfully by Stephan

const button = document.getElementById("button");
const span = document.getElementById("span");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const success = document.getElementById("sucess");
const high = document.getElementById("high");
const low = document.getElementById("low");
const gameOver = document.getElementById("gameOver");
const recommend = document.getElementById("recommend");
const submitRecommend = document.getElementById("submit-recommend");
let count = document.getElementById("count");
const scam = document.getElementById("scam");
const gay = document.getElementById("gay");
const warning = document.getElementById("warning");

let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer); //for dev purposes only
let clickCount = 0;
let maxTries = 6;

function display() {
  clickCount = 0;
  input.value = "";
  count.textContent = maxTries;

  success.style.display = "none";
  high.style.display = "none";
  low.style.display = "none";
  gameOver.style.display = "none";
  scam.style.display = "none";
  recommend.style.display = "none";
  submitRecommend.style.display = "none";
  gay.style.display = "none";
  warning.style.display = "none";
  
  count.style.display = "block";
  input.style.display = "block";
  submit.style.display = "block";

  span.style.display = "flex";
}

function checkAnswer() {
  const value = input.value;
  clickCount++;

  count.textContent = maxTries - clickCount;

  if (value == answer) {
    success.style.display = "block";
    input.value = "";
    input.style.display = "none";
    submit.style.display = "none";
    high.style.display = "none";
    low.style.display = "none";

    // this should generate a new answer when guessed correctly - hopefully 😁
    answer = Math.floor(Math.random() * 100) + 1;
    console.log("New answer is:", answer); // to check the new answer for dev purposes only
  } else if (value > answer) {
    high.style.display = "block";
    low.style.display = "none";
    input.value = "";
  } else if (value < answer) {
    low.style.display = "block";
    high.style.display = "none";
    input.value = "";
  }

  if (count <= 3){
    warning.style.display = "block";
    count.style.color = "red"
  }

  if (clickCount >= 6 && value != answer) {
    gameOver.style.display = "block";
    input.style.display = "none";
    low.style.display = "none";
    high.style.display = "none";
    submit.style.display = "none";
    button.style.display = "block";
    recommend.style.display = "block";
    submitRecommend.style.display = "block";
    gay.style.display = "block";
  }
}

function addTrial() {
  if (recommend.value.length === 0) {
    scam.style.display = "block";
    return;
  }
  scam.style.display = "none";
  gay.style.display = "none";

  clickCount = maxTries - 1;
  count.textContent = 1;

  recommend.style.display = "none";
  submitRecommend.style.display = "none";
  gameOver.style.display = "none";
  input.style.display = "block";
  submit.style.display = "block";
}

button.addEventListener("click", display);
submit.addEventListener("click", checkAnswer);
submitRecommend.addEventListener("click", addTrial);
