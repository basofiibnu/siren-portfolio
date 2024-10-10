const Paragraph = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
  <p {...props}>{children}</p>
);
export default Paragraph;
