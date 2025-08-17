import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

/**
 * Configuração do Vite para o Quiz de Hogwarts
 *
 * Configurações incluem:
 * - Plugin React para JSX
 * - Copia arquivos estáticos de public/assets para dist/assets
 * - Configurações de build otimizadas
 * - Configurações de desenvolvimento
 * - Suporte a Sass
 */
export default defineConfig({
  // Plugins do Vite
  plugins: [
    react({
      // Configurações do React
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'public/assets',
          dest: ''
        }
      ]
    })
  ],
  // Configurações do servidor de desenvolvimento
  server: {
    port: 3000,
    open: true, // Abre automaticamente no browser
    host: true // Permite acesso externo
  },
  // Configurações de build
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser', // Configurações de otimização
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar dependências grandes em chunks
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          styles: ['bootstrap']
        }
      }
    },
    assetsInlineLimit: 4096 // 4kb
  },
  // Configurações de CSS
  css: {
    preprocessorOptions: {
      scss: {
        // Sem additionalData
      }
    },
    devSourcemap: true
  },
  // Configurações de resolução de módulos
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@data': '/src/data',
      '@styles': '/src/styles'
    }
  },
  // Configurações de otimização
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'bootstrap']
  },
  // Configurações de preview
  preview: {
    port: 4173,
    open: true
  },
  // Configurações de base URL (para deploy)
  base: './'
});
