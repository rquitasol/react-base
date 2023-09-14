import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = (userData) => {
    // Implement your future authentication logic here
    if (userData.email === "Admin") {
      const newUser = { ...user, ...userData, role: "admin" };
      setUser(newUser);
      setIsAuthenticated(true);
      sessionStorage.setItem("user", JSON.stringify(newUser));
      return true;
    }
  };

  const logout = () => {
    // Implement logout logic (e.g., remove user from state and sessionStorage)
    setUser({});
    setIsAuthenticated(false);
    sessionStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {!isLoading ? children : null}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
