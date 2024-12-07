import  { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';  // Certifique-se de que sua API está configurada corretamente

interface CalculationResponse {
  result: number;  // Tipo esperado da resposta da API
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [value1, setValue1] = useState<number | string>('');
  const [value2, setValue2] = useState<number | string>('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  // Verifica se o usuário está autenticado
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  // Função para chamar a API de cálculo
  const calculate = async (operation: string) => {
    try {
      const response = await api.post<CalculationResponse>('/Math/calculate', {
        value1,
        value2,
        operation,
      });
      setResult(response.data.result);  // Atualiza o resultado
      setError('');  // Limpa mensagens de erro
    } catch (err) {
      setError('Erro ao calcular. Verifique os valores ou a operação.');
      setResult(null);
    }
  };

  // Função que lida com a operação
  const handleOperation = (operation: string) => {
    calculate(operation);  // Chama a API com a operação selecionada
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" px={3}>
      <Typography variant="h4" marginBottom={2}>Calculadora</Typography>
      
      {error && <Alert severity="error" style={{ marginBottom: '16px' }}>{error}</Alert>}

      <TextField
        label="Valor 1"
        type="number"
        variant="outlined"
        fullWidth
        margin="normal"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />

      <TextField
        label="Valor 2"
        type="number"
        variant="outlined"
        fullWidth
        margin="normal"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />

      <Box display="flex" justifyContent="space-between" width="100%" marginTop={2}>
        <Button variant="contained" color="primary" onClick={() => handleOperation('add')}>Soma</Button>
        <Button variant="contained" color="secondary" onClick={() => handleOperation('subtract')}>Subtração</Button>
        <Button variant="contained" color="success" onClick={() => handleOperation('multiply')}>Multiplicação</Button>
        <Button variant="contained" color="error" onClick={() => handleOperation('divide')}>Divisão</Button>
      </Box>

      {result !== null && (
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Resultado: {result}
        </Typography>
      )}
    </Box>
  );
};

export default Dashboard;
