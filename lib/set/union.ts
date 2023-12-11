import { reduceWithInitial } from "@fightingdreamer/iter-reduce";

/**
 * Intersection between two Sets
 */
export function union<T>(a: Set<T>, b: Iterable<T>): Set<T> {
  const result = new Set(a);
  for (const elem of b) result.add(elem);
  return result;
}

/**
 * Intersection between two Sets
 */
export function unionMany<T>(sets: Iterable<Iterable<T>>): Set<T> {
  return reduceWithInitial(sets, union, new Set<T>());
  return;
}
