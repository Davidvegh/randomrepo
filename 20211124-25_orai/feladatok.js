/*let szamlalando = "Adj meg egy stringet!";
let spacenum = 0;

for (let i = 0; i < szamlalando.length; i++){
    if (szamlalando[i] === " "){
        spacenum++;
    }
}

console.log(spacenum);*/



/*let tomb = [-1, -3, 4, 2, 5, 7, 11];
let posnum = 0;

for (let i = 0; i < tomb.length; i++){
    if (tomb[i] > 0){
        posnum++
    }
}

console.log(posnum)*/



/*let tomb = [true, 3, 5, 10, false, "egy", "kettő"];
let sum = 0;

for (let i = 0; i < tomb.length; i++){
    if (isNaN(tomb[i]) === false && typeof tomb[i] !== "boolean")
    sum += tomb[i]
}

console.log(sum)*/



/*let tomb = [1, 2, 3, 4, 5, 6, 7];
let keresett = 5;
let van = false;

for (let i = 0; i < tomb.length; i++){
    if (tomb[i] === keresett){
        van = true;
    }
}

if (van = true){
    console.log("Igen, van benne 5-ös.");
}
else{
    console.log("Nem, nincs, benne 5-ös.");
}*/



/*let tomb = [1, -3, -2, 5, -7, 9];
let tomb2 = []

for (let i = 0; i < tomb.length; i++){
    if (tomb[i] > 0){
        tomb2.push(tomb[i]);
    }
}

console.log(tomb2);*/



/*let tomb = [1, -3, -2, 5, -7, 9, 6, 2];
let szam = -10;

for (let i = 0; i < tomb.length; i++){
    if (tomb[i] > szam){
        szam = tomb[i];
    }
}

console.log(szam);*/



/*let tomb = [1, -3, -2, 5, -7, 9, 6, 2];
let szam = -10;

for (let i = 0; i < tomb.length; i++){
    if (tomb[i] > szam && tomb[i] % 2 === 0){
        szam = tomb[i];
    }
}

console.log(szam);*/



/*let tomb = ["a", "valami", " ", "b", "c"];
let talalat = " ";

for (let i = 0; i < tomb.length; i++){
    if (tomb[i] === " "){
        talalat = tomb[i];
        break;
    }
}

console.log(talalat.length);*/



/*let felhasznalok = [
    {
        fullname: "Nagy Béla",
        username: "Bélabá",
        email: "valami@pityu"
    },
    {
        fullname: "Kis Jolán",
        username: "Joli",
        email: "valami@joli"
    },
    {
        fullname: "Zöld Tihamér",
        username: "Zöldi",
        email: "valami@tihi"
    }
]

console.log(felhasznalok);

let talalat = {};
let index = 0;
while(index < felhasznalok.length){
    if (felhasznalok[index].fullname === "Kis Jolán"){
        talalat = felhasznalok[index];
        break;
    }
    index++
}

console.log(talalat);*/



/*let maganhangzolista = ["e", "u", "i", "o", "a"];
let massalhangzolista = ["q", "w", "r", "t", "z", "p", "s", "d", "f", "g", "h", "j", "k", "l", "y", "x", "c", "v", "b", "n", "m"];
let stringbe = prompt("Írj be egy szöveget!");
let maganh = 0;
let massalh = 0;

for (let i = 0; i < stringbe.length; i++){
    if (stringbe.includes(maganhangzolista[i])){
        maganh++
    }
    else {
        massalh++
    }
}

console.log(maganh);
console.log(massalh);*/



/*let szoveg = ("Ez egy szoveg.");
let ujszoveg = szoveg.replace(/ /g, "A");

console.log(ujszoveg);*/



let osszeg1 = prompt("Fizess, te kurva!");
let borravalo1;
let osszeg2 = prompt("Fizess megint, te kurva!");
let borravalo2;

osszegtomb = [];
borravalotomb = [];

if (Number.osszeg1 > 50 && Number.osszeg1 < 200){
    borravalo1 = 0.15 * osszeg1
}
else {
    borravalo1 = 0.15 * osszeg1
}
if (Number.osszeg2 > 50 && Number.osszeg2 < 200){
    borravalo2 = 0.15 * osszeg2
}
else {
    borravalo2 = 0.15 * osszeg2
}

alert("Első fizetés: " + osszeg1 + ", Első borravaló: " + borravalo1);
alert("Második fizetés: " + osszeg2 + ", Második borravaló: " + borravalo2);

osszegtomb.push(osszeg1);
borravalotomb.push(borravalo1);
osszegtomb.push(osszeg2);
borravalotomb.push(borravalo2);

console.log(osszegtomb);
console.log(borravalotomb);

