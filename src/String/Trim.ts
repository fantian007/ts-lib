import TrimLeft from './TrimLeft';
import TrimRight from './TrimRight';

/**
 * 去除字符串两边的空白字符
 */
type Trim<T extends string> = TrimLeft<TrimRight<T>>;

export default Trim;
