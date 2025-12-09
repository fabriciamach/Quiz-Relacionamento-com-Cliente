import React, { useState, useEffect } from 'react';
import '../Styles/Question.css';
import { Link, useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { quizQuestions } from './QuizData'; 

// TEMPO LIMITE POR QUESTÃO EM SEGUNDOS
const QUESTION_TIMEOUT = 30;


function useWindowSize() {
    const [size, setSize] = useState(() => {
        if (typeof window !== 'undefined') {
            return [window.innerWidth, window.innerHeight];
        }
        return [0, 0];
    });

    useEffect(() => {
        // Verifica se o ambiente é de navegador antes de adicionar o listener
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return size;
}


const Question = () => {
    // --- ESTADOS ---
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [feedbackMessage, setFeedbackMessage] = useState(null);
    const [answerSelected, setAnswerSelected] = useState(false);
    const [timeLeft, setTimeLeft] = useState(QUESTION_TIMEOUT);
    const [score, setScore] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);

    const navigate = useNavigate();
    const [width, height] = useWindowSize(); 

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const totalQuestions = quizQuestions.length;

    
    const handleTimeout = () => {
        setAnswerSelected(true);
        setFeedbackMessage({
            text: "O tempo acabou! Nenhuma resposta foi registrada.",
            type: 'incorrect',
        });
        setShowConfetti(false);
    };
    
    // --- TIMER HOOK ---
    useEffect(() => {
        if (answerSelected || currentQuestionIndex >= quizQuestions.length) {
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    handleTimeout(); 
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000); 

        return () => clearInterval(timer);
    }, [currentQuestionIndex, answerSelected]); 

    // --- MANUSEIO DE EVENTOS ---
    const handleAnswerClick = (option) => {
        if (answerSelected) return; 

        setAnswerSelected(true); 

        if (option.isCorrect) {
            setScore(prevScore => prevScore + 1);
            setFeedbackMessage({
                text: option.feedback,
                type: 'correct',
            });

            setShowConfetti(true);


        } else {
            setFeedbackMessage({
                text: `Resposta Incorreta. ${option.feedback}`,
                type: 'incorrect',
            });
            setShowConfetti(false);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setFeedbackMessage(null);
            setAnswerSelected(false);
            setTimeLeft(QUESTION_TIMEOUT); 
            setShowConfetti(false);
        } else {
            navigate('/resultados', { 
                state: { 
                    score: score, 
                    totalQuestions: totalQuestions 
                }});
        }
    };

    // --- FUNÇÃO DE RENDERIZAÇÃO ---
    const renderSubmitButton = () => {
        if (!answerSelected) {
            return (
                <button className="submit-button disabled" disabled>
                    Selecione uma Opção
                </button>
            );
        } else {
            return (
                <button className="submit-button" onClick={handleNextQuestion}>
                    {currentQuestionIndex < quizQuestions.length - 1 ? "Próxima Pergunta" : "Ver Resultado"}
                </button>
            );
        }
    };

    if (!currentQuestion) {
        return (
            <section className="question-page">
                {showConfetti && <Confetti
                    width={width}
                    height={height}
                    recycle={false} 
                    numberOfPieces={300}
                    initialVelocityY={10}
                />}
                <p className="final-message">Quiz concluído! Sua pontuação: {score}/{quizQuestions.length}</p>
                <Link to="/" className="back-button final">Voltar à Home</Link>
            </section>
        );
    }

    return (
        <section className="question-page">
            {showConfetti && <Confetti
                width={width}
                height={height}
                recycle={false} 
                numberOfPieces={300}
                initialVelocityY={10}
            />}
            
            <Link to="/" className="back-button">
                <i className="fas fa-arrow-left"></i> Voltar
            </Link>

            <div className="progress-bar-container">
                <div className="progress-text">
                    {currentQuestion.id}/{quizQuestions.length}
                </div>
                <div className="timer-display">
                    Tempo: {timeLeft}s
                </div>
            </div>

            <div className="question-area">
                <h1 className="question-text">
                    {currentQuestion.question}
                </h1>
            </div>
            
            {feedbackMessage && (
                <div className={`feedback-box ${feedbackMessage.type}`}>
                    {feedbackMessage.text}
                </div>
            )}

            <div className="answers-container">
                {currentQuestion.options.map(option => (
                    <button
                        key={option.id}
                        className={`answer-card ${answerSelected && (option.isCorrect ? 'correct' : 'wrong')}`}
                        onClick={() => handleAnswerClick(option)}
                        disabled={answerSelected || timeLeft === 0}
                    >
                        {option.id}) {option.text}
                    </button>
                ))}
            </div>

            {renderSubmitButton()}

        </section>
    );
};

export default Question;