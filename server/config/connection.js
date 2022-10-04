const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || `mongodb+srv://parkpals2:mongoDBparks@cluster0.7byl7zz.mongodb.net/test`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;



