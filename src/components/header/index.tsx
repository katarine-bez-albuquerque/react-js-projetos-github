import Li from "../li";
import Title from "../title";
import Image from "../image";
import { Link } from "react-router-dom";
import { IHeader } from "./IHeader";
import Ancora from "../ancora";

const Header = ({github,text1,text2,title,href1,href2}:IHeader) => {
    return (
        <header className="header container-fluid">
            <nav className="nav-header d-flex flex-row align-items-center justify-content-start">
                <section className="logo">
                    <Link to="/" className="col-12">
                        <Title name={title}/>
                        <Image newClass="logo-img" src={github} alt="Logo Github"/>
                    </Link>                    
                </section>
                <ul className="menu nav col-lg-12 d-flex flex-row align-items-center justify-content-start">
                    <Li newClass="nav-item">
                        <Ancora newClass="nav-link" href={href1} text={text1} />
                    </Li>
                    <Li newClass="nav-item">
                        <Ancora newClass="nav-link" href={href2} text={text2} />
                    </Li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;