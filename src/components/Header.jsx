import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Componente Header
 *
 * Responsável por:
 * - Navegação principal da aplicação
 * - Logo/Brand da aplicação
 * - Menu responsivo
 * - Efeitos de scroll
 */
const Header = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar scroll para adicionar efeito
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Adicionar classe ao body para ajuste do padding-top
  useEffect(() => {
    document.body.classList.add('has-header');
    return () => {
      document.body.classList.remove('has-header');
    };
  }, []);

  // Fechar menu mobile ao navegar
  const handleNavigation = page => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  // Toggle menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Logo/Brand */}
          <motion.div
            className="navbar-brand"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => handleNavigation('quiz')}
            style={{ cursor: 'pointer' }}
          >
            <span className="brand-text">
              🏰 <strong>Chapéu Seletor</strong>
            </span>
          </motion.div>

          {/* Botão toggle mobile */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMobileMenu}
            aria-controls="navbarNav"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu de navegação */}
          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <motion.li
                className="nav-item"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <button
                  className={`nav-link btn ${currentPage === 'quiz' ? 'active' : ''}`}
                  onClick={() => handleNavigation('quiz')}
                  type="button"
                >
                  <i className="fas fa-hat-wizard"></i>
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
                  className={`nav-link btn ${currentPage === 'about' ? 'active' : ''}`}
                  onClick={() => handleNavigation('about')}
                  type="button"
                >
                  <i className="fas fa-info-circle"></i>
                  Sobre
                </button>
              </motion.li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
