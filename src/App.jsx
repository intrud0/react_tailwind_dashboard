import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from "./components/shared/Layouts";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index={true} element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="login" element={<div>This is a login page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
