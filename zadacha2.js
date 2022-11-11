var weight = prompt('Укажите ваш вес (в килограммах) ');
var height = prompt('Укажите ваш рост (в сантиметрах) ');
var bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);


if(bmi <= 18.5){
    category = "Недостаточный вес";  
}
else if( bmi >= 18.6 && bmi <= 25 ){
    category = "Нормально";
    }
else if( bmi >= 25.1 && bmi <= 30 ){
    category = "У вас излишек веса";
}
else{
    category = "Ожирение";  
}

alert(' Ваш ИМТ = ' + bmi + ' \n Степень соответствия = ' + category )
