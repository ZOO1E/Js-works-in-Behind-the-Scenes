'use strict';

/*function calcAge(birthYear){
    const age = 2037 - birthYear;

    function printAge(){
     let output =firstName+ ', You are ' + age +',born in '+birthYear
     console.log(output);
     
     if(birthYear >= 1981 && birthYear <= 1996){
      var millenial = true; // function scope can ignore the block
       //Creating NEW variable with same name as outer Scope's variable
      const firstName = 'Steven'; // current scope is preferential
      const str = 'Oh, and you re a millenial ' + firstName;
         console.log(str);

         function add(a,b){
             return a + b;
         }
         //Reassigning  outer scope's
         output = 'new Output!' //새로 정의한게 아니라 원래의 것을 재정의 한거임 
     }
     //console.log(str);
     console.log(millenial);
    //  console.log(add(2,3));
    console.log(output);
 }
 printAge();

    return age ; 
}

const firstName = 'Juwon'; // 다른영역에서 정의해서 상관 x
calcAge(1991);
//console.log(age); Error 
//printAge(); Error */

//Variables
console.log(me);
// console.log(job); Error
 //console.log(year);Error

var me = 'Jonas';
let job = 'teacher';
const year =- 1991;

//Functions
console.log(addDec1(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3)); 


function addDec1(a,b){
    return a + b;
}

const addExpr = function(a,b){ //var로 해도 같은 결과가 나온다 그이유는 
    //var자체가 undefined라서
    return a+b;
}

const addArrow = (a,b) => a+b;

//Example
if (!numProducts) deleteShopping();

var numProducts =10 ; // not number but undefined 

function deleteShopping(){
    console.log('All products deleted!')
}





