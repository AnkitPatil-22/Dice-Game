// Dice 1
var randomNumber1 = Math.floor(Math.random()*6+1);

var img1 = document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
// var imgsrc1 = "images/dice"+randomNumber1+".png";
// img1.setAttribute("src", imgsrc1);


// Dice2
var randomNumber2 = Math.floor(Math.random()*6+1);

var img2 = document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);;
// var imgsrc2 = "images/dice"+randomNumber2+".png";
// img2.setAttribute("src", imgsrc2);


// Title display winner
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}

const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);
