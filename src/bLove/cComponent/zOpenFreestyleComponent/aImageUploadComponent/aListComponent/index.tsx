import React, { useState, useEffect } from "react";
import axios from "axios";

// Type for the image data
interface ImageData {
  secure_url: string; // URL of the image
  public_id: string;  // Cloudinary ID (public_id)
}

const ImageUploadListComponent: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);  // State to store images
  const [loading, setLoading] = useState<boolean>(true);  // Loading state
  const [error, setError] = useState<string>("");  // Error state

  // Fetch images from the server
  const fetchImages = async () => {
    try {
      const response = await axios.get<{ message: string; images: ImageData[] }>(
        "http://localhost:8080/api/v1/upload-image/list",
      );
      setImages(response.data.images);  // Set the images in state
    } catch (err) {
      setError("Failed to load images.");
      console.error(err);
    } finally {
      setLoading(false);  // Stop loading
    }
  };

  useEffect(() => {
    fetchImages();  // Fetch images on component mount
  }, []);

  if (loading) return <p>Loading images...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Uploaded Images</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <div key={image.public_id} style={{ margin: "10px" }}>
            <img
              src={image.secure_url}
              alt="Uploaded"
              style={{ width: "200px", height: "auto" }}
            />
            <p>Cloudinary ID: {image.public_id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploadListComponent;
