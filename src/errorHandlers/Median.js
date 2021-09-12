export function getMedian (length, getY, index) {
    let middle = (length / 2);
    if(length % 2 === 0){
        let first = getY( Math.floor(middle) - 1);
        let second = getY( Math.ceil(middle) - 1);
        return (first + second) / 2;
    } else {
        return getY(middle - 1);
    }
}