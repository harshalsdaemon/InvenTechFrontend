import axios from "axios";


const singleImageCreateHandleChangeUtility = async (event: any, form: any, folder: string, fieldName: string) => {
  if (!event.target.files?.[0]) {
    alert("Please select an image!");
    return;
  }

  const formData = new FormData();
  formData.append("image", event.target.files?.[0]);
  formData.append("folder", folder);

  try {
    const response = await axios.post<{ create: { url: string, pid: string } }>(
      "http://localhost:8080/api/v1/single-image/create/",
      formData,
      { 
        headers: { "Content-Type": "multipart/form-data" }, 
        withCredentials: true,
      },
    );
    // console.log(response.data.create);
    form.setValue(fieldName, response.data.create, { shouldValidate: false });
  } catch (error) {
    console.error(error);
  } 
}

export default singleImageCreateHandleChangeUtility;
