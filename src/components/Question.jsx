import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Componente Question - Renderiza apenas a pergunta e opções
 * SEM progresso interno - progresso fica externo ao MagicCard
 */
const Question = ({ question, onAnswer, questionNumber, totalQuestions, showProgress = false }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (index, option) => {
    setSelectedOption(index);
    onAnswer(option);
  };

  const containerVariants = {
    initial: {
      opacity: 0,
      x: 50
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.3 }
    }
  };

  const optionVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <motion.div
      className="question-container"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* REMOVIDO: Header com progresso - agora fica externo */}

      {/* Título da pergunta */}
      <motion.h2
        className="question-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {question.text}
      </motion.h2>

      {/* Lista de opções */}
      <div className="options-container">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            className={`btn option-btn w-100 ${selectedOption === index ? 'selected' : ''}`}
            variants={optionVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => handleOptionSelect(index, option)}
            disabled={selectedOption !== null}
          >
            <span className="option-letter">{String.fromCharCode(65 + index)}</span>
            <span className="option-text">{option.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Indicador de seleção */}
      {selectedOption !== null && (
        <motion.div
          className="selection-indicator"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="alert alert-success">
            <i className="fas fa-check-circle me-2"></i>
            Resposta selecionada! Aguarde...
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Question;
