import { isFunction } from '../utils';

/**
 * Performs a logical disjunction
 */
export default (...expr) => row => expr.reduce(
  (acc, x) => acc || (isFunction(x) && x(row)),
  false,
);
