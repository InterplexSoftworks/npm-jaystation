module.exports = function (min,max) {
    return Math.floor(Math.random() * (min - max) + min)
  }