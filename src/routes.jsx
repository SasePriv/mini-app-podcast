import { createBrowserRouter } from 'react-router-dom';
import PodcastList from './views/podcastList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PodcastList />
  }
]);

export default router;
