function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
const student1 = new Student('Alice', 'female', 25);
const student2 = new Student('Jack', 'male', 24);
const student3 = new Student('Helen', 'female', 26);
const student4 = new Student('Andrew', 'male', 27);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};
student1.setSubject('Geo');
student2.setSubject('Biology');
student3.setSubject('History');
student4.setSubject('Chemistry');

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark);
  } else {
    this.marks.push(mark);
  }
};
student1.addMark(3);
student1.addMark(4);
student1.addMark(3);
student2.addMark(4);
student2.addMark(5);
student2.addMark(5);
student3.addMark(2);
student3.addMark(3);
student3.addMark(3);
student4.addMark(5);
student4.addMark(4);
student4.addMark(5);


Student.prototype.addMarks = function(...marks) {
  if(this.marks === undefined) {
    this.marks = [];
  }
  this.marks.push(...marks);
}
student1.addMarks(4,2,5);
student2.addMarks(4,4,3);
student3.addMarks(2,2,2);
student4.addMarks(5,5,5);

Student.prototype.getAverage = function() {
  if (this.marks === undefined){
    return 0;
  }
  let sum = 0;
for(let i = 0; i < this.marks.length; i++){
  sum+=this.marks[i];
}
let avg = sum / this.marks.length;
return avg;
}
console.log(student1.getAverage());

Student.prototype.exclude = function(reason){
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
student3.exclude("low grades")
console.log(student3)