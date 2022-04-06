const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("books")
    },
    books: async () => {
      return Book.find()
    },
    singleUser: async (parent, { userId }) => {
      return User.findOne({ _id:userId }).populate('books')
    },

  },
  Mutation: {
    createUser: async (parent, args) => {
      console.log("addUser");
      const users = await User.create(args);
      const token = signToken(users);
      // console.log(token);
      console.log(users);

      return { token, users };
    },
    login: async (parent, { userName, password }) => {
      const users = await User.findOne({ userName });
      console.log(users);
      if (!users) {
        throw new AuthenticationError('No user with this user name found!');
      }
      const correctPw = await users.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }
      console.log("Logged In");
      const token = signToken(users);
      return { token, users };
    },
    savedBooks: async ( parent, {userId, args} ) => {
      // console.log(user);
      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: Book.args },
      
        );
        
        console.log(updatedUser)
       
        return updatedUser;
      } catch (err) {
        console.log(err);
        return res.status(400).json(err);
      }
    },

  },
};

module.exports = resolvers;
