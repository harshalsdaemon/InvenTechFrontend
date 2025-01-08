import axios from "axios";


const singleImageDeleteHandleChangeUtility = async (_event: any, form: any, folder: string, fieldName: string, publicID: string) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/single-image/delete/",
      {
        folder: folder,
        public_id: publicID
      },
      { 
        withCredentials: true,
      },
    );
    console.log(response.data.create);
    form.setValue(fieldName, null, { shouldValidate: false });
  } catch (error) {
    console.error(error);
  } 
}

export default singleImageDeleteHandleChangeUtility;
