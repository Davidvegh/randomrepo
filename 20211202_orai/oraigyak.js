// kivalasztas

/*function kivalasztas (array, szam){
    for (let i = 0; i < array.length; i++){
        if (array[i] === szam){
            return i;
        }
    }
    return null;
}

console.log(kivalasztas([3, 5, 7], 5));*/



// masolas

/* function masolas (array){
    let masikarray = array.concat([])
    for (let i = 0; i < array.length; i++){
        masikarray[i]++
    }
    return masikarray
}

console.log(masolas([1, 2, 3, 4])) */



// lottó

/*function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function otoslotto () {
    return [random (1, 90), random (1, 90), random (1, 90), random (1, 90), random (1, 90)];
}

function hatoslotto () {
    let lottoszamok = [];
    for (let i = 0; i < 6; i++){
        lottoszamok.push(random(1, 45));
    }
    return lottoszamok;
}

function skandilotto () {
    let lottoszamok = [];
    for (let i = 0; i < 7; i++){
        lottoszamok.push(random(1, 35));
    }
    return lottoszamok;
}

function genericLotto(db, max) {
    let lottoszamok = [];
    for (let i = 0; i < db; i++){
        lottoszamok.push(random(1, max));
    }
    return lottoszamok;
}

function fancySkandi(){
    return genericLotto(6, 45);
}

genericLotto(6, 45); //hatoslotto
genericLotto(7, 35); //skandilotto
genericLotto(5, 90); //otoslotto

function lotto (lottoTipusa) {
    if (lottoTipusa === "otoslotto"){
        return otoslotto()
    }
    else if (lottoTipusa === "hatoslotto"){
        return hatoslotto()
    }
    else if (lottoTipusa === "skandilotto"){
        return skandilotto()
    }
}

lotto("otoslotto")

// VAGY

function lottoSwitch (lottoTipusa){
    switch (lottoTipusa){
        case "otoslotto": return otoslotto;
        case "hatoslotto": return hatoslotto;
        case "skandilotto": return skandilotto;
    }
}*/



/*// szamologep

function osszead(a, b){
    return a + b;
}

function kivon(a, b){
    return a - b;
}

function szamologep(a, b, muvelet){
    return muvelet(a, b);
}

console.log(szamologep(1, 2, osszead)); // 3
console.log(szamologep(1, 2, kivon)); // -1

console.log(szamologep(1, 2, function (a, b){ return a / b})); // 0.5
console.log(szamologep(100, 10, function (a, b){ return a * b})); // 1000*/



/*function each(array, callback){
    for (let i = 0; i < array.length; i++){
        callback(array[i]);
    }
}

each([1, 2, 3, 4, 5,], console.log);

function log(szam){
    console.log("szam " + szam);
}

each([10, 20, 30, 40], log);
each([10, 20, 30, 40], function (szam) { console.log("ez is szam " + szam)});*/



// kivalogatas

function valogatas (array) {
    let newarray = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            newarray.push(array[i])
        }
    }
    return newarray;
}

console.log(valogatas([1, 2, 3, 4, 5, 6]));