/**
 * 取 Promise 值的类型
 */
type PromiseValue<T> = T extends Promise<infer V> ? V : never;

export default PromiseValue;
