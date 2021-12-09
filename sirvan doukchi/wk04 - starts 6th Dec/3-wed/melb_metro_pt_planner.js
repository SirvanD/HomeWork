lines = [
  (almein = [
    "Flinders Street",
    "Richmond",
    "East Richmond" - "Burnley",
    "Hawthorn",
    "Glenferrie",
  ]),
  (glenWaverly = [
    "Flagstaff",
    "Melbourne Central",
    "Parliament",
    "Richmond",
    "Kooyong",
    "Tooronga",
  ]),
  (sandringham = [
    "Southern Cross",
    "Richmond",
    "South Yarra",
    "Prahran",
    "Windsor",
  ]),
];

originInput = "Flinders Street";
destInput = "Glenferrie";

const almeinSearch = (stop) => {
  if (almein.includes(stop)) {
    return true;
  } else return false;
};
const glenWaverlySearch = (stop) => {
  if (glenWaverly.includes(stop)) {
    return true;
  } else return false;
};
const sandringhamSearch = (stop) => {
  if (sandringham.includes(stop)) {
    return true;
  } else return false;
};
// co'nsole.log(almeinSearch("Hawthorn"));
// console.log(almeinSearch("Prahran"));
// console.log(almeinSearch("Richmond"));

const findOrigin = (origin) => {
  lines.forEach(function (line) {
    if (line.includes(origin)) {
      return console.log(line);
    } else return false;
  });
};

console.log(findOrigin("Kooyong"));
