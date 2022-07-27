const Victim = require("./victim");

class Werewolf {
  constructor(wolfsName) {
    this.name = wolfsName;
    this.form = 'human';
    this.hungry = false;
  }

  completeTransformation() {
    if (this.form === 'human') {
      this.form = 'wolf';
      this.hungry = true;
      return "Aaa-Woooo!";
    } else if (this.form === 'wolf') {
      this.form = 'human';
      this.hungry = false;
      return 'Where are I?';
    }
  }

  eatVictim(personName) {
    if (this.form === 'human') {
      return `No way am I eating ${personName.name}, I'd like a burger!`
    } else if (personName.alive === true) {
      personName.alive = false;
      this.form = 'human';
      return `Yum, ${personName.name} was delicious.`;
    }
  }
}




module.exports = Werewolf;