import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();

import gql from "graphql-tag";
import { ApolloServer } from '@apollo/server';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { expressMiddleware } from '@apollo/server/express4';
import resolvers from "./resolvers/resolvers.js";
import { readFileSync } from "fs";

app.use(cors());
app.use(express.json());

const typeDefs = gql(
  readFileSync("./src/typeDefs/schema.graphql", {
    encoding: "utf-8",
  })
);

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

await server.start();

app.use("/record", records);

app.use(
  '/graphql',
  cors(),
  express.json(),
  expressMiddleware(server),
);


app.listen(PORT, () => {
  console.log(`🚀  Server ready at: http://localhost:${PORT}/graphql` );
});

