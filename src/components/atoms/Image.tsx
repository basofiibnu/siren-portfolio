const Image = ({ src, alt, ...props }: { src: string; alt: string; [key: string]: any }) => (
  <img src={src} alt={alt} {...props} />
);
export default Image;
