const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');

const Buildings = new GraphQLObjectType ({
	name: 'Buildings',
	fields: () => ({
		name: {type: GraphQLString}
	})
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		Buildings: {
			type: new GraphQLList(Buildings),
			resolve(parents, args) {
				return fetch('http://smart-meeting.herokuapp.com/graphql', {
					headers:{
						token:"a123gjhgjsdf6576"
					}
				}).then((response) => console.log(response))
			}
		}
	}
})

module.exports = new GraphQLSchema({
	query: RootQuery
})