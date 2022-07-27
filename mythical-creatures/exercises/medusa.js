var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(userName) {
    this.name = userName;
    this.statues = [];
  }
  gazeAtVictim(human) {
    var human = new Statue(human.name);
    if (this.statues.length < 3) {
      this.statues.push(human);
    } else {
      var freed = this.statues.splice(0, 1);
      var freePerson = new Person(freed[0].name)
      this.statues.push(human);
      freePerson.mood = 'relieved';
      return freePerson;
    }
  }
}




module.exports = Medusa;
