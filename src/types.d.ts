export type getValueByIndexFunction = (i: number) => number

export type setValueByIndex = (newValue: number, i: number) => void

export type errorHandler = (length: number, getY: getValueByIndexFunction, i: number) => any