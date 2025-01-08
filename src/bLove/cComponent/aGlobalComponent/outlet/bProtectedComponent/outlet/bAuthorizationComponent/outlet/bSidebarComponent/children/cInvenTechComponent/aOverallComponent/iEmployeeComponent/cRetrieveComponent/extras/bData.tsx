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
                      { label: "Name", value: "Keanu Reeves", type: "normal" },
                      { label: "Cotact", value: "9876543210", type: "normal" },
                      { label: "Email", value: "keanu@inventech.com", type: "normal", style: "col-span-2" },

                      { label: "Address", value: "Near Vinayakrao Deshmukh High School, Shantinagar", type: "normal", style: "col-span-5" },

                      { label: "Role", value: "Accountant", type: "normal" },
                      { label: "Date Added", value: "22 Dec, 3032", type: "normal" },
                    ],  
                  },

                  // Supplier Details
                  {
                    display: true,
                    title: "Department Details",
                    subtitle: "In this section, you will see created and updated details.",
                    values: [
                      { label: "Departments", value: "Accounts; Pricing;", type: "normal" },
                    ],  
                  },
                                    
                  {
                    display: true,
                    title: "Location Details",
                    subtitle: "In this section, you will see created and updated details.",
                    values: [
                      { label: "Location", value: "Dubai", type: "normal" },
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