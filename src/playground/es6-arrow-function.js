// function square(x) {
//   return x * x;
// };

// // const squareArrow = (x) => {
// //   return x * x;
// // }

// const squareArrow = (x) => x * x;



// console.log(squareArrow(6));
// console.log(square(8));

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// }

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Timothy Jason Frederick Ruggles'));

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}

console.log(add(55, 1));

const user = {
  name: 'T.J.',
  cities: ['Ottawa', 'Toronto', 'Montreal'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [0, 2, 5, 10],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  }
};

console.log(multiplier.multiply());