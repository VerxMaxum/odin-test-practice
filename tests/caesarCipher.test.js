import { ceasarCipher } from '../scripts/caesarCipher';

test("No String", () => {
    expect(ceasarCipher()).toBe("");
})

test("Empty String", () => {
    expect(ceasarCipher("")).toBe("");
})

test("Single character and default key", () => {
    expect(ceasarCipher("a")).toBe("b");
})

test("Multiple letters and key = 3", () => {
    expect(ceasarCipher("aBc", 3)).toBe("dEf");
})

test("Not affecting non-letters", () => {
    expect(ceasarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})