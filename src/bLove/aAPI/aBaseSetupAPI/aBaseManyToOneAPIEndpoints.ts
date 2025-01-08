import apiConnection from "@/aConnection/cAPIConnection";


const baseManyToOneAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({
    
    baseManyToOneListAPI: builder.query({
      query: () => ({
        url: `base-many-to-one/list/`,
        method: "GET"
      }),
      providesTags: ["baseManyToOneList"]
    }),

    baseManyToOneCreateAPI: builder.mutation({
      query: (data) => ({
        url: `base-many-to-one/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["baseManyToOneList"]
    }),

    baseManyToOneRetrievePI: builder.query({
      query: (data) => ({
        url: `base-many-to-one/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: any) => [{ type: "baseManyToOneRetrieve", id: data.params._id }],
    }),

    baseManyToOneUpdateAPI: builder.mutation({
      query: (data) => ({
        url: `base-many-to-one/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any, _error: any, data: any) => [
        { type: "baseManyToOneList" },
        { type: "baseManyToOneRetrieve", id: data.params._id },
      ],
    }),

    baseManyToOneDeleteAPI: builder.mutation({
      query: (data) => (
        console.log("first"), {
        url: `base-many-to-one/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: any) => [
        { type: "baseManyToOneList" },
        { type: "baseManyToOneRetrieve", id: data.params._id },
      ],
    }),

  })
})

export default baseManyToOneAPIEndpoint;
