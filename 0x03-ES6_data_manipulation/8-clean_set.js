export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }
  const cleanset = [...set].filter((val) => val && val.startsWith(startString))
    .map((val) => val.slice(startString.length)).join('-');

  return cleanset;
}
