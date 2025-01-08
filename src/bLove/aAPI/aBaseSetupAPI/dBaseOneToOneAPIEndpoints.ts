import apiConnection from "@/aConnection/cAPIConnection";


const baseOneToOneAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({
    
    baseOneToOneListAPI: builder.query({
      query: () => ({
        url: `base-one-to-one/list/`,
        method: "GET"
      }),
      providesTags: ["baseOneToOneList"]
    }),

    baseOneToOneCreateAPI: builder.mutation({
      query: (data) => ({
        url: `base-one-to-one/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["baseOneToOneList"]
    }),

    baseOneToOneRetrievePI: builder.query({
      query: (data) => ({
        url: `base-one-to-one/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: any) => [{ type: "baseOneToOneRetrieve", id: data.params._id }],
    }),

    baseOneToOneUpdateAPI: builder.mutation({
      query: (data) => ({
        url: `base-one-to-one/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any, _error: any, data: any) => [
        { type: "baseOneToOneList" },
        { type: "baseOneToOneRetrieve", id: data.params._id },
      ],
    }),

    baseOneToOneDeleteAPI: builder.mutation({
      query: (data) => (
        console.log("first"), {
        url: `base-one-to-one/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: any) => [
        { type: "baseOneToOneList" },
        { type: "baseOneToOneRetrieve", id: data.params._id },
      ],
    }),

  })
})

export default baseOneToOneAPIEndpoint;
