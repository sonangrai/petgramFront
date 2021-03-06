import React from "react";
import Image from "next/image";
import { ImageWrapper } from "./styled/ImageWrapper.styled";

/**
 *
 * height = height for image
 * src = image source
 * alt = alt text
 * layout = image fill type
 * @returns The Image Component that will implement the next Image.
 */

const NextImage = ({
  height,
  src = "/favicon.ico",
  alt = "Alt Text",
  layout = "fill",
}) => {
  return (
    <ImageWrapper height={height} layout={layout || "cover"}>
      <Image src={src} layout="fill" alt={alt} />
    </ImageWrapper>
  );
};

export default NextImage;
