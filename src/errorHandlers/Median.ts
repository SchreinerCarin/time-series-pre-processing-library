import {getValueByIndexFunction} from "../../index";

export function getMedian (length: number, getY: getValueByIndexFunction, index: number): number {
    let middle = (length / 2);
    if(length % 2 == 0){
        let first = getY( middle - 1);
        let second = getY( middle );
        return (first + second) / 2;
    } else {
        return getY(Math.floor(middle) - 1);
    }
}