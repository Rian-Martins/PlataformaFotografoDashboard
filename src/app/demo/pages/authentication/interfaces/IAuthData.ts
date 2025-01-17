export interface AuthData {
  token: string; // Token de autenticação
  id: string;
  primeiroNome: string; // Primeiro nome do usuário
  segundoNome: string; // Sobrenome do usuário
  email: string; // Email do usuário
  empresa: string; // Empresa do usuário
  senha: string; // Senha do usuário
  iniciais?: string; // Iniciais do nome
  estado?: string; // Estado atual do usuário
  cpf?: string; // CPF do usuário
  dataNascimento?: string; // Data de nascimento do usuário
  numIdentidade?: number; // Número da identidade
  orgaoExpedidor?: string; // Órgão expedidor da identidade
  naturalidade?: string; // Naturalidade do usuário
  estadoCivil?: string; // Estado civil do usuário
  profissao?: string; // Profissão do usuário
  cep?: string; // CEP do endereço
  bairro?: string; // Bairro do endereço
  cidade?: string; // Cidade do endereço
  contato?: string; // Contato do usuário
  instagram?: string; // Instagram do usuário
  expiration: string; // Data de expiração do token
  message?: string; // Mensagem do backend (opcional)
}
