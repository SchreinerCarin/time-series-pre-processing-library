import {calculateMean, getStandardDeviation} from "../utils/mathUtils";

//TODO ERROR HANDLING ERRORHANDLER
//TODO did I got everything?
export function getSigmaRuleData (length, getY, setY, errorHandler) {
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