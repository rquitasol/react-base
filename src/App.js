import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./context/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Fragment>
          <Header />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/notfound" element={<NotFoundPage />} />
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </Fragment>
      </Router>
      <Footer />
    </AuthProvider>
  );
}

export default App;
