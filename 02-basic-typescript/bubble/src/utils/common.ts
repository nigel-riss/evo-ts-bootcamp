/**
 * Generates random integer number
 * @param min minimal number (inclusive)
 * @param max maximal number (inclusive)
 * @returns random integer in range of `min` and `max`
 */
export const getRandomInt = (
  min: number,
  max: number,
): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
