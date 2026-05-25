import { ReactNode, JSX } from 'react';

export default function Button({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm">{children}</button>
  );
}
