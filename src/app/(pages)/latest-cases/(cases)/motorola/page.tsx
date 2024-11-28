function Motorola() {
  return (
      <div className=" grid h-full w-full grid-cols-12 grid-rows-5 gap-[1vw] p-[1vw]">
        {/* Contenedor 1 */}
        <div className="col-span-2 row-span-2 bg-red-500"> 1  grid</div>
        
        {/* Contenedor 2 */}
        <div className="col-span-2 row-span-2 col-start-1 row-start-3  bg-blue-500">2</div>
         
        {/* Contenedor 3 */}
        <div className="col-span-9 col-start-1 row-start-5 bg-green-500">3</div>
        
        {/* Contenedor 4 */}
        <div className="col-span-7 row-span-4 col-start-3 row-start-1 bg-yellow-500">4</div>
        
        {/* Contenedor 5 */}
        <div className="col-span-3 row-span-2 col-start-10 row-start-1 bg-purple-500">5</div>
        
        {/* Contenedor 6 */}
        <div className="col-span-3 row-span-3 col-start-10 row-start-3  bg-pink-500">6</div>
      </div>
  );
}

export default Motorola;