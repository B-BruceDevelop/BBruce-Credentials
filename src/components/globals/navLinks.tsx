'use client'
import React, {  useState } from "react";
import Link from "next/link";


import { NavLink } from "@/types/types";

type props = {
  pages: NavLink[];
};

const Navbar = ({ pages }: props) => {

  const [activeIdx, setActiveIdx] = useState<number>(-1);
  


  return (
    <nav className="flex">
      <div className="flex gap-2 md:gap-4 uppercase">
        {pages.map((page, index) => (
          <div
            onClick={() => {
              setActiveIdx(index);
            }}
            key={page.name}
            className="flex w-full items-center justify-center text-xs md:text-sm"
          >
            <NavItem active={activeIdx === index} {...page} />
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

type navLink = {
  name: string;
  href: string;
  active: boolean;
};

const NavItem = ({ name, href, active }: navLink) => {
  return (
    <Link href={href} >
      {<p className={active ? `text-white` : "opacity-50"}>{name}</p>}{" "}
    </Link>
  );
};
