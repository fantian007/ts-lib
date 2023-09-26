/**
 * 去除字符串左边的空白字符
 */
type TrimLeft<T extends string> = T extends `${' ' | '\n' | '\t'}${infer P}` ? TrimLeft<P> : T;

export default TrimLeft;
