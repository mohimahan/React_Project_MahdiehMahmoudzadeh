import { configureStore } from "@reduxjs/toolkit";
import { RoomsApi } from "./services/RoomsApi";
import { PersonReservedApi } from "./services/PersonReservedApi";
import { RestaurantApi } from "./services/RestaurantApi";



export const store = configureStore({
    reducer: {
        [RoomsApi.reducerPath]: RoomsApi.reducer,
        [PersonReservedApi.reducerPath]: PersonReservedApi.reducer,
        [RestaurantApi.reducerPath]: RestaurantApi.reducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(RoomsApi.middleware, PersonReservedApi.middleware, RestaurantApi.middleware)


})

