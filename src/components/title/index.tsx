import { ITitle } from "./ITitle";

const Title = ({name}:ITitle) => {
    return(
        <h1>{name}</h1>
    );
}

export default Title;