import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://localhost:32769/api',  // URL da sua API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adiciona o token de autenticação ao cabeçalho de cada requisição
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;  // Adiciona o token no cabeçalho
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
