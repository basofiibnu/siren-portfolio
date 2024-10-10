const Box = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
  <div {...props}>{children}</div>
);
export default Box;
