import { isFunction } from '../utils';

/**
 * Performs a logical disjunction
 */
export default (...expr) => source => expr.reduce(
  (acc, x) => acc || (isFunction(x) && x(source)),
  false,
);
