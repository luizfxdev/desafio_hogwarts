import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Quiz from './pages/Quiz';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Componente principal da aplicação
 *
 * Gerencia:
 * - Navegação entre páginas (Quiz/About)
 * - Layout principal da aplicação
 * - Estados globais da aplicação
 * - Header e Footer
 */
function App() {
  // Estado para controlar a página atual
  const [currentPage, setCurrentPage] = useState('quiz');
  const [isLoaded, setIsLoaded] = useState(false);

  /**
   * Navega para uma página específica
   * @param {string} page - nome da página ('quiz' ou 'about')
   */
  const navigateToPage = page => {
    setCurrentPage(page);
  };

  // Simular carregamento inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.classList.add('app-loaded');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
      {/* Header fixo */}
      <Header currentPage={currentPage} onNavigate={navigateToPage} />

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
      <Footer onNavigate={navigateToPage} />

      {/* Loader inicial */}
      {!isLoaded && (
        <div id="initial-loader">
          <div className="loader-icon">🧙‍♂️</div>
          <div className="loader-text">
            Preparando o Chapéu Seletor...
            <small>A magia está carregando!</small>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
