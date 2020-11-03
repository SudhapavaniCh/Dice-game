var randomNumber1= Math.random(randomNumber1);
randomNumber1=(randomNumber1*6)+1;
y=Math.floor(randomNumber1)
console.log(y);
var randomDiceImage= "dice"+y+".png";
document.querySelectorAll("img")[0];
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);
var randomNumber2= Math.random(randomNumber2);
randomNumber2=(randomNumber2*6)+1;
z=Math.floor(randomNumber2)
console.log(z);
var randomDiceImage2= "dice"+z+".png";
document.querySelectorAll("img")[1];
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

if(y>z){
	document.querySelector("h1").innerHTML="Player1 wins";
} else if(z>y)
{
	document.querySelector("h1").innerHTML="Player2 wins";
}else
{
	document.querySelector("h1").innerHTML="Draw";
}



