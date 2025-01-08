const data = (_APICall?: any) => {
  return ({
    header: {
      title: "Add Product",
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
            { name: "dSKUID", label: "SKU ID", type: "text" },
            { name: "dName", label: "Name", type: "text", style: "col-span-2" },
            { name: "dType", label: "Type", type: "text", style: "col-span-2" },
            { name: "dStoreViewCode", label: "Store View Code", type: "text" },
            { name: "dPriceAEDSupplier", label: "Price (AED-Supplier)", type: "text" },
            { name: "dBarcode", label: "Barcode", type: "text" },
            { name: "dMinAlertQuantity", label: "Min Alert Quantity", type: "text", style: "col-span-2" },
            { name: "dAddCategories", label: `Add Categories (Seperated by ",")`, type: "text", style: "col-span-5" },
            { name: "dSupplierName", label: "Supplier Name", type: "text" },
            { name: "dContactPerson", label: "Contact Person", type: "text" },
            { name: "dContact", label: "Contact", type: "text" },
            { name: "dEmail", label: "Email", type: "text", style: "col-span-2" },
            { name: "dAddress", label: "Address", type: "text", style: "col-span-5" },
            { name: "dCountry", label: "Country", type: "text" },
            { name: "dState", label: "State", type: "text" },
            { name: "dCity", label: "City", type: "text" },
            { name: "dPin", label: "Pin", type: "text" },
            { name: "dCurrency", label: "Currency", type: "text" },
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