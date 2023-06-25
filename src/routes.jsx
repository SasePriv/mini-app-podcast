import { createBrowserRouter } from 'react-router-dom';
import PodcastList from './views/podcastList';

const router = (setLoading) => createBrowserRouter([
  {
    path: '/',
    element: <PodcastList setLoading={setLoading} />
  }
]);

export default router;
