import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// TAILWIND MERGE CLASSES FUNCTION 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

