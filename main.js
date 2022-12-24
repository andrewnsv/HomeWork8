"use strict";

/*1) Создайте объект triangle со следующими свойствами: aSide, bSide, cSide.
Создайте метод setValues(), который вызывает функцию prompt и заполняет свойства aSide, bSide, cSide значениями.
Создайте в объекте triangle метод для расчета периметра треугольника.
Создайте в объекте triangle метод, который проверяет является ли треугольник
равносторонним:
Выведите информацию о созданном треугольнике (включая результат выполнения
всех методов) в консоль.
 */

const triangle = {
  aSide: 0,
  bSide: 0,
  cSide: 0,
  setValues: function () {
    this.aSide = +prompt("Enter value for aSide:");
    this.bSide = +prompt("Enter value for bSide:");
    this.cSide = +prompt("Enter value for cSide:");
    return `Сторона а = ${this.aSide} Сторона b = ${this.bSide} Сторона c = ${this.cSide}`;
  },
  getPerimeter: function () {
    let res = this.aSide + this.bSide + this.cSide;
    return `Периметр треугольника = ${res}`;
  },
  isEqualSides: function () {
    if (this.aSide === this.bSide && this.bSide === this.cSide) {
      return "Треугольник равносторонний";
    }
    return "Треугольник неравносторонний";
  },
};

console.log(
  triangle.setValues(),
  triangle.getPerimeter(),
  triangle.isEqualSides()
);

/* 2)Дан объект country и функция format(): */

var country = {
  name: "Ukraine",
  language: "ukrainian",
  capital: {
    name: "Kyiv",
    population: 2907817,
    area: 847.66,
  },
};

function format(start, end) {
  console.log(start + this.name + end);
}

format.call(country, "", ""); // Ukraine
format.apply(country, ["[", "]"]); // [Ukraine]
format.call(country.capital, "", ""); // Kyiv
format.apply(country.capital, ["", ""]); // Kyiv
format.apply({}, ["", ""]); // undefined

/*3) Со звездочкой: реализовать функцию createCalculator, ваш код должен находиться только внутри этой функции, 
таким образом что бы код ниже работал и выдовал в консоль то что написано в коментариях к каждой строке. 
Подсказка: вернуть нужно объект с функциями и использовать замыкания. */

function createCalculator(initialValue) {
  let result = initialValue;

  return {
    add(value) {
      return typeof value !== "number" ? NaN : (result += value);
    },
    sub(value) {
      return typeof value !== "number" ? NaN : (result -= value);
    },
  };
}

const calculator = createCalculator(100);

console.log(calculator.add(10)); // 110
console.log(calculator.add(10)); // 120
console.log(calculator.sub(20)); // 100
console.log(calculator.add("qwe")); // NaN
