import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import Header from './components/header';
import router from './routes';

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="app">
      <Header loading={loading} />
      <RouterProvider router={router(setLoading)} />
    </div>
  );
}

export default App;
