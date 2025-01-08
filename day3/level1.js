let fastName = 'Jane';
let lastName = 'Moraa';
let country = 'Kenya';
let city = 'Nairobi'
let age = 25;
let isMarried = true;
//let year = 2025;
console.log(typeof 'Jane');
console.log(typeof 'Moraa');
console.log(typeof 'Kenya');
console.log(typeof 'Nairobi');
console.log(typeof 25);
console.log(typeof true);
console.log(typeof 2025);

let string = '10';
let num = 10;
console.log(string == num);
console.log(string === num);


console.log(parseInt('9.8') == 10);
console.log(4 + 3); //truthy number.
console.log(6 > 2); //truthy boolean.
console.log('Jane'); //truthy string.

let name
console.log(name); //falsy undefined.
console.log(4 - 4); //falsy 0 value.
console.log(''); //falsy empty string.
let gender = null
console.log(gender); //falsy null.


console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== 4); //false
console.log(4 != '4'); //false
console.log(4 == '4'); //true
console.log(4 === '4'); //false

let lang = 'python';
console.log('python'.length); //python length
let plang = 'jagon';
console.log('jagon'.length); //jagon length
console.log(lang.length === plang.length); //falsy statement

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

let language = 'python';
let word = 'dragon';
console.log((language.search('on')) !== (word.search('on'))); // there is 'on' in both python and dragon

const now = new Date()
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());

const allseconds=Date.now()
console.log(allseconds); //seconds from 1970 to date








