import NextImage, { ImageProps } from 'next/image';

// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
  return src;
};

const Image = ({ ...rest }: ImageProps) => <NextImage {...rest} loader={customLoader} />;

export default Image;
