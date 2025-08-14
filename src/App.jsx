import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Quiz from './pages/Quiz';
import About from './pages/About';
import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Componente principal da aplicação
 *
 * Gerencia:
 * - Navegação entre páginas (Quiz/About)
 * - Layout principal da aplicação
 * - Estados globais da aplicação
 */
function App() {
  // Estado para controlar a página atual
  const [currentPage, setCurrentPage] = useState('quiz');

  /**
   * Navega para uma página específica
   * @param {string} page - nome da página ('quiz' ou 'about')
   */
  const navigateToPage = page => {
    setCurrentPage(page);
  };

  // Variantes de animação para transições entre páginas
  const pageVariants = {
    initial: {
      opacity: 0,
      x: 300,
      scale: 0.8
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      x: -300,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  };

  return (
    <div className="App">
      {/* Header de navegação */}
      <header className="app-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="container-fluid">
            {/* Logo/Brand */}
            <motion.div
              className="navbar-brand"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="brand-text">
                🏰 <strong>Chapéu Seletor</strong>
              </span>
            </motion.div>
            {/* Botão para mobile */}
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Menu de navegação */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <motion.li
                  className="nav-item"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <button
                    className={`nav-link btn btn-link ${currentPage === 'quiz' ? 'active' : ''}`}
                    onClick={() => navigateToPage('quiz')}
                  >
                    <i className="fas fa-hat-wizard me-2"></i>
                    Quiz
                  </button>
                </motion.li>
                <motion.li
                  className="nav-item"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <button
                    className={`nav-link btn btn-link ${currentPage === 'about' ? 'active' : ''}`}
                    onClick={() => navigateToPage('about')}
                  >
                    <i className="fas fa-info-circle me-2"></i>
                    Sobre
                  </button>
                </motion.li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* Conteúdo principal */}
      <main className="app-main">
        <AnimatePresence mode="wait">
          {currentPage === 'quiz' && (
            <motion.div key="quiz-page" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Quiz />
            </motion.div>
          )}
          {currentPage === 'about' && (
            <motion.div key="about-page" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <About />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      {/* Footer */}
      <footer className="app-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <motion.div
                className="footer-content text-center py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p className="mb-2">
                  <small className="text-muted">Criado com ❤️ para fãs de Harry Potter</small>
                </p>
                <p className="mb-0">
                  <small className="text-muted">Desenvolvido com React, Vite, Sass e Framer Motion</small>
                </p>
                {/* Links sociais/informativos */}
                <div className="social-links mt-3">
                  <motion.a
                    href="https://www.wizardingworld.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-secondary me-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-external-link-alt me-1"></i>
                    Wizarding World
                  </motion.a>
                  <motion.button
                    className="btn btn-sm btn-outline-info"
                    onClick={() => navigateToPage('about')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-question-circle me-1"></i>
                    Como funciona?
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
