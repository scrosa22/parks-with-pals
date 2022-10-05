const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || `mongodb+srv://parkpals2:mongoDBparks@cluster0.7byl7zz.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;



