import { yoga } from './yoga'

Bun.serve({ routes: { '/gql': yoga }, port: 4000 })
console.log('http://localhost:4000/gql')
