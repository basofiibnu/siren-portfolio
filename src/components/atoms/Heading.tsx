const Heading = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
  <h1 {...props}>{children}</h1>
);
export default Heading;
