const db = require('../config/connection');
const { Profile } = require('../models');
const { Parks } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const parkSeeds = require('./parksSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    await Parks.deleteMany({});
    await Parks.create(parkSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
