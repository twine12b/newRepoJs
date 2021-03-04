const {
    sumMultiples,
    isValidDNA,
    // getComplementaryDNA,
    // isItPrime,
    // createMatrix,
    areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
    test("return the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([1, 3, 5])).toBe(8);
    });

    test("works okay with decimal numbers", () => {
        expect(sumMultiples([1, 3, 5.0, 2, 12, 10])).toBe(30);
    });

    test("return 0 if there are no multiples of 3 or 5", () => {
        expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
    });

    test("Throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples("foo");
        }).toThrow("an Array is required");

        expect(() => {
            sumMultiples(4);
        }).toThrow("an Array is required");
    });
});

describe("isValidDNA", () => {
    test("return true for valid DNA strings", () => {
        expect(isValidDNA("CGTA")).toBe(true);
        expect(isValidDNA("CGHTA")).toBe(false);
        expect(isValidDNA("CGTATTGAGTC")).toBe(true);
        expect(isValidDNA("CGTA58TTGAGT2C")).toBe(false);
    });

    test("check valid characters with mixed case input", () => {
        expect(isValidDNA("CGTA")).toBe(true);
        expect(isValidDNA("cGTAtTGAgTC")).toBe(true);
    });

    test("return false when passing non strings", () => {
        const testArr = [1, 2, 3];
        const staff = [
            {name: "gary", rota: ["Monday", "Tuesday"]},
            {name: "paul", rota: ["Monday", "Tuesday", "Thursday"]}
        ]
        expect(isValidDNA(testArr)).toBe(false);
        expect(isValidDNA(staff)).toBe(false);
        expect(isValidDNA(1234)).toBe(false);
    });

    test("Throw error when passing incomplete data", () => {
        expect(() => {
            isValidDNA(undefined);
        }).toThrow("str is required");
    });
});

// describe("getComplementaryDNA", () => {
//     test("some description"), () => {
//         // ToDo
//     }
// });
//
// describe("isItPrime", () => {
//     test("some description"), () => {
//         // ToDo
//     }
// });
//
// describe("createMatrix", () => {
//     test("some description"), () => {
//         // ToDo
//     }
// });
//
describe("areWeCovered", () => {
    test("return false if not staff at all", () => {
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
        expect(areWeCovered([], "Sunday")).toBe(false);
    });

    test("return false if there are staff but < 3 scheduled to work", () => {
        const staff = [
            {name: "gary", rota: ["Monday", "Tuesday"]},
            {name: "paul", rota: ["Monday", "Tuesday", "Thursday"]},
            {name: "sally", rota: ["Monday", "Tuesday"]},
            {name: "jess", rota: ["Monday", "Tuesday", "Thurday"]},
        ]
        expect(areWeCovered(staff, "Wednesday")).toBe(false);
        expect(areWeCovered(staff, "Tuesday")).toBe(true);
        expect(areWeCovered(staff, "Thursday")).toBe(false);
    });

    test("return true if staff but > 3 scheduled to work", () => {
        const staff = [
            {name: "gary", rota: ["Monday", "Tuesday"]},
            {name: "paul", rota: ["Monday", "Tuesday", "Thursday"]},
            {name: "sally", rota: ["Monday", "Tuesday"]},
            {name: "jess", rota: ["Monday", "Tuesday", "Thurday"]},
        ]
        expect(areWeCovered(staff, "Monday")).toBe(true);
        expect(areWeCovered(staff, "Tuesday")).toBe(true);
    });

    test("Throw error when passing incomplete data", () => {
        expect(() => {
            areWeCovered();
        }).toThrow("staff is required");
    });

    test("Throw error when no day given", () => {
        const staff = [
            {name: "gary", rota: ["Monday", "Tuesday"]},
            {name: "paul", rota: ["Monday", "Tuesday", "Thursday"]},
            {name: "sally", rota: ["Monday", "Tuesday"]},
            {name: "jess", rota: ["Monday", "Tuesday", "Thurday"]},
        ]
        expect(() => {
            areWeCovered(staff);
        }).toThrow("day is required");

        expect(() => {
            areWeCovered(null, "Monday");
        }).toThrow("not a staff object");
    });
});