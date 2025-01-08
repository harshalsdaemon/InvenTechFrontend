import React, { useState } from "react";
import axios from "axios";

const ImageUploadDeleteComponent: React.FC = () => {
  const [publicId, setPublicId] = useState<string>(""); // Filename without folder path
  const [loading, setLoading] = useState<boolean>(false);

  const onDeleteHandler = async (): Promise<void> => {
    if (!publicId) {
      alert("Please enter the public ID of the image to delete.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post<{ message: string }>(
        "http://localhost:8080/api/v1/upload-image/delete",
        { public_id: publicId },
        { headers: { "Content-Type": "application/json" } }
      );

      alert(response.data.message); // Display success message
      setPublicId(""); // Reset input field
    } catch (error) {
      alert("Failed to delete image.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Delete Image</h1>

      {/* Input for Public ID */}
      <input
        type="text"
        placeholder="Enter image filename (e.g., example-image)"
        value={publicId}
        onChange={(e) => setPublicId(e.target.value)}
      />

      {/* Delete Button */}
      <button onClick={onDeleteHandler} disabled={loading}>
        {loading ? "Deleting..." : "Delete Image"}
      </button>
    </div>
  );
};

export default ImageUploadDeleteComponent;
