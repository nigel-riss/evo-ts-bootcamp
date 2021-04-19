import type { BubbleItem } from './types';
import { Options } from './const';
import { getRandomInt } from './common';

/**
 * Generates array of numbers
 * @param minLength - minimal array length
 * @param maxLength - maximal array length
 * @param minValue - minimal value of array item
 * @param maxValue - maximal value of array item
 * @returns 
 */
export const generateArray = (
  minLength: number = Options.MIN_LENGTH,
  maxLength: number = Options.MAX_LENGTH,
  minValue: number = Options.MIN_VALUE,
  maxValue: number = Options.MAX_VALUE,
): Array<BubbleItem> => {
  const arrLength = getRandomInt(minLength, maxLength);
  const arr: Array<BubbleItem> = [...new Array(arrLength)]
    .map((_, i: number): BubbleItem => ({
      id: i,
      value: getRandomInt(minValue, maxValue),
    }));

  return arr;
};
