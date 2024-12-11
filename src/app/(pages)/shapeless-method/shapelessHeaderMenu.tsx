
type Props = {
  activeIndex: number;
};

const ShapelessMenu = ({ activeIndex }: Props) => {
   if (activeIndex === 0)  return null;

  return (
    <section className=" flex items-center justify-center h-full">
      <ul className="flex h-full items-center justify-center text-xs md:text-sm">
      {["STRATEGY", "DESIGN", "ACTIVATION"].map((concept, index) => (
        <li
          key={concept}
          className={`flex w-[12vw] h-full items-center justify-center px-[2vw] border-x border-white 
            ${index === activeIndex - 1 
              ? "bg-white text-background" 
              : "text-greyA0 hover:text-white"}`
          }
        >
          {concept}
        </li>
      ))}
    </ul>
    </section>
  );
};

export default ShapelessMenu;