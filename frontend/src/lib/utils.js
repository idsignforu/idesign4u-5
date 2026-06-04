import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatINR = (n) => '₹' + n.toLocaleString('en-IN');

export const waLink = (msg) => `https://wa.me/919281410305?text=${encodeURIComponent(msg)}`;
