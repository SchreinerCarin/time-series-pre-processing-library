import {calculateMean} from "../utils/mathUtils";
import {getValueByIndexFunction} from "../types";

export function getMean (length: number, getY: getValueByIndexFunction, index: number): number {
    return calculateMean(length, getY)
}