// .eslintrc.js

module.exports = {
  parser: '@typescript-eslint/parser', // Usado para analisar arquivos TypeScript
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json', // Certifique-se de que o caminho está correto para o seu tsconfig
  },
  extends: [
    'eslint:recommended', // Regras recomendadas do ESLint
    'plugin:@typescript-eslint/recommended', // Regras recomendadas para TypeScript
    'plugin:prettier/recommended', // Regras do Prettier no ESLint
    'prettier', // Desativa as regras de formatação do ESLint para evitar conflitos com o Prettier
  ],
  env: {
    node: true, // Habilita variáveis globais do Node.js
    es2020: true,
    jest: true, // Habilita variáveis globais do Jest, se você estiver testando
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'lf', // Configura o final de linha como 'lf'
        singleQuote: true, // Usa aspas simples
        trailingComma: 'all', // Adiciona vírgula final em objetos e arrays
      },
    ],
  },
  plugins: ['@typescript-eslint', 'prettier'], // Usa os plugins para TypeScript e Prettier
};
