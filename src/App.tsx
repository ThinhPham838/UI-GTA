import React from 'react';

const App = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-200">
    <div className="flex-1 align-middle text-grey-darker text-center px-4 py-2 m-2">
      <div className="text-6xl font-black tracking-tight leading-tight mt-0 mb-0 text-indigo-600">React v18.2 with</div>
      <div className="text-6xl font-black tracking-tight leading-tight mt-0 mb-0 text-indigo-700">
        Typescript and Webpack v5
      </div>
      <div className="text-6xl font-normal leading-tight mt-0 mb-2 text-indigo-900">Starter Kit</div>
      <div className="text-3xl leading-normal mt-8 mb-2 text-gray-400">TailwindCSS</div>
    </div>
  </div>
);

export default App;
