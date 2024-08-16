import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mergeResolvers from './resolvers/index';


const server = new ApolloServer({
    typeDefs,
    resolvers: mergeResolvers,
  });
  

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);

  