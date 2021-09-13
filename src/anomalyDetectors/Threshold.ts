import {errorHandler, getValueByIndexFunction, setValueByIndex} from "../../index";

export function getThresholdData (length: number,
                                  getY: getValueByIndexFunction,
                                  setY: setValueByIndex,
                                  minValue: number,
                                  maxValue: number,
                                  errorHandler?: errorHandler): void {
    for (let i = 1; i < length - 1; i++){
        let newValue = getY(i);
        if(newValue > maxValue || newValue < minValue){
            if(typeof errorHandler != 'undefined'){
                let replacementValue = errorHandler(length, getY, i);
                setY(replacementValue, i);
            }
        } else {
            setY(getY(i), i);
        }
    }
}
