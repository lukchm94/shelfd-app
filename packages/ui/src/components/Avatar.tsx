import { JSX } from 'react';

export default function Avatar({ src, alt }: { src?: string; alt?: string }): JSX.Element {
  return <img src={src} alt={alt} className="w-12 h-12 rounded-full object-cover" />;
}
