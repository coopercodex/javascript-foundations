class Centaur {
  constructor(newUser) {
    this.name = newUser.name;
    this.breed = newUser.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
  }

  shootBow() {
    this.cranky += 1;
    if (this.cranky >= 3) {
      this.cranky = true;
    } else if (this.cranky < 2 && this.standing) {
      return 'Twang!!!';
    } else {
      return 'NO!';
    }
  }

  run() {
    this.cranky += 1;
    if (this.cranky >= 3) {
      this.cranky = true;
    } else if (this.cranky < 2 && this.standing) {
      return 'Clop clop clop clop!!!'
    } else {
      return 'NO!'
    }
  }

  sleep() {
    if (this.standing) {
      return 'NO!';
    } else {
      this.cranky = false;
      return 'ZZZZ';
    }
  }

  layDown() {
    if (this.standing) {
      this.standing = false;
      this.layingDown = true;
    }
  }

  standUp() {
    if (this.layingDown) {
      this.layingDown = false;
      this.standing = true;
    }
  }
  drinkPotion() {
    this.cranky = false;
    if (this.layingDown === true) {
      return 'Not while I\'m laying down!';
    }
  }
}

module.exports = Centaur;