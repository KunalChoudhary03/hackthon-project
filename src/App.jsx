import React, { useState } from 'react';
import Mainroutes from './routes/Mainroutes';
import Loader from './components/Loader';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleFinishLoading = () => {
    setLoading(false);
  };

  return (
    <div className='bg-black min-h-screen text-white'>
      {loading ? <Loader onFinish={handleFinishLoading} /> : <Mainroutes />}
    </div>
  );
};

export default App;
