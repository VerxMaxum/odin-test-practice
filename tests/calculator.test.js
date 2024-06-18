import { add, subtract, multiply, divide } from '../scripts/calculator';

test("Not a number", () => {
    expect(add('g', 2)).toBe("Invalid input");
})

test("Add 2 + 5", () => {
    expect(add(2, 5)).toBe(7);
})

test("Subtract 2 - 5", () => {
    expect(subtract(2, 5)).toBe(-3);
})

test("Multiply 4 * 9", () => {
    expect(multiply(4, 9)).toBe(36);
})

test("Invalid divisor", () => {
    expect(divide(4, 0)).toBe("Can't divide by 0");
})

test("Divide 50 / 5", () => {
    expect(divide(50, 5)).toBe(10);
})