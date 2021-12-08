let myPhoneNumbers = [3630792765, 3630369549, 3620797249, 3670129465, 3630735165, 3630799685, 3630294765, 3630739572, 3630792388, 3630792947, 3630798965, 3630799284, 3630793325, 3630799685, 3630194265,];
let mynames = ['Bandobras Underhill', 'Robin Gardner', 'Isembold Whitfoot', 'Donnamira Galbassi', 'Bungo Baggins', 'Will Sandyman', 'Isengrim Proudfoot', 'Frodo Baggins', 'Amaranth Gaukrogers', 'Trahand Bunce', 'Will Sandyman', 'Halfred Goodchild', 'Bilbo Baggins', 'Will Sandyman', 'Belba Sandheaver'];

function createPhoneBook(names, phoneNumbers) {
    let telefonkonyv = [];
    for (let i = 0; i < phoneNumbers.length; i++) {
        telefonkonyv.push({ name: names[i], mobile: phoneNumbers[i] })
    }
    return telefonkonyv;
}

let telefonkonyv = createPhoneBook(mynames, myPhoneNumbers);



function add(telefonkonyv, nev, mobilszam) {
    let person = {
        name: nev,
        mobile: mobilszam
    };
    if (mobilszam === undefined) {
        return null
    }
    else {
        telefonkonyv.push(person);
    }
    return person;
}

add(telefonkonyv, "Oliver", 2151251251);

console.log(telefonkonyv);



function findByMobile(telefonkonyv, mobilszam) {
    for (let i = 0; i < telefonkonyv.length; i++) {
        if (telefonkonyv[i].mobile === mobilszam) {
            return telefonkonyv[i];
        }
    }
    return null;
}

console.log(findByMobile(telefonkonyv, 3630369549));



/*function deleteByMobile(telefonkonyv, mobilszam) {
    for (let i = 0; i < telefonkonyv.length; i++) {
        if (telefonkonyv[i].mobile === mobilszam) {
            telefonkonyv.splice(i, 1);
            return telefonkonyv[i];
        }
    }
    return null;
}

console.log(deleteByMobile(telefonkonyv, 3670129465));*/



function findIndex(telefonkonyv, mobilszam) {
    for (let i = 0; i < telefonkonyv.length; i++) {
        if (telefonkonyv[i].mobile === mobilszam) {
            return i;
        }
    }
    return -1;
}

console.log(findIndex(telefonkonyv, 3630799685));



/*function find(telefonkonyv, input) {
    if (typeof input === "string"){
        return findByMobile(telefonkonyv, mobilszam);
    }
    else {
        return findByMobile(telefonkonyv, mobilszam); // ide egy find by name-es függvény kéne, csak ilyet nem csináltam
    }
}*/



add(telefonkonyv, "Oliver", 21512102103);
add(telefonkonyv, "Oliver", 21530131030);
add(telefonkonyv, "Oliver", 21513253253);

console.log(telefonkonyv);

function filterByName (telefonkonyv, nev){
    let oliverek = [];
    for (let i = 0; i < telefonkonyv.length; i++){
        if (nev === telefonkonyv[i].name){
            oliverek.push(telefonkonyv[i]);
        }
    }
    return oliverek
}

console.log(filterByName(telefonkonyv, "Oliver"));