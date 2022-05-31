export default class User {
    constructor(name) {
      this.name = name;
      console.log(this.name)
    }
  }
  
  export function sayHi(user) {
    alert(`Hello, ${user}!`);
  }