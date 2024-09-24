
import './App.css'
import '@fontsource/roboto/300.css';
import Home from './pages/Home'
import Upload from './pages/Upload';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home2 from './pages/Home2';
import Upload2 from './pages/Upload2';
import FileUpload from './pages/FileUploaded';
import PreviewDataPage from './pages/PreviewDataPage';
import SelectModel from './pages/SelectModel';
import RandomForest from './pages/RandomForest';
function App() {

  return (
  <BrowserRouter> 
   <Routes>
   <Route path="/" element={<Home2 />} />
  {/* <Home></Home> */}
  <Route path="/upload" element={<Upload2 />} />
  <Route path="/uploadfile" element={<FileUpload />} /> {/* File Upload Page Route */}
  <Route path="/preview" element={<PreviewDataPage />} />
  <Route path="/selectmodel" element={<SelectModel />} />
  <Route path="/randomforest" element={<RandomForest />} />
  </Routes>
 </BrowserRouter>

);
}

export default App
