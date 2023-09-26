/**
 * 判断字符串是否以某个前缀开头
 */
type StartWith<T extends string, K extends string> = T extends `${K}${string}` ? true : false;

export default StartWith;
