export function sorted<T>(array: T[], compare: (a: T, b: T) => number): T[] {
  if (array) {
    const sorted = [...array];
    sorted.sort((a, b) => compare(a, b));
    return sorted;
  } else {
    return array;
  }
}
