/*let numbers = [1, 2, 3];
let sum = 0;

for  (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

console.log(sum);*/



/*for  (let number = 0; number <= 100; number++){
    if (number % 5 === 0 && number % 3 === 0){
        console.log("fizzbuzz")
    }
    else if (number % 5 === 0){
        console.log("buzz")
    }
    else if (number % 3 === 0){
        console.log("fizz")
    }
    else{
        console.log(number)
    }
}*/



let pairs = [[1, 2], [3, 4], [5, 6]];
let sum = 0;

for (let i = 0; i < pairs.length; i++){
    for (let j = 0; j < pairs[i].length; j++){
        let szam = pairs[i][j];
        sum += szam;
    }
}

console.log(sum);