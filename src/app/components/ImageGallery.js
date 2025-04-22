"use client";

import { useState, useEffect } from "react";

const ImageGallery = ({ category }) => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/getImages?category=${category}`);
        const data = await response.json();

        if (data.error) {
          console.error(data.error);
          return;
        }

        setImages(data);
      } catch (error) {
        console.error("Błąd podczas pobierania zdjęć:", error);
      }
    };

    fetchImages();
  }, [category]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const openLightbox = (image) => {
    if (!isDesktop) return;
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={image.src} className="gallery-item" style={{ animationDelay: `${index * 0.2}s` }}>
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-thumbnail"
              onClick={() => openLightbox(image)}
            />
          </div>
        ))}
      </div>

      {isOpen && isDesktop && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img
              src={currentImage?.src}
              alt={currentImage?.alt}
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
