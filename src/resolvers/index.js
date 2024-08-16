import { mergeSchemas } from '@graphql-tools/schema'
import resolverUser from './resolver.user'
import resolverTransaction from './resolver.transaction'

const mergeResolvers = mergeSchemas( 
    [ resolverUser, resolverTransaction ]
)

export default mergeResolvers


 
