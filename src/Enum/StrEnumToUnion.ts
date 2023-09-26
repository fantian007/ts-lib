/**
 * Enum 转 联合
 */
export type StrEnumToUnion<T> = T extends `${infer R}` ? R : never;

export default StrEnumToUnion;
