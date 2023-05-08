const redButton = document.getElementById("redButton");
const yellowButton = document.getElementById("yellowButton");
const greenButton = document.getElementById("greenButton");
const blueButton = document.getElementById("blueButton");
const blackButton = document.getElementById("blackButton");

redButton.addEventListener("click", function() {
document.body.style.backgroundColor = "red";
});

yellowButton.addEventListener("click", function() {
document.body.style.backgroundColor = "yellow";
});

greenButton.addEventListener("click", function() {
document.body.style.backgroundColor = "green";
});

blueButton.addEventListener("click", function() {
document.body.style.backgroundColor = "blue";
});

blackButton.addEventListener("click", function() {
document.body.style.backgroundColor = "black";
});