import { ReactNode, JSX } from 'react';

type Props = {
    title?: string;
    description?: string;
    children?: ReactNode;
};
declare function Card({ title, description, children }: Props): JSX.Element;

declare function Button({ children }: {
    children: ReactNode;
}): JSX.Element;

declare function Avatar({ src, alt }: {
    src?: string;
    alt?: string;
}): JSX.Element;

export { Avatar, Button, Card };
