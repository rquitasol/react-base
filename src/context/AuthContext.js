// AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  const login = (userData) => {
    // Implement your future authentication logic here
    if (userData.email === "Admin") {
      setUser({ ...user, userData });
      return true;
    }
  };

  const logout = () => {
    // Implement logout logic (e.g., remove user from state)
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
