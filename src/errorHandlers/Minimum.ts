import {getValueByIndexFunction} from "../../index";

export function getMinimum (length: number, getY: getValueByIndexFunction, index: number): number {
    let minValue = getY(0);
    for (let i = 1; i < length - 1; i++){
        let newValue = getY(i);
        if(minValue > newValue){
            minValue = newValue;
        }
    }
    return minValue;
}