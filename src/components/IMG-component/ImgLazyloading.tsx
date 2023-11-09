import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

type ImgLazyloadingProps = {
    src: string;
    alt: string;
    height: string | number;
    width: string | number;
};
const ImgLazyloading: React.FunctionComponent<
    ImgLazyloadingProps
> = ({ src, alt, height, width }) => {
    return (
        <>
            <LazyLoadImage
                alt={alt}
                height={height}
                src={src} // use normal <img> attributes as props
                width={width}
                effect="blur"
            />
        </>
    );
};

export default ImgLazyloading;
