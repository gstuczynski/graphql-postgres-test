import {makeExecutableSchema, addMockFunctionsToSchema} from 'graphql-tools';
import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} from 'graphql';
//import mocks from './mocks';
//import resolvers from './resolvers';
import Db from './connectors'

const Country = new GraphQLObjectType({
  name: 'Country',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(country) {
          return country.id;
        }
      },
      name: {
        type: GraphQLString,
        resolve(country) {
          return country.name;
        }
      },
      geom: {
        type: GraphQLString,
        resolve(country) {
          return country.geom;
        }
      }
    }
  }
})

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => {
    return {
      countries: {
        type: new GraphQLList(Country),
        args: {
          id: {
            type: GraphQLInt
          },
          name: {
            type: GraphQLString
          }
        },
        resolve(root, args) {
          return Db.models.test.findAll({where: args});
      }
      }
    }
  }
})

const Schema = new GraphQLSchema({
  query: Query
})

export default Schema;