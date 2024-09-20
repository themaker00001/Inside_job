import React from 'react';

const Card = ({ imageSrc, title, description, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Image */}
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />

      {/* Card Content */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 mb-6">{description}</p>

        {/* Button */}
        <a
          href={link}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400"
        >
          Try Now
        </a>
      </div>
    </div>
  );
};

export default Card;
