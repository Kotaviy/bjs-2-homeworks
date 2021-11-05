class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    return (this.state *= 1.5);
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

const sherlock = new PrintEditionItem('Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе', 2019, 1008);
sherlock.state = 30;
// console.log(sherlock.state);

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state) {
    super (name, releaseDate, pagesCount, state);
    this.type = "magazine";
  }
}

const natGeo = new Magazine ("National Geographic", 2020, 78);
natGeo.state = 100;
// console.log(natGeo.type);

class Book extends PrintEditionItem {
  constructor(name, author, releaseDate, pagesCount, state) {
    super (name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = "book";
  }
}
const shining = new Book ("Сияние", "Стивен Кинг", 1977, 447);
shining.state = 53;
//console.log(shining.type);

class NovelBook extends Book {
  constructor(name, author, releaseDate, pagesCount, state) {
    super (name, author, releaseDate,pagesCount,state);
    this.type = "novel";
  }
}
const idiot = new NovelBook ("Идиот", "Фёдор Достоевский", 1868, 640);
idiot.state = 76;
// console.log(idiot.type)

class FantasticBook extends Book {
  constructor(name, author, releaseDate, pagesCount, state) {
    super(name, author, releaseDate, pagesCount,state);
    this.type = "fantastic";
  }
}
const rings = new FantasticBook ("Властелин колец: возвращение короля", "Дж. Р.Р. Толкиен", 1955, 416);
rings.state = 68;
// console.log(rings)

class DetectiveBook extends Book {
  constructor(name, author, releaseDate, pagesCount, state) {
    super (name, author, releaseDate, pagesCount, state);
    this.type = "detective";
  }
}
const orchid = new DetectiveBook ("Чёрная орхидея", "Джеймс Эллрой", 1987, 512);
// console.log(orchid)