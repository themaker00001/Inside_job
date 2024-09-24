import React, { useState } from 'react';
import RadnomForest from '../assets/random_forest.png';

const RandomForest = () => {
  const [epochs, setEpochs] = useState(10); // Initial value for epochs
  const [showStats, setShowStats] = useState(false); // State for toggling dropdown

  // Handle slider value change
  const handleEpochChange = (e) => {
    setEpochs(e.target.value);
  };

  // Toggle dropdown
  const toggleStats = () => {
    setShowStats(!showStats);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left half: Description and Slider */}
      <div className="w-1/2 bg-black bg-opacity-50 flex flex-col justify-center p-6">
        <div className="relative z-10 text-left text-white">
          <h1 className="text-4xl font-bold mb-4">Random Forest Model</h1>
          <p className="text-lg mb-6">
            Adjust the number of epochs for training the model. Epochs help control how many times the learning algorithm will run over the dataset.
          </p>
          <p className="text-xl font-bold my-6">But follow some rules for using this model:</p>
          <p className="my-4">
            > Select the number of epochs for training the model. The number of epochs controls how many times the learning algorithm will run over the dataset.
          </p>
          <p className="my-4">
            > Please ensure that your dataset includes the 'MonthlyCharges', 'TotalCharges', and 'Tenure' columns.
          </p>

          {/* Slider for adjusting epochs */}
          <div className="text-white">
            <label htmlFor="epochs-slider" className="block text-xl mb-2">
              Number of Epochs: {epochs}
            </label>
            <input
              type="range"
              id="epochs-slider"
              min="1"
              max="100"
              value={epochs}
              onChange={handleEpochChange}
              className="slider"
            />
          </div>

          {/* Dropdown Button */}
          <button
            className="mt-6 bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors w-1/3 flex items-center"
            onClick={toggleStats}
          >
            {showStats ? 'Hide Model Stats' : 'Show Model Stats'}
            <span className={`ml-2 transform transition ease-in-out duration-300 ${showStats ? 'rotate-180' : ''}`}>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10a1 1 0 000-2v8a1 1 0 102 0v-8a1 1 0 00-2 0z" />
              </svg>
            </span>
          </button>

          {/* Dropdown Content */}
          {showStats && (
            <div className="mt-4 p-4 bg-gray-800 bg-opacity-75 rounded-lg text-white transition-transform transform ease-in-out duration-300 border border-gray-600">
              <h2 className="text-lg font-bold mb-2">Model Stats:</h2>
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-b border-gray-600 text-left px-4 py-2">Metric</th>
                    <th className="border-b border-gray-600 text-left px-4 py-2">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-600 px-4 py-2">Latest Training Date</td>
                    <td className="border-b border-gray-600 px-4 py-2">September 24, 2024</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-600 px-4 py-2">Accuracy</td>
                    <td className="border-b border-gray-600 px-4 py-2">89.5%</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-600 px-4 py-2">Precision</td>
                    <td className="border-b border-gray-600 px-4 py-2">91%</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-600 px-4 py-2">Recall</td>
                    <td className="border-b border-gray-600 px-4 py-2">87%</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-600 px-4 py-2">F1 Score</td>
                    <td className="border-b border-gray-600 px-4 py-2">89%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        <a
          href="#_"
          className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group w-1/3 mt-6"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative">Test Now</span>
        </a>
      </div>

      {/* Right half: Background image */}
      <div
        className="w-1/2 bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${RadnomForest})`,
        }}
      />
    </div>
  );
};

export default RandomForest;
