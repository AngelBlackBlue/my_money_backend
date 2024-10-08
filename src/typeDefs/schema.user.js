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

  type Mutation {
    signup(input: SignupInput!): User
    login(input: LoginInput!): User
    logout: Boolean
  }
  
  input SignupInput {
    name: String!
    email: String!
    password: String!
    image: String
  }

  input LoginInput {
    email: String!
    password: String!
  }
  
`;