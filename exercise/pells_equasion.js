var assert = require("assert");

describe("pells_equasion", function () {
    it("Уравнение Пелля", function () {
        function testPellsEquasion(args, d) {
            if (args[0] <= 0 || args[1] <= 0) {
                return 0;
            }

            var x = Number(args[0]),
                y = Number(args[1]);

            x = x.toFixed(0);
            y = y.toFixed(0);


            return x * x - (d * (y * y));
        }

        assert.equal(testPellsEquasion(pells_equasion(2), 2), 1);
        assert.equal(testPellsEquasion(pells_equasion(3), 3), 1);
        assert.equal(testPellsEquasion(pells_equasion(5), 5), 1);
        assert.equal(testPellsEquasion(pells_equasion(72), 72), 1);
        assert.equal(testPellsEquasion(pells_equasion(8), 8), 1);
        assert.equal(testPellsEquasion(pells_equasion(90), 90), 1);

        // BEGIN
        function pells_equasion(d) {
            var x, y;

            for (y = 1; y <= 10000; y++) {
                for (x = 1; x <= 10000; x++) {
                    if (testPellsEquasion([x, y], d) == 1) {
                        return [x, y];
                    }
                }
            }
        }

        // END

    });
});