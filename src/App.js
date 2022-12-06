//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Register from './pages/Register';
import Home from './pages/Home';
import WalletCard from './WalletCard';

function App() {
  return (
    <div>
      <WalletCard />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
