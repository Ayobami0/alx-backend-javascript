export default function groceriesList() {
  const map = new Map();

  const names = ['Apples', 'Tomatoes', 'Pasta', 'Rice', 'Banana'];
  const quantities = [10, 10, 1, 1, 5];

  for (let i = 0; i < names.length; i += 1) {
    map.set(names[i], quantities[i]);
  }

  return map;
}
