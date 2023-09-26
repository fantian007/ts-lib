/**
 * 替换字符串
 */
type Replace<str extends string, cur extends string, replace extends string> = str extends `${infer P}${cur}${infer K}`
  ? `${P}${replace}${K}` : str;

export default Replace;
