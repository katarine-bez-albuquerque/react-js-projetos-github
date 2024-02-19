import { Iul } from "./Iul";

const Ul = ({children,newClass}:Iul) => {
    return(
        <ul className={newClass}>
            {children}
        </ul>
    );
}

export default Ul;
