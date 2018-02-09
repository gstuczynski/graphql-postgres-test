import { Country } from './connectors';

const resolvers = {
  Query: {
    country(_, args) {
      return Country.find({ where: args });
    },
  },
};

export default resolvers;