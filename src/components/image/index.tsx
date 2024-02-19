import { IImage } from "./IImage";

const Image = ({newClass,src,alt}:IImage) => {
    return (
        <img className={newClass} src={src} alt={alt} />
    );
}

export default Image;