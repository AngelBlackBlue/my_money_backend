import { mergeSchemas } from '@graphql-tools/merge'
import gql from "graphql-tag"
import { readFileSync } from "fs";

const schemaUser = gql(
    readFileSync("./schema.user.graphql", {
      encoding: "utf-8",
    })
  );

const schemaTransaction = gql(
    readFileSync("./schema.user.graphql", {
      encoding: "utf-8",
    })
  );


const mergeTypeDefs = mergeSchemas( 
    [ schemaUser, schemaTransaction ]
)

export default mergeTypeDefs