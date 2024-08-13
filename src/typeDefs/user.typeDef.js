const typeDefs = `#graphql

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    image: String        
  } 

  type Query {
    users: [User!]
    auth: User
    user(userId:ID!): User      
  }

  
  

`;