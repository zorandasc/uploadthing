import React from "react";
import Image from "next/image"
import "./uploadedImages.css"

const UploadedImages = ({ images, handleRemove }) => {
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
              <button
                onClick={() => {
                  handleRemove(item.key);
                }}
                className="remove-btn"
              >
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default UploadedImages;
