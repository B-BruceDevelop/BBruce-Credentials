"use client";

import { FC, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface PopupProps {
  codeValue: string;
  onChangeCode: (value: string) => void;
  onValidate: () => void;
  isValidCode: boolean | null;
  onClose: () => void; // Nueva función para cerrar el popup
}

const Popup: FC<PopupProps> = ({
  codeValue,
  onChangeCode,
  onValidate,
  isValidCode,
  onClose,
}) => {
  // Crear una referencia para el input
  const inputRef = useRef<HTMLInputElement>(null);

  // Enfocar automáticamente el input al montar el componente
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Manejar teclas Enter y Escape
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onValidate(); // Validar código
    } else if (e.key === "Escape") {
      onClose(); // Cerrar el popup
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <motion.div
        className="bg-background p-[2vw] rounded-md shadow-lg w-[300px] lg:w-[25vw] max-w-[600px] text-center"
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <h2 className="text-md font-bold mb-4 font-favoritRegular">
          Introduce tu código
        </h2>
        <input
          ref={inputRef} // Conectamos la referencia al input
          type="text"
          value={codeValue}
          onChange={(e) => onChangeCode(e.target.value)}
          onKeyDown={handleKeyDown} // Manejar teclas Enter y Escape
          className="border w-full p-2 mt-[2vw] text-background text-md rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
          placeholder="E.g: B-Bruce..."
        />
        {isValidCode === false && (
          <p className="text-xs2 pt-1 text-red-500 mb-[1vw] text-left font-favoritRegular tracking-tight">
            Código inválido, inténtalo de nuevo.
          </p>
        )}
        <button
          onClick={onValidate}
          className="text-white text-md m-[1.5vw] py-2 px-8 rounded font-favoritRegular border border-white bg-background hover:bg-background/50 rounded-full focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 "
        >
          Validar
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Popup;