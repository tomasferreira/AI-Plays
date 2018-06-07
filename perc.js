class Perceptron {
    constructor(n) {
        this.weights = new Array(n);

        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] = random(-1, 1);
        }
    }

    guess(inputs){
        var sum = 0;

        // weighted sum
        this.weights.forEach(function (weight, index) {
            sum += weight * inputs[index];
        });

        //activate
        var output = Math.sign(sum);

        return output;
    }
}

function random(min, max){
    return Math.random() * (max + Math.abs(min)) + min;
}

module.exports = Perceptron;