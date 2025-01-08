const data = (_APICall?: any) => {
  return ({
    header: {
      title: "Warehouse Information",
      subtitle: "Here's a list of your tasks for this month!",
      buttons: []
    },
    content: {
      sections: (
        // APICall.retrieveAPIResponse.isLoading ? null : 
        //   APICall.retrieveAPIResponse.isError ? null :
        //     APICall.retrieveAPIResponse.isSuccess ? (
        //       APICall.retrieveAPIResponse.data.success ? (
                [
                  // Basic Information
                  {
                    display: false,
                    title: "Basic Information",
                    subtitle: "In this section, please enter title, subtitle, description, etc.",
                    values: [],  
                  },
          
                  // Personal Information
                  {
                    display: false,
                    title: "Personal Information",
                    subtitle: "In this section, you will see created and updated details.",
                    values: [],  
                  },
          
                  // Relation Information
                  {
                    display: false,
                    title: "Relation Information",
                    subtitle: "In this section, you will see relation details, you will see relation details.",
                    values: [],  
                  },
          
                  // More Information
                  {
                    display: false,
                    title: "More Information",
                    subtitle: "In this section, you will see created and updated details.",
                    values: [],  
                  },
          
                  // Critical Information
                  {
                    display: false,
                    title: "Critical Information",
                    subtitle: "In this section, you will see created and updated details.",
                    values: [],  
                  },

                  // General Information
                  {
                    display: true,
                    title: "General Information",
                    subtitle: "In this section, you will see created and updated details.",
                    values: [
                      { label: "ID", value: "1234567", type: "normal" },
                      { label: "Supplier", value: "Lo'real", type: "normal" },
                      { label: "Date Created", value: "23 Dec, 2024", type: "normal" },
                      { label: "Last Updated", value: "23 Dec, 2024", type: "normal" },
                      { label: "PO Value (AED)", value: "233.29", type: "normal" },
                      { label: "Status", value: "Unfullfilled", type: "normal" },
                    ],  
                  },

                  // Supplier Details
                  {
                    display: false,
                    title: "Contact Person Details",
                    subtitle: "In this section, you will see created and updated details.",
                    values: [
                      { label: "Contact Person Name", value: "Ganesh Shiv", type: "tab-structure" },
                    ],  
                  },
                                    
                  // Supplier Details
                  {
                    display: false,
                    title: "Product List",
                    subtitle: "In this section, you will see created and updated details.",
                    values: [
                      { label: "Product List", value: "Ganesh Shiv", type: "data-list" },
                    ],  
                  },
                                    
                ]
            // ) : []
            // ) : []
      )
    }
  })
}

export default data