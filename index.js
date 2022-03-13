const randomNumberGenerator = require('./penis.js'); //assuming its on the same folder as index.js

exports.GayPercent = function() {
    const ratebig = randomNumberGenerator(1,99)
const ratesmall = randomNumberGenerator(1,9)
    const GayRate =  `JayStation is ${ratebig}.${ratesmall}% gay.`
        return GayRate
    }