import { JSX, ReactNode } from 'react';

type Props = {
  title?: string;
  description?: string;


  
  children?: ReactNode;
};

export default function Card({ title, description, children }: Props): JSX.Element {
  return (
    <div className="p-4 border rounded-md bg-white shadow-sm">
      {title && <div className="font-semibold">{title}</div>}
      {description && <div className="text-sm text-slate-600 mb-2">{description}</div>}
      {children}
    </div>
  );
}
