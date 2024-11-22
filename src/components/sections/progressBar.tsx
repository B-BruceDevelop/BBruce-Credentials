interface BarProgressProps {
  label: string;
  percentage: number; // De 0 a 100
}

const BarProgress = ({ label, percentage }: BarProgressProps) => {
  return (
    <div className="flex w-full gap-2">
      {/* Contenedor izquierdo: 40% */}
      <div className="w-[45%] text-right">
        <span className="text-black text-xs2 font-favoritMedium leading-none tracking-tight">
          {label}
        </span>
      </div>

      {/* Contenedor derecho: 60% */}
      <div className="w-[55%] flex items-center gap-2">
        {/* Barra de progreso pequeña */}
        <div
          className="flex justify-end items-center h-full bg-black rounded-full pl-2"
          style={{ width: `calc(2vw + ${percentage * 2}px)` }}
        >
          <div className="flex justify-end items-center h-full bg-white/20 rounded-full pl-2">
            <div className="flex justify-end items-center h-full bg-white/40 rounded-full pl-2">
              <div className="flex justify-end items-center h-full bg-white/60 rounded-full pl-2">
              <div className="flex justify-end items-center h-full bg-white/80 rounded-full aspect-square">
                
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Porcentaje */}
        <span
          className="text-black text-xs font-favoritRegular leading-none tracking-tight"
          style={{ alignSelf: "flex-end" }}
        >
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default BarProgress;
