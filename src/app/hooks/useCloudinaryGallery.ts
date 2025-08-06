'use client';
import { useState, useEffect } from 'react';

interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  created_at: string;
  folder: string;
  format: string;
}

interface UseCloudinaryGalleryReturn {
  images: CloudinaryImage[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useCloudinaryGallery = (): UseCloudinaryGalleryReturn => {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async () => {
    try {
      setLoading(true);
      setError(null);

      // Llamar a la API route que manejará la búsqueda de Cloudinary
      const response = await fetch('/api/cloudinary-gallery');
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setImages(data.resources || []);
    } catch (err) {
      console.error('Error fetching Cloudinary images:', err);
      setError(err instanceof Error ? err.message : 'Error al cargar imágenes de la galería');
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchImages();
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return {
    images,
    loading,
    error,
    refetch
  };
};