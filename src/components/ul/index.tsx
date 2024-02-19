import { Iul } from "./IUl";

const Ul = ({children,newClass}:Iul) => {
    return(
        <ul className={newClass}>
            {children}
        </ul>
    );
}

export default Ul;