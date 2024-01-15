import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { buildSubgraphSchema } from "@apollo/subgraph";
import gql from "graphql-tag";


import { readFileSync } from "fs";
import mongoose from "mongoose";
import express from "express";
import logger from "morgan";

// Resolver, TypeDefs
import resolvers from "./resolvers/litable/resolvers.js";
import resolversClient from "./resolvers/client/resolvers.js"

// Merge Graphl definition
import {mergeTypeDefs, mergeResolvers} from "@graphql-tools/merge"
import { config } from "process";




const app = express();

// PORT
const port = 8888 ; 

// Type Definition
const litableType = gql(readFileSync("./graphql/litable.graphql", { encoding: "utf8" }));
const userType = gql(readFileSync("./graphql/user.graphql", { encoding: "utf8" }))

// Merge definition of graphql type
const typeDefs = mergeTypeDefs([litableType, userType])
//let configResolvers = mergeResolvers([ resolvers])

// Apollo server
const server = new ApolloServer({
  schema: buildSubgraphSchema([{  typeDefs, resolvers } ]),
});
await server.start();

// Debug mode
app.use(logger("dev"))

// Middleware that parse http request to json
app.use(express.json());

// Graphql route
app.use("/graphql", expressMiddleware(server ));


// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://hash:GAPXwMfL3aseLcK@cluster0.kcvxa.mongodb.net/litable-database-test"
  )
  .then(() => {
    console.log("database connected");
}).catch(e =>{
    console.log("Server not connected !")
});


// listen port
app.listen(port, () => {
  console.log(`link app : http://localhost:${port}`);
});
