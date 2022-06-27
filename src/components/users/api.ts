import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { User } from './types'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/api/?results=1000' }),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => ``,
            transformResponse: (response: { results: [User] }) => response.results
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery } = userApi
