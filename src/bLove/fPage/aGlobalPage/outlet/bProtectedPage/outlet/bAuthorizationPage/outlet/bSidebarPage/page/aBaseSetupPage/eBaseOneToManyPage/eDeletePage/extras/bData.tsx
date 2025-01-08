const data = (APICall: any) => {
  return ({
    header: {
      title: "Base One To Many Retrieve",
      subtitle: "Here's a list of your tasks for this month!",
      buttons: []
    },
    content: {
      sections: (
        APICall.retrieveAPIResponse.isLoading ? null : 
          APICall.retrieveAPIResponse.isError ? null :
            APICall.retrieveAPIResponse.isSuccess ? (
              APICall.retrieveAPIResponse.data.success ? ([
                // Basic Information
                {
                  display: true,
                  title: "Basic Information",
                  subtitle: "In this section, please enter title, subtitle, description, etc.",
                  values: [
                    { label: "ID", value: APICall.retrieveAPIResponse.data.retrieve._id, type: "normal" },
                    { label: "Title", value: APICall.retrieveAPIResponse.data.retrieve.aTitle, type: "normal" },
                    { label: "Subtitle", value: APICall.retrieveAPIResponse.data.retrieve.aSubtitle, type: "normal" },
                    { label: "Description", value: APICall.retrieveAPIResponse.data.retrieve.aDescription, type: "textarea" },
                    { label: "Detail", value: APICall.retrieveAPIResponse.data.retrieve.aDetail, type: "textarea" },
                    { label: "Status", value: APICall.retrieveAPIResponse.data.retrieve.aStatus ? "Active" : "Inactive", type: "badge" },
                    { label: "Slug", value: APICall.retrieveAPIResponse.data.retrieve.aSlug, type: "normal" },
                  ],  
                },
        
                // Personal Information
                {
                  display: true,
                  title: "Personal Information",
                  subtitle: "In this section, you will see created and updated details.",
                  values: [
                    { label: "Created By", value: APICall.retrieveAPIResponse.data.retrieve.bCreatedBy, type: "userBlock" },
                    { label: "Created At", value: APICall.retrieveAPIResponse.data.retrieve.bCreatedAt, type: "date" },
                    { label: "Updated By", value: APICall.retrieveAPIResponse.data.retrieve.bUpdatedBy, type: "userBlock" },
                    { label: "Updated At", value: APICall.retrieveAPIResponse.data.retrieve.bUpdatedAt, type: "date" },
                  ],  
                },
        
                // Relation Information
                {
                  display: true,
                  title: "Relation Information",
                  subtitle: "In this section, you will see relation details, you will see relation details.",
                  values: [
                    { label: "Base", value: APICall.retrieveAPIResponse.data.retrieve.cBase?.aTitle, type: "normal" },
                  ],  
                },
        
                // More Information
                {
                  display: true,
                  title: "More Information",
                  subtitle: "In this section, you will see created and updated details.",
                  values: [],  
                },
        
                // Critical Information
                {
                  display: true,
                  title: "Critical Information",
                  subtitle: "In this section, you will see created and updated details.",
                  values: [],  
                },
                
              ]) : []
            ) : []
      )
    }
  })
}

export default data