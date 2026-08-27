// -----export------

// 1- export by Default
// module.exports = function add(a, b) {
//   return a + b;
// }


// 2- export Normally

// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//     return a - b;
//   }

// module.exports = { add, sub };



// <----------Modular Calculator------------>

//1- By Normal Function=>
// function add (a , b) {
//   return a + b;
// };

// function sub (a , b) {
//   return a - b;
// };

// function multiply (a , b) {
//   return a * b;
// };

// function devide (a , b) {
//   if(b === 0) {
//     return ("Can not Devide by Zero!");
//   }
//   return a / b;
// };

// module.exports = {add, sub, multiply, devide};


// 2- By Arrow Function =>

  // add = (a , b) => {
  //   return a + b;
  // };

  // sub = (a, b) => {
  //   return a - b;
  // };

  // multiply = (a, b) => {
  //   return a * b;
  // };

  // devide = (a , b) => {
  //   if(b === 0) {
  //     return ("Can not Devide by Zero!");
  //   };
  //   return a / b;
  // };

  // module.exports = {add, sub, multiply, devide};


  function add (a,b) {
    return a + b;
  }; 
  sub = (a,b) => {
    return a - b;
  };
  function devide (a,b) {
    return a/b;
  };
  multiply = (a,b) => {
    return a * b;
  };
  module.exports = {add, sub, devide, multiply};