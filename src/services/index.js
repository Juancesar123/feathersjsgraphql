
// Configure the Feathers services. (Can be re-generated.)
let databuku = require('./databuku/databuku.service');

let graphql = require('./graphql/graphql.service');
// !code: imports // !end
// !code: init // !end

// eslint-disable-next-line no-unused-vars
let moduleExports = function (app) {
  app.configure(databuku);

  app.configure(graphql);
  // !code: func_return // !end
};

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
