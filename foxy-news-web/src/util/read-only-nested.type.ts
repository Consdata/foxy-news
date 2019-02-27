export type ReadOnlyNested<T> = {
  readonly [P in keyof T]: Readonly<T[P]>;
}
