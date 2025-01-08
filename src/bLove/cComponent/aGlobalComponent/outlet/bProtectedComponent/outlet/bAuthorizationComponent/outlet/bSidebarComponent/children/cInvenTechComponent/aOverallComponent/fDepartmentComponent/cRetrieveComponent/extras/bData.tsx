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
                      { label: "Name", value: "Lo'real Shampoo", type: "normal" },
                      { label: "Created By", value: "Digvijay Patil", type: "normal" },
                      { label: "Emp. Count", value: "123456789", type: "normal" },
                      { label: "Date Added", value: "22 Dec, 2023", type: "normal" },
                    ],  
                  },

                  // Supplier Details
                  {
                    display: false,
                    title: "Contact Person Details",
                    subtitle: "In this section, you will see created and updated details.",
                    values: [
                      { label: "Contact Person Name", value: "Ganesh Shiv", type: "normal" },
                      { label: "Contact", value: "+298-29787826-1789", type: "normal" },
                      { label: "Email", value: "punya.paap.punya.paap@divine.com", type: "normal", style: "col-span-3" },
                    ],  
                  },
                                    
                  // Supplier Details
                  // {
                  //   display: true,
                  //   title: "Departments",
                  //   subtitle: "In this section, you will see created and updated details.",
                  //   values: [
                  //     { label: "Department List", value: "Ganesh Shiv", type: "data-list-1" },
                  //   ],  
                  // },
                                    
                  {
                    display: true,
                    title: "Employees",
                    subtitle: "In this section, you will see created and updated details.",
                    values: [
                      { label: "Employee List", value: "Ganesh Shiv", type: "data-list-2" },
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