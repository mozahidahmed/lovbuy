import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full overflow-hidden h-screen py-20">
      <ScaleLoader color="#137c38" />
    </div>
  );
};

export default Loading; 