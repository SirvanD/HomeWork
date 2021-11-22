function pluralizer(count, noun) {
  if (noun == "goose" && count == 1) {
    console.log(`${count} ${noun}`);
  } else if (noun === "goose") {
    console.log(`${count} geese`);
  } else if (count == 1 || noun == "sheep") {
    console.log(`${count} ${noun}`);
  } else {
    console.log(`${count} ${noun}s`);
  }
}

pluralizer(1, "cat");
pluralizer(5, "dog");
pluralizer(0, "horses");
pluralizer(2, "sheep");
pluralizer(10, "goose");
pluralizer(1, "goose");
pluralizer(1, "sheep");
