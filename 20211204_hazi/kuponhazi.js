let termek = 25000;
let kuponok = [
    {
        kuponkod: "XMAS10",
        tipus: "percent",
        ertek: 0.1,
    },
    {
        kuponkod: "SANTA1000",
        tipus: "fix",
        ertek: 1000,
    }
]

function kupon(kod) {
    //debugger
    if (kod === kuponok[0].kuponkod) {
        return termek - termek * kuponok[0].ertek;
    }
    else if (kod === kuponok[1].kuponkod) {
        return termek - kuponok[1].ertek;
    }
    else {
        return "Nincs ilyen kupon";
    }
}

console.log(kupon(prompt("Add meg a kupon kódját!")));




// for cilussal

let termek = 25000;
let kuponok = [
    {
        kuponkod: "XMAS10",
        tipus: "percent",
        ertek: 0.1,
    },
    {
        kuponkod: "SANTA1000",
        tipus: "fix",
        ertek: 1000,
    }
]

function kuponErtek(felhasznkupon) {
    for (let i = 0; i < kuponok.length; i++){
        console.log(kuponok[i])
        if (kuponok[i].kupon === felhasznkupon){
            // kupon ertek kiszamolasa
            console.log("kiszamolt ertek kiiratasa")
            return " ";
        }
    }
    console.log("nincs ilyen kupon")
}

kuponErtek("semmi")