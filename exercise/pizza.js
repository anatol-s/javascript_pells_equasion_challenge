var assert = require("assert");

describe("pizza", function () {
    it("Делим пиццу поровну", function () {
        assert.equal(pizza(48, 3), 602.88);
        assert.equal(pizza(76, 10), 453.416);

        // BEGIN
        function pizza(diameter, pieces) {
            const PI = 3.14;
            var radius = diameter / 2;
            return (PI * (radius * radius)) / pieces;
        }
        // END

    });
});