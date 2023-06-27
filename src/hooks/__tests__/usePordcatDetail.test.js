import { renderHook, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { usePodcastDetail } from '../usePodcastDetail';
import { PodcastDetail } from '../../models/podcastDetail';
import { CacheFetchController } from '../../helpers/cacheFetchController';
import { PodcastEpisode } from '../../models/podcastEpisode';

jest.mock('../../helpers/cacheFetchController', () => ({
  CacheFetchController: jest.fn().mockImplementation(() => ({
    fetchCache: jest.fn(),
  })),
}));

describe('usePodcastDetail', () => {
  it('returns the podcastDetail when successfully fetched', async () => {
    const podcastId = '1';
    const setLoading = jest.fn();

    const podcastData = {
      results: [
        {
          trackId: '1',
          collectionName: 'Podcast Title',
          artworkUrl600: 'https://example.com/podcast.jpg',
          artistName: 'Podcast Author',
          feedUrl: 'https://example.com/podcast.xml',
          trackCount: 1
        },
      ],
    };

    const feedUrlXml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <description>Podcast description</description>
        <item>
          <title>Episode 1</title>
          <itunes:duration>00:30:00</itunes:duration>
          <pubDate>2023-06-01</pubDate>
          <description>Episode 1 description</description>
          <enclosure url="https://example.com/episode1.mp3" />
        </item>
        <item>
          <title>Episode 2</title>
          <itunes:duration>00:30:00</itunes:duration>
          <pubDate>2023-06-01</pubDate>
          <description>Episode 1 description</description>
          <enclosure url="https://example.com/episode1.mp3" />
        </item>
      </channel>
    </rss>`;

    const episode1 = new PodcastEpisode(0, 'Episode 1', '00:30:00', '2023-06-01', 'Episode 1 description', 'https://example.com/episode1.mp3');
    const episode2 = new PodcastEpisode(1, 'Episode 2', '00:30:00', '2023-06-01', 'Episode 1 description', 'https://example.com/episode1.mp3');

    const expectedPodcastDetail = new PodcastDetail(
      '1',
      'Podcast Title',
      'https://example.com/podcast.jpg',
      'Podcast Author',
      1,
      'Podcast description',
      [
        episode1,
        episode2
      ]
    );

    const fetchCacheMock = jest.fn();
    fetchCacheMock
      .mockResolvedValueOnce(podcastData)
      .mockResolvedValueOnce(feedUrlXml);

    CacheFetchController.mockImplementation(() => ({
      fetchCache: fetchCacheMock,
    }));

    let data;
    await act(async () => {
      data = renderHook(() => usePodcastDetail({ podcastId, setLoading }));
    });

    expect(data.result.current.podcastDetail).toEqual(expectedPodcastDetail);

    await waitFor(() => {
      expect(fetchCacheMock).toHaveBeenCalledWith(
        `podcastDetail_${podcastId}`,
        `https://cors-anywhere.herokuapp.com/${`https://itunes.apple.com/lookup?id=${podcastId}`}`
      );
      expect(fetchCacheMock).toHaveBeenCalledWith(
        `feedUrl_${podcastId}`,
        `https://cors-anywhere.herokuapp.com/${podcastData.results[0].feedUrl}`,
        'text'
      );
    });

    expect(setLoading).toHaveBeenCalledWith(false);
  });
});
