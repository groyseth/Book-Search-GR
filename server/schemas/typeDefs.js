const { gql } = require('apollo-server-express');

const typeDefs = gql`
 

type User {
  _id: ID
  username: String
  email: String
  password: String
  books: [Book]
}

type Book {
authors: [String]
description: String
bookId: String
image: String
link: String
title: String

}

type Auth { 
  token: ID!
  users: User
}

type Query {
  books: [Book]
  users: [User]
  singleUser(userId: ID!): User
}

type Mutation {
  createUser(username: String!, password: String!, email: String!): Auth
  login(username: String!, password: String!): Auth
  savedBooks(userId: ID, authors: String!, description: String!, bookId: String!, image: String!, link: String!, title: String!):User
}

`;

module.exports = typeDefs;
