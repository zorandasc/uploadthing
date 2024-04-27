"use client";
import "./uploadPage.css";
import { useEffect, useState } from "react";
import imageCompression from "browser-image-compression";
import { getAll, deleteImage } from "./actions.js";
import NavbarBottom2 from "./components/NavbarBottom2";
import UploadedImages from "./components/UploadedImages";
import UploadDrop from "./components/UploadDrop";

const Home = () => {
  const [images, setImages] = useState([]);
  const [displayDropZone, setDsiplayDropZone] = useState(false);

  const handleRemove = async (key) => {
    const oldImages = [...images];
    const updatedImages = images.filter((image) => image.key !== key);
    //Update the state with the filtered images
    setImages(updatedImages);

    const response = await deleteImage(key);
    console.log(response);
    if (!response) setImages(oldImages);
  };

  const handleOnUploadComplete = (res) => {
    // Do something with the response
    console.log("Files: ", res);
    alert("Upload Completed");
    const newImages = res?.map(({ customId, key, name }) => {
      return { customId, key, name };
    });
    setImages([...newImages, ...images]);
  };

  const handleBeforeUpload = async (files) => {
    // Compress each file before uploading
    const compressedFiles = await Promise.all(
      files.map(async (file) => {
        try {
          const compressedFile = await imageCompression(file, {
            maxSizeMB: 0.5, // Maximum file size in MB
            maxWidthOrHeight: 1920, // Maximum width or height of the image
          });
          return compressedFile;
        } catch (error) {
          console.error("Error compressing file:", error);
          return file; // Return original file if compression fails
        }
      })
    );

    return compressedFiles;
  };

  const showDropZone = () => {
    setDsiplayDropZone(!displayDropZone);
  };

  useEffect(() => {
    const handleGetAll = async () => {
      const data = await getAll();
      setImages(data);
    };
    handleGetAll();
  }, []);

  return (
    <>
      <NavbarBottom2 handleDropZone={showDropZone}></NavbarBottom2>
      <main className="main">
        <UploadedImages
          images={images}
          handleRemove={handleRemove}
        ></UploadedImages>

        {displayDropZone && (
          <UploadDrop
            handleOnUploadComplete={handleOnUploadComplete}
            handleBeforeUpload={handleBeforeUpload}
          ></UploadDrop>
        )}
      </main>
    </>
  );
};

export default Home;
