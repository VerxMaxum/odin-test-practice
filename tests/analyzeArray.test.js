import { analyzeArray } from "../scripts/analyzeArray";

test("Not an array", () => {
    expect(analyzeArray("ddddd")).toBe("Not an array");
})

test("Single non-number", () => {
    expect(analyzeArray([1,'a'])).toBe("Invalid array");
})

test("Proper array", () => {
    expect(analyzeArray([1,2,3])).toEqual({
        average:2,
        min:1,
        max:3,
        length:3
    });
})