export {getMovingMeanData} from "./src/filters/MovingMean";
export {getExponentialFilterData} from "./src/filters/ExponentialFilter";

export {getSigmaRuleData} from "./src/anomalyDetectors/SigmaRule";
export {getThresholdData} from "./src/anomalyDetectors/Threshold";

export {getFaulty} from "./src/errorHandlers/Faulty";
export {linearInterpolation} from "./src/errorHandlers/LinearInterpolation";
export {getMaximum} from "./src/errorHandlers/Maximum";
export {getMean} from "./src/errorHandlers/Mean";
export {getMedian} from "./src/errorHandlers/Median";
export {getMinimum} from "./src/errorHandlers/Minimum";

export type getValueByIndexFunction = (i: number) => number
export type setValueByIndex = (newValue: number, i: number) => void
export type errorHandler = (length: number, getY: getValueByIndexFunction, i: number) => any