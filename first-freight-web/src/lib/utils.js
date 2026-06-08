/* Minimal shadcn-style className joiner.
   The real shadcn cn() uses clsx + tailwind-merge; our usage only needs
   conditional class joining, so we keep it dependency-free. */
export function cn(...inputs) {
  return inputs.flat(Infinity).filter(Boolean).join(' ')
}
