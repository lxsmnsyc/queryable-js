/**
 * Includes row to the query results if the row passes the between-by-column
 * test.
 */
export default (key, lo, hi) => row => key in row && lo <= row[key] && row[key] <= hi;
