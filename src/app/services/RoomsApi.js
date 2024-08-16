import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const RoomsApi = createApi(
    {
        reducerPath: 'RoomsApi',
        baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030/' }),

        endpoints: (builder) => ({
            getRooms: builder.query({
                query: () => `rooms`,
                providesTags: ['Rooms']
            }),

            getRoomsAll: builder.query({
                query: () => `rooms`,
                providesTags: ['Rooms']
            }),

            deleteRoom: builder.mutation({
                query: (id) => ({
                    url: `rooms/${id}`,
                    method: 'DELETE',

                }),
                invalidatesTags: ['Rooms']
            }),

            createRoom: builder.mutation({
                query: (info) => ({
                    url: `rooms`,
                    method: 'POST',
                    body: {
                        id: info[0],
                        type: info[1],
                        meterage : info[2],
                        description: info[3],
                        roomImg: info[4],
                        price: info[5],
                        bed: info[6]

                    }

                }),
                invalidatesTags: ['Rooms']
            }),

            updateRoom: builder.mutation({
                query: ({ id, selectedRoom }) => ({
                    url: `room/${id}`,
                    method: 'PATCH',
                    body: {
                        selectedRoom

                    }
                }),
                invalidatesTags: ['Rooms'],
            })
        })
    }
)

export const {
    useGetRoomsQuery,
    useGetRoomsAllQuery,
    useDeleteRoomMutation,
    useCreateRoomMutation,
    useUpdateRoomMutation

} = RoomsApi;

