const {
    sumDigits,
    createRange,
    // getScreentimeAlertList,
    // hexToRGB,
    // findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("returns result given only numeric values", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(12)).toBe(3);
        expect(sumDigits(823)).toBe(13);
        expect(sumDigits(41642)).toBe(17);
    });

    test("returns result given negative values", () => {
        expect(sumDigits(-41642)).toBe(9);
        expect(sumDigits(-8653203)).toBe(11);
        expect(sumDigits(-92)).toBe(-7);
    });

    test("throw errors given non numeric values", () => {
        expect(() => {
            // eslint-disable-next-line no-undef
            sumDigits(p123);
        }).toThrow("p123 is not defined");

        expect(() => {
            sumDigits('p123');
        }).toThrow("number has illegal characters");

        /**
         * need to find something that can catch this type of error
         * try
         * if (/^([a-z])$/.test(n.toString())) throw new Error("number has illegal characters");
         *
         */
        // expect(() => {
        //     sumDigits(1p23);
        // }).toThrow("p123 is not defined");
    });

});

describe("createRange", () => {
    test("given start and end and step values return array of numbers with the correct step interval", () => {
        expect(createRange(1, 3, 1)).toEqual([1, 2, 3]);
        expect(createRange(5, 10, 1)).toEqual([5, 6, 7, 8, 9, 10]);
        expect(createRange(1, 10, 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    test("given start and end with no step value return correct step interval", () => {
        expect(createRange(1, 3)).toEqual([1, 2, 3]);
        expect(createRange(5, 10)).toEqual([5, 6, 7, 8, 9, 10]);
        expect(createRange(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    test("throw errors for bad input parameters", () => {
        expect(() => {
            createRange();
        }).toThrow("start is required");
    });


});

// describe("getScreentimeAlertList", () => {
//     test("", () => {
//         expect().toBe();
//     });
// });
//
// describe("hexToRGB", () => {
//     test("", () => {
//         expect().toBe();
//     });
// });
//
// describe("findWinner", () => {
//     test("", () => {
//         expect().toBe();
//     });
// });