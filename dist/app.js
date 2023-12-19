import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./graphql/resolvers.js";
import { readFileSync } from "fs";
const port = 8888;
const typeDefs = `${readFileSync("./schema.graphql", { encoding: "utf8" })}`;
const server = new ApolloServer({ typeDefs, resolvers });
// Prepare apollo server
const { url } = await startStandaloneServer(server, { listen: { port: port } });
console.log(`${url}`);
//# sourceMappingURL=app.js.map