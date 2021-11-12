class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    let newState = (this.state *= 1.5);
    if (newState > 100) {
      return (newState = 100);
    } else {
      newState < 100;
      return newState;
    }
  }

  get state() {
    return this._state;
  }

  set state(state) {
    if (state < 0) {
      this.state = 0;
    } else if (state > 100) {
      this.state = 100;
    } else {
      this._state = state;
    }
  }
}

const sherlock = new PrintEditionItem(
  'Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе',
  2019,
  1008
);
sherlock.state = 45;
//console.log(sherlock);
//console.log(sherlock.fix());

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.type = 'magazine';
  }
}

const natGeo = new Magazine('National Geographic', 2020, 78);
natGeo.state = 100;
// console.log(natGeo.type);

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = 'book';
  }
}

const shining = new Book('Сияние', 'Стивен Кинг', 1977, 447);
shining.state = 53;
//console.log(shining.type)

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = 'novel';
  }
}
const idiot = new NovelBook('Идиот', 'Фёдор Достоевский', 1868, 640);
idiot.state = 28;
//console.log(idiot.type)

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = 'fantastic';
  }
}
const rings = new FantasticBook(
  'Властелин колец: возвращение короля',
  'Дж. Р.Р. Толкиен',
  1955,
  416
);
rings.state = 29;
//console.log(rings.type)

class DetectiveBook extends Book {
  constructor(author,name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = 'detective';
  }
}
const orchid = new DetectiveBook('Чёрная орхидея', 'Джеймс Эллрой', 1987, 512);
orchid.state = 91;
// console.log(orchid.type)

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(key, value) {
    for (let i = 0; i < this.books.length; i++) {
      let book = this.books[i];
      if (book[key] === value) {
        return book;
      }
    }
    return null;
  }
  giveBookByName(bookName){
   const bookToGive = this.findBookBy('name', bookName);
   if (bookToGive === null){
     return null;
   }
   const index = this.books.indexOf(bookToGive);
   this.books.splice(index, 1);
   return bookToGive;
  }
}

const library = new Library('Библиотека им. Белинского');
library.addBook(rings);
library.addBook(orchid);
const daughter = new NovelBook('А.С. Пушкин', 'Капитанская дочка', 1838, 320);
daughter.state = 45;
library.addBook(daughter);
library.addBook(new Magazine('Юный натуралист', 1995, 50));
library.addBook(shining);

library.giveBookByName('Чёрная орхидея');
orchid.state = 28;
orchid.fix();
library.addBook(orchid);

console.log(library);