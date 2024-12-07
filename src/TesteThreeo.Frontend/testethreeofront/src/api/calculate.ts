import api from './api';

interface CalculateResponse {
  result: number;  // Define o tipo da resposta esperada
}

export const calculate = async (value1: number, value2: number, operation: string) => {
  try {
    const token = localStorage.getItem('authToken');

    if (!token) {
      throw new Error('User is not authenticated');
    }

    const response = await api.post<CalculateResponse>('/api/Math/calculate', {
      value1,
      value2,
      operation,
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data.result;
  } catch (error) {
    console.error('Calculation failed:', error);
    throw error;
  }
};