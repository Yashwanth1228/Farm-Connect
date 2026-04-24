import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// ✅ Define types
export interface User {
  _id: string
  name: string
  email: string
}

export interface CreateUserRequest {
  email: string
  password: string
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
    credentials: 'include', // for session/cookies
  }),
  tagTypes: ['User','equipment','booking',"user",],


  endpoints: (builder) => ({
    
    // GET Users
    getEquipments: builder.query<any,void>({
      query: () => '/equipment/all',
      providesTags: ['equipment'],
    }),

    // POST User
    login: builder.mutation<User, CreateUserRequest>({
      query: (data) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),


    // GET equipment
    deleteEquipments: builder.mutation<object, string | number>({
      // => `/equipment/delete/${id}`,
      query: (id) => ({
        url: `/equipment/delete/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['equipment'],
    }),


    getBookings: builder.query<any,void>({
      query: () => '/bookings/all',
      providesTags: ['booking'],
    }),

    getUsers: builder.query<any,void>({
      query: () => '/users/all',
      providesTags: ['user'],
    }),
    
    

  }),
})

// ✅ Export hooks
export const {
  useGetEquipmentsQuery,
  useLazyGetEquipmentsQuery,
  useLoginMutation,
  useDeleteEquipmentsMutation,
  useGetBookingsQuery,
  useGetUsersQuery,
} = apiSlice