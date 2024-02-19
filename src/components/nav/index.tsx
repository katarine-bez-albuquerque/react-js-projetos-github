import Title5 from "../title5";
import { INav } from "./INav";

const Nav = ({ title, children}: INav) => {
    
    return (
        <nav className="projects projects-detail col-12 col-lg-3 col-md-4">
            <br />
            <Title5 name={title} />
            <br />
            <section>
                {children}
            </section>
        </nav>
    );
}

export default Nav;