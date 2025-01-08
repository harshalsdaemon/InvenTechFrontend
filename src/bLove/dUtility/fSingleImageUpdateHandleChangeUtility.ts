import axios from "axios";


const singleImageUpdateHandleChangeUtility = async (event: any, form: any, folder: string, fieldName: string, publicID: string) => {
  if (!event.target.files?.[0]) {
    alert("Please select an image!");
    return;
  }

  const formData = new FormData();
  formData.append("image", event.target.files?.[0]);
  formData.append("folder", folder);
  formData.append("public_id", publicID);

  try {
    const response = await axios.post<{ update: { url: string, pid: string } }>(
      "http://localhost:8080/api/v1/single-image/update/",
      formData,
      { 
        headers: { "Content-Type": "multipart/form-data" }, 
        withCredentials: true,
      },
    );
    // console.log(response.data.update);
    form.setValue(fieldName, response.data.update, { shouldValidate: false });
  } catch (error) {
    console.error(error);
  } 
}

export default singleImageUpdateHandleChangeUtility;
