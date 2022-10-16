const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Parks {
    fullName: String
    description: String
    states: String
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    Parks: [Parks]!
    statePark(statexx: String!): Parks

  }
 



  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile



    











  }
`;

module.exports = typeDefs;







// type activities {
//   id:
//   name:
// }

// type entranceFees {
//   cost: String
//   description: String
//   title: String
// }

// type Park {
// {
//   "data":[
//   {

//   fullName: String      
//   parkCode: String
//   description: String
//   latitude: String
//   longitude: String 
//   latLong: String
//   activities:[activities]
//   states: String
//   entranceFees:[]
//   entrancePasses:[]
//   fees:[]
//   directionsUrl: String 
//   operatingHours:[]
//   addresses:[]
//   images:[]
//   weatherInfo: String
//   name: String
//   designation: String
  
  
//   }
  
//   ]
//   }



