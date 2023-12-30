/**
 * Intersection between two Iterables
 */
export function union<T>(a: Iterable<T>, b: Iterable<T>): Set<T> {
  const result = new Set(a);
  for (const elem of b) result.add(elem);
  return result;
}

/**
 * Intersection between n Iterables
 */
export function unionMany<T>(sets: Iterable<Iterable<T>>): Set<T> {
  const result = new Set<T>();
  for (const set of sets) for (const elem of set) result.add(elem);
  return result;
}
