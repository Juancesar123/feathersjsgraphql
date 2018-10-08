
// Define the combined GraphQL schema. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

let moduleExports = `
type Databuku {
  _id:ID!
  nama:String!
  penerbit:String!
}
 
type User {
  id:ID!
  username:String!
  password:String!
}
 

type Query {
  getDatabuku(key: JSON, query: JSON, params: JSON): Databuku
  findDatabuku(query: JSON, params: JSON): [Databuku]!
  getUser(key: JSON, query: JSON, params: JSON): User
  findUser(query: JSON, params: JSON): [User]!
}
`;

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
