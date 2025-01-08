import React, { useState } from "react";
import axios from "axios";


const ImageUploadCreateComponent: React.FC = () => {
  // State Variable
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadUrl, setUploadUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Event Handlers
  // 1) On Change Handler
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0] || null;
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // On Submit Handler
  const onSubmitHandler = async (): Promise<void> => {
    if (!image) {
      alert("Please select an image!");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    setLoading(true);
    try {
      const response = await axios.post<{ create: { url: string, pid: string } }>(
        "http://localhost:8080/api/v1/upload-image/create/",
        formData,
        { 
          headers: { "Content-Type": "multipart/form-data" }, 
          withCredentials: true,
        },
      );
      setUploadUrl(response.data.create.url);
    } catch (error) {
      alert("Failed to upload image!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // JSX
  return (
    <React.Fragment>
      <div>
        {/* Label Image */}
        <h1>Upload Image</h1>

        {/* Input Image */}
        <input type="file" accept="image/*" onChange={onChangeHandler} />

        {/* Preview Image */}
        {preview && <img src={preview} alt="Preview" style={{ width: "200px", marginTop: "10px" }} />}
        
        {/* SubmitImage */}
        <button onClick={onSubmitHandler} disabled={loading}>
          {loading ? "Uploading..." : "Upload"}
        </button>

        {/* Uploaded Image */}
        {uploadUrl && (
          <div>
            <h3>Uploaded Image:</h3>
            <img src={uploadUrl} alt="Uploaded" style={{ width: "200px", marginTop: "10px" }} />
            <p>URL: <a href={uploadUrl} target="_blank" rel="noopener noreferrer">{uploadUrl}</a></p>
          </div>
        )}

      </div>
    </React.Fragment>
  );
};

export default ImageUploadCreateComponent;
