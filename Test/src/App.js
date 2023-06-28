import "./App.css";

import Header from "./Components/Header/header";

import All from "./pages/All/All";
import Active from "./pages/Active/Active";
import Completed from "./pages/Completed/Completed";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/active" element={<Active />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </div>
  );
}

export default App;
