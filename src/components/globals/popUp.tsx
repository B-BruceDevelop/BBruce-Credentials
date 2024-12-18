"use client";

import { FC } from "react";
import { motion } from "framer-motion";

interface PopupProps {
  codeValue: string;
  onChangeCode: (value: string) => void;
  onValidate: () => void;
  isValidCode: boolean | null;
}

const Popup: FC<PopupProps> = ({
  codeValue,
  onChangeCode,
  onValidate,
  isValidCode,
}) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <motion.div
        className="bg-white p-4 rounded-md shadow-lg max-w-xs w-full text-center"
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <h2 className="text-xl font-bold mb-4">Introduce tu código</h2>
        <input
          type="text"
          value={codeValue}
          onChange={(e) => onChangeCode(e.target.value)}
          className="border w-full p-2 mb-4"
          placeholder="E.g: A, B..."
        />
        {isValidCode === false && (
          <p className="text-red-500 mb-2">Código inválido, inténtalo de nuevo.</p>
        )}
        <button
          onClick={onValidate}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Validar
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Popup;