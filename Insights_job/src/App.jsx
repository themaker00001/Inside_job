
import './App.css'
import '@fontsource/roboto/300.css';
import Home from './pages/Home'
import Upload from './pages/Upload';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home2 from './pages/Home2';
import Upload2 from './pages/Upload2';
function App() {

  return (
  <BrowserRouter> 
   <Routes>
   <Route path="/" element={<Home2 />} />
  {/* <Home></Home> */}
  <Route path="/upload" element={<Upload2 />} />
  </Routes>
 </BrowserRouter>

);
}

export default App
