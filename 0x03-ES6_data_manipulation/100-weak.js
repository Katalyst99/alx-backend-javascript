export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  const numQs = weakMap.get(endpoint) + 1;
  if (numQs >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, numQs);
}
