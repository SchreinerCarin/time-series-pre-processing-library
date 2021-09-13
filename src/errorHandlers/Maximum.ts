import {getValueByIndexFunction} from "../types";

export function getMaximum (length: number, getY: getValueByIndexFunction, index: number): number {
    let maxValue = getY(0);
    for (let i = 1; i < length - 1; i++){
        let newValue = getY(i);
        if(maxValue < newValue){
            maxValue = newValue;
        }
    }
    return maxValue;
}