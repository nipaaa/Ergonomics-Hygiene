import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import GallerySection from "./GallerySection";

const Gallery = () => {
  return (
    <Container className="section_gap top_gap">
      <h2 className="gallery fw-bold text-center">Gallery</h2>
      <GallerySection />
    </Container>
  );
};

export default Gallery;
