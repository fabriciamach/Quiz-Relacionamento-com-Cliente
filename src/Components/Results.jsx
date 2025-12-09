import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Results.css'; 

const Results = () => {
    const location = useLocation();
    // A pontuação é passada como 'state' na navegação
    const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 10 };

    const percentage = Math.round((score / totalQuestions) * 100);
    const feedbackText = percentage >= 70 
        ? "Parabéns! Excelente domínio do conteúdo de Gestão do Relacionamento com Cliente."
        : "Recomendamos revisar alguns tópicos para um melhor desempenho.";

    return (
        <section className="results-page">
            <div className="results-card">
                <h1 className="results-title">Quiz Concluído!</h1>
                <p className="results-feedback">{feedbackText}</p>
                
                <div className="score-display">
                    <p className="score-label">Sua Pontuação</p>
                    <p className="score-value">{score} / {totalQuestions}</p>
                    <p className="percentage-value">({percentage}%)</p>
                </div>

                <Link to="/" className="home-button">
                    Voltar para a Tela Inicial
                </Link>
            </div>
        </section>
    );
};

export default Results;