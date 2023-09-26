/**
 * 获取数组最后一个元素的类型
 */
type Last<T extends unknown[]> = T extends [...unknown[], infer P] ? P : never;

export default Last;
