/** @param {number[]} tops @param {number} midpoint */
export function stepAtMidpoint(tops, midpoint) {
  let index = 0;
  for (let i = 0; i < tops.length; i++) {
    if (tops[i] <= midpoint) index = i;
    else break;
  }
  return index;
}
