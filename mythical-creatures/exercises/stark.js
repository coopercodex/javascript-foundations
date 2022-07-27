const Direwolf = require("./direwolf");

class Stark {
  constructor(personName) {
    this.name = personName.name;
    this.location = personName.area || 'Winterfell';
    this.safe = false;
  }

  sayHouseWords() {
    if (this.safe === false) {
      return 'Winter is Coming';
    } else {
      return 'The North Remembers'
    }
  }
  callDirewolf(direWolfName) {
    var direWolfName = new Direwolf(direWolfName);
    if (this.location && direWolfName.home != this.location) {
      direWolfName.home = this.location;
      direWolfName.starksToProtect.push(this);
      this.safe = true;
    }
    return direWolfName;
  }
}




module.exports = Stark;