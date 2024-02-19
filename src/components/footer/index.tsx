import { IFooter } from "./IFooter";

const Footer = ({copyright}:IFooter) => {
    return(
        <footer className="footer col-12 d-flex flex-column justify-content-center">
                <h6>{copyright}</h6>
        </footer>
    );
}

export default Footer;