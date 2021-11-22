parseCount = (text) => {
  const digit = Number.parseInt(text);
  if (Number.isNaN(digit)) {
    throw new Error ('Невалидное значение');
  }
  return digit;
}
console.log(parseCount('123'));

validateCount = (text1) => {
  try {
    parseCount(text1);
  }
  catch(err) {
    return err;
  }
  return parseCount(text1);
}
console.log(validateCount('34'));



class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (
        this.a + this.b < this.c ||
        this.b + this.c < this.a ||
        this.c + this.a < this.b
      )
      {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }
  getArea() {
    let semiPer = this.a + this.b + this.c / 2;
    let s = Math.sqrt(
      semiPer * (semiPer - this.a) * (semiPer - this.b) * (semiPer - this.c)
    );
    s = s.toFixed(3);
    return s;
  }
}
const myTriangle = new Triangle(2,4,4);
myTriangle.getPerimeter();
myTriangle.getArea();

function getTriangle(a,b,c){
  try{
    return new Triangle(a,b,c)
  }
  catch(err) {
    return {
      getPerimeter(){
        return 'Ошибка! Треугольник не существует'
      },
      getArea(){
        return 'Ошибка! Треугольник не существует'
      }
    }
  }
}
let triangle = getTriangle(2,3,6);
myTriangle1.getPerimeter();
myTriangle1.getArea();