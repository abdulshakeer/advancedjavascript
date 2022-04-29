// Prototype in javascript
let animal1 = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal1; // (*)
  
  // we can find both properties in rabbit now:
  alert(rabbit.eats); // true (**)
  alert(rabbit.jumps);
let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// walk is taken from the prototype
rabbit.walk(); // Animal walk
//  Object
var User = function(firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course Count is : ${this.courseCount}`);
    }
}

// Prototype
User.prototype.getFirstName = function(){
    console.log(` Your Fist Name is ${this.firstName}`);
};

var shakir = new User("Shakir",2);
console.log(shakir);
shakir.getCourseCount();
//shakir.getFirstName();

var charan = new User("charan",1);
charan.getCourseCount();

// But In case firstName not exist then it will through a error like undefined
// Inorder to overcome this Problem we are using hasOwnProperty()
if(shakir.hasOwnProperty("firstName")){
    shakir.getFirstName();
}

// Example 2
const person = {
    alive:true,
}
const musician = {
    plays:true,
}

musician.__proto__() = person;
console.log(musician.alive);
console.log(musician.plays);

// Or We can also use

Object.setPrototypeOf(musician,person);
console.log(musician.alive);
console.log(musician.plays);