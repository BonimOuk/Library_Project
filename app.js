console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");
class Book {
  constructor(id = 0, title = "", author = "", read = true) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
  }
}
class Library {
  bookCount = 0;
  books = [];

  markRead(checkbox, id) {
    for (book of books) {
      if ((book.id = id)) {
        book.read = true;
      } else {
        book.read = false;
      }
    }

    checkbox.checked = true;
    checkbox.disabled = true;
  }
  addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const read = document.getElementById("read").checked;

    let book = new Book(this.bookCount, title, author, read);
    this.books.push(book);

    let tableRow = document.createElement("tr");

    let titleColumn = document.createElement("td");
    titleColumn.innerText = title;

    let authorColumn = document.createElement("td");
    authorColumn.innerText = author;

    let readColumn = document.createElement("td");

    // This block of codes are here for?
    let readCheckbox = document.createElement("input");
    readCheckbox.type = "checkbox";
    readCheckbox.checked = read;
    readCheckbox.disabled = read;

    readCheckbox.addEventListener("click", markRead(readCheckbox, id));

    readColumn.appendChild(readCheckbox);
    tableRow.appendChild(titleColumn);
    tableRow.appendChild(authorColumn);
    tableRow.appendChild(readColumn);

    let tbody = document.getElementById("tbody");
    tbody.appendChild(tableRow);

    this.bookCount++;
  }

  // Optional: Clear Input Fields
  clearInput() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("read").unchecked;
  }
}

let library = new Library();

document.getElementById("submitButton").onclick = () => library.addBook();
