import React from 'react';

interface ArrowPointerProps {
  children: React.ReactNode;
}

const ArrowPointer: React.FC<ArrowPointerProps> = ({ children }) => {
  return (
    <div className="relative mt-8">
      <div className="absolute left-1/2 -top-8 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-300"></div>
      <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default ArrowPointer;
