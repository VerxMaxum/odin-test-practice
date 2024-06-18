export function ceasarCipher(str, key=1) {
    if(str === undefined || str.length === 0) return "";
    let letters = str.split("");
    for(let i = 0; i < letters.length; i++) {
        if(isLetter(letters[i])) {
            letters[i] = String.fromCharCode(letters[i].charCodeAt(0) + key);
        }
    }

    return letters.join("");
}

function isLetter(letter) {
    return letter.toLowerCase() !== letter.toUpperCase();
}