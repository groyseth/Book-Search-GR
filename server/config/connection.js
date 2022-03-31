const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://groyseth:ginger6686@cluster0.89osj.mongodb.net/google-booksearch?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
