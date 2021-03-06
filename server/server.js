const express = require('express');
// const cors = require('cors');
const {graphqlHTTP} = require('express-graphql');
// const gql = require('graphql-tag');
const schema = require('./schema');
const { buildSchema } = require('graphql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(
	'/graphql', 
	graphqlHTTP({
	  schema,
	  graphiql: true,
}));

const port = process.env.PORT || 4000
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);