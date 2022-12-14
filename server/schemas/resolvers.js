const { AuthenticationError } = require('apollo-server-express');
const { Profile } = require('../models');
const { Parks } = require('../models');
const { signToken } = require('../utils/auth');
const fetch = require("node-fetch");

// APIKey = 'Tk6fBL9Bwm4TDRp2fHSPEN8zDwt9ZHzowZbMSeI0'



const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },


    // Parks: async (parent,{ parksearch}) => {
    //   const response = await fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${parksearch}` + `&api_key=${APIKey}`);
    //   return response.json();
    // }

    // Parks: async () => {
    //  return Parks.find();
    // },
    // statePark: async (parent, {statesxx}) => {
    //  return Parks.find({states: statesxx});
    // }
  

  
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    addSkill: async (parent, { profileId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { skills: skill },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
    removeSkill: async (parent, { profileId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { skills: skill } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
