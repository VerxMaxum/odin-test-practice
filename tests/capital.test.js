import { capitalize } from '../scripts/capital.js';

test("Capitalize an empty string", () => {
    expect(capitalize()).toBeNull();
})

test("Capitalize a single character string", () => {
    expect(capitalize("h")).toBe("H");
})

test("Capitalize Name", () => {
    expect(capitalize("leon")).toBe("Leon");
});