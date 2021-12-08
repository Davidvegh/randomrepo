/*function reverseString (str){
    let newstring = "";
    for (let i = str.length - 1; i >= 0; i--){
        newstring += str[i];
    }
    return newstring;
}

console.log(reverseString("Ez egy string"));*/



/*let osszeg1 = prompt("Fizess, te kurva!");
let borravalo1;
let osszeg2 = prompt("Fizess megint, te kurva!");
let borravalo2;


osszegtomb = [];
borravalotomb = [];

if (Number(osszeg1) >= 50 && Number(osszeg1) <= 200){
    borravalo1 = 0.15 * osszeg1
    borravaloOszeggel1=borravalo1+osszeg1
}
else {
    borravalo1 = 0.20 * osszeg1
    borravaloOszeggel1=borravalo1+osszeg1
}
if (Number(osszeg2) >= 50 && Number(osszeg2) <= 200){
    borravalo2 = 0.15 * osszeg2
    borravaloOszeggel2=borravalo2+osszeg2
}
else {
    borravalo2 = 0.20 * osszeg2
    borravaloOszeggel2=borravalo2+osszeg2
}

alert("Első fizetés: " + osszeg1 + ", Első borravaló: " + borravalo1);
alert("Második fizetés: " + osszeg2 + ", Második borravaló: " + borravalo2);

osszegtomb.push(osszeg1,osszeg2);
borravalotomb.push(borravalo1,borravalo2);


console.log(osszegtomb);
console.log(borravalotomb);*/



function isit100 (a, b){
    if (a + b === 100){
        return true;
    }
    else {
        return false;
    }
}

console.log(isit100(50, 50));