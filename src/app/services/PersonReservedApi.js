import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const PersonReservedApi = createApi(

    {
        reducerPath: 'PersonReservedApi',
        baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030/' }),

        endpoints: (builder) => ({

            createPersonReserved: builder.mutation({
                query: (info) => ({
                    url: `personReserved`,
                    method: 'POST',
                    body: {
                        id: info[0],
                        name: info[1],
                        lastName: info[2],
                        nationalId: info[3],
                        email: info[4],
                        personReservedRooms: info[5],
                        chekInTime: info[6],
                        chekOutTime: info[7],
                        numberOfDay: info[8],
                        foods: []

                    }

                }),
                invalidatesTags: ['PersonReserved']
            }),

            getPersonReserved: builder.query({
                query: () => `personReserved`,
                providesTags: ['PersonReserved']
            }),

            updatePersonReserved: builder.mutation({
                query: ({ id, info }) => ({
                    url: `personReserved/${id}`,
                    method: 'PUT',
                    body: {
                        id,
                        name: info[1],
                        lastName: info[2],
                        nationalId: info[3],
                        email: info[4],
                        personReservedRooms: info[5],
                        chekInTime: info[6],
                        chekOutTime: info[7],
                        numberOfDay: info[8],
                        foods: []

                    }
                }),
                invalidatesTags: ['PersonReserved'],
            }),

            deletePersonReserved: builder.mutation({
                query: (id) => ({
                    url: `personReserved/${id}`,
                    method: 'DELETE',

                }),
                invalidatesTags: ['PersonReserved']
            })
        })
    }
)

export const {
    useGetPersonReservedQuery,
    useDeletePersonReservedMutation,
    useCreatePersonReservedMutation,
    useUpdatePersonReservedMutation

} = PersonReservedApi;