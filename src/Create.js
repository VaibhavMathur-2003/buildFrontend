import React from 'react';

const Create = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <nav className="hidden md:flex md:flex-shrink-0 md:bg-gray-800 md:flex-col">
        <div className="p-4">
          <p className="text-white font-semibold text-lg">LandWeb</p>
          
        </div>
      </nav>

      <main className="flex-1 overflow-y-auto focus:outline-none">
        <div className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">Your Webpage</h2>
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">New Webpage</button>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow-sm rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900">Webpage Title</h3>
                <p className="mt-1 text-sm text-gray-600">Last edited: January 1, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Create;
