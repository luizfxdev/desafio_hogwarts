import React from 'react';
import { motion } from 'framer-motion';

/**
 * Componente Footer
 *
 * Responsável por:
 * - Informações sobre o projeto
 * - Links externos
 * - Créditos e copyright
 * - Links de navegação secundária
 */
const Footer = ({ onNavigate }) => {
  // Animações do footer
  const footerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="app-footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <motion.div className="footer-content" variants={footerVariants} initial="initial" animate="animate">
              {/* Texto principal */}
              <motion.p variants={itemVariants} className="mb-2">
                <small>Criado com ❤️ para fãs de Harry Potter</small>
              </motion.p>

              {/* Tecnologias utilizadas */}
              <motion.p variants={itemVariants} className="mb-0">
                <small className="text-muted">Desenvolvido com React, Vite, Sass e Framer Motion</small>
              </motion.p>

              {/* Links sociais/informativos */}
              <motion.div variants={itemVariants} className="social-links">
                <motion.a
                  href="https://www.wizardingworld.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Visitar site oficial do Wizarding World"
                >
                  <i className="fas fa-external-link-alt"></i>
                  Wizarding World
                </motion.a>

                <motion.button
                  className="btn btn-outline-info"
                  onClick={() => onNavigate('about')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  aria-label="Saber mais sobre como funciona o quiz"
                >
                  <i className="fas fa-question-circle"></i>
                  Como funciona?
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Rodapé com copyright */}
            <motion.div
              className="footer-bottom"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p>
                Desenvolvido por @luizfx.dev - 2025 - Inspirado no universo de J.K Rowling ©
                <a href="https://www.wizardingworld.com/" target="_blank" rel="noopener noreferrer"></a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
