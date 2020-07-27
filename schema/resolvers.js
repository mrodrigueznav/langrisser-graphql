const resolvers = {
    Query: {
     async CharactersFromFaction (root, { name }, { models }) {
       return models.characterFaction.findAll({
         include: [
           {
             model: models.Faction,
             where: {name: name}
           },
           {
             model: models.Character
           }
         ]
       })
     },
     async StrongestFromFaction (root, { name }, { models }) {
       return models.characterFaction.findAll({
         include: [
           {
             model: models.Faction,
             where: {name: name}
           },
           {
             model: models.Character
           }
         ]
       })
     },
     async Character (parent, { name }, { models }) {
      return models.Character.findOne({
        where: {name: name},
        include: [
          {
            model: models.characterFaction, 
            include: [
              {
                model: models.Faction
               }
             ]
          }
        ]
      })
    },
     async AllCharacters (parent, args, { models }){
      return models.Character.findAll({
       include: [
         {
           model: models.characterFaction, 
           include: [
             {
               model: models.Faction
              }
            ]
         }
       ] 
      })
    },
    async AllFactions (root, args, {models}){
      return models.Faction.findAll()
    },
    async AllCharacterFactions (root, args, {models}){
      return models.characterFaction.findAll({include: ['Faction', 'Character']})
    },
  },
  Mutation: {
    async createCharacter (parent, { name, level, stars, owned }, { models }) {
      return models.Character.create({
       name,
       level,
       stars,
       owned
    })
  },
    },
    Character: {
      factions: (parent, args, context, info) => parent.dataValues.characterFactions
        },
    characterFaction: {
      faction: (parent, args, context, info) => parent.dataValues.Faction,
      character: (parent, args, context, info) => parent.dataValues.Character
        }
    }
    
module.exports = resolvers