import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Question from '../components/Question';
import ResultCard from '../components/ResultCard';
import { questions } from '../data/questions.js';

/**
 * Componente Quiz - Gerencia as perguntas e respostas do quiz
 */
const Quiz = () => {
  // Estado para controlar a pergunta atual (0-indexado)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // Estado para armazenar as pontuações de cada casa
  const [scores, setScores] = useState({
    gryffindor: 0,
    slytherin: 0,
    ravenclaw: 0,
    hufflepuff: 0
  });
  // Estado para controlar se o quiz foi finalizado
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  // Estado para a casa vencedora
  const [winningHouse, setWinningHouse] = useState(null);
  // Estado para controlar animação de transição
  const [isTransitioning, setIsTransitioning] = useState(false);

  /**
   * Calcula qual casa teve a maior pontuação
   * Em caso de empate, usa a ordem de prioridade: Grifinória > Sonserina > Corvinal > Lufa-Lufa
   * @param {object} finalScores - objeto com as pontuações finais
   * @returns {string} nome da casa vencedora
   */
  const calculateWinningHouse = useCallback(finalScores => {
    const maxScore = Math.max(...Object.values(finalScores));
    const housePriority = ['gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff'];
    const winner = housePriority.find(house => finalScores[house] === maxScore);
    return winner;
  }, []);

  /**
   * Manipula a resposta de uma pergunta
   * Atualiza a pontuação e avança para a próxima pergunta ou finaliza o quiz
   * @param {object} selectedOption - opção selecionada pelo usuário
   */
  const handleAnswer = useCallback(
    selectedOption => {
      setIsTransitioning(true);
      setTimeout(() => {
        const newScores = { ...scores };
        Object.entries(selectedOption.points).forEach(([house, points]) => {
          newScores[house] += points;
        });
        setScores(newScores);
        if (currentQuestionIndex === questions.length - 1) {
          const winner = calculateWinningHouse(newScores);
          setWinningHouse(winner);
          setIsQuizComplete(true);
        } else {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
        setIsTransitioning(false);
      }, 1500);
    },
    [currentQuestionIndex, scores, calculateWinningHouse]
  );

  /**
   * Reinicia o quiz resetando todos os estados
   */
  const handleRestart = useCallback(() => {
    setCurrentQuestionIndex(0);
    setScores({
      gryffindor: 0,
      slytherin: 0,
      ravenclaw: 0,
      hufflepuff: 0
    });
    setIsQuizComplete(false);
    setWinningHouse(null);
    setIsTransitioning(false);
  }, []);

  // Variantes de animação para transições de página
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.95
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="quiz-container">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xl-6">
            {/* Header do Quiz */}
            {!isQuizComplete && (
              <motion.div
                className="quiz-header text-center mb-5"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="quiz-main-title">🏰 Quiz do Chapéu Seletor</h1>
                <p className="quiz-subtitle text-muted">Descubra qual casa de Hogwarts é perfeita para você!</p>
              </motion.div>
            )}
            {/* Conteúdo principal do quiz */}
            <AnimatePresence mode="wait">
              {!isQuizComplete ? (
                <motion.div
                  key={`question-${currentQuestionIndex}`}
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Question
                    question={questions[currentQuestionIndex]}
                    onAnswer={handleAnswer}
                    questionNumber={currentQuestionIndex + 1}
                    totalQuestions={questions.length}
                  />
                </motion.div>
              ) : (
                <motion.div key="result" variants={pageVariants} initial="initial" animate="animate" exit="exit">
                  <ResultCard house={winningHouse} scores={scores} onRestart={handleRestart} />
                </motion.div>
              )}
            </AnimatePresence>
            {/* Loading indicator durante transição */}
            {isTransitioning && (
              <motion.div
                className="transition-loading text-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="spinner-border text-warning" role="status">
                  <span className="visually-hidden">Carregando próxima pergunta...</span>
                </div>
                <p className="mt-2 text-muted">Processando sua resposta...</p>
              </motion.div>
            )}
            {/* Debug info (apenas em desenvolvimento) */}
            {process.env.NODE_ENV === 'development' && !isQuizComplete && (
              <div className="debug-info mt-4 p-3 bg-light rounded">
                <h6>Debug Info:</h6>
                <p>
                  Pergunta: {currentQuestionIndex + 1}/{questions.length}
                </p>
                <p>Pontuações atuais:</p>
                <ul>
                  {Object.entries(scores).map(([house, score]) => (
                    <li key={house}>
                      {house}: {score} pontos
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
