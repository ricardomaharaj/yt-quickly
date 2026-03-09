import { lexicographicSortSchema, printSchema } from 'graphql'
import { builder } from './builder'

import './type/channel'
import './type/comment'
import './type/playlist'
import './type/search'
import './type/video'

import './query/channel'
import './query/comment'
import './query/playlist'
import './query/search'
import './query/video'

export const schema = builder.toSchema()

if (process.env.NODE_ENV === 'development') {
	Bun.write('./gql/schema.gql', printSchema(lexicographicSortSchema(schema)))
}
