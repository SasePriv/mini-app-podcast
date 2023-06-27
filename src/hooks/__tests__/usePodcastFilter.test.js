import { renderHook } from '@testing-library/react';
import { usePodcastFilter } from '../usePodcastFilter';

describe('usePodcastFilter', () => {
  const podcastList = [
    { id: 1, title: 'Podcast 1', author: 'Author 1' },
    { id: 2, title: 'Podcast 2', author: 'Author 2' },
    { id: 3, title: 'Podcast 3', author: 'Author 1' },
  ];

  it('returns the filtered podcast list based on the search term', () => {
    const searchTerm = 'Podcast 1';

    const { result } = renderHook(() => usePodcastFilter(podcastList, searchTerm));

    expect(result.current.filteredPodcastList).toEqual([
      { id: 1, title: 'Podcast 1', author: 'Author 1' },
    ]);
  });

  it('returns the original podcast list when search term is empty', () => {
    const searchTerm = '';

    const { result } = renderHook(() => usePodcastFilter(podcastList, searchTerm));

    expect(result.current.filteredPodcastList).toEqual(podcastList);
  });

  it('returns an empty array when no podcasts match the search term', () => {
    const searchTerm = 'Non-existent';

    const { result } = renderHook(() => usePodcastFilter(podcastList, searchTerm));

    expect(result.current.filteredPodcastList).toEqual([]);
  });
});
