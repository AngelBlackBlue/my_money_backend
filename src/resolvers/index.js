import { mergeSchemas } from '@graphql-tools/schema'
import resolversUser from './resolvers.user'
import transactionUser from './transaction.user'

const mergeResolvers = mergeSchemas(
    [
        resolversUser,
        transactionUser
    ]
)

export default mergeResolvers


 
