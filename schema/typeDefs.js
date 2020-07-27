const { gql } = require('apollo-server-express')
const typeDefs = gql`

type Character {
    id: ID!
    name: String!
    level: Int!
    stars: Int!
    owned: Int!
    factions: [characterFaction!]!
}

type characterFaction {
    id: ID!
    character: Character!
    faction: Faction!
}

type Faction {
    id: ID!
    name: String!
}

type Query {
    Character(name: String!): Character
    AllCharacters: [Character!]!
    AllFactions: [Faction!]!
    AllCharacterFactions: [characterFaction!]!
    CharactersFromFaction(name: String!): [characterFaction!]!
    StrongestFromFaction(name: String!): [characterFaction!]!
}

type Mutation {
    createCharacter(name: String!, level: Int!, stars: Int!, owned: Int!): Character!
}`

module.exports = typeDefs