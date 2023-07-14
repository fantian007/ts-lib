/**
 * 将 A 中部分属性 变为 可选
 */
type Optional<A, K extends keyof A> = Omit<A, K> & Partial<Pick<A, K>>;

export default Optional;
