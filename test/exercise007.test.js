const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
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

    // TODO - Add test for failing 'end' input and negative non integer numbers
    test("throw errors for bad input parameters", () => {
        expect(() => {
            createRange();
        }).toThrow("start is required");
    });


});

describe("getScreentimeAlertList", () => {
    const users = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                {date: "2019-05-01", usage: {twitter: 34, instagram: 22, facebook: 40}},
                {date: "2019-05-02", usage: {twitter: 56, instagram: 40, facebook: 31}},
                {date: "2019-05-03", usage: {twitter: 12, instagram: 15, facebook: 19}},
                {date: "2019-05-04", usage: {twitter: 10, instagram: 56, facebook: 61}},
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                {date: "2019-05-02", usage: {twitter: 12, whatsApp: 72, facebook: 19}},
                {date: "2019-06-11", usage: {mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10}},
                {date: "2019-06-13", usage: {mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16}},
                {date: "2019-06-14", usage: {mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31}},
            ]
        },
        {
            username: "ric_r_1970",
            name: "Richard Renaud",
            screenTime: [
                {date: "2019-05-02", usage: {youtube: 12, whatsApp: 72, facebook: 19, chrome: 83}},
                {date: "2019-05-04", usage: {youtube: 36, whatsApp: 11, facebook: 2, chrome: 101}},
                {date: "2019-06-11", usage: {mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10}},
                {date: "2019-06-13", usage: {mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16}},
            ]
        },
    ];

    test("returns usernames of users who have more than 100 minutes of screentime on a given date", () => {
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234", "ric_r_1970"]);
        expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(["beth_1234", "sam_j_1989", "ric_r_1970"]);
        expect(getScreentimeAlertList(users, "2019-06-14")).toEqual([]);
    });

    test("throw errors for bad input parameters", () => {
        expect(() => {
            getScreentimeAlertList();
        }).toThrow("no data, users and date is required");

        expect(() => {
            getScreentimeAlertList(users);
        }).toThrow("date is required");

        expect(() => {
            getScreentimeAlertList(undefined, "2019-05-04");
        }).toThrow("users is required");
    });
});

describe("hexToRGB", () => {
    test("return RGB value for valid long hexadecimal inputs", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
        expect(hexToRGB("#4a161d")).toBe("rgb(74,22,29)");
        expect(hexToRGB("#FFFFFF")).toBe("rgb(255,255,255)");
        expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
    });

    test("throw errors for bad input parameters", () => {
        expect(() => {
            hexToRGB();
        }).toThrow("hexStr is required");

        expect(() => {
            hexToRGB("");
        }).toThrow("hexStr is required");

        expect(() => {
            hexToRGB("#");
        }).toThrow("hexStr is not valid");

        expect(() => {
            hexToRGB("#1234567890");
        }).toThrow("hexStr is not valid");

        expect(() => {
            hexToRGB("pFFFFFF");
        }).toThrow("hexStr should start with the '#' character");
    });

});

describe("findWinner", () => {
    test("return 'X' if player X has won, '0' if player 0 has won", () => {
        const board = [
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ];
        const board2 = [
            ["0", "X", null],
            ["0", null, "X"],
            ["0", null, "X"]
        ];
        const board3 = [
            ["X", "0", null],
            ["0", "0", "X"],
            ["X", "0", null]
        ];
        const board4 = [
            [null, "X", "0"],
            ["X", "0", "0"],
            [null, "X", "0"]
        ];
        const board5 = [
            ["X", "X", "X"],
            ["0", "0", null],
            [null, "X", "0"]
        ];
        const board6 = [
            ["X", "0", "0"],
            ["0", "X", null],
            [null, "X", "X"]
        ];
        const board7 = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        // Column wins
        expect(findWinner(board)).toBe("X");
        expect(findWinner(board2)).toBe("0");
        expect(findWinner(board3)).toBe("0");
        expect(findWinner(board4)).toBe("0");

        // Row Wins
        expect(findWinner(board5)).toBe("X");

        // Diagonal wins
        expect(findWinner(board6)).toBe("X");

        // Empty Board
        expect(findWinner(board7)).toBe(null);

    });
});