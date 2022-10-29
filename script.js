console.log('** задание 1 **');

let estimation = prompt ('напишите число от 0 до 100');
let a = 100;

if(a < 90) {
    console.log(` Оценка А   `);
} else if(a=90) {
    console.log(`Оценка -5`);
} else if(a<80){
    console.log(`Оценка B `);
} else if (a=80){
    console.log(`Оценка 4`);
}else if(a<60){
    console.log(`Оценка D `);
} else if (a=80){
    console.log(`Оценка 2`);
}


console.log('*** задание 3 ***');

function
 randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const number = randomIntFromInterval(0,90)
console.log(number)