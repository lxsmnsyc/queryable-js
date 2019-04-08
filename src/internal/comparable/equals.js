
/**
 * Includes row to the query results if the row passes the equality-by-column
 * test.
 */
export default (key, value) => row => key in row && row[key] === value;
