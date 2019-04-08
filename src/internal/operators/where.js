/**
 * Filters the rows of the queryable
 */
export default filter => source => source.data.filter(x => filter(x));
