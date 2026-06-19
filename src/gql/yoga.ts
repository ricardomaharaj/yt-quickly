import { createYoga } from "graphql-yoga"
import { schema } from "./schema"

export const yoga = createYoga({
	graphqlEndpoint: "/gql",
	schema: schema,
})
