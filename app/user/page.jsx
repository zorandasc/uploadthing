"use client";
import React, { useEffect, useState } from "react";
import UploadedImages from "../components/UploadedImages";
import { getAll, deleteImage } from "../actions.js";
import { usePathname } from "next/navigation";

const UserPage = () => {
  const pathname = usePathname();
  const [images, setImages] = useState([]);

  const handleRemove = async (key) => {
    const oldImages = [...images];
    const updatedImages = images.filter((image) => image.key !== key);
    //Update the state with the filtered images
    setImages(updatedImages);

    const response = await deleteImage(key);
    console.log(response);
    if (!response) setImages(oldImages);
  };

  useEffect(() => {
    const handleGetAll = async () => {
      const data = await getAll();
      setImages(data);
    };
    handleGetAll();
  }, []);

  return (
    <main className="main">
      <UploadedImages
        images={images}
        handleRemove={handleRemove}
        pathname={pathname}
      ></UploadedImages>
    </main>
  );
};

export default UserPage;
