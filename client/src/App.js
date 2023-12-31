import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
         </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
