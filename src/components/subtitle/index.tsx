import { ISubtitle } from "./ISubtitle";

const Subtitle = ({name}:ISubtitle) => {
    return(
        <h2>{name}</h2>
    );
}

export default Subtitle;