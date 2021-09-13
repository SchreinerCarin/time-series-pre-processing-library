import {calculateMean, getStandardDeviation} from "../utils/mathUtils";
import {errorHandler, getValueByIndexFunction, setValueByIndex} from "../../index";

export function getSigmaRuleData (length: number,
                                  getY: getValueByIndexFunction,
                                  setY: setValueByIndex,
                                  errorHandler?: errorHandler): void {
    let mean = calculateMean(length, getY);
    let standardDeviation = getStandardDeviation(length, getY, mean)

    for (let i = 1; i < length-1; i++){
        let threshold = (getY(i) - mean) / standardDeviation;
        if(threshold > 2){
            if(typeof errorHandler != 'undefined'){
                let replacementValue = errorHandler(length, getY, i);
                setY(replacementValue, i);
            }
        } else {
            setY(getY(i), i);
        }
    }
}