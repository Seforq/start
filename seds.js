var randomLoc = Math.floor (Math.random() * 13);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var guesses = 0;
var isSunk = false;

        //пока корабль не потоплен - false
while (isSunk == false)
        
        //координаты выстрела
{
guess = prompt ('Стреляй! (enter a number 0-15):') ;

//точно ли цифры от 0-15
if (guess < 0 || guess > 15)

{
    //если игрок ввел недопустимое значение
    alert('Заново жмай)');

} else {
  guesses = guesses + 1;


if (guess == location1 || guess == location2 || guess == location3) {
        alert('Попав!');
        hits = hits + 1;
        if (hits ==3) {
            isSunk = true;
            alert('Finish GG');
        }
} else {
    alert('Промах');
        }
    } 
}
var stats = 'Ты выиграл потратив '+ guesses + ' попытки(-ок). Твоя меткость ' + (3/guesses);
alert(stats);