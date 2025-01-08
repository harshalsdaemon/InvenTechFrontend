import singleImageCreateHandleChangeUtility from "@/bLove/dUtility/eSingleImageCreateHandleChangeUtility"
import singleImageUpdateHandleChangeUtility from "@/bLove/dUtility/fSingleImageUpdateHandleChangeUtility"
import singleImageDeleteHandleChangeUtility from "@/bLove/dUtility/gSingleImageDeleteHandleChangeUtility"


const data = (APICall: any) => {
  return ({
    header: {
      title: "Base Create",
      subtitle: "Here's a list of your tasks for this month!",
      buttons: []
    },
    content: {
      sections: [
        // Basic Information
        {
          display: true,
          title: "Basic Information",
          subtitle: "In this section, please enter title, subtitle, description, etc.",
          inputs: [
            { name: "aImage", label: "Image", type: "single-image-file",
              onChange: (event: any, form: any, fieldName: string) => singleImageCreateHandleChangeUtility(event, form, "inventech_base", fieldName),
              onUpdate: (event: any, form: any, fieldName: string, publicID: string) => singleImageUpdateHandleChangeUtility(event, form, "inventech_base", fieldName, publicID),
              onDelete: (event: any, form: any, fieldName: string, publicID: string) => singleImageDeleteHandleChangeUtility(event, form, "inventech_base", fieldName, publicID),
            },
            { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
            { name: "aSubtitle", label: "Subtitle", type: "text", placeholder: "Please enter subtitle..." },
            { name: "aDescription", label: "Description", type: "textarea", placeholder: "Please enter description..." },
            { name: "aDetail", label: "Detail", type: "textarea", placeholder: "Please enter detail..." },
            { name: "aStatus", label: "Status", type: "select", placeholder: "--Select Status--",
              options: [
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
              ]
            },
            { name: "aSlug", label: "Slug", type: "text", placeholder: "Please enter slug..." },
          ],  
        },

        // Personal Information
        {
          display: false,
          title: "Personal Information",
          subtitle: "In this section, you will see created and updated details.",
          inputs: [],  
        },

        // Relation Information
        {
          display: true,
          title: "Relation Information",
          subtitle: "In this section, you will see relation details.",
          inputs: [
            { name: "cBaseOneToOne", label: "Base One To One", type: "radio",
              options: 
                APICall.baseOneToOneListAPIResponse.isLoading ? null : 
                  APICall.baseOneToOneListAPIResponse.isError ? null :
                    APICall.baseOneToOneListAPIResponse.isSuccess ? (
                      APICall.baseOneToOneListAPIResponse.data.success ? (
                        APICall.baseOneToOneListAPIResponse.data.list.length > 0 ? (
                          APICall.baseOneToOneListAPIResponse.data.list.map((each: any) => ({
                            value: each._id, label: each.aTitle
                          })).reverse()
                        ) : []
                      ) : []
                    ) : []
            },
            { name: "cBaseOneToMany", label: "Base One To Many", type: "checkbox",
              options: 
                APICall.baseOneToManyListAPIResponse.isLoading ? null : 
                  APICall.baseOneToManyListAPIResponse.isError ? null :
                    APICall.baseOneToManyListAPIResponse.isSuccess ? (
                      APICall.baseOneToManyListAPIResponse.data.success ? (
                        APICall.baseOneToManyListAPIResponse.data.list.length > 0 ? (
                          APICall.baseOneToManyListAPIResponse.data.list.map((each: any) => ({
                            value: each._id, label: each.aTitle
                          })).reverse()
                        ) : []
                      ) : []
                    ) : []
            },
            { name: "cBaseManyToOne", label: "Base Many To One", type: "radio",
              options: 
                APICall.baseManyToOneListAPIResponse.isLoading ? null : 
                  APICall.baseManyToOneListAPIResponse.isError ? null :
                    APICall.baseManyToOneListAPIResponse.isSuccess ? (
                      APICall.baseManyToOneListAPIResponse.data.success ? (
                        APICall.baseManyToOneListAPIResponse.data.list.length > 0 ? (
                          APICall.baseManyToOneListAPIResponse.data.list.map((each: any) => ({
                            value: each._id, label: each.aTitle
                          })).reverse()
                        ) : []
                      ) : []
                    ) : []
            },
            { name: "cBaseManyToMany", label: "Base Many To Many", type: "checkbox",
              options: 
                APICall.baseManyToManyListAPIResponse.isLoading ? null : 
                  APICall.baseManyToManyListAPIResponse.isError ? null :
                    APICall.baseManyToManyListAPIResponse.isSuccess ? (
                      APICall.baseManyToManyListAPIResponse.data.success ? (
                        APICall.baseManyToManyListAPIResponse.data.list.length > 0 ? (
                          APICall.baseManyToManyListAPIResponse.data.list.map((each: any) => ({
                            value: each._id, label: each.aTitle
                          })).reverse()
                        ) : []
                      ) : []
                    ) : []
            },
          ],  
        },

        // More Information
        {
          display: false,
          title: "More Information",
          subtitle: "In this section, you will see created and updated details.",
          inputs: [],  
        },

        // Critical Information
        {
          display: false,
          title: "Critical Information",
          subtitle: "In this section, you will see created and updated details.",
          inputs: [],  
        },

      ],
    }
  })
}

export default data