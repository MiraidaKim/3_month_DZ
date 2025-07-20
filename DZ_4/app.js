
const numbers = [140, 45, 12, 56, 25, 89, 10, 4, 84, 14];

const romanNumbers = numbers.map((num) => roman.toRoman(num));
console.log( romanNumbers);


const fruits = numbers.map((num) => (num % 2 === 0 ? "🍌" : "🍒"));
console.log( fruits);


const cars = [
  "Toyota", "honda", "FORD", "Chevrolet", "bmw", "Mercedes-Benz",
  "audi", "TESLA", "Nissan", "volVo", "Kia", "HYUNDAI", "JeEp", "subaru", "PeuGeOt"
];

const carWithFlags = cars.map((car) => {
  const carNameSmall = car.toLowerCase();

  if (["toyota", "honda", "nissan", "subaru"].includes(carNameSmall)) {
    return `${car} 🇯🇵`;
  }

  if (["ford", "chevrolet", "tesla", "jeep"].includes(carNameSmall)) {
    return `${car} 🇺🇸`;
  }

  if (["bmw", "audi", "mercedes-benz", "volvo"].includes(carNameSmall)) {
    return `${car} 🇩🇪`;
  }

  if (["kia", "hyundai"].includes(carNameSmall)) {
    return `${car} 🇰🇷`;
  }

  if (["peugeot"].includes(carNameSmall)) {
    return `${car} 🇫🇷`;
  }

});

console.log(carWithFlags);


const shortCars = cars.filter((car) => car.length <= 4);
console.log( shortCars);