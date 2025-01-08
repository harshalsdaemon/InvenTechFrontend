import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const apiConnection = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_ENVIRONMENT === "Production" ? "https://inventech-backend.onrender.com/api/v1/" : "http://localhost:8080/api/v1/",
    credentials: "include"
  }),
  tagTypes: [
    "baseManyToOneList",   "baseManyToOneRetrieve", 
    "baseManyToManyList",  "baseManyToManyRetrieve", 
    "baseList",            "baseRetrieve", 
    "baseOneToOneList",    "baseOneToOneRetrieve", 
    "baseOneToManyList",   "baseOneToManyRetrieve", 

    "menuList",            "menuRetrieve", 
    "roleList",            "roleRetrieve", 
    "userList",            "userRetrieve",

    "productList",         "productRetrieve", 
    "categoryList",        "categoryRetrieve", 
    "tagList",             "tagRetrieve", 
    "productVariantList",  "productVariantRetrieve", 
    "optionList",          "optionRetrieve", 
    "groupList",           "groupRetrieve", 

    "questionList",        "questionRetrieve", 
    "factorList",          "factorRetrieve", 
  ],
  endpoints: () => ({})
})

export default apiConnection;
