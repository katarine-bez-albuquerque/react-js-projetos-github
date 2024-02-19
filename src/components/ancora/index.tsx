import { IAncora } from "./IAncora";

const Ancora = ({text,href,newClass}:IAncora) => {
    return(
        <a className={newClass} target="_blank" href={href}>{text}</a>
    );
}

export default Ancora;