import React from 'react';
import { motion } from 'framer-motion';
import { housesInfo } from '../data/questions.js';

/**
 * Componente ResultCard - Exibe o resultado final do quiz
 *
 * Props:
 * - house: string com o nome da casa selecionada
 * - scores: objeto com a pontuação de cada casa
 * - onRestart: função callback para reiniciar o quiz
 */
const ResultCard = ({ house, scores, onRestart }) => {
  const houseInfo = housesInfo[house];
  const crestPath = `/assets/houses/${house}/crest.jpg`; // Ajustado para .jpg
  const bannerPath = `/assets/houses/${house}/banner.png`; // Mantido .png

  // Variantes de animação para o Framer Motion
  const cardVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      rotateY: -90
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2
      }
    }
  };

  const elementVariants = {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const imageVariants = {
    initial: {
      opacity: 0,
      scale: 0.5
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'backOut'
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <motion.div className="result-card-container" variants={cardVariants} initial="initial" animate="animate">
      {/* Efeitos de fundo */}
      <div className="sparkles">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`sparkle sparkle-${i + 1}`}
            variants={sparkleVariants}
            animate="animate"
            style={{
              position: 'absolute',
              width: '10px',
              height: '10px',
              background: '#ffd700',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
      <div className={`result-card house-${house}`}>
        {/* Header com banner da casa */}
        <motion.div className="card-header" variants={elementVariants}>
          <img
            src={bannerPath}
            alt={`Banner da ${houseInfo.name}`}
            className="house-banner"
            onError={e => {
              e.target.style.display = 'none';
            }}
          />
        </motion.div>
        {/* Corpo do card com informações da casa */}
        <div className="card-body text-center">
          {/* Brasão da casa */}
          <motion.div className="crest-container mb-4" variants={imageVariants}>
            <img
              src={crestPath}
              alt={`Brasão da ${houseInfo.name}`}
              className="house-crest"
              onError={e => {
                e.target.src = '/assets/icons/default-crest.png'; // Opção caso a imagem falhe
              }}
            />
          </motion.div>
          {/* Título de resultado */}
          <motion.h1 className={`house-title text-${house}`} variants={elementVariants}>
            🎉 Parabéns! 🎉
          </motion.h1>
          <motion.h2 className={`house-name mb-3`} variants={elementVariants}>
            Você foi selecionado(a) para a casa
            <br />
            <strong className={`text-${house}`}>{houseInfo.name}!</strong>
          </motion.h2>
          {/* Descrição da casa */}
          <motion.p className="house-description mb-4" variants={elementVariants}>
            {houseInfo.description}
          </motion.p>
          {/* Características da casa */}
          <motion.div className="house-traits mb-4" variants={elementVariants}>
            <h5>Características principais:</h5>
            <div className="traits-list">
              {houseInfo.traits.map((trait, index) => (
                <span key={index} className={`badge bg-${house} me-2 mb-2`}>
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>
          {/* Informações adicionais */}
          <motion.div className="house-info mb-4" variants={elementVariants}>
            <div className="row">
              <div className="col-md-6 mb-2">
                <strong>Fundador(a):</strong>
                <br />
                {houseInfo.founder}
              </div>
              <div className="col-md-6 mb-2">
                <strong>Cores:</strong>
                <br />
                {houseInfo.colors.join(' e ')}
              </div>
            </div>
          </motion.div>
          {/* Pontuação detalhada */}
          <motion.div className="scores-breakdown mb-4" variants={elementVariants}>
            <h6>Sua pontuação:</h6>
            <div className="row">
              {Object.entries(scores).map(([houseName, score]) => (
                <div key={houseName} className="col-6 col-md-3 mb-2">
                  <div className={`score-item ${houseName === house ? 'winner' : ''}`}>
                    <div className={`score-house text-${houseName}`}>{housesInfo[houseName].name}</div>
                    <div className={`score-points ${houseName === house ? 'fw-bold' : ''}`}>{score} pts</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Botão para reiniciar */}
          <motion.button
            className="btn btn-lg btn-outline-primary restart-btn"
            variants={elementVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRestart}
          >
            <i className="fas fa-redo me-2"></i>
            Fazer o Quiz Novamente
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultCard;
