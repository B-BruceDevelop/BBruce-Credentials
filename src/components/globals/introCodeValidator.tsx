"use client";

import { useState } from "react";
import { codesConfig } from "@/config/codesConfig";
import { useStore } from "@/store/useStore";
import Popup from "./popUp";

const IntroCodeValidator = () => {
  const { popupOpen, setCode, closePopup } = useStore();
  const [tempCode, setTempCode] = useState("");
  const [isValidCode, setIsValidCode] = useState<boolean | null>(null);

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
          />
        </div>
      )}
    </>
  );
};

export default IntroCodeValidator;