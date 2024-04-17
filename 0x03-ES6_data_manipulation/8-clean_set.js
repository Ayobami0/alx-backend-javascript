export default function cleanSet(set, startString) {
  const array = [];

  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      array.push(value.slice(startString.length));
    }
  });

  return array.join('-');
}
