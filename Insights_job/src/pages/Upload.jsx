import React from 'react'

const Upload = () => {
  return (
    <>
    <div className="bg-gray-900 h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-white text-4xl mb-8">Upload Page</h1>
      <form action="" method="post" className="bg-gray-600 p-8 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <label htmlFor="file" className="text-white mb-4 rounded-3xl">Select a file</label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".csv,.xlsx,.xls,.txt,.docs"
            className="bg-gray-500 my-2 py-2 px-4 text-white rounded-lg"
          />
          <input
            type="submit"
            value="Upload"
            className="bg-gray-500 mt-6 px-6 py-2 text-white rounded-lg hover:bg-gray-400 transition-all"
          />
        </div>
        <a href=""></a>
      </form>
    </div>
  </>
  
  )
}

export default Upload