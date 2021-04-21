import type { BubbleItem } from './types';

/**
 * Sorts array of `BubbleItem`s using "bubble sort" algorithm.
 * Returns solution, represented as array of algorithm "iterations".
 * @param arr - array of `BubbleItem` to sort
 * @returns array each element of which is array passed through
 * one step of "buble sort" algorithm
 */
export const bubbleSort = (
  arr: Array<BubbleItem>,
): Array<Array<BubbleItem>> => {
  const arrToSort = arr.slice();
  const solution: Array<Array<BubbleItem>> = [arrToSort.slice()];
  let isSwapped: boolean;

  let iteration: number = 0;
  do {
    isSwapped = false;
    for (let i:number = 1; i < arrToSort.length - iteration; i++) {
      if (arrToSort[i - 1].value > arrToSort[i].value) {
        [arrToSort[i - 1], arrToSort[i]] = [arrToSort[i], arrToSort[i - 1]];
        solution.push(arrToSort.slice());
        isSwapped = true;
      }
    }
    iteration++;
  } while (isSwapped);

  return solution;
};
