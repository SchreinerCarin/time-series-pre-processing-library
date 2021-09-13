import {getValueByIndexFunction, setValueByIndex} from "../../index";

export function getExponentialFilterData (length: number,
                                          getY: getValueByIndexFunction,
                                          setY: setValueByIndex,
                                          percentage: number): void {
    let lastY = getY(0);
    for (let i = 1; i < length - 1; i++){
        lastY = (percentage * getY(i)) + ((1-percentage) * lastY);
        setY(lastY, i)
    }
}