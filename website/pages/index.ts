let button = document.querySelector("#button") as HTMLButtonElement;

let power = function(a: number, b: number) {
    
}

let number = 5;
let result = 1; 
for (let i= 0; i < 13; i++) {
    result *= number;
}
console.log(result);

let number2 = 14;
let result2 = 1; 
for (let i= 0; i < 4; i++) {
    result2 *= number2;
}
console.log(result2);

let func = function() {
    console.log("printed from the 'func' function");
}

button.onclick = function() {
    console.log("printed from the 'func' function");
};

