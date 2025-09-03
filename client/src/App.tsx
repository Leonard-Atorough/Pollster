import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h2>Home Page</h2>} />
        <Route path="create" element={<h2>Create Poll Page</h2>} />
      </Route>
    </Routes>
  );
}

export default App;
