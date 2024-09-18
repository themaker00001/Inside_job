
import './App.css'
import '@fontsource/roboto/300.css';
import HomePage from "./assets/HomePage.png"
import Home from './pages/Home'
import Upload from './pages/Upload';
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
function App() {

  return (
  <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home />} />
  {/* <Home></Home> */}
  <Route path="/upload" element={<Upload />} />
  </Routes>
 </BrowserRouter>
);
}

export default App
