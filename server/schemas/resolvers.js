const { AuthenticationError } = require('apollo-server-express');
const { User, Project, Comments } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('projects').populate({
        path: 'projects',
        populate: 'comments'
      });;
  
    },
   
 
  },
  

  Mutation: {
    addUser: async (parent, { userName, github, password }) => {
      console.log("addUser");
      const users = await User.create({ userName, github, password });
      const token = signToken(users);
      // console.log(token);
      // console.log(users);

      return { token, users };
    },
  },
};
  
module.exports = resolvers;
