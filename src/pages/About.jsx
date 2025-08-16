import React from 'react';
import { motion } from 'framer-motion';

/**
 * Componente About - Página explicativa sobre o quiz
 *
 * Contém informações sobre:
 * - O que é o quiz
 * - Como funciona a seleção
 * - As casas de Hogwarts
 */
const About = () => {
  // Variantes de animação
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  return (
    <motion.div className="about-container" variants={containerVariants} initial="initial" animate="animate">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            {/* Header */}
            <motion.div className="about-header text-center mb-5" variants={itemVariants}>
              <h1 className="display-4 mb-3">🎓 Sobre o Quiz do Chapéu Seletor</h1>
              <p className="lead text-muted">
                Descubra sua verdadeira casa em Hogwarts através de perguntas cuidadosamente elaboradas
              </p>
            </motion.div>
            {/* Seção: O que é o quiz */}
            <motion.section className="about-section mb-5" variants={itemVariants}>
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">
                    <i className="fas fa-hat-wizard me-2 text-warning"></i>O que é este Quiz?
                  </h2>
                  <p className="card-text">
                    O Quiz do Chapéu Seletor é uma experiência interativa inspirada no universo mágico de Harry Potter.
                    Assim como o famoso Chapéu Seletor de Hogwarts, este quiz analisa suas características pessoais e
                    determina qual das quatro casas melhor representa sua personalidade.
                  </p>
                  <p className="card-text">
                    As perguntas foram cuidadosamente elaboradas para capturar os valores, atitudes e preferências dos
                    participantes, proporcionando uma experiência única e divertida. Este quiz foi feito de um fã para
                    os milhares fãs de Harry Potter e não tem fins comerciais.
                  </p>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default About;
