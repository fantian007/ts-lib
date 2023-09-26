/**
 * 取对象属性值类型
 */
export type VT<T, K> = K extends keyof T ? T[K] : never;

export  default VT;
