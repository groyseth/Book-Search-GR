const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://groyseth:ginger6686@cluster0.89osj.mongodb.net/bookSearch?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
