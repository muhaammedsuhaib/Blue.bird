import React from 'react';

const Main = () => {
  return (
    <div>
      <section className="container-fluid py-0 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-4 md:mb-0 bg-transparent">
            <div className="p-0 bg-transparent">
              <div className="rounded-md bg-transparent h-full overflow-auto">
                <div className="flex items-center gap-2 p-3 border-b border-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <div>Muhammed suhaib</div>
                </div>
                <div className="flex items-center gap-2 p-3 border-b border-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <div>mdbootstrap</div>
                </div>
                <div className="flex items-center gap-2 p-3 border-b border-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <div>@mdbootstrap</div>
                </div>
                <div className="flex items-center gap-2 p-3 border-b border-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <div>mdbootstrap</div>
                </div>
                <div className="flex items-center gap-2 p-3 border-b border-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <div>mdbootstrap</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4 md:mb-0 py-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <img src="https://via.placeholder.com/180" alt="avatar" className="w-full h-40 object-cover" />
                  <div className="bg-black bg-opacity-60 p-2">
                    <img src="https://via.placeholder.com/40" alt="profile" className="rounded-full border-2 border-blue-500" />
                    <p className="text-white text-center mt-2">Ronaldo</p>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <img src="https://via.placeholder.com/180" alt="avatar" className="w-full h-40 object-cover" />
                  <div className="bg-black bg-opacity-60 p-2">
                    <img src="https://via.placeholder.com/40" alt="profile" className="rounded-full border-2 border-blue-500" />
                    <p className="text-white text-center mt-2">Ronaldo</p>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <img src="https://via.placeholder.com/180" alt="avatar" className="w-full h-40 object-cover" />
                  <div className="bg-black bg-opacity-60 p-2">
                    <img src="https://via.placeholder.com/40" alt="profile" className="rounded-full border-2 border-blue-500" />
                    <p className="text-white text-center mt-2">Ronaldo</p>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <img src="https://via.placeholder.com/180" alt="avatar" className="w-full h-40 object-cover" />
                  <div className="bg-black bg-opacity-60 p-2">
                    <img src="https://via.placeholder.com/40" alt="profile" className="rounded-full border-2 border-blue-500" />
                    <p className="text-white text-center mt-2">Ronaldo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 py-3">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center gap-4 border-b border-gray-200 pb-2">
                  <img src="https://via.placeholder.com/40" alt="avatar" className="rounded-full border-2 border-blue-500" />
                  <input type="text" className="w-full border-none bg-gray-700 text-white focus:outline-none" placeholder="Type something..." />
                </div>
                {/* Progress bars can be added here */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
