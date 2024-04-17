export default function updateUniqueItems(map) {
  if (map.prototype.constructor !== Map) {
    throw new Error('Cannot process');
  }
  const newMap = new Map();

  map.forEach((value, key) => {
    newMap.set(key, value === 1 ? 100 : value);
  });

  return newMap;
}
