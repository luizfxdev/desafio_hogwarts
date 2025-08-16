// src/components/QuizProgress.jsx
import React from 'react';
import { motion } from 'framer-motion';

/**
 * Componente QuizProgress - Barra de progresso externa ao MagicCard
 */
const QuizProgress = ({ currentQuestion, totalQuestions }) => {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <motion.div
      className="quiz-external-progress"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="progress-container">
        <div className="progress-bar-bg">
          <motion.div
            className="progress-bar-fill"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>
      </div>

      <div className="progress-text">
        {currentQuestion} de {totalQuestions} perguntas concluídas
      </div>
    </motion.div>
  );
};

export default QuizProgress;
