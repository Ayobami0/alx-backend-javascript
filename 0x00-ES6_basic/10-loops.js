export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    array.push(appendString + value);
    array.splice(0, 1);
  }
  return array;
}
