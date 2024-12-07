import React, { useState } from "react";
import { Button, TextField, Box, Typography, Alert } from "@mui/material";
import api from '../api/api';
import { useNavigate } from "react-router-dom";
import { LoginResponse } from '../api/login';

const LoginForm: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await api.post<LoginResponse>('/Login/login', {
        Username: userName,
        Password: password,
      });
      const token = response.data.token;
      localStorage.setItem('authToken', token);  // Armazena o token no localStorage
  
      // Atualiza a navegação para a página de dashboard
      navigate('/dashboard');
    } catch (err) {
      setError('Usuário ou senha incorretos.');
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      px={3}
    >
      <Typography variant="h4" marginBottom={2}>
        Login
      </Typography>
      {error && <Alert severity="error" style={{ marginBottom: '16px' }}>{error}</Alert>}
      <TextField
        label="Usuário"
        variant="outlined"
        fullWidth
        margin="normal"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        label="Senha"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleLogin}
        style={{ marginTop: '16px' }}
      >
        Entrar
      </Button>
    </Box>
  );
};

export default LoginForm;