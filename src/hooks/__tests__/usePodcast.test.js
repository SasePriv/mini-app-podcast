import { renderHook, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { usePodcasts } from '../usePodcasts';
import { CacheFetchController } from '../../helpers/cacheFetchController';
import { Podcast } from '../../models/podcast';

jest.mock('../../helpers/cacheFetchController', () => ({
  CacheFetchController: jest.fn().mockImplementation(() => ({
    fetchCache: jest.fn(),
  })),
}));

describe('usePodcast', () => {
  it('returns the podcastList when successfully fetched', async () => {
    const setLoading = jest.fn();

    const mockPodcastData = {
      feed: {
        entry: [
          {
            id: { attributes: { 'im:id': '1' } },
            title: { label: 'Podcast 1' },
            'im:image': [{ label: 'image1.jpg' }],
            'im:artist': { label: 'Author 1' },
          },
          {
            id: { attributes: { 'im:id': '2' } },
            title: { label: 'Podcast 2' },
            'im:image': [{ label: 'image2.jpg' }],
            'im:artist': { label: 'Author 2' },
          }
        ],
      }
    };

    const expectedPodcast = [new Podcast(
      '1',
      'Podcast 1',
      'image1.jpg',
      'Author 1',
    ), new Podcast(
      '2',
      'Podcast 2',
      'image2.jpg',
      'Author 2',
    )];

    const fetchCacheMock = jest.fn();
    fetchCacheMock.mockResolvedValue(mockPodcastData);

    CacheFetchController.mockImplementation(() => ({
      fetchCache: fetchCacheMock,
    }));

    let data;
    await act(async () => {
      data = renderHook(() => usePodcasts(setLoading));
    });

    expect(data.result.current.podcasts).toEqual(expectedPodcast);

    await waitFor(() => {
      expect(fetchCacheMock).toHaveBeenCalledWith(
        'podcastList',
        `https://cors-anywhere.herokuapp.com/${'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'}`
      );
    });

    expect(setLoading).toHaveBeenCalledWith(false);
  });
});
