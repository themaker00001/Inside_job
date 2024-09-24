import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import model from '../assets/model_selection.jpg';

const models = [
  { name: 'Random Forest', description: 'High accuracy and handles large datasets', icon: '🌲', link: '/randomforest' },
  { name: 'Logistic Regression', description: 'Simple and effective for binary classification', icon: '📈', link: '/logistic-regression' },
  { name: 'XGBoost', description: 'Gradient boosting with efficient performance', icon: '⚡', link: '/xgboost' },
  { name: 'K-Nearest Neighbors', description: 'Non-parametric and easy to interpret', icon: '🧭', link: '/k-nearest-neighbors' },
];

const ModelSelectionPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${model})` }}>
      <div className="bg-white bg-opacity-80 max-w-5xl w-full p-6 rounded-lg shadow-lg">
        <h1 className="text-gray-800 text-4xl font-bold text-center mb-8 tracking-wide">
          Select Your Model
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between transform hover:scale-105 hover:bg-yellow-500 hover:text-black hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl text-center">{model.icon}</div>
              <h2 className="text-xl font-bold text-gray-800 mt-4 text-center">{model.name}</h2>
              <p className="text-gray-600 mt-2 text-center flex-grow">{model.description}</p>
              {/* Use Link to navigate to the model's page */}
              <Link to={model.link}>
                <button
                  className="mt-6 w-full bg-gray-800 text-white font-semibold py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Select
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelSelectionPage;
