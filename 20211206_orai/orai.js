/*function higherOrder(func){
    // func erteke a szamol
    func()
    // szamol()
}

function szamol(){
    console.log("szamol");
}

higherOrder(szamol)




function higherOrder2(){
    return function kiir(){
        console.log("kiir");
    }
}

let kiir = higherOrder2()

console.log(kiir)
kiir()




let fvkifejezes = function kiir2() {
    console.log("kiir2");
}

console.log(fvkifejezes);

fvkifejezes()*/




/*function repeater(num, input){
    let eredmeny = "";
    for (let i = 0; i < num; i++){
        eredmeny += input
    }
    return eredmeny;
}


console.log(repeater(3, "valami"));*/

// callbackes változat

/*function repeater(num, input){
    let eredmeny = "";
    for (let i = 0; i < num; i++){
        eredmeny += input()
    }
    return eredmeny;
}

console.log(repeater(2, function fr(){return "random"}));*/




function elokeszit(mit, masikfgv){
    return mit + masikfgv();
}

function csinal(){
    return "vág";
}

function pucol(){
    return "pucol";
}

console.log(elokeszit("hagymát ", csinal));

console.log(elokeszit("hagymát ", pucol));
