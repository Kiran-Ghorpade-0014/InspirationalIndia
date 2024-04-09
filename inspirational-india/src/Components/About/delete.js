const resolver = {
    Query:{
        books:()=> books,
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});
