import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function classNames(...args) {
	return twMerge(...args.map((arg) => clsx(arg)));
}
