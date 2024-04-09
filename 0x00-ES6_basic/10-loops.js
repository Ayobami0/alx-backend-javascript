export default function appendToEachArrayValue(array, appendString) {
  const newArray = Array.from(array);
  for (const [idx, value] of array.entries()) {
    newArray[idx] = appendString + value;
  }
  return newArray;
}
