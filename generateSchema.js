const { GraphQLClient } = require("graphql-request");
const { generateTypeScriptTypes } = require("graphql-schema-typescript");
const { buildClientSchema } = require("graphql/utilities/buildClientSchema");
const { introspectionQuery } = require("graphql/utilities/introspectionQuery");
require("dotenv").config();

const graphQLClient = new GraphQLClient(process.env.STOREFRONT_ENDPOINT, {
  headers: {
    "X-Shopify-Storefront-Access-Token": process.env.ACCESS_TOKEN
  }
});

graphQLClient.request(introspectionQuery).then(data => {
  const build = buildClientSchema(data);
  generateTypeScriptTypes(build, "./index.d.ts", { typePrefix: "" })
    .then(() => {
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
});
