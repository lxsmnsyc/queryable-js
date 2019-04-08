import { isFunction } from '../utils';

/**
 * Performs a logical conjunction
 */
export default (...expr) => row => expr.reduce(
  (acc, x) => acc && (isFunction(x) && x(row)),
  true,
);
