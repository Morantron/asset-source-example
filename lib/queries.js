const queries = {};

const requireQuery = require.context("../yolos", true, /\.yolo$/);

// some function to process query
const processQuery = (query) => query.toUpperCase();

requireQuery.keys().forEach((query) => {
  const queryName = query.replace(/^\.\/(.*)\.yolo$/, "$1");
  queries[queryName] = processQuery(requireQuery(query));
});

export default queries;
