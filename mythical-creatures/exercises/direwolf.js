class Direwolf {
  constructor(wolfName, wolfHome, wolfSize) {
    this.name = wolfName;
    this.home = wolfHome || 'Beyond the Wall';
    this.size = wolfSize || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }
  protect(personName) {
    if (this.home === personName.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(personName);
      personName.safe = true;
      this.huntsWhiteWalkers = false;
      return this.starksToProtect;
    } else {
      return [];
    }
  }
  leave(personName2) {
    this.starksToProtect = [];
    personName2.safe = false;
  }





}





module.exports = Direwolf;