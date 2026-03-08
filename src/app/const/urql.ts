import { cacheExchange, createClient, fetchExchange } from 'urql'

export const urqlClient = createClient({
	url: '/gql',
	exchanges: [cacheExchange, fetchExchange],
	preferGetMethod: false,
})
