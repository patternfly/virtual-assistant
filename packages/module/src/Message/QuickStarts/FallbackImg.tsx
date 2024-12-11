import * as React from 'react';

interface FallbackImgProps {
  /** Image source */
  src: string;
  /** Alt text for image */
  alt?: string;
  /** ClassName applied to image */
  className?: string;
  /** Fallback */
  fallback?: React.ReactNode;
}

const FallbackImg: React.FC<FallbackImgProps> = ({ src, alt, className, fallback }) => {
  const [isSrcValid, setIsSrcValid] = React.useState<boolean>(true);

  if (src && isSrcValid) {
    return <img className={className} src={src} alt={alt} onError={() => setIsSrcValid(false)} />;
  }

  return <>{fallback}</>;
};

export default FallbackImg;
