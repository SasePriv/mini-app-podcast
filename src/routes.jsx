import { createBrowserRouter } from 'react-router-dom';
import PodcastList from './views/podcastList';
import PodcastDetail from './views/podcastDetail';
import EpisodesList from './views/episodesList';
import Episode from './views/episode';

const router = (setLoading) => createBrowserRouter([
  {
    path: '/',
    element: <PodcastList setLoading={setLoading} />
  },
  {
    path: 'podcast',
    element: <PodcastDetail setLoading={setLoading} />,
    children: [
      {
        path: ':podcastId',
        element: <EpisodesList />
      },
      {
        path: ':podcastId/episode/:episodeId',
        element: <Episode />
      }
    ]
  }
]);

export default router;
