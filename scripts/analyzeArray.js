export function analyzeArray(arr) {
    if(!Array.isArray(arr)) return "Not an array";
    for(let n of arr) {
        if(!isNumber(n)) return "Invalid array";
    }

    const average = arr.reduce((total, n) => total += n, 0)
                    / arr.length;
    
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {average: average, min:min, max:max, length:arr.length};
}

function isNumber(n) {
    return typeof(n) === 'number';
}