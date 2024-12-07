import { createContext, useContext, useState, ReactNode } from 'react';

// Definindo o formato do estado de autenticação
interface AuthContextType {
  authState: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<boolean>(() => {
    const token = localStorage.getItem('token');
    return !!token; // Inicializa como autenticado se um token existir
  });

  const login = (token: string) => {
    localStorage.setItem('token', token); // Armazena o token
    setAuthState(true); // Atualiza o estado para autenticado
  };

  const logout = () => {
    localStorage.removeItem('token'); // Remove o token
    setAuthState(false); // Atualiza o estado para não autenticado
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acessar o contexto de autenticação
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
