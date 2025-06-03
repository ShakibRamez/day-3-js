// let game = "sonic"; //global vaiable

// console.log(game);

// function title(){
//     console.log("$(game)");
// }

// title();
//  if(true){
//     console.log(`$(game)`);
//  }


//local varible

// function a (){
//     let game = "sonic";
//     console.log(game);
// }
// a();

// if(true){
//     let game = "Mario";
//     console.log(game);
// }

// function hello(){
//     var greating = "hello";
// }
// console.log(greating);

// if(true){
//     var greating = "hello";
// }
// console.log(greating);

//block scope

// let x = 10;
// console.log(x);
 
// if(true){
//     let x = 23;
//     console.log(x);
// }
// console.log(x);

//task

function user(){
    let firstName = "shakib";
    let lastName = "ramez";
    let age = 20;
    let contry = "Afghanistan";
    console.log(`My name is ${firstName} ${lastName} and I am ${age} years i lives in ${contry}`);
}

let firstName = "ahmad shakib";
user();


let game = "sonic";
if(true){
    let game = "mario";
    console.log(game);
}

console.log(game);