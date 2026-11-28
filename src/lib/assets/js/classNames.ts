import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export default function classNames(...args: ClassValue[]) {
  return twMerge(...args.map((arg) => clsx(arg)));
}
