// App.js

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Home from "./pages/home/Home";
import Goods from "./pages/goods/Goods";
import Editor from "./pages/goods/Editor";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/goods" element={<Goods data={setData} />} />
          <Route path="/edit/:id" element={<Editor data={setData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
