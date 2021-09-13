import {getValueByIndexFunction} from "../types";

export function calculateMean (length: number, getY: getValueByIndexFunction): number {
    let mean = 0;
    for (let i = 1; i < length - 1; i++) {
        mean += getY(i);
    }
    return mean / length;
}

export function getStandardDeviation (length: number, getY: getValueByIndexFunction, mean: number): number {
    let standardDeviation = getY(0);
    for (let i = 1; i < length; i++){
        standardDeviation += Math.pow((getY(i) - mean), 2);
    }
    return Math.sqrt((Math.round(standardDeviation)/ (length)));
}