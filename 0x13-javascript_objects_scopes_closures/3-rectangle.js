#!/usr/bin/node
// JS script to define a class, initialize values if positive integer
class Rectangle {
  constructor (w, h) {
    if (w <= 0 || h <= 0 || w === undefined || h === undefined) {
      return this;
    } else {
      this.width = w;
      this.height = h;
    }
  }
}
print () {
    for (let count = 0; count < this.height; count++) {
      console.log('X'.repeat(this.width));
    }
  }
}
module.exports = Rectangle;
