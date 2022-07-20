class Magician {
  constructor(castersName,string) {
    this.name = `The Great ${castersName.name}`;
    this.assistant = castersName.assistant;
    this.favoriteAccessory = castersName.clothing || 'top hat';
    this.performIncantation = function kazaam(string) {
      return string.toUpperCase() + '!';
    };
    this.confidencePercentage = 10;
  }
  performTrick() {
    this.confidencePercentage += 10;
    if (this.favoriteAccessory === 'top hat') {
     var string = `pull rabbit from ${this.favoriteAccessory}`
     return string.toUpperCase();
    } else if (this.favoriteAccessory != 'top hat') {
      var string2 = 'pull dove from sleeve';
      return string2.toUpperCase();
    } 
    }
    
  
  performShowStopper() {
    if (this.confidencePercentage >= 100 && this.assistant === true) {
      return 'WOW! The magician totally just sawed that person in half!';
    } else {
      return 'Oh no, this trick is not ready!';
    }

  }
    } 
  








module.exports = Magician;