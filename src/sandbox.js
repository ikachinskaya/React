/* 
Арность - количество аргументов функции 
Каррирование - процесс уменьшения арности функции */

function sum(a, b, c) {
  return a + b + c;
}

console.log(`sum 1 2 3 `, sum(1, 2, 3));

function curriedSum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const withFirstNumber = curriedSum(1);
const withSecondNumber = withFirstNumber(2);
console.log(`curried sum 1 2 3:`, withSecondNumber(3));
console.log(`curried sum одним вызовом:`, curriedSum(1)(2)(3));
//===================================

function countPrice(price, amount, discount) {
  return price * amount - price * amount * discount;
}
console.log(countPrice(100, 2, 0.1));

function curriedPrice(price) {
  return function (amount) {
    return function (discount) {
      return price * amount - price * amount * discount;
    };
  };
}

const curriedPriceArrow = (price) => (amount) => (discount) =>
  price * amount - price * amount * discount;

const withPrice100 = curriedPrice(100);
const withAmount5AndPrice100 = withPrice100(5);
const result = withAmount5AndPrice100(0.2);
const result2 = withAmount5AndPrice100(0.98);

console.log(result);
console.log(result2);
