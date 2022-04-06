const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://groyseth:mongopass@cluster0.89osj.mongodb.net/google-booksearch?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,    
});

module.exports = mongoose.connection;

