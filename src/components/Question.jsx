import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Componente Question - Renderiza uma pergunta do quiz com suas opções
 *
 * Props:
 * - question: objeto com id, text e options
 * - onAnswer: função callback chamada quando uma opção é selecionada
 * - questionNumber: número da pergunta atual
 * - totalQuestions: total de perguntas do quiz
 */
const Question = ({ question, onAnswer, questionNumber, totalQuestions }) => {
  // Estado para controlar qual opção foi selecionada
  const [selectedOption, setSelectedOption] = useState(null);

  /**
   * Manipula a seleção de uma opção
   * @param {number} index - índice da opção selecionada
   * @param {object} option - objeto da opção selecionada
   */
  const handleOptionSelect = (index, option) => {
    setSelectedOption(index);
    onAnswer(option);
  };

  // Variantes de animação para o Framer Motion
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
      {/* Header com progresso */}
      <div className="question-header mb-4">
        <div className="progress mb-3">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            aria-valuenow={questionNumber}
            aria-valuemin="0"
            aria-valuemax={totalQuestions}
          />
        </div>
        <small className="text-muted">
          Pergunta {questionNumber} de {totalQuestions}
        </small>
      </div>
      {/* Título da pergunta */}
      <motion.h2
        className="question-title mb-4"
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
            className={`btn option-btn w-100 mb-3 ${
              selectedOption === index ? 'btn-warning selected' : 'btn-outline-secondary'
            }`}
            variants={optionVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => handleOptionSelect(index, option)}
            disabled={selectedOption !== null}
          >
            <div className="d-flex align-items-center">
              <span className="option-letter me-3">{String.fromCharCode(65 + index)}</span>
              <span className="option-text text-start">{option.label}</span>
            </div>
          </motion.button>
        ))}
      </div>
      {/* Indicador de seleção */}
      {selectedOption !== null && (
        <motion.div
          className="selection-indicator mt-4 text-center"
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
