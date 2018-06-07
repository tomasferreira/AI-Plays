const Perceptron = require('./perc.js');

var p = new Perceptron(2);

var inputs = [-1, .5];
var output = p.guess(inputs);

console.log(output);
//console.log(p);