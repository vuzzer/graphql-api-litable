import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import {resolvers} from "./resolvers/resolvers.js";
import { buildSubgraphSchema } from "@apollo/subgraph";
import gql from "graphql-tag";
import { readFileSync } from "fs";
import mongoose from "mongoose";
import express from "express";
const app = express();

const port = 8888;

// Schema
const typeDefs = gql(readFileSync("./schema.graphql", { encoding: "utf8" }));

// Apollo server
const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});
await server.start();

// Prepare apollo server
app.use(express.json());

app.use("/graphql", expressMiddleware(server ));


// Database connection
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
