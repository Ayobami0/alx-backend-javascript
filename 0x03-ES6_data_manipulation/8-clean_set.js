export default function cleanSet(set, startString) {
  const array = [];

  set.forEach((value) => {
    if (startString.length !== 0 && value.startsWith(startString)) {
      array.push(value.slice(startString.length));
    }
  });

  return array.join('-');
}
