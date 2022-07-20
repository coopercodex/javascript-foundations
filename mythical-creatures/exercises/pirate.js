class Pirate {
  constructor(matesName, job) {
    this.name = matesName;
    this.job = job || 'scallywag';
    this.cursed = false;
    this.booty = 0;
  }

  robShip() {
    this.booty += 100;
    if (this.booty <= 500) {
      return 'YAARRR!';
    } else if (this.booty >= 500) {
      this.booty = 500;
      this.cursed = true;
      return 'ARG! I\'ve been cursed!';
    } else if (this.booty > 300) {
      return liftCurse();
    }
  }
  liftCurse() {
    if (this.cursed === false) {
      return 'You don\'t need to lift a curse!';
    }
    if (this.booty -= 300) {
      this.cursed = false;
      return 'Your curse has been lifted!';
    }
  }
}


module.exports = Pirate;