import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Question from '../components/Question';
import ResultCard from '../components/ResultCard';
import MagicCard from '../components/MagicCard';
import QuizProgress from '../components/QuizProgress';
import { questions } from '../data/questions.js';

/**
 * Componente Quiz - Gerencia as perguntas e respostas do quiz
 */
const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({
    gryffindor: 0,
    slytherin: 0,
    ravenclaw: 0,
    hufflepuff: 0
  });
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [winningHouse, setWinningHouse] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const calculateWinningHouse = useCallback(finalScores => {
    const maxScore = Math.max(...Object.values(finalScores));
    const housePriority = ['gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff'];
    const winner = housePriority.find(house => finalScores[house] === maxScore);
    return winner;
  }, []);

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

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.9,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="quiz-container">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            {/* Header do Quiz - SEMPRE VISÍVEL */}
            <motion.div
              className="quiz-header"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="quiz-main-title">
                <span className="castle-icon">🏰</span> Quiz do Chapéu Seletor
              </h1>
              <p className="quiz-subtitle">Descubra qual casa de Hogwarts é perfeita para você!</p>
            </motion.div>

            {/* Progress indicator CENTRALIZADO - SÓ APARECE durante as perguntas */}
            {!isQuizComplete && (
              <div
                className="quiz-progress-wrapper"
                style={{
                  position: 'fixed',
                  top: '2rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 1000
                }}
              >
                <div className="quiz-progress-counter">
                  {currentQuestionIndex + 1} de {questions.length} perguntas concluídas
                </div>
              </div>
            )}

            {/* MagicCard com conteúdo principal */}
            <div className="d-flex justify-content-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isQuizComplete ? 'result' : `question-${currentQuestionIndex}`}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <MagicCard className="quiz-magic-card">
                    <div className="quiz-content">
                      <AnimatePresence mode="wait">
                        {!isQuizComplete ? (
                          <motion.div
                            key={`question-${currentQuestionIndex}`}
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="w-100 h-100 d-flex flex-column justify-content-center"
                          >
                            {/* COMPONENTE QUESTION SEM PROGRESSO INTERNO */}
                            <Question
                              question={questions[currentQuestionIndex]}
                              onAnswer={handleAnswer}
                              questionNumber={currentQuestionIndex + 1}
                              totalQuestions={questions.length}
                              showProgress={false} // Props para não mostrar progresso interno
                            />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="result"
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="w-100 h-100 d-flex flex-column justify-content-center"
                          >
                            <ResultCard house={winningHouse} scores={scores} onRestart={handleRestart} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </MagicCard>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Loading indicator durante transição */}
            {isTransitioning && (
              <motion.div
                className="transition-loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Carregando próxima pergunta...</span>
                </div>
                <p>Processando sua resposta...</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
