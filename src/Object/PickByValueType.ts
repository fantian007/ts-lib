/**
 * 由值的类型过滤对象属性
 */
export type PickByValueType<T, S> = {
  [K in keyof T as T[K] extends S ? K : never]: T[K];
}

export default PickByValueType;
