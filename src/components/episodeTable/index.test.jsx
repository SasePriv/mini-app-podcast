import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import EpisodeTable from './index';
import { PodcastEpisode } from '../../models/podcastEpisode';
import { formatDate } from '../../helpers/utils';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn()
}));

describe('EpisodeTable', () => {
  it('renders episode table correctly', () => {
    const mockEpisodeList = [
      new PodcastEpisode(1, 'Episode 1', 1800, '2023-06-27T12:00:00Z', 'Episode 1 description', 'https://example.com/episode1.mp3'),
      new PodcastEpisode(2, 'Episode 2', 2400, '2023-06-28T12:00:00Z', 'Episode 2 description', 'https://example.com/episode2.mp3')
    ];
    const podcastId = '123';

    const { getByText } = render(<EpisodeTable podcastEpisodeList={mockEpisodeList} podcastId={podcastId} />);

    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText('Date')).toBeInTheDocument();
    expect(getByText('Duration')).toBeInTheDocument();

    mockEpisodeList.forEach((episode) => {
      const titleElement = getByText(episode.title.trim());
      expect(titleElement).toBeInTheDocument();

      const dateElement = getByText(formatDate(new Date(episode.releaseDate)));
      expect(dateElement).toBeInTheDocument();

      const durationElement = getByText(episode.duration.toString());
      expect(durationElement).toBeInTheDocument();
    });
  });

  it('navigates to the episode details on row click', () => {
    const mockEpisodeList = [
      new PodcastEpisode(1, 'Episode 1', 1800, '2023-06-27T12:00:00Z', 'Episode 1 description', 'https://example.com/episode1.mp3')
    ];
    const podcastId = '123';
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const { container } = render(<EpisodeTable
      podcastEpisodeList={mockEpisodeList}
      podcastId={podcastId}
    />);
    const tbodyElement = container.querySelector('.table-card table tbody');
    const rowElement = tbodyElement.querySelector('tr');

    fireEvent.click(rowElement);

    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('/podcast/123/episode/1');
  });
});
