function randDiceOne()
{
    var n1 = Math.random();
    n1 = Math.floor((n1*6)+1);
    return n1;
}


function randDiceTwo()
{
    var n2 = Math.random();
    n2 = Math.floor((n2*6)+1);
    return n2;
}

var diceOne = randDiceOne();
var diceTwo = randDiceTwo();

document.querySelector(".img1").setAttribute("src","images/dice"+diceOne+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+diceTwo+".png");



if (diceOne > diceTwo )
{
    document.querySelector("h1").innerHTML="Player 1 Wins";
}

else if (diceTwo > diceOne)
{
    document.getElementsByTagName("h1")[0].innerHTML="Player 2 Wins";
}
else{
    document.getElementsByTagName("h1")[0].innerHTML="Draw!";
}



