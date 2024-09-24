import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PreviewDataPage = () => {
  const [csvData, setCsvData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 15; // Number of rows per page
  const maxPageNumbers = 5; // Max number of page numbers to show at a time

  // Load CSV data from localStorage when component mounts
  useEffect(() => {
    const storedData = localStorage.getItem('csvData');
    if (storedData) {
      setCsvData(JSON.parse(storedData));
    }
  }, []);

  // Calculate the current slice of data for the page
  const currentData = csvData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  // Calculate total pages
  const totalPages = Math.ceil(csvData.length / rowsPerPage);

  // Helper function to generate the range of page numbers to display
  const getPaginationRange = () => {
    const half = Math.floor(maxPageNumbers / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    if (currentPage <= half) {
      end = Math.min(totalPages, maxPageNumbers);
    }

    if (currentPage + half > totalPages) {
      start = Math.max(1, totalPages - maxPageNumbers + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className="h-screen w-full bg-white p-8">
      <h2 className="text-3xl font-semibold mb-6 text-center">Preview Uploaded CSV Data</h2>

      {csvData.length > 0 ? (
        <div>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                {Object.keys(csvData[0]).map((header, index) => (
                  <th key={index} className="px-4 py-2 text-left bg-white">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, cellIndex) => (
                    <td key={cellIndex} className="border px-4 py-2">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-4">
            <button onClick={() => setCurrentPage(1)} className="mx-1 px-3 py-1 bg-blue-500 text-white rounded">
                FirstPage
            </button>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="mx-1 px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            {getPaginationRange().map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`mx-1 px-3 py-1 rounded ${page === currentPage ? 'bg-blue-600 text-white' : 'bg-white'}`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="mx-1 px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
            <button onClick={() => setCurrentPage(totalPages)} className="mx-1 px-3 py-1 bg-blue-500 text-white rounded"
            >lastPage</button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No data to preview</p>
      )}

      <div className="mt-6 text-center">
        <Link to="/upload" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          Back to Upload
        </Link>
      </div>
    </div>
  );
};

export default PreviewDataPage;
