import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version, // Versão da aplicação extraída do package.json
  production: false,              // Define se está em ambiente de produção ou desenvolvimento
  autenticar: 'https://localhost:5174/api/login/autenticar',
  cadastrar: 'https://localhost:5174/cadastro',
  userDetails: 'https://localhost:5174/api/Cadastro', // Base URL para obter detalhes do usuário


  
};
