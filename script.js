//4)
var a=123456;
var b=654321;
console.log(a,b)
alert(a)
alert(b)
//5)
var c = a+b;
console.log(a,"+",b,"=",c)

var c = Number(a)+Number(b);
alert(c);

//6)
alert( 'Iz NIJNEGO'.toUpperCase() ); //В ВЕРХНИЙ РЕГИСТР
alert( 'IZ VerHnEGo'.toLowerCase() ); //в нижний регистр

//7)
var n = 9
console.log("9^2=",Math.pow(n,2)) //число в квадрат
alert(Math.pow(n,2)) 

var e =5
console.log("5/2 remainder=",5%2) //деление с остатком
alert(5%2)


//8) два задания 
var today = new Date();
var now = today.toLocaleString();
console.log(now); //отображение текущего времени
alert(now)

var phrases = ["Yes","No","May Be"];
console.log(phrases[Math.floor(Math.random() * 3)]);//рандомное слово
