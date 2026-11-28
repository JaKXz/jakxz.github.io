export function stepAtMidpoint(tops: number[], midpoint: number) {
  let index = 0;
  for (let i = 0; i < tops.length; i++) {
    if (tops[i] <= midpoint) index = i;
    else break;
  }
  return index;
}
