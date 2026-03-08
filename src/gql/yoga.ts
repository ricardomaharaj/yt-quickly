import { createYoga } from 'graphql-yoga'
import { schema } from './schema'

export const yoga = createYoga({
	graphiql: process.env.NODE_ENV === 'development',
	graphqlEndpoint: '/gql',
	landingPage: false,
	schema: schema,
})
