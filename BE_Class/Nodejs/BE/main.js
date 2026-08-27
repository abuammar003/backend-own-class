// const calc = require('./calculator.js');

// console.log(calc.add(2, 2))
// console.log(calc.sub(30, 2))


// const stdData = require("./moduleExpImp.js");

// const Data = stdData.data;
// for(let i = 0; i < Data.length; i++) {
//     console.log(Data[i]);
// }


// <--------------Modular Calculator--------------->

// const modularCalc = require("./calculator");

// console.log("Modular Calculator:");
// const num1 = 45;
// const num2 = 10;

// console.log (`Addition: ${modularCalc.add(num1, num2)}`);
// console.log(`Substraction: ${modularCalc.sub(num1, num2)}`);
// console.log(`Multiply: ${modularCalc.multiply(num1, num2)}`);
// console.log(`Devide: ${modularCalc.devide(num1, num2)}`);


// const modularCalculator = require("./calculator");

// console.log("Mudular Calculator:");
// let num1 = 8;
// let num2 = 31;

// console.log(`Addition ${modularCalculator.add(num1, num2)}`);
// console.log(`Substract ${modularCalculator.sub(num1, num2)}`);
// console.log(`Devide ${modularCalculator.devide(num1, num2)}`);
// console.log(`Multiply ${modularCalculator.multiply(num1,num2)}`);



// <----------List of Student Data By Loops------------>

// const {students, employList} = require("./moduleExpImp");

// const students = require("./moduleExpImp");

// console.log("Students List:");
// students.forEach(item => {
//     console.log(`ID: ${item.id}, Name: ${item.name}, Age: ${item.age}, Course: ${item.course}`);
// });

// const students = require("./moduleExpImp");

// console.log("Students List:");
// students.forEach(item => {
//     console.log(`ID: ${item.id}, Name: ${item.name}, Age: ${item.age}, Course: ${item.course}`);
// });


// // const employList = require("./moduleExpImp");

// console.log("Employ List:");
// employList.forEach(item => {
//     console.log(`ID: ${item.id}, Name: ${item.name}, Age: ${item.age}, Position: ${item.position}`);

// });



// const NumData = require("./moduleExpImp");
//   const numData = NumData.data;  
// console.log("Number List:");
// for(let i = 0; i < numData.length; i++) {
//     console.log(numData[i]);
// };


// const mobileBrand = require("./moduleExpImp");

// console.log("mobileBrands:");

// mobileBrand.forEach(item => {
//     console.log(`ID: ${item.id}, Name: ${item.name}, Company: ${item.company}, Price: ${item.price}`);
// });


// const cars = require("./moduleExpImp");
// console.log("Here is the List of Cars=>");

// cars.forEach((item, index) => {
//         console.log(`${index +1}> Bike-Name: ${item.name}, CC: ${item.CC}, Company: ${item.company}, Price: ${item.price}`);
// });



// function getData(dataId) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("Success");
//         }, 3000);
//     });
// };

// console.log("Fetching Data1...");
// getData(1)
//     .then((res1) => {
//         console.log("Fetching Data2...");
//         return getData(2);
//     })
//     .then((res2) => {
//         console.log("Fetching Data3...");
//         return getData(3);
//     })
//     .then((res3) => {
//         console.log("Fetching Data4...");
//         return getData(4);
//     })
//     .then((res4) => {
//         console.log(res4);
//     })
    

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve(200);
        }, 3000);
    });
};

console.log("Getting Data 1...");
(async function  getAllData() {
    await getData(1);
    console.log("Getting Data 2...");
    await getData(2);
    console.log("Getting Data 3...");
    await getData(3);
    console.log("Getting Data 4...");
    await getData(4);
    console.log("Getting Data 5...");
    await getData(5);
    console.log("Fetching Success!");
})();
// getAllData();