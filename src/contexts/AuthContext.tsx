
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'owner' | 'admin';
  avatar?: string;
  properties?: string[]; // Array of property IDs for owners
  currentProperty?: string; // Current rented property for users
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string, role: 'user' | 'owner') => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  updateUser: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('roommatch_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - replace with real API
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    
    if (email === 'admin@roommatch.pk' && password === 'admin123') {
      const adminUser = {
        id: '1',
        name: 'Admin User',
        email: 'admin@roommatch.pk',
        role: 'admin' as const
      };
      setUser(adminUser);
      localStorage.setItem('roommatch_user', JSON.stringify(adminUser));
      return true;
    } else if (email === 'owner@roommatch.pk' && password === 'owner123') {
      const ownerUser = {
        id: '3',
        name: 'Ahmad Ali',
        email: 'owner@roommatch.pk',
        role: 'owner' as const,
        properties: ['1', '2', '3'] // Sample property IDs
      };
      setUser(ownerUser);
      localStorage.setItem('roommatch_user', JSON.stringify(ownerUser));
      return true;
    } else if (email && password) {
      const mockUser = {
        id: '2',
        name: 'John Doe',
        email,
        role: 'user' as const,
        currentProperty: '1' // Sample rented property
      };
      setUser(mockUser);
      localStorage.setItem('roommatch_user', JSON.stringify(mockUser));
      return true;
    }
    return false;
  };

  const signup = async (name: string, email: string, password: string, role: 'user' | 'owner'): Promise<boolean> => {
    // Mock signup - replace with real API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      role,
      properties: role === 'owner' ? [] : undefined,
      currentProperty: role === 'user' ? undefined : undefined
    };
    setUser(newUser);
    localStorage.setItem('roommatch_user', JSON.stringify(newUser));
    return true;
  };

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('roommatch_user', JSON.stringify(updatedUser));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('roommatch_user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      signup,
      logout,
      isAuthenticated: !!user,
      updateUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};
