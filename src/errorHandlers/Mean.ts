import {calculateMean} from "../utils/mathUtils";
import {getValueByIndexFunction} from "../../index";

export function getMean (length: number, getY: getValueByIndexFunction, index: number): number {
    return calculateMean(length, getY)
}