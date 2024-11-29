"use client";
import { convertFormatImage } from "@/services/convertImage";
import { useState } from "react";

export const useImages = () => {
  const [image, setImage] = useState<undefined | string>(undefined);
  const [form, setForm] = useState<File | null>(null);
  const [type, setType] = useState<string>("");

  const clearImage = () => {
    if (image !== undefined) {
      URL.revokeObjectURL(image);
      setImage(undefined);
    }
  };

  const convertImage = async () => {
    if (!form || !type) {
      console.error("Imagen o tipo no seleccionados.");
      return;
    }
    const formData: FormData = new FormData();
    formData.append("file", form);
    formData.append("type", type);
    const imageConverted = await convertFormatImage(formData);
    const url = URL.createObjectURL(imageConverted);
    setImage(url);
  };

  return { convertImage, image, setForm, setType, type, clearImage };
};
