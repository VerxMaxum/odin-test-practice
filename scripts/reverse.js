export function reverseString(str) {
    if(str === undefined) return null;
    if(str.length === 0 || str.length === 1) {
        return str;
    }

    return str.split("").reverse().join("");
}