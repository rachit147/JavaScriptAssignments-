var Cat = (function() {
    var count = 0,total = 0;
    function Cat(name, weight) {
        if (weight) {
            total = total + weight;
            count++;
            this.name = name;
            Object.defineProperty(this, 'weight', {
                set: function(value) {
                    total = total + value - weight;
                    weight = value;

                },
                get: function() {
                    return weight;
                }
            })
        } else {
            throw new TypeError('invalid');
        }
    }
    Cat.averageWeight = function() {
        average = total / count
        return average;
    }
    return Cat;
}());
