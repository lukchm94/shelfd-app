export const CardPropsLayout = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
} as const;

export interface CardProps extends React.ComponentProps<'div'> {
  layout?: (typeof CardPropsLayout)[keyof typeof CardPropsLayout];
}
