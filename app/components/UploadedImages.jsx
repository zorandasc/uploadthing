import React from "react";
import Image from "next/image";
import "./uploadedImages.css";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const UploadedImages = ({ images, handleRemove, pathname }) => {
  return (
    <>
      {images?.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <i className="fa fa-spinner fa-pulse fa-4x fa-fw"></i>
        </div>
      ) : (
        <section className="uploaded-images">
          {images?.map((item, i) => (
            <div key={i} className="image-container">
              <Image
                priority
                src={`https://utfs.io/f/${item.key}`}
                alt="Image"
                layout="fill"
                className="image"
                sizes="100%"
                blurDataURL={`https://utfs.io/f/${item.key}`}
                placeholder="blur"
              />
              {pathname === "/user" && (
                <button
                  onClick={() => {
                    handleRemove(item.key);
                  }}
                  className="remove-btn"
                >
                  <i className="fa fa-times" aria-hidden="true"></i>
                </button>
              )}
              {pathname === "/likes" && (
                <button className="heart-btn">
                  <FaHeart />
                </button>
              )}
              {pathname === "/" && (
                <button className="heart-btn">
                  <FaRegHeart />
                </button>
              )}
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default UploadedImages;
