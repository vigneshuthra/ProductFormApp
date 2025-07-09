import React from 'react';
import ProductForm from './components/ProductForm';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Product Management System
          </h1>
         
        </div>
        
        <ProductForm />
        
      </div>
    </div>
  );
};

export default App;