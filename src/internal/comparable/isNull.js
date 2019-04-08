import { NULL } from '../utils';

/**
 * Includes row to the query results if the row passes the equality-by-column
 * test.
 */
export default key => row => key in row && row[key] === NULL;
