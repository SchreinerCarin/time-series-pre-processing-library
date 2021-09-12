export function getMaximum (length, getY, index) {
    let maxValue = getY(0);
    for (let i = 1; i < length - 1; i++){
        let newValue = getY(i);
        if(maxValue < newValue){
            maxValue = newValue;
        }
    }
    return maxValue;
}