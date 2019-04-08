import { isFunction } from '../utils';

/**
 * Performs a logical conjunction
 */
export default (...expr) => source => expr.reduce(
  (acc, x) => acc && (isFunction(x) && x(source)),
  true,
);
