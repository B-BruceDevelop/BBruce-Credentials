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
  visible: boolean;
};

const Header = ({ title, prevPage, nextPage, visible }: Props) => {
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
    <header className="flex w-full items-center justify-between border-b border-white">
      {title && <p className="text-base leading-loose ml-4">{title}</p>}{" "}
      <div className="flex gap-2 text-base leading-loose mr-4">
        {prevPage ? (
          <Link href={prevPage}>
            <LuArrowLeft />
          </Link>
        ) : (
          <LuArrowLeft className="opacity-50" />
        )}

        {nextPage ? (
          <Link href={nextPage}>
            <LuArrowRight />
          </Link>
        ) : (
          <LuArrowRight className="opacity-50" />
        )}
      </div>
    </header>
  );
};

export default Header;
