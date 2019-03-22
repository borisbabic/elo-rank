"use strict";

class EloRank {
  constructor(k, l) {
    this.k = k || 32;
    this.l = l || 400;
  }

  setKFactor(k) {
    this.k = k;
  }
  getKFactor() {
    return this.k;
  }

  setLFactor(l) {
    this.l = l;
  }
  getLFactor() {
    return this.l;
  }

  getExpected(a, b) {
    return 1/(1+Math.pow(10,((b-a)/this.l)));
  }
  updateRating(expected, actual, current) {
    return Math.round(current+ this.k*(actual-expected));
  }
}

module.exports = EloRank;
