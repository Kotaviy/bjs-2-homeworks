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
    return parseCount(text1);
  }
  catch(err) {
    return err;
  }
}
console.log(validateCount('34'));



class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (
        a + b < c ||
        b + c < a ||
        c + a < b
      )
      {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  getPerimeter() {
    let p = this.a + this.b + this.c;
    return p;
  }
  getArea() {
    let semiPer = this.getPerimeter() / 2;
    let s = Math.sqrt(
      semiPer * (semiPer - this.a) * (semiPer - this.b) * (semiPer - this.c)
    ).toFixed(3);
    s = Number(s);
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