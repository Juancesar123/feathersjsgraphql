
// Define the combined GraphQL schema. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

let moduleExports = `
type Databuku {
  id:ID
  name:String!
}
type Query {
  getDatabuku(key: JSON, query: JSON, params: JSON): Databuku
  findDatabuku(query: JSON, params: JSON): [Databuku]!
}
`;

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
