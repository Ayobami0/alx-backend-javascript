export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const called = weakMap.get(endpoint);
  if (called >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, called === undefined ? 1 : called + 1);
}
