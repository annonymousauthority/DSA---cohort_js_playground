// const sum = main(12)(13)(14)(15)(16)(17)(18)(19)(20)(21);
function main(a) {
  currentSum = a;
  function c(b) {
    currentSum += b;
    return c;
  }
  c.toString = function () {
    return currentSum;
  };
  return c;
}

sayHiDeclared();
function sayHiDeclared() {
  console.log("Hi");
}

sayHiExpressed();
let sayHiExpressed = function () {
  console.log("Hi");
};
