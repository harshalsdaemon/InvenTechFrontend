import React, { useState } from "react";  
import axios from "axios";  

const ImageUploadUpdateComponent: React.FC = () => {  
  // State Variables  
  const [publicId, setPublicId] = useState<string>("");  
  const [image, setImage] = useState<File | null>(null);  
  const [preview, setPreview] = useState<string | null>(null);  
  const [updatedUrl, setUpdatedUrl] = useState<string | null>(null);  
  const [loading, setLoading] = useState<boolean>(false);  

  // Handle File Input Change  
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {  
    const file = e.target.files?.[0] || null;  
    setImage(file);  

    if (file) {  
      setPreview(URL.createObjectURL(file));  
    }  
  };  

  // Submit Update Handler  
  const onSubmitHandler = async (): Promise<void> => {  
    if (!image || !publicId) {  
      alert("Please select an image and enter the public ID.");  
      return;  
    }  

    const formData = new FormData();  
    formData.append("image", image);  
    formData.append("public_id", publicId);  

    setLoading(true);  
    try {  
      const response = await axios.put<{ message: string; url: string; public_id: string }>(  
        "http://localhost:8080/api/v1/upload-image/update",  
        formData,  
        { headers: { "Content-Type": "multipart/form-data" } }  
      );  

      setUpdatedUrl(response.data.url); // Set the updated image URL  
      alert(response.data.message);  
    } catch (error) {  
      alert("Failed to update image.");  
      console.error(error);  
    } finally {  
      setLoading(false);  
    }  
  };  

  return (  
    <div>  
      <h1>Update Image</h1>  

      {/* Input for Public ID */}  
      <input  
        type="text"  
        placeholder="Enter existing public ID"  
        value={publicId}  
        onChange={(e) => setPublicId(e.target.value)}  
      />  

      {/* File Input for Image */}  
      <input type="file" accept="image/*" onChange={onChangeHandler} />  

      {/* Preview Selected Image */}  
      {preview && <img src={preview} alt="Preview" style={{ width: "200px", marginTop: "10px" }} />}  

      {/* Update Button */}  
      <button onClick={onSubmitHandler} disabled={loading}>  
        {loading ? "Updating..." : "Update Image"}  
      </button>  

      {/* Display Updated Image */}  
      {updatedUrl && (  
        <div>  
          <h3>Updated Image:</h3>  
          <img src={updatedUrl} alt="Updated" style={{ width: "300px", height: "auto" }} />  
          <p>URL: <a href={updatedUrl} target="_blank" rel="noopener noreferrer">{updatedUrl}</a></p>  
        </div>  
      )}  
    </div>  
  );  
};  

export default ImageUploadUpdateComponent;  
