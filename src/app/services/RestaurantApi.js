import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const RestaurantApi = createApi(
    {
        reducerPath: 'RestaurantApi',
        baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030/' }),

        endpoints: (builder) => ({
            getRestaurant: builder.query({
                query: () => `restaurant`,
                providesTags: ['Restaurant']
            }),

            deleteFood: builder.mutation({
                query: (id) => ({
                    url: `restaurant/${id}`,
                    method: 'DELETE',

                }),
                invalidatesTags: ['Restaurant']
            }),


            createFood: builder.mutation({
                query: (info) => ({
                    url: `restaurant`,
                    method: 'POST',
                    body: {
                        id: info[0],
                        foodName: info[1],
                        foodContent: info[2],
                        foodImg: info[3],
                        price: info[4],
                     

                    }

                }),
                invalidatesTags: ['Restaurant']
            })

        })
    }
)

export const {
    useGetRestaurantQuery,
    useDeleteFoodMutation,
    useCreateFoodMutation,
  

} = RestaurantApi;

