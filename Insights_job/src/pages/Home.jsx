import Nav from '../components/Nav'
import HomePage from "../assets/HomePage.png"
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  const goToUploadPage = () => {
    navigate('/upload'); // Navigate to the '/about' page
  };
  return (
    <>
    <Link to ="/" />
    <div className="h-screen w-full bg-gray-800 font-sans text-white">
    <Nav />
     {/* Main Content */}
     <div className="flex h-[calc(100vh-64px)]"> {/* Adjust height to account for the navbar */}
   
       {/* Left Half Content */}
       <div className="w-3/5 flex items-center justify-start bg-gray-800 p-8">
   <div className="text-left">
     <p className="text-4xl text-blue-500">Inside Job</p>
     {/* Additional text */}
     <p className="mt-4 text-xl text-white">
       Predictive Analysis with Advanced Machine Learning
     </p>
     <p className='mt-2 text-sm text-white'>
       The Power of Machine Learning and Data-based Prediction now available across the Globe right in your budget!
     </p>
     {/* Add more text here if needed */}
     <button className="relative px-4 py-2 font-medium text-white bg-blue-600 rounded-lg overflow-hidden group mt-4" onClick={goToUploadPage}>
       <span className="absolute inset-0 bg-blue-700 transition-transform duration-300 ease-out group-hover:translate-x-full"></span>
       <span className="relative">Try now 🡥</span>
      
     </button>
   </div>
 </div>
     
       
       {/* Right Half with Image */}
       <div className="w-3/5 bg-black flex items-center justify-center relative">
         <img 
           src={HomePage} 
           alt="Descriptive alt text" 
           className="h-full w-full object-cover"
         />
       </div>
   
     </div>
   </div></>
  )
}

export default Home