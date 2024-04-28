"use client";
import React, { useEffect, useState } from "react";
import UploadedImages from "../components/UploadedImages";
import { getAll } from "../actions.js";
import { usePathname } from 'next/navigation'

const LikesPage = () => {
  const pathname = usePathname()
  const [images, setImages] = useState([]);
  const handleRemove = async (key) => {};

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

export default LikesPage;
