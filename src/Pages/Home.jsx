import React from 'react';
import Logo from '../images/logoFacul.png'
import ImgHome from '../images/home.png'
import { Link } from 'react-router-dom'; 
import '../Styles/Home.css';

const Home = () => {
    return (
        <section className="home-container">

            <header className="logo-wrapper">
                <img src={Logo} alt="Logo GAP" />
            </header>

            <div className="glass-card">

                <div className="grid-wrapper">

                    <div className='text-home'>
                        <h1>Quiz de Gestão do Relacionamento com Cliente</h1>
                        <p>
                        Teste seus conhecimentos sobre as melhores práticas de CRM e descubra como otimizar a experiência do cliente. 
                        Este quiz levará apenas alguns minutos e fornecerá insights valiosos para a sua equipe.
                        </p>

                        <Link to="/questionario" className="card-button">
                            Comece o Quiz
                        </Link>
                    </div>

                    <div className="home-card">
                        <img src={ImgHome} alt="Imagem Finanças" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Home;
