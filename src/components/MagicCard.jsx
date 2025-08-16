import React from 'react';

/**
 * MagicCard - Componente de container animado para o quiz
 *
 * Props:
 * - children: conteúdo dinâmico a ser renderizado dentro do card
 * - className: classes CSS adicionais (opcional)
 */
export default function MagicCard({ children, className = '' }) {
  return <div className={`magic-card card ${className}`}>{children}</div>;
}
