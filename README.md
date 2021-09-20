# Time Series Preprocessing Library

This library provides data type independent basic filter and anomaly detection functions for time series data sets.

## Getting started

To include this library in your project, you can run:
### `npm install time-series-pre-processing-library`

## Documentation    

### Data types
#### length
The length of the data set, over which should be iterated

#### getY
A Function that excepts an index and returns a value, that should be classified or filtered.

#### setY
A Function that excepts an index and a new Value. 

#### errorHandler
A Function that excepts an index, a setY function, and a length. This function handles an as erroneuos classified value, 
specified with the given index. This Package already provides the basic error handling Functions.

### Functions
#### Sigma Rule

    getSigmaRuleData(
        length: number,
        getY: getValueByIndexFunction, 
        setY: setValueByIndex, 
        errorHandler?: errorHandler)
        

#### Thresholds

    getThresholdData (
        length: number,
        getY: getValueByIndexFunction,
        setY: setValueByIndex,
        minValue: number,
        maxValue: number,
        errorHandler?: errorHandler)
        
#### Exponential Filter

    getExponentialFilterData (
        length: number,
        getY: getValueByIndexFunction,
        setY: setValueByIndex,
        percentage: number)

#### Moving Mean Filter

    getMovingMeanData (
        length: number,
        getY: getValueByIndexFunction,
        setY: setValueByIndex,
        width: number)
