//a.Data types
//string;
let color = "Black";
let name = "Jhandie"
//Number;
let length = 15;
let width = 21;

//Booleans;
let x = true;
let y = false;

//object;
const Cellphones = {firstName: "Salixes", lastName: "pagoy"};
const CellphoneBrand =["huawie","itel","infinix"];

//b. Arithmetic and Logical Operators
//Addition
let add = 2 + 5;

//Subtraction
let sub = 7 - 3;

//Multiplacation
let mul = 11 * 3;

//Division
let div = 11 / 2 ;

//Exponentiation
let exp = 4 ** 3;

//Modulu
let mod = 9 % 3;

//Increment
x++;
//Decrement
y--;

//c. Conditional Statements
//i. If else
let number = 95;
if(number >75 ){
     Cellphone = "BuyNow";
}else{
    Cellphone = "dontBuy";
}
console.log(Cellphone);

//ii.Switch
let z = 1 % 2;
switch (z){
    case 0:
        yow = "Even"
        break;
    case 1:
      yow = "odd"
       break;
       
    default:
        yow= "No Value"
}
console.log(yow);

//d. Loops
//i. For
for(let b =0; b< 5; b++){
    console.log(b);
}

//ii. For in
const  babies =["ken","kenzoui","kendra"];
let bab = "";
for(let c in babies){
    bab += babies[c];
    console.log(babies);
}

//iii. For of
const lastnames = ["sums", "chui", "rim"];
let las = "";
for(let m of lastnames){
    las += m;
    console.log(m);
}



//iv.For while
let j = 0;
while(j < 10){
    j++;
    console.log(j);
}
//e.functional Programming
//i. odd or even
let o = 0;
while (o < 5){
    o++;
let l = o % 2;
    switch (l){
       case 0:
         ak = " Even"
          break;
       case 1:
        ak = "odd"
         break;
        default:
        ak = "No Value"
    }
console.log(o + ". " + o + " is " + ak);
}

//ii.determine prime numbers
let nums =34;
if (nums == 0 || nums == 1){
    let flag= true;
}
for (let d = 2; d<= nums / 2; p++){
    flag = false;
    break;
}
if (!flag){
    console.log(nums + " is prime ");
}else{
    console.log(nums + " is not prime");
}

//iii. determine a string if it is a palindrome

function ispalindrome(saliz){
    let t = saliz.length -1
    for (let i = 0; i< saliz.length / 2; i++){
        if (saliz [i] !=saliz [t]){
            return false;
        }
        t--;
    }
    return true;
}
let saliz1 = "mug";
let saliz2 = "glass";
let saliz3 = "plate";

console.log(ispalindrome(saliz1));
console.log(ispalindrome(saliz2));
console.log(ispalindrome(saliz3));