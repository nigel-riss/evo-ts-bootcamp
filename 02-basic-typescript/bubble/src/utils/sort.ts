import type { BubbleItem } from './types';

/**
 * Sorts array using one pass of "bubble sort" algorithm.
 * @param arr - array of `BubbleItem` to sort
 * @param iteration - number of sorting iteration
 * @returns sorded array of `BubbleItem`
 */
export const bubbleSortOnce = (
  arr: Array<BubbleItem>,
  iteration: number = 0,
): boolean => {
  let isSwapped: boolean = false;

  for (let i:number = 1; i < arr.length - iteration; i++) {
    if (arr[i - 1].value > arr[i].value) {
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      isSwapped = true;
    }
  }

  return isSwapped;
};
