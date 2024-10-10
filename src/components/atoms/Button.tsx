const Button = ({
  children,
  type = 'button',
  onClick,
  ...props
}: {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick: () => void;
  [key: string]: any;
}) => <button {...props}>{children}</button>;
export default Button;
