const data = (_APICall?: any) => {
  return ({
    header: {
      title: "Add Employee",
      subtitle: "",
      buttons: []
    },
    content: {
      sections: [
        // Basic Information
        {
          display: false,
          title: "Basic Information",
          subtitle: "In this section, please enter title, subtitle, description, etc.",
          inputs: [],  
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
          display: false,
          title: "Relation Information",
          subtitle: "In this section, you will see relation details.",
          inputs: [],  
        },

        // More Information
        {
          display: true,
          title: "More Information",
          subtitle: "In this section, you will see created and updated details.",
          inputs: [
            { name: "dID", label: "ID", type: "text", style: "col-span-1" },
            { name: "dName", label: "Name", type: "text", style: "col-span-2" },

            { name: "dAddress", label: "Address", type: "text", style: "col-span-4" },

            { name: "dContact", label: "Contact", type: "text", style: "col-span-1" },
            { name: "dEmail", label: "Email", type: "text", style: "col-span-2" },

            { name: "dRole", label: "Search & Select Role", type: "search-and-select", placeholder:"Search...", description: "Accountant", style: "col-span-3" },
            { name: "dDepartment", label: "Search & Select Departments", type: "search-and-select", placeholder:"Search...", description: "Accounts, Printing", style: "col-span-2" },
            { name: "dLocation", label: "Search & Select Location", type: "search-and-select", placeholder:"Search...", description: "Dubai", style: "col-span-2" },
          ],  
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