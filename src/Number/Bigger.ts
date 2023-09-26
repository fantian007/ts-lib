/**
 * 比较数值大小
 */
type Bigger<T extends number, U extends number, R extends any[] = []> = T extends R['length'] ? false : U extends R['length'] ? true : Bigger<T, U, [...R, 1]>;

/**
 * 比较数值大小
 */
type IncArr<T extends number, A extends any[] = []> = U extends A['length'] ? true : IncArr<>;
type BiggerV2 = any;

export default Bigger;
