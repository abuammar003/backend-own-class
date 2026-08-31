// Data Types
// Number write as it is 2 + 2
// String write with double (""), single ('') quote and backtick (``)
// Boolean (true, false)
// Null
// Undefined
// Array
// Object
//BigInt

// Variables
// var, let, const

// var can be use for re delclaration and re assignation
// var a = "Hello"
// var a = 'World'
// a = 'Hello World'

// but let can't re declare
// let a = "Hello"
// let a = 'World'
// a = 'Hello World'

// Const can't be Re-Declare & also can't be Re-Assingn
// const a = "Hello"; 

// var x = "My"
// var x = "Name"      <=Re-Declare
// x = "Ammar"        <= Re-Assignation


// Array
// let arr = ["Banana", 10, "Apple", "XYZ", "PQR", "ABC", "MG", true, false, undefined, null]

// console.log(arr[2], arr[8], arr[9], arr[10], arr[3], arr[5])

// let mnq = ["Physics", 15, "Chemistry", 20, "Maths", 25, "Computer", 30]

// console.log(mnq[2], mnq[6])

// var abc = ["hi", "hello", "what", 10, "how"]

// console.log(abc.length, abc[0], abc[2])

// const pqr = ["how", 15, "Now", "Know", 25, "When"]

// console.log(pqr[3], pqr[5], pqr[0])


// Object

// const object = {
//     name: "Ammar",
//     sname: "Shah",
//     address: "Center of MLG"
// }
// console.log(object.name, object.sname)

// let XYZ = {
//     name: "ABCD",
//     sname: "PQRS",
//     address: "Alphabet"
// }
// console.log(XYZ.name, XYZ.sname, XYZ.address)

// let arrObj = [{
//     name: "Ammar",
//     sname: "Shah",
//     address: "Center of MLG"
// }, {
//     name: "XYZ",
//     sname: "Shah",
//     address: "Center of MLG"
// }, {
//     name: "ADMIN",
//     sname: "Shah",
//     address: "Center of MLG"
// }]

// console.log(arrObj[1].name, arrObj[0].sname,)
// console.log(arrObj[2].address)


//Nested Array

// let favMovies = ['Matrix', 'Matrix Reloaded', 'Matrix Revolution', ['Frozen', 'Frozen 2'], ['Tangled', 'Aladdin']];

// console.log(favMovies)

// for (let i = 0; i < favMovies.length; i++) {
// console.log(arrObj[i].name)
// }

// const obj = {
//     name: "Ammar",
//     sname: "Shah",
//     address: "Center of MLG"
// }

// for (let x in obj) {
//     console.log(obj[x])
// }

// conditions if else, switch case, ternary operator
//     if (conditon) {
//         statement
//     }

// let age = Number(prompt("Enter your age"));
// console.log(age)
// if (age == 10) {
//     console.log("Condition is True!!")
// } else {
//     console.log("Condition is False!!")
// }

// const age = Number(prompt("Enter Your Age"));
// console.log(age)
// if (age >= 18) {
//     console.log("Condition is True!!")
// } else {
//     console.log("Condition is False!!")
// }

// let Password = prompt("Enter Your Password")
// console.log(Password)
// if (Password == "ammar003") {
//     console.log("Condition is True!!")
// } else {
//     console.log("Condition is False!!")
// }

// const age = Number(prompt("Enter Your Age"));
// if (age != 2) {
//     console.log("Yess Your are kids age!")
// }

// const age = Number(prompt("Enter Your Age"));
// if (age >= 5 && age <= 12) {
//     console.log("You Are Able To Tack Admission In Primary School")
// } else if (age >= 13 && age <= 15) {
//     console.log("You Are Able To Tack Admission In High School")
// } else if (age >= 16 && age <= 17) {
//     console.log("You Are Able To Tack Admission In Junior College")
// } else if (age >= 18 && age <= 20) {
//     console.log("You Are Able To Tack Admission In Senior College")
// } else if (age >= 21 && age <= 22) {
//     console.log("You Are Able TO Tack Admission In Masters Degree")
// } else if (age >= 23 && age <= 30) {
//     console.log("You Are Able TO Tack Admission In Post Graduation")
// } else {
//     console.log("Sorry You Are Not Able To Tack Admission")
// }
                                                        

// let userName = prompt("Enter Your Username")
// let userPass = prompt("Enter Your Password")

// if (userName === "admin" && userPass === "12345") {
//     console.log("User Valid!!")
// } else {
//     console.log("User Invalid!!")
// }

// const email = prompt("Enter Your email")
// const password = prompt("Enter Your Password")

// if (email === "zebronics123@gmail.com" && password === "pass@123") {
//     console.log("Sign Up Competed!!")
// } else {
//     console.log("Check Your email OR password!!")
// }


//Switch Case
// let day = new Date().getDay();
// console.log(day)
// switch (day) {
//   case 0:
//     console.log("Sunday")
//     break;
//   case 1:
//     console.log("Monday")
//     break;
//   case 2:
//     console.log("Tuesday")
//     break;
//   default:
//     console.log("Nothing")
//     break;
// }

let month = new Date().getMonth();
console.log(month)
switch (month) {
    case 0:
        console.log("January")
        break;
    case 1:
        console.log("February")
        break;
    case 2:
        console.log("March")
        break;
    case 3:
        console.log("April")
        break;
    case 4:
        console.log("May")
        break;
    case 5:
        console.log("June")
        break;
    case 6:
        console.log("July")
        break;
    case 7:
        console.log("August")
        break;
    case 8:
        console.log("September")
        break;
    case 9:
        console.log("October")
        break;
    case 10:
        console.log("November")
        break;
    case 11:
        console.log("December")
        break;
    default:
        console.log("Nothing")
        break;
};




