let iceCreamFlavors = [
  "Chocolate",
  "Strawberry",
  "Vanilla",
  "Pistachio",
  "Neapolitan",
];
/*console.log(iceCreamFlavors[0]);

iceCreamFlavors[2] = "Banana";
console.log(iceCreamFlavors);

iceCreamFlavors.push("Apple");
console.log(iceCreamFlavors);

console.log(iceCreamFlavors.length);

delete iceCreamFlavors[iceCreamFlavors.length - 1];
console.log(iceCreamFlavors);

iceCreamFlavors[iceCreamFlavors.length - 1] = "Pear";
console.log(iceCreamFlavors);

iceCreamFlavors.splice(1, 1);
console.log(iceCreamFlavors);

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
}

iceCreamFlavors.forEach((flavour) => console.log(flavour));
iceCreamFlavors.forEach((flavour, index) =>
  console.log(`${flavour}, ${index}`)
);

let numbers = [1, 2, -1, 4, 5];
for(let i = 0; i< numbers.length; i++) {
  if (numbers[i] < 0) {
    break;
  }
  console.log(numbers[i]);
}*/

iceCreamFlavors.find((flavor) => flavor === "Chocolate");
console.log(iceCreamFlavors.find((flavor) => flavor === "Chocolate"));
console.log(iceCreamFlavors.find((flavor) => flavor === "Apple"));

let iceCreamFlavorsNew = [
  { name: "Chocolate", type: "Chocolate" },
  { name: "Strawberry", type: "fruit" },
  { name: "Vanilla", type: "Vanilla" },
  { name: "Pistachio", type: "Nuts" },
  { name: "Neapolitan", type: "Chocolate" },
  { name: "Mint Chip", type: "Chocolate" },
];
//console.log(iceCreamFlavorsNew.filter((flavor) => flavor.type === "Chocolate"));

//console.log(iceCreamFlavorsNew.some((flavor) => flavor.type === "Nuts"));

//console.log(iceCreamFlavorsNew.filter((flavor) => flavor.type !== "Chocolate"));

iceCreamFlavorsNew.map((flavor) => {
  flavor.price = 1;
  return flavor;
});

console.log(iceCreamFlavorsNew);

const numbers = [15, 56, 14, 8, 89];
let sum = numbers.reduce(function (acc, curr) {
  return acc + curr;
}, 0);
console.log(sum);

const numbersNew = [15, 56, 14, 8, 89, 100];
let sumNew = numbersNew.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sumNew);
