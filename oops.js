
//1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md//


class Movie {
    constructor(title='',studio='',rating='PG'){
      this.title=title;
      this.studio=studio;
        this.rating=rating;
    }
    
    getPG(movies=[],rating=''){
      return movies.filter((m)=>m.rating === rating);
    }
  }

  let  casionRoyaleMovie = new Movie('Casion Royale', 'Eon Productions', 'PG13');
  let kgf = new Movie ('kgf','Hombale Productions', 'PG');
  const vikram = new Movie ('vikram','Rajkamal Productions ', 'PG13');
  const ponniyinSelvan = new Movie ('PonniyinSelvan','Lyca Productions', 'PG');
  const minions = new Movie ('Minions','Universal Picture Productions', 'R');
  const rrr = new Movie ('RRR','DVV Productions', 'R');
  const joker = new Movie ('Joker','Born Studios Productions', 'PG');
  
  const moviesArray = [casionRoyaleMovie, kgf,vikram, ponniyinSelvan, minions, rrr, joker];

  console.log(kgf.getPG(moviesArray,'R'));
  console.log(kgf.getPG(moviesArray,'PG'));
  console.log(kgf.getPG(moviesArray,'PG13'));



//2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

var Circle =(function () {
  function Circle(radius, color) {
      this.radius = 1.0;
      this.color = "Red";
      if (typeof (radius) !== "undefined") {
          this.radius = radius;
      }
      if (typeof (color) !== "undefined") {
          this.color = color;
      }
  }
  Circle.prototype.getRadius = function () {
      return this.radius;
  };
  Circle.prototype.setRadius = function (radius) {
      this.radius = radius;
  };
  Circle.prototype.getColor = function () {
      return this.color;
  };
  Circle.prototype.setColor = function (color) {
      this.color = color;
  };
  Circle.prototype.toString = function () {
      return "Radius: " + this.radius + " Color: " + this.color;
  };
  Circle.prototype.getArea = function () {
      return (2 * (Math.PI) * this.radius);
  };
  Circle.prototype.getCircumference = function () {
      return (2 * this.radius);
  };
  return Circle;
}());
var c1 = new Circle();
console.log("Constructor c1: " + c1.toString());
var c2 = new Circle(3.5);
console.log("Constructor c2: " + c2.toString());
var c3 = new Circle(2.2, 'Yellow');
console.log("getRadius: " + c3.getRadius());
c3.setRadius(3.3);
console.log("setRadius: " + c3.getRadius());
console.log("getColor: " + c3.getColor());
c3.setColor("Blue");
console.log("setColor: " + c3.getColor());
console.log(c3.toString());
console.log("Area: " + c3.getArea());
console.log("Circumference: " + c3.getCircumference());



//3.Write a "person" class to hold all the details

class person {
    constructor(name ,age, id , qualification, gender) {
       this.name = name;
       this.age = age;
       this.id = id;
       this.qualification=qualification;
       this.gender=gender;
    }
getDetails(){
  return 'person name'+this.name
   return 'person age'+ this.age;
   return 'person id'+ this.id;
   return 'person qualification'+ this.qualification;
  return 'person gender'+ this.gender;
}
}
let details=new person('sree',24,'eb22','msc','female');
console.log(details);




// 4.Write a class to calculate the uber price.


let price=12;
let km=75;
class Uber{
  res(){
    var total=price * km;
    console.log(total);
  }
}
a1=new Uber();
a1.res();





