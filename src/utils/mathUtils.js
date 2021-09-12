export function calculateMean (length, getY) {
    let mean = 0;
    for (let i = 1; i < length - 1; i++) {
        mean += getY(i);
    }
    return mean / length;
}

export function getStandardDeviation (length, getY, mean) {
    let standardDeviation = getY(0);
    for (let i = 1; i < length; i++){
        standardDeviation += Math.pow((getY(i) - mean), 2);
    }
    return Math.sqrt((Math.round(standardDeviation)/ (length)));
}