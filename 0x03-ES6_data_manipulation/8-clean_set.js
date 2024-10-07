export default function cleanSet(set, startString) {
  if (startString.length === 0 || typeof startString !== 'string') {
    return '';
  }
  const cleanset = [...set].filter((val) => val && val.startsWith(startString))
    .map((val) => val.slice(startString.length)).join('-');

  return cleanset;
}
