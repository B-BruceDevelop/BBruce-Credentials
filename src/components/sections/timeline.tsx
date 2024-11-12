'use client';
import { useState } from 'react';
  

const Timeline = () => {

    const [activeButton, setActiveButton] = useState<string | null>(null);

    const handleClick = (button: string) => {
      setActiveButton(button === activeButton ? null : button);
    };
  

  return (
    <section className="flex flex-col items-center justify-center text-sm">
      <div className="flex w-[88%] px-10 text-white mb-4">
        {/* Primer texto - Año 2005 */}
        <div className="flex items-center justify-center mr-2">
          <p>2005</p>
        </div>

        {/* Texto de desarrollo, ocupando el espacio entre el primer y segundo círculo */}
        <div className="flex-1 flex items-center justify-center text-center">
          <p>Desarrollo de la técnica</p>
        </div>

        {/* Segundo texto - Año 2015 */}
        <div className="flex items-center justify-center mx-2">
          <p>2015</p>
        </div>

        {/* Texto de desarrollo, ocupando el espacio entre el segundo y tercer círculo */}
        <div className="flex-1 flex items-center justify-center text-center">
          <p>Desarrollo del pensamiento</p>
        </div>

        {/* Tercer texto - Año 2024 */}
        <div className="flex items-center justify-center ml-2">
          <p>2024</p>
        </div>
      </div>

      <div className="relative flex  items-center justify-between w-[80%]  bg-black">
        {/* Contenedor para la línea de fondo con altura igual a los círculos */}
        <div
          className="absolute flex items-center left-0 right-0"
          style={{ height: "20px" }}
        >
          <div className="w-full h-0.5 bg-white"></div>
        </div>

        {/* Primer círculo */}
        <div
          className="w-5 h-5 bg-black border-2 border-white rounded-full z-10"
          style={{ width: "20px", height: "20px" }}
        ></div>

        {/* Segundo círculo */}
        <div
          className="w-5 h-5 bg-black border-2 border-white rounded-full z-10"
          style={{ width: "20px", height: "20px" }}
        ></div>

        {/* Tercer círculo */}
        <div
          className="w-5 h-5 bg-black border-2 border-white rounded-full z-10"
          style={{ width: "20px", height: "20px" }}
        ></div>
      </div>







      <div className="flex flex-col items-center w-[94%] pt-4 space-y-4">
      {/* Contenedor de los botones */}
      <div className="flex justify-between w-full ">
        {/* Primer botón alineado a la izquierda */}
        <div className="flex flex-col justify-start items-center min-w-[200px] gap-4">
          <button
            className={`px-4 py-2 border rounded-full text-white w-full ${
              activeButton === 'savia' ? 'bg-gray-700' : 'bg-transparent'
            }`}
            onClick={() => handleClick('savia')}
          >
            SAVIA DESIGN
          </button>
          {activeButton === 'savia' && <p className='text-left'>Sant Feliu de Codines</p>}
        </div>

        {/* Segundo botón centrado */}
        <div className="flex flex-col justify-start items-center min-w-[200px] gap-4">
          <button
            className={`px-4 py-2 border rounded-full text-white w-full ${
              activeButton === 'logic' ? 'bg-gray-700' : 'bg-transparent'
            }`}
            onClick={() => handleClick('logic')}
          >
            LOGIC DESIGN
          </button>
          {activeButton === 'logic' && <p className='text-center' >Barcelona / París / Warsaw</p>}

        </div>

        {/* Tercer botón alineado a la derecha */}
        <div className="flex flex-col justify-start items-center min-w-[200px] gap-4">
          <button
            className={`px-4 py-2 border rounded-full text-white w-full ${
              activeButton === 'bbruce' ? 'bg-gray-700' : 'bg-transparent'
            }`}
            onClick={() => handleClick('bbruce')}
          >
            B–BRUCE
          </button>
          {activeButton === 'bbruce' && <p className='text-right'>Barcelona</p>}

        </div>
      </div>

    </div>







    </section>
  );
};

export default Timeline;
