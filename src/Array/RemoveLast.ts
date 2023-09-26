/**
 * 去除数组最后一个元素
 */
type RemoveLast<T> = T extends [...infer P, unknown] ? P : never;

export default RemoveLast;
