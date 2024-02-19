import { ILi } from "./ILi";

const Li = ({newClass,children}:ILi) => {
    return (
        <li className={newClass}>
            {children}
        </li>
    );
}

export default Li;