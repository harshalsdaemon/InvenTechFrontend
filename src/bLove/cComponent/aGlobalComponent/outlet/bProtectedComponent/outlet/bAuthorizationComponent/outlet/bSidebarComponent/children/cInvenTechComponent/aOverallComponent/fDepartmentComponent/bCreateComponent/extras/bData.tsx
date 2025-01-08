const data = (_APICall?: any) => {
  return ({
    header: {
      title: "Add Department",
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
            { name: "dID", label: "ID", type: "text" },
            { name: "dName", label: "Name", type: "text", style: "col-span-3" },

            { name: "dEmployee", label: "Search & Select Employee", type: "select", style: "col-span-2", placeholder: "Search..." },
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