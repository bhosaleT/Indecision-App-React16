class Person {
  constructor(name = 'Anonymous', age = 'NA') {
    this.name = name;
    this.age = age;
  }
  getGreetings() {
    return `${this.name} hello how are you!`;
  }
  getDescription() {
    return `This is ${this.name} and his age is ${this.age}`;
  }
}

class Students extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (!!this.hasMajor) {
      description += `And my Major of choice is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasLocation() {
    return !!this.homeLocation;
  }
  getGreetings() {
    let greetings = super.getGreetings();
    if (!!this.homeLocation) {
      greetings += `My location is ${this.homeLocation}`;
    }
    return greetings;
  }
  getDescription() {
    let description = super.getDescription();
    if (!!this.homeLocation) {
      description += `And My Location is  ${this.homeLocation}`;
    }
    return description;
  }
}

const me = new Students('Andrew Mead', 23, 'Computer Science');
console.log(me.hasMajor());
console.log(me.getDescription());

const tejas = new Traveler('Tejas', 23, 'Home');
console.log(tejas.getDescription());
console.log(tejas.getGreetings());