// console.log('hello Monu Pal bro')

// var naming rules:- 1. can not be a resevered keyword, meaningful name , can not start with number, can not cantain space or "-" ( 'hyphen'),

//  let a = 5;
//  console.log(a);
//   var lastName = 'Monu Pal';
//   console.log(lastName);
//    let lastFol = 'bhulu';
//    console.log(lastFol);
//     lastFol = 9;
//    console.log(lastFol);


   // Datatypes:- 1. string, 2. Number, 3. Boolean , 4. Null , 5. Undefined, 6. Symbol
   // Reference Type: - 1. Objects , 2. Arrays , 3.Functions
    // eg of oobjects :- 
    // let person = {
    //     firstName: 'Monu'
    //     age:24
    // };
     
    // Array :- it is used to contain a list of items.


    // Operators : - 
    // 1. Arithmetic :- +,-,*,/,%( renainder operator), (**)Modulus operator Like = x^y= x**y
    // 2. Assignment
    // 3. Comparison
    // 4. Bitwise
    // 5. Logical
 
    // Arithmetic operator
    //  let a = 1;
    //  let b = 3;
    //  let c = a+b;
    //  console.log(c);

    //  let a = 10;
    //  let b = 3;
    //  let c = a-b;
    //  console.log(c);

    // let a = 10;
    // let b = 3;
    // let c = a*b;
    // console.log(c);

    // let a = 10;
    // let b = 3;
    // let c = a/b;
    // console.log(c);


    // let a = 10;
    // let b = 3;
    // let c = a%b;
    // console.log(c);    


    // let a = 10;
    // let b = 3;
    // let c = a**b;
    // console.log(c);    


     // Pre/Post  Inc/dec operator : -
    //   ++x; = Preincrement it has two parts 
    //   1. firstly increase the value 
    //   2. secpndly use the value
    //   eg:- let x=10;
    //    console.log(++x);
    //     so it gives the answer = 11,  

    //     x++; = Postincrement it has two parts 
    //     1. firstly use the value
    //     2. secondly increase the value 
    //   eg:- let x=10;
    //    console.log(x++);
    //     so it gives the answer = 10,
    //     and then again console it so it givea the 11,

//    same and vice versa for pre-decrement operator;

// Assignment operator:- 
// eg:-
// let x = x + 5;
// so we write this  like  x+=5;
//  let a = a * 3;
//  so we write this like a*=3;

// Camparison operator:- 
// . >
// . <
// . >=
// . <=
// . ===
// . !==
//  console.log( 5>3);
//  console.log( 5<3);
//  console.log( 5>=3);
//  console.log( 5<=3);
//  console.log( 5===3);
//  console.log( 5!==3);

// Equality opoerator = 
// 1. loose Equality (==) , yaha prr only value same ho chaiye 
// 2. strict equality (===) yaha prr valur or data dono same honi chiaye

// Ternary operator :- its also conditional opertor. 
 // Eg
//   let age = 37;
//   let theStatus = (age >= 18) ? 'yes vote' : 'not vote';
//   console.log(theStatus);

// Logical Operator
// . AND = && IN WHICH ALL CONDITION SHUOLD BE TRUE SO THEY GIVE TRUE OTHERWISE ITS GIVES FALSE
// . OR  = || IN EHICH ONLY ONE CONDITION SHOULD BE TRUE SO IT GIVES THE TRUE
// . NOT = ! IT MAKE THE TRUE TO FALSE , OR FALSE TO TRUE. 

// WITH Non-Boolean :- 
// . Concept of False and Truth
// | falsy | | Truthy |
// | undefined , null , 0 , false, Nan |  |  anything that is not falsy like 'Monu |


// Bitwise operator : - 
// . Bitwise AND = &
    //  |A |   |B |  |o/p|
    //  |0 |   |0 |  |0 |
    //  |0 |   |1 |  |0 |
    //  |1 |   |0 |  |0 |
    //  |1 |   |1 |  |1 |

// . Bitwise OR = |
    //  |A |   |B |  |o/p|
    //  |0 |   |0 |  |0 |
    //  |0 |   |1 |  |1 |
    //  |1 |   |0 |  |1 |
    //  |1 |   |1 |  |0 |  


 // Operator Precedence :- 
//  for solving ths type of equation = 
//  let c = a+b*c/c;     in which we use the bracket for easy solving step in that type of equation


// Control Statements :- 
// 1. is-else
// Example:- 
//  let marks = 60;
//  if(marks >= 90){
//     console.log('A');
//  }
//  else if(marks >= 80){
//  console.log('B');
//  }
// else if (marks >= 70){
//     console.log('C');
// }
// else if(marks >= 60){
//     console.log('D');
// }
// else {
// console.log('E');
// }
// 2. Switch Case 
//  let num = 3;
//  switch(num){
//     case 1: console.log('A');
//     break;
//     case 2: console.log('B');
//     break;
//     case 3: console.log('C');
//     break;
//     case 4: console.log('D');
//     default: console.log('E');
//  }


// Loops :-  it use for repetion of task we use the loops 
// 1. For loop :- we use it for same repaetion of task,
//  for (let i=0; i<5; i=i+1){
//     console.log(i);
//  }
// 2. while loop
//  let i = 0;
//  while ( i < 5){
//     console.log(i);
//     i++;
//  }
// 3. Do-while loop
// let y=0;
// do{
//     console.log(y);
//     y++;
// }while(y<10);
// 4. what is an infinite loop

// 5. For-in loop
//  let Rectangle = {
//     length:2,
//     breadth:4,
//  };
//   for (let key in Rectangle){
//     // keys are refelected by variable
//     // value are refelected by recatangle[key]
//     console.log(key, Rectangle[key]);
//   }

//   let Rectangle1 = {
//     length:3,
//     breadth:5,
//   };
//   for (let key in Rectangle1){
//     // console.log(key);
//     console.log(key, Rectangle1[key]);
//   }
// 6. For-of loop = iterations array , map
let Rectangle1 = {
    length:3,
    breadth:5,
  };
  for (let key of Object.keys(Rectangle1)){
  console.log(key);
  }


