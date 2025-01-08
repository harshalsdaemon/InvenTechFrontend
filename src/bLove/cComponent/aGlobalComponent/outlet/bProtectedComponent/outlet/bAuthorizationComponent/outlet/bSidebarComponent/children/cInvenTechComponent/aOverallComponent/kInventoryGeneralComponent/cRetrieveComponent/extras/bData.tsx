import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

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
                      { label: "Name", value: "Loreal Shampoo", type: "normal", style: "col-span-3" },
                      { label: "Quantity", value: "287", type: "normal" },
                      { label: "Barcode", value: "6754213", type: "normal" },
                      { label: "Alert", value: <ExclamationTriangleIcon className="w-6 h-6 text-red-500" />, type: "normal" },

                      { label: "Avg Purch/SKU (AED)", value: "33.03", type: "normal" },
                      { label: "Total Purch/SKU (AED)", value: "44.89", type: "normal" },
                      { label: "Warehouse", value: "UAE", type: "normal" },
                    ],  
                  },

                  // Supplier Details
                  {
                    display: true,
                    title: "Inward Table",
                    subtitle: "In this section, you will see created and updated details.",
                    values: [
                      { label: "Inward List", value: "Vinayak", type: "normal-list" },
                    ],  
                  },
                                    
                  {
                    display: true,
                    title: "Outward Table",
                    subtitle: "In this section, you will see created and updated details.",
                    values: [
                      { label: "Inward List", value: "Vinayak", type: "normal-list" },
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