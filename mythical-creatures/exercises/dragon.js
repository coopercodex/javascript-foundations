class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.meal = 0;
  }

  greet() {
    return `Hi, ${this.rider}!`
  }

  eat() {
    this.meal += 1;
    if (this.meal >= 3) {
        this.hungry = false;
    }
  }
}


module.exports = Dragon;
