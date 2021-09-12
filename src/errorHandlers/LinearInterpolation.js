export function linearInterpolation (length, getY, index) {
    //TODO error handling
    return (getY(index-1)+getY(index+1))/ 2
}