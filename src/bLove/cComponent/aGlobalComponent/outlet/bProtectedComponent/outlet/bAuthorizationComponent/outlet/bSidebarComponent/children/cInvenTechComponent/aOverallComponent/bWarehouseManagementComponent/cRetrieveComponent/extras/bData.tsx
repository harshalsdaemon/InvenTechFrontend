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
                      { label: "Name", value: "Dubai Center", type: "normal", style: "col-span-3" },
                      { label: "Created On", value: "23 Dec, 2024", type: "normal" },

                      { label: "Address", value: "Near Vinayakrao Deshmukh High School, Shantinagar", type: "normal", style: "col-span-5" },

                      { label: "Country", value: "USA", type: "normal" },
                      { label: "State", value: "Maharashtra", type: "normal" },
                      { label: "City", value: "Boeing", type: "normal" },
                      { label: "PIN", value: "123456789", type: "normal", style: "col-span-2" },
                    ],  
                  },

                  // Supplier Details
                  {
                    display: true,
                    title: "Contact Person Details",
                    subtitle: "In this section, you will see created and updated details.",
                    values: [
                      { label: "Contact Person Name", value: "Ganesh Shiv", type: "normal" },
                      { label: "Contact", value: "+298-29787826-1789", type: "normal" },
                      { label: "Email", value: "punya.paap.punya.paap@divine.com", type: "normal", style: "col-span-3" },
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