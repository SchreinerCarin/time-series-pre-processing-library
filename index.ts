import {getMovingMeanData} from "./src/filters/MovingMean";
import {getExponentialFilterData} from "./src/filters/ExponentialFilter";
import {getSigmaRuleData} from "./src/anomalyDetectors/SigmaRule";
import {getThresholdData} from "./src/anomalyDetectors/Threshold";
import {getFaulty} from "./src/errorHandlers/Faulty";
import {linearInterpolation} from "./src/errorHandlers/LinearInterpolation";
import {getMaximum} from "./src/errorHandlers/Maximum";
import {getMean} from "./src/errorHandlers/Mean";
import {getMedian} from "./src/errorHandlers/Median";
import {getMinimum} from "./src/errorHandlers/Minimum";

module.exports.movingMean = getMovingMeanData;
module.exports.exponentialFilter = getExponentialFilterData;

module.exports.sigmaRule = getSigmaRuleData;
module.exports.threshold = getThresholdData;

module.exports.faulty = getFaulty;
module.exports.linearInterpolation = linearInterpolation;
module.exports.maximum = getMaximum;
module.exports.mean = getMean;
module.exports.median = getMedian;
module.exports.minimum = getMinimum;

