// eslint-disable-next-line valid-typeof
const isType = (a, b) => typeof a === b;

/**
 * @ignore
 */
export const isFunction = a => isType(a, 'function');
/**
 * @ignore
 */
export const isBoolean = a => isType(a, 'boolean');
/**
 * @ignore
 */
export const isNumber = a => isType(a, 'number');
/**
 * @ignore
 */
export const isString = a => isType(a, 'string');
/**
 * @ignore
 */
export const isObject = a => isType(a, 'object');
/**
 * @ignore
 */
export const isNull = a => a == null;
/**
 * @ignore
 */
export const NULL = Symbol('Queryable.NULL');
