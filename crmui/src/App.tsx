import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import CreateOrder from "./components/CreateOrder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/createOrder" element={<CreateOrder />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
