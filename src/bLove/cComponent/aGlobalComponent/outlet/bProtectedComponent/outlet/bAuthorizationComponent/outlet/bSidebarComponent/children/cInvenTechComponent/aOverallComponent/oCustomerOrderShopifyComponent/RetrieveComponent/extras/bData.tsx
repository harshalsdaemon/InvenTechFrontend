const data = (_APICall?: any) => {
  return ({
    header: {
      title: "Product Information",
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
                      { label: "Purchase Date", value: "23 Dec, 2024", type: "normal" },
                      { label: "Billing Name", value: "Ava Max", type: "normal" },
                      { label: "Billing Address", value: "Near Vinayakrao Deshmukh High School, Shantinagar, California, Steet 81", type: "normal", style: "col-span-2" },

                      { label: "Customer Name", value: "Ava Max", type: "normal" },
                      { label: "Order Cost", value: "77.22", type: "normal" },
                      { label: "Shipping Name", value: "Ava Max", type: "normal" },
                      { label: "Shipping Address", value: "Near Vinayakrao Deshmukh High School, Shantinagar, California, Steet 81", type: "normal", style: "col-span-2" },
                      
                      { label: "Customer Email", value: "hello@inventech.com", type: "normal" },
                      { label: "Pushed To Shopify On", value: "23 Dec, 2024", type: "normal-green" },

                    ],  
                  },

                  // Supplier Details
                  {
                    display: true,
                    title: "Order Table",
                    subtitle: "In this section, you will see created and updated details.",
                    values: [
                      { label: "asdsad", value: "INR", type: "normal-list" },
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