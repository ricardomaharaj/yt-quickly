import { GraphQLError } from 'graphql'

export function GQLError(msg?: string) {
	return new GraphQLError(msg ?? 'ERROR')
}
