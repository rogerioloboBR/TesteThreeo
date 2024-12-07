import api from './api';

export interface LoginResponse {
  token: string;  // Define o tipo da resposta esperada
}

export const login = async (username: string, password: string) => {
  try {
    const response = await api.post<LoginResponse>('/api/Login/login', {
      Username: username,
      Password: password,
    });
    console.log(response.status);  // Verifica o código de status
    console.log(response.data);  // Verifica o conteúdo da resposta
    const token = response.data.token;
    localStorage.setItem('authToken', token);

    return token;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};