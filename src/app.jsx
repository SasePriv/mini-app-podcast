import { useState } from 'react';
import {
  RouterProvider, Routes, BrowserRouter, Route
} from 'react-router-dom';
import Header from './components/header';
import router from './routes';
import PodcastList from './views/podcastList';
import PodcastDetail from './views/podcastDetail';
import EpisodesList from './views/episodesList';
import Episode from './views/episode';

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="app">
      <BrowserRouter>
        <Header loading={loading} />
        <Routes>
          <Route path="/" element={<PodcastList setLoading={setLoading} />} />
          <Route path="podcast" element={<PodcastDetail setLoading={setLoading} />}>
            <Route path=":podcastId" element={<EpisodesList />} />
            <Route path=":podcastId/episode/:episodeId" element={<Episode />} />
          </Route>
          {/* <RouterProvider router={router(setLoading)} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
