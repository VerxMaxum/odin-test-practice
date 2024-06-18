export function capitalize(str) {
    if(str === undefined) return null;
    if(str.length === 1) return str.toUpperCase();

    return str.charAt(0).toUpperCase() + str.substring(1);
}