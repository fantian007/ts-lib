/**
 * 获取数组第一个元素的类型
 */
type First<T extends unknown[]> = T extends [infer P, ...unknown[]] ? P : never;

export default First;
