import React, { useState } from 'react';
import Papa from 'papaparse';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [csvData, setCsvData] = useState([]);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(result.message);

        // Parse the CSV data using PapaParse
        Papa.parse(result.data, {
          complete: (parsedData) => {
            setCsvData(parsedData.data); // Set the parsed data to state
          },
          header: true, // Optional, if your CSV has headers
        });
      } else {
        setMessage(result.message || 'Error uploading file');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error uploading file');
    }
  };

  return (
    <div>
      <h1>Upload a CSV File</h1>
      <input type="file" onChange={handleFileChange} accept=".csv" />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>

      {csvData.length > 0 && (
        <div>
          <h2>CSV Data in Table Format:</h2>
          <table border="1" cellPadding="5" cellSpacing="0">
            <thead>
              <tr>
                {Object.keys(csvData[0]).map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
