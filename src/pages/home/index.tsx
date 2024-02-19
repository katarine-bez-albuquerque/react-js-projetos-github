import Github from '../../assets/images/gato.png';
import Logo from '../../assets/images/logo.png';
import Header from '../../components/header';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import Image from '../../components/image';
import Subtitle from '../../components/subtitle';
import Li from '../../components/li';
import Ancora from '../../components/ancora';
import { useEffect, useState } from 'react';
import axiosInstance from '../../data';
import { Link } from 'react-router-dom';
import Paragraph from '../../components/paragraph';
import Title5 from '../../components/title5';
import Ul from '../../components/ul';
import { IHomeProps } from '../../interfaces/IHomeProps';

const Home = () => {
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
                                            <Link className="nav-link" to={"/detail/" + item?.id}>{item?.name}</Link>
                                        </Li>)
                                    )
                                    :
                                    null
                            }
                        </Ul>
                    </Nav>
                    <article className="content content-detail col-12 col-lg-9 col-md-8">
                        <section className="col-12 d-flex flex-column justify-content-start align-items-center p-5 p-md-2">
                            <section className="col-12">
                                <Image newClass="banner" src={Logo} alt="Logo" />
                                <br /><br />
                                <Subtitle name="Katarine Albuquerque" />
                                <Title5 name="Desenvolvedora Front-end" />
                                <br />
                                <Paragraph
                                    text="Desde 2016, atuando como freelancer especializada em Bootstrap, WordPress, PHP, Javascript, jQuery, CSS3 e HTML5. Experiência destacada no desenvolvimento de interfaces intuitivas e responsivas, com habilidades sólidas em criação, manutenção e aprimoramento de sites. Comprometida com a entrega de soluções de alta qualidade que integram design e funcionalidade de forma eficaz."
                                />
                                <Ul newClass="nav d-flex flex-row justify-content-center">
                                    <Li newClass="nav-item p-2">
                                        <Ancora
                                            newClass="nav-link btn"
                                            href="https://www.linkedin.com/in/katarine-albuquerque/"
                                            text="Linkedin"
                                        />
                                    </Li>
                                    <Li newClass="nav-item p-2">
                                        <Ancora
                                            newClass="nav-link btn"
                                            href="https://github.com/katarine-bez-albuquerque?tab=repositories"
                                            text="Projetos"
                                        />
                                    </Li>
                                </Ul>
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

export default Home;