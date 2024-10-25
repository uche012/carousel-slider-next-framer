"use client";
import { useState, useEffect, use } from "react";
import { motion } from "framer-motion";
import styles from "./Carousel.module.css";

const images = [
  "/images/notfound5.png",
  "/images/notfound6.png",
  "/images/notfound7.png",
  // Add more images as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={styles.slider}
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ duration: 0.5 }}
      >
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={styles.image}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </motion.div>
      <button className={styles.prev} onClick={handlePrev}>
        Previous
      </button>
      <button className={styles.next} onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
