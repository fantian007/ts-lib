/**
 * 元祖转对象
 */
export type TupleToObj<T extends readonly any[]> = {
  [K in T[number]]: K;
};

export default TupleToObj;
