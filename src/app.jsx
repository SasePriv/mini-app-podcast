import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import Header from './components/header';
import router from './routes';

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Header loading={loading} />
      <RouterProvider router={router(setLoading)} />
    </>
  );
}

export default App;
