/*let bob = "haboruesbeke";
let cecil = "vorosesfekete";
let ideiglenes;

ideiglenes = bob;
bob = cecil;
cecil = ideiglenes;

console.log("bob konyve: " + bob);
console.log("cecil konyve: " + cecil);*/



/*let nev = window.prompt("Add meg a neved")
console.log(nev.length)*/

/*let a = window.prompt("Add meg az a oldalt");
let b = window.prompt("Add meg a b oldalt");

if (isNaN(a) || isNaN(b)){
    console.log("nem jo")
}
else{
    let kerulet = 2 * (parseInt(a) + parseInt(b));
    let terulet = a * b;
    console.log("kerulet: " + kerulet);
    console.log("terulet: " + terulet);
}*/



/*let flakondl = 10;
let iszik = 0;
let ivas = 2;

iszik = iszik + 1;
iszik = iszik + 1;
iszik = iszik + 1;

console.log(flakondl - iszik * ivas)*/



/*let szoveg = window.prompt("Írj be egy szöveget")
if (szoveg.length >= 80){
    console.log(szoveg.substring(0, 77) + "...")
}
else{
    console.log(szoveg)
}*/


/*let a = window.prompt("Adj meg egy számot")
let b = window.prompt("Adj meg még egy számot")

if (parseInt(a) == parseInt(b)){
    console.log(a + " egyenlő " + b)
}
else if (parseInt(a) > parseInt(b)){
    console.log(a + " nagyobb " + b)
}
else{
    console.log(a + " kisebb " + b)
}*/


/*let koszones = window.prompt("Hello")
if (koszones.includes("hello") || koszones.includes("Hello")){
    window.alert("hello")
}
else{
    window.alert("Rude bitch!")
}*/


/*let a = window.prompt("Add meg az a oldalt");
let b = window.prompt("Add meg a b oldalt")
let teglalap = {
    kerulet: 2 * (parseInt(a) + parseInt(b)),
    terulet: a*b
}
console.log(teglalap)*/


/*let szam1 = window.prompt("Adj egy szamot!");
let szam2 = window.prompt("Adj még egy szamot!");
let muvelet = window.prompt("Adj egy muveletet!");

if (muvelet == "+"){
    console.log(parseInt(szam1) + parseInt(szam2))
}
else if (muvelet == "-"){
    console.log(parseInt(szam1) - parseInt(szam2))
}
else if (muvelet == "*"){
    console.log(parseInt(szam1) * parseInt(szam2))
}
else if (muvelet == "/"){
    console.log(parseInt(szam1) / parseInt(szam2))
}*/


/*let randomSzam = Math.floor(Math.random() * 10);
console.log(randomSzam)
let szam = window.prompt("Gondolj egy számra!");
if (szam != randomSzam){
    let ujszam = window.prompt("Gondolj egy új számra!")
    if (ujszam != randomSzam){
        window.alert("Sajnos nem talált!")
    }
    else {
        window.alert("Sikeresen eltalálta!")
    }
}
else {
    window.alert("Sikeresen eltalálta!")
}*/


let solution = Math.floor(Math.random() * 10) + 1;
let guess = Number(prompt("?"));
if (guess == solution){
    alert("nyertel")
}
else {
    if (solution - guess == -2){
        guess = prompt("kozel van a megoldas")
    }
    else if (solution - guess == 2){
        guess = prompt("kicsit nagyobb")
    }

    if (guess == solution) {
        alert("nyertel")
    }
    else {
        alert("nem nyertel")
    }
}