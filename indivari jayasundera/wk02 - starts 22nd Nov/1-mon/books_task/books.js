var books = [
  {
    title: "Jane Eyre",
    author: "Emily Brontë",
    alreadyRead: "yes",
  },
  {
    title: "Nine lives",
    author: "Daniell Steel",
    alreadyRead: "no",
  },
  {
    title: "Sphere",
    author: "Michael Crichton",
    alreadyRead: "yes",
  },
];

var index = 0;

while (index < books.length) {
  if (books[index].alreadyRead === "yes") {
    console.log(
      `You already read ${books[index].title} by ${books[index].author}`
    );
  } else {
    console.log(
      `You still need to read ${books[index].title} by ${books[index].author}`
    );
  }

  index++;
}
