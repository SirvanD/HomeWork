var inventory = [
  { type: "machine", value: 5000 },
  { type: "machine", value: 650 },
  { type: "duck", value: 10 },
  { type: "furniture", value: 1200 },
  { type: "machine", value: 77 },
];

function getTotalValue(inventoryArray) {
  return inventoryArray
    .filter((item) => item.type == "machine")
    .reduce((totVal, item) => {
      totVal + item.value;
    }, 0);
}

function getExpensiveMachines(inventoryArray) {
  return inventoryArray
    .filter((item) => item.type === "machine")
    .filter((item) => item.value > 500);
}

console.log(getExpensiveMachines(inventory));
console.log(getTotalValue(inventory));
