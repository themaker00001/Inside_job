import React, { useState } from 'react';
import up from '../assets/up.jpg';
import axios from 'axios';
import Papa from 'papaparse';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [csvData, setCsvData] = useState([]);
  const navigate = useNavigate(); // useNavigate hook for routing

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('http://localhost:5000/upload', formData, {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setProgress(percentCompleted);
          },
        });

        setUploading(false);
        alert('File uploaded successfully!');

        // Parse the CSV data using PapaParse
        Papa.parse(response.data.data, {
          complete: (parsedData) => {
            setCsvData(parsedData.data); // Set parsed data to state
            localStorage.setItem('csvData', JSON.stringify(parsedData.data)); // Store data in localStorage for preview page
          },
          header: true, // Set to true if CSV has headers
        });
      } catch (error) {
        setUploading(false);
        alert('Error uploading file');
        console.error('Upload error:', error.response ? error.response.data : error.message);
      }
    }
  };

  const handlePreview = () => {
    // Navigate to the preview page
    navigate('/preview');
  };

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${up})` }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content Box */}
        <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-lg w-full z-10">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Upload Your Document</h2>
          <p className="text-center text-gray-500 mb-6">
            Upload a document to get started. Supported formats are .csv, .doc, and .pdf.
          </p>
          <div className="relative border-4 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              accept=".csv,.doc,.pdf" // Restrict to CSV, DOC, and PDF formats
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center">
              <p className="text-gray-500">Drag & drop or click to upload your document</p>
            </div>
          </div>
          {file && (
            <p className="mt-4 text-center text-green-500">
              {file.name} is ready to upload.
            </p>
          )}

          <button
            className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none transition duration-200"
            onClick={handleUpload}
          >
            Upload Document
          </button>

          {/* Progress Bar */}
          {uploading && (
            <div className="relative pt-4">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-center mt-2 text-gray-600">{progress}%</p>
            </div>
          )}

          {/* Preview Data Button */}
          {csvData.length > 0 && (
            <button
              className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none transition duration-200"
              onClick={handlePreview}
            >
              Preview Data
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default UploadPage;
