class Hobbit {
  constructor(hobbitsName) {
    this.name = hobbitsName.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = (this.name === 'Frodo');
  }

  celebrateBirthday() {
    this.age += 1;
    if (this.age === 33) {
       this.adult = true;
    } else if (this.age === 101){
      this.old = true ;
    } 
    }
    getRing() {
      if (this.hasRing) {
        return 'Here is the ring!';
      } else {
        return 'You can\'t have it!'
      }
    }
  }










module.exports = Hobbit;