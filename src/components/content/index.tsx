import Li from "../li";
import Subtitle from "../subtitle";
import Ancora from "../ancora";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../data";
import Title5 from "../title5";
import Paragraph from "../paragraph";
import Ul from "../ul";
import { IHomeProps } from "../../interfaces/IHomeProps";

const Content = () => {
    /**
     * Variáveis
     * Variables
     */
    const [data, setData] = useState<IHomeProps[]>([]);
    /**
     * Recupera parâmetro Id
     * Retrieves Id parameter
     */
    let {id} = useParams(); 
    /**
     * Seleciona o dado de acordo com o Id passado por parâmetro
     */
    const select = data.find(item => String(item.id) === id && item.id);
    /**
     * Seleciona todos os dados do repositório
     * Selects the data according to the Id passed by parameter
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
        <section className="col-12">
            {
                /**
                 * Verifica de o nome "katarine-bez-albuquerque" não existe e exibe os dados na tela
                 * Checks that the name "katarine-bez-albuquerque" does not exist and displays the data on the screen
                 */
                select?.name !== "katarine-bez-albuquerque" &&
                (<article className="col-12">
                    <Subtitle name={select?.name} />
                    <Title5 name={select?.language} />
                    <Paragraph text={select?.description} />
                    <Ul newClass="nav d-flex flex-row justify-content-center">
                        {
                            // Verifica se existe a homepage
                            select?.homepage &&
                            (<Li newClass="nav-item p-2">
                                <Ancora
                                    newClass="nav-link btn"
                                    href={select?.homepage}
                                    text="Abrir Projeto"
                                />
                            </Li>)
                        }
                        {
                            // Verifica se existe a url
                            select?.html_url &&
                            (<Li newClass="nav-item p-2">
                                <Ancora
                                    newClass="nav-link btn"
                                    href={select?.html_url}
                                    text="Projeto no Github"
                                />
                            </Li>)
                        }
                    </Ul>
                </article>)
            }
        </section>
    );
}

export default Content;