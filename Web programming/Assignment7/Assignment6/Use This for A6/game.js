var randomnumber=0;

var attempts = 10;

var cur=10;

function init()

{

randomnumber=Math.floor(Math.random()*101);

document.getElementById('attempts').innerHTML=cur+" guesses left";

}





function check_num(){

var enterednumber=new Number(document.getElementById('number').value);

if(enterednumber==randomnumber )

{

alert('You entered the correct number '+randomnumber+'.\n Restarting game.');

cur=attempts;

init();

}else{

if(enterednumber>randomnumber && cur>1)

{

alert('Guess is higher than secret number');

cur=cur-1;

document.getElementById('attempts').innerHTML=cur+" guesses left";

}

if(enterednumber<randomnumber && cur>1)

{

alert('Guess is lower than secret number');

cur=cur-1;

document.getElementById('attempts').innerHTML=cur+" guesses left";

}

if(cur==1)

{alert('You ran out of guesses. Correct number was '+randomnumber+'.\n Restarting game.');

cur=attempts;

init();

}

}}