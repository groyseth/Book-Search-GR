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
author: String
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
}


`;

module.exports = typeDefs;
