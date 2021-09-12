export function getMinimum (length, getY, index) {
    let minValue = getY(0);
    for (let i = 1; i < length - 1; i++){
        let newValue = getY(i);
        if(minValue > newValue){
            minValue = newValue;
        }
    }
    return minValue;
}