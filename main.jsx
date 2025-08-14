import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

/**
 * Ponto de entrada principal da aplicação React
 *
 * Responsável por:
 * - Renderizar o componente App no DOM
 * - Configurar o React 18 com createRoot
 * - Aplicar configurações globais
 */

// Cria a raiz da aplicação React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza a aplicação
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Configurações adicionais para desenvolvimento
if (import.meta.env.DEV) {
  // Log para indicar que a aplicação foi carregada
  console.log('🏰 Quiz do Chapéu Seletor carregado!');

  // Informações sobre o ambiente de desenvolvimento
  console.log('⚡ Rodando com Vite no modo desenvolvimento');
  console.log('🎨 Estilos: Sass + Bootstrap + Framer Motion');
  console.log('📱 Aplicação totalmente responsiva');
}
