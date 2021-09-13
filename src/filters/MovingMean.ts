import {getValueByIndexFunction, setValueByIndex} from "../../index";

export function getMovingMeanData (length: number,
                                   getY: getValueByIndexFunction,
                                   setY: setValueByIndex,
                                   width: number): void {
    let prevNodes = Math.ceil((width-1)/2);
    let followingNodes = Math.floor((width-1)/2);
    for (let i = prevNodes; i < length-followingNodes; i++){
        let averageY = 0;
        for(let j = -prevNodes; j <= followingNodes; j++){
            averageY += getY(i + j);
        }
        averageY = averageY / width;
        setY(averageY, i)
    }
}