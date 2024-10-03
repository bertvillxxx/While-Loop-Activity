let randomNumber = 4;
let secretNumber = Math.floor(Math.random() * 10 + 1);

console.log("Guess the number between 1 and 10:", randomNumber)

while (randomNumber === secretNumber);
{console.log("Correct!");}
if (randomNumber <= secretNumber)
{console.log("Too low!");}
else if (random >= secretNumber)
{console.log("Too high!");}