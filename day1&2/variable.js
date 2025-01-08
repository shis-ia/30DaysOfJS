/*let name="Jane"; 
//string
let age= 23;
//number
let isSingle= true;
//booleans
let city
//undefined
let number= null;
//null
console.log(name,age,isSingle,city,number);

let car= value;
let type= value;
let color= value;
let year= value;

console.log(car,type,color,year);

let nationality= 'Kenya';
let isGenderFemail= true;
let height= 23;
let street='Nairobi';

console.log(nationality,isGenderFemail,height,street);

let first_name= 'Mary';
let last_name= 'Doe'; 
let isMarried=  true;
let country= 'Kenya';
let age = 53;

console.log(first_name);
console.log(last_name);
console.log(isMarried);
console.log(country);
console.log(age);

let myAge= 25;
let yourAge= 32;

console.log( myAge);
console.log( yourAge );*/

let challange = '30 Days Of JavaScript';

console.log(challange);
console.log(challange.length);//length
console.log(challange.toUpperCase());
console.log(challange.toLowerCase());
//console.log(challange.substr(2,20));
console.log(challange.substr(0, 20));
console.log(challange.includes('Script'));
console.log(challange.split(''));//splits at space
console.log(challange.split());//slits as an array

let apps = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(apps.split(','));//split at commas

console.log(challange.replace('JavaScript', 'Python'));
console.log(challange.charAt(15));
//console.log(challange.charCodeAt(D));
console.log(challange.indexOf('a'));
console.log(challange.lastIndexOf('a'));

let statement = 'You cannot end a sentence with because because because is a conjunction';

console.log(statement.indexOf('because'));
console.log(statement.lastIndexOf('because'));
console.log(statement.search('because'));
console.log(challange.trim(''));
console.log(challange.startsWith('30'));
console.log(challange.endsWith('t'));
console.log(challange.match('a'));
console.log(challange.concat('30', 'Days', 'Of', 'JavaScript'));
console.log(challange.repeat(2));


let quote = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.';
console.log(quote);

let sayings = '\"Love is not patronizing and charity isn\'t about pity, it is about love.\nCharity and love are the same with charity you give love, so don\'t just give money but reach out your hand instead.\"';
console.log(sayings);

/*let typeOf = '10';
let num = 10;
console.log(num == typeOf);*/

let parseFloat = ('9.8');
let data = 10;
console.log(data == parseFloat);
//let data = parseFloat;
//console.log(data == parseFloat);

let lang = 'python';
let word = 'jargon';

console.log(lang.endsWith('on'));
console.log(word.endsWith('on'));

let sentence = 'I hope this course is not full of jargon.';
console.log(sentence.search('jargon'));

let randomNum = Math.random();
let numBtnZeroAndHundred = randomNum *100;
console.log(numBtnZeroAndHundred);

let character = 'JavaScript';
console.log(character.indexOf());

console.log('num \t1 \t 1\t 1\t1\t1');
console.log('num \t2 \t 1\t 2\t4\t8');
console.log('num \t3\t1\t3\t9\t27');
console.log('num \t4\t1\t4\t16\t64');
console.log('num \t5\t1\t5\t25\t125');

let line ='You cannot end a sentence with because because because is a conjunction';
console.log(line.substring(30,54));


let sent = ('"Love" is the best thing in this world. Some found their "love" and some are still looking for their "love".');
console.log(sent.split("love"));

let question =('You cannot end a sentence with "because" "because" "because" is a conjunction');
console.log(question.match(/because/gi));

//const salary=('He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.')


 
let randomNumber=Math.random() * (45) + 55
console.log(Math.round(randomNumber));

 let unit= Math.random() *100
 console.log(Math.random(unit));








