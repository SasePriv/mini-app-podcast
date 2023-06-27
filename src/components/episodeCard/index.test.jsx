import { render } from '@testing-library/react';
import EpisodeCard from './index';
import { PodcastEpisode } from '../../models/podcastEpisode';

describe('EpisodeCard', () => {
  const mockEpisode = new PodcastEpisode(
    1,
    'Episode Title',
    1800,
    '2023-06-27',
    '<p>Episode Description</p>',
    'https://example.com/episode.mp3'
  );

  it('renders episode card with correct data', () => {
    const { getByText, getByTestId } = render(<EpisodeCard episode={mockEpisode} />);

    const titleElement = getByText('Episode Title');
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = getByText('Episode Description');
    expect(descriptionElement).toBeInTheDocument();

    const audioElement = getByTestId('episode-audio');
    expect(audioElement.querySelector('source').getAttribute('src')).toBe('https://example.com/episode.mp3');
    expect(audioElement.querySelector('source').getAttribute('type')).toBe('audio/mpeg');
  });
});
