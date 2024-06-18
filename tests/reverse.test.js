import { reverseString } from '../scripts/reverse';

test("Reverse undefined", () => {
    expect(reverseString()).toBeNull();
})

test("Reverse an empty string", () => {
    expect(reverseString("")).toBe("");
})

test("Reverse a single string", () => {
    expect(reverseString("a")).toBe("a");
})

test("Reverse a sample string", () => {
    expect(reverseString("resident")).toBe("tnediser");
})