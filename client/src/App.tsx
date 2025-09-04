import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Layout } from "./components/layout/Layout";
import { AllPolls } from "./pages/AllPolls";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AllPolls />} />
        <Route path="create" element={<h2>Create Poll Page</h2>} />
        <Route path="poll/:id" element={<h2>A poll page</h2>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
