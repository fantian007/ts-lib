/**
 * 去除字符串右边的空白字符
 */
type TrimRight<T extends string> = T extends `${infer P}${' ' | '\n' | '\t'}` ? TrimRight<P> : T;

export default TrimRight;
