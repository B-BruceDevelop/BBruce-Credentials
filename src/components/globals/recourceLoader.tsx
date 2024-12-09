"use client";

import React, { useState } from "react";

type ResourceLoaderProps = {
  children: React.ReactElement;
};

const ResourceLoader: React.FC<ResourceLoaderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false); // Oculta el loader solo para este recurso
  };

  return (
    <div className="relative w-full h-full">
      {/* Loader que aparece solo mientras isLoading es true */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background bg-opacity-50 transition-opacity duration-300">
          <p className="text-white">Loading...</p> {/* O un spinner personalizado */}
        </div>
      )}
      {/* Clona el hijo y agrega el evento onLoad/onLoadingComplete */}
      {React.cloneElement(children, {
        onLoad: handleLoad, // Para imágenes normales
        onLoadedData: handleLoad, // Para videos
      })}
    </div>
  );
};

export default ResourceLoader;