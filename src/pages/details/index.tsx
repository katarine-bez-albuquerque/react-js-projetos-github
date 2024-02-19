import Content from "../../components/content";
import Github from '../../assets/images/gato.png';
import Logo from '../../assets/images/logo.png';
import Header from "../../components/header";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Image from "../../components/image";
import axiosInstance from "../../data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Li from "../../components/li";
import Ul from "../../components/ul";
import { IHomeProps } from "../../interfaces/IHomeProps";

const Details = () => {
    /**
     * Variáveis
     * Variables
     */
    const [data, setData] = useState<IHomeProps[]>([]);
    /**
     * Seleciona os dados do repositório
     * Selects data from the repository
     */
    const getData = async () => {
        await axiosInstance.get("")
            .then(res => {
                setData(res.data);
            })
            .catch(error => {
                console.log(error.message);
            });
    }
    /**
     * Faz o carregamento dos dados
     * Load data
     */
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="page container-fluid p-0">
            <Header
                github={Github}
                text1="Meu Linkedin"
                text2="Meu Github"
                title="Projetos"
                href1="https://www.linkedin.com/in/katarine-albuquerque/"
                href2="https://github.com/katarine-bez-albuquerque"
            />
            <main className="main container-fluid">
                <section className="row">
                    <Nav title="Meus projetos">
                        <Ul newClass="nav flex-column">
                            {
                                /**
                                 * Verifica de o nome "katarine-bez-albuquerque" não existe e exibe os dados na tela
                                 * Checks that the name "katarine-bez-albuquerque" does not exist and displays the data on the screen
                                 */
                                data ?
                                    data.map(item =>
                                        item?.name !== "katarine-bez-albuquerque" &&
                                        (<Li key={item?.id} newClass="nav-item">
                                            <Link className="nav-link" to={"/detail/" + item?.id}>{item.name}</Link>
                                        </Li>)
                                    )
                                    :
                                    null
                            }
                        </Ul>
                    </Nav>

                    <article className="content content-detail col-12 col-lg-9 col-md-8">
                        <section className="col-12 d-flex flex-column justify-content-start align-items-center p-5 p-md-2">
                            <Image newClass="banner" src={Logo} alt="Logo" />
                            <br />
                            <section className="col-12">
                                <Content />
                            </section>
                        </section>
                        <br />
                        <Footer copyright="@Projetos - Todos os direitos reservados" />
                    </article>
                </section>
            </main>
        </div>
    );
}

export default Details;