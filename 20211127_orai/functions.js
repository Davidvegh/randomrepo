/*function diceThrow(){
    let result = Math.floor(Math.random() * 6) + 1;
    console.log(result)
}

diceThrow()*/



/*function diceThrow(sides){
    let result = Math.floor(Math.random() * sides) + 1;
    console.log(result)
}

diceThrow(20)    // 20 olyan mintha 20 odlalú kockával dobtunk volna
diceThrow()    // undefined -> undefineddel szorozva NaN-t fogunk kapni*/



/*function addSomething(a, b){
    console.log("a+b=", a + b)
}

addSomething(2, 4)*/



/*function add(a, b, c){
    let sum = a + b + c;
    console.log("eredmény:", sum);
}

add(4, 7, 3)*/



/*function em2px(em, base){
    if (base === undefined){
        base = 16;
    }
    console.log(base * em)
    return;   // abbahagy minden futást a testben ami utána van, és visszaad egy értéket
}

em2px(10, 16)*/



/*function sum3v2(a, b, c){
    if (c === undefined){
        c === 0;
    }
    if (b === undefined){
        b === 0;
    }
    if (a === undefined){
        a === 0;
    }
    a = Number(a);
    b = Number(b);
    c = Number(c);
    let sum = a + b + c;
    console.log(sum);
}

sum3v2(2, 5)*/



/*function sum(a, b){
    return a + b;
}

let osszeg = sum (2, 10);

console.log(osszeg + 4);*/



/*function minusFive(a) {
    return a-5;
}

let aminus5 = minusFive(15) + 5

console.log(minusFive(15))*/



/*function eredm(a){
    return a * 11;
}

console.log(eredm(10));*/



/*function isEven(b){
    return b % 2 === 0
}

console.log(isEven(101));
console.log(isEven(100));*/



/*function pow(c){
    return c * c;
}

console.log(pow(5));*/


/*// random generál egy számot min és max között
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(3, 9));*/



/*function tombosszeg(e, f, g){
    let tomb = [e, f, g];
    let sum = tomb[0] + tomb[1] + tomb[2];
    return sum;
}

console.log(tombosszeg(1, 2, 3))*/


// fgv ami visszaadja egy atadott tomb elemeit
/*function sumArray(arr){
    let sum = 0;
    if (!Array.isArray(arr)){
        return NaN;
    }
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}*/



/*function countDown(h){
    for (number = h; number >= 0; number--){
        console.log(number)
    }
}

countDown(10);*/



/*function count(until, step){
    if (step === undefined){
        step = 1;
    }
    let szamom = 0;
    for (let i = 0; i <= until; i += step){
        szamom += i;
        console.log(szamom)
    }
    return szamom;
}

console.log(count(10, 2));*/



/*function keresett(b, a) {

    if(!Array.isArray(b)){
        return "Not an array"
    }
    
    for (let i = 0; i < b.length; i++) {
        if (a === b[i]) {
            return true;
        }
    }
    return false;
}

console.log(keresett([1, 3, 5], 5));*/

/*let eredm = 0;

function szorzot(n){
    for (let i = 1; i <= 10; i++){
        eredm = i * n;
        console.log(n + " x " + i + " = " + eredm);
    }
}

szorzot(5);*/



/*function szorzotabla2(a) {
    let szam = a;
    if (a < 10) {
        a = 10;
    }
    for (let i = 1; i <= Math.max(a, 10); i++) {
        console.log((i) * szam)
    }
}
szorzotabla2(8);*/



/*function calculateDogAge(numb){
    return 7 * numb;
}

console.log(calculateDogAge(3));*/



/*function celsiustofahrenheit(c){
    return (c / 5) * 9 + 32;
}

console.log(celsiustofahrenheit(30));*/



/*function fahrenheittocelsius(f){
    return ((f - 32) * 5) / 9;
}

console.log(fahrenheittocelsius(50));*/



/*function reverseString(name){
    let stringem = "";
    for (let i = name.length - 1; i >= 0; i--){
        stringem += name[i];
    }
    return stringem;
}

console.log(reverseString("Oliver"))*/



// Kiszamolja egy kör kerületét
// > calcCircumference (radius) => number

// Math.PI

// Kiszamolja egy kör területét
// calcArea (radius) => number

// Kiírja egy kör területét és kerületét ("A kör kerülete: ; A kör területe: ")



/*function calcCircumference (r) {
    return 2 * r * Math.PI; 
}

console.log(calcCircumference(5));*/



/* function calcArea (r) {
    return r ** 2 * Math.PI;
}

console.log(calcArea(5)); */



function calcAC (r) {
    let circumference = 2 * r * Math.PI;
    let area = r ** 2 * Math.PI;
    console.log("A kör kerülete: " + circumference + " A kör területe: " + area);
}

calcAC(5);