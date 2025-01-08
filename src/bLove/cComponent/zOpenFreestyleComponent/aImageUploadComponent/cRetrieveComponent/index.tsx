import React, { useState } from "react";
import axios from "axios";

// Type for the image data (Cloudinary response)
interface ImageData {
  secure_url: string; // URL of the image
  public_id: string;  // Cloudinary ID (public_id)
}

const ImageUploadRetrieveComponent: React.FC = () => {
  const [publicId, setPublicId] = useState<string>("");  // State to hold the public ID
  const [image, setImage] = useState<ImageData | null>(null);  // State to store fetched image data
  const [loading, setLoading] = useState<boolean>(false);  // Loading state
  const [error, setError] = useState<string>("");  // Error state

  // Fetch the image from the server by public ID
  const fetchImage = async () => {
    if (!publicId) {
      alert("Please enter a public ID.");
      return;
    }

    setLoading(true);
    setError("");  // Reset error state
    try {
      const response = await axios.get<{ message: string; image: ImageData }>(
        `http://localhost:8080/api/v1/upload-image/retrieve/${publicId}`
      );
      setImage(response.data.image);  // Set the image data
    } catch (err) {
      setError("Failed to fetch image.");
      console.error(err);
    } finally {
      setLoading(false);  // Stop loading
    }
  };

  return (
    <div>
      <h1>Retrieve Image by Cloudinary Public ID</h1>
      
      {/* Input for Cloudinary public ID */}
      <input
        type="text"
        placeholder="Enter public ID"
        value={publicId}
        onChange={(e) => setPublicId(e.target.value)}
      />
      <button onClick={fetchImage} disabled={loading}>
        {loading ? "Loading..." : "Fetch Image"}
      </button>

      {/* Display Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display the Image */}
      {image && (
        <div>
          <h3>Image Details:</h3>
          <img src={image.secure_url} alt="Retrieved" style={{ width: "300px", height: "auto" }} />
          <p>Cloudinary ID: {image.public_id}</p>
          <p>
            URL: <a href={image.secure_url} target="_blank" rel="noopener noreferrer">{image.secure_url}</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageUploadRetrieveComponent;
