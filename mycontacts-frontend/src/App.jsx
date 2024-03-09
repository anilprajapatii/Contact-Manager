import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Mycontacts from "./my-contacts/Mycontacts";
import Navbar from "./navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
          <Route path="/my-contacts" element={<Mycontacts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
