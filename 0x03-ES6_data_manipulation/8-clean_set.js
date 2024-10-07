export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }
  return [...set].filter((val) => val.startsWith(startString))
    .map((val) => val.slice(startString.length)).join('-');
}
