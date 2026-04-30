import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UploadApiResponse } from 'cloudinary'

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
  tagTypes: ['User','equipment','booking',"user","contact","admin","Images"],


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
        method: 'delete',
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

    updatestatus: builder.mutation<object, any>({
      query: ({ id, status }) => ({
        url: `/bookings/${id}`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ['booking'],
    }),

    getContacts: builder.query<any,void>({
      query: () => "/contact", 
      providesTags: ['contact'],
    }),

    updateRead: builder.mutation<any, any>({
      query: ({ id, isRead }) => ({
        url: `/contact/${id}`,
        method: "PATCH",
        body: { isRead },   // ✅ IMPORTANT
      }),
      invalidatesTags: ["contact"],
    }),

    deleteContact: builder.mutation<any, any>({
      query: ({ id }) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['contact'],

    }),

    adminLogin: builder.mutation<any, CreateUserRequest>({
      query: (data) => ({
        url: '/admin/login',
        method: 'POST',
        body: data,
        withCredentials: true,
        
      }),
      invalidatesTags: ['admin'],
    }),

    uploadImages: builder.mutation<any,FormData>({
      query: (fd) => ({
        url: '/admin/upload',
        method: 'POST',
        body: fd, 
      }),
      invalidatesTags: ['Images'],
    }),

    updateEquipment: builder.mutation<any, any>({
      query: ({id , data}) => ({
        url: `/equipment/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['equipment'],
    }),

    addEquipment: builder.mutation<any, any>({
      query: (data) => ({
        url: '/admin/add-equipment',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['equipment'],
    }),

    updateUserRole: builder.mutation<any, { userId: string; role: string }>({
      query: (data) => ({
        url: "/admin/update-role",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["user"],
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
  useUpdatestatusMutation,
  useGetContactsQuery,
  useUpdateReadMutation,
  useDeleteContactMutation,
  useAdminLoginMutation,
  useUploadImagesMutation,
  useUpdateEquipmentMutation,
  useAddEquipmentMutation,
  useUpdateUserRoleMutation,
} = apiSlice