"use client";

import { useEffect, useState } from "react";
import { codesConfig } from "@/config/codesConfig";
import { useStore } from "@/store/useStore";
import Popup from "./popUp";

const IntroCodeValidator = () => {
  const { popupOpen, setCode, closePopup } = useStore();
  const [tempCode, setTempCode] = useState("");
  const [isValidCode, setIsValidCode] = useState<boolean | null>(null);

  // Validar código al presionar Enter
  const handleValidate = () => {
    const trimmed = tempCode.trim();
    if (trimmed === "") {
      // Código vacío => contenido genérico
      setIsValidCode(true);
      setCode(null);
      closePopup();
    } else if (codesConfig[trimmed]) {
      // Código válido
      setIsValidCode(true);
      setCode(trimmed);
      closePopup();
    } else {
      // Código inválido
      setIsValidCode(false);
    }
  };

  // Cerrar popup al presionar Escape
  const handleClose = () => {
    closePopup();
  };

  // Abrir pop-up al presionar Space
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" && !popupOpen) {
        setCode(null); // Restablece el código si es necesario
        useStore.setState({ popupOpen: true });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [popupOpen, setCode]);

  return (
    <>
      {popupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Popup
            codeValue={tempCode}
            onChangeCode={(val) => {
              setIsValidCode(null);
              setTempCode(val);
            }}
            onValidate={handleValidate}
            isValidCode={isValidCode}
            onClose={handleClose} // Manejo de cierre
          />
        </div>
      )}
    </>
  );
};

export default IntroCodeValidator;