import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserRoute from "./context/UserRoute";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/dashboard"
            element={<UserRoute element={<Dashboard />} />}
          />
          <Route path="/notfound" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
