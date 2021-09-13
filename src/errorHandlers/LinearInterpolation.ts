import {getValueByIndexFunction} from "../types";

export function linearInterpolation (length: number, getY: getValueByIndexFunction, index: number): number{
    return (getY(index-1)+getY(index+1))/ 2
}