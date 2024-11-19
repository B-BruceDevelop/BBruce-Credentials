'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { LuArrowLeft } from "react-icons/lu";

type Props = {
  title?: string;
  prevPage?: string;
  nextPage?: string;
  visible?: boolean;
};

const Header = ({ title, prevPage, nextPage, visible = true }: Props) => {
    const router = useRouter()

    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowRight' && nextPage) {
          router.push(nextPage)
        } else if (event.key === 'ArrowLeft' && prevPage) {
          router.push(prevPage)
        }
      }
  
      window.addEventListener('keydown', handleKeyDown)
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }, [router, prevPage, nextPage])

    if (!visible) return <></>
  return (
    <header className="flex w-full h-[4vw] max-h-[70px] items-center justify-between border-b border-white">
      {title && <p className="text-base  ml-4">{title}</p>}{" "}
      <div className="flex text-base h-full items-center ">
        {prevPage ? (
          <Link href={prevPage} className="flex justify-center items-center h-full aspect-square border-l-[0.5px] border-white ">
            <LuArrowLeft />
          </Link>
        ) : (
          <LuArrowLeft className="opacity-50" />
        )}

        {nextPage ? (
          <Link href={nextPage} className="flex justify-center items-center h-full aspect-square border-l-[0.5px] border-white">
            <LuArrowRight />
          </Link>
        ) : (
          <div className="flex justify-center items-center h-full aspect-square border-l-[0.5px] border-white opacity-50">
            {/* <LuArrowRight /> */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
