import { useMemo } from 'react';
import { normalizeStr } from '../helpers/utils';

export const usePodcastFilter = (podcastList, search) => {
  const initializeNormalizedNamesMap = () => {
    const normalizedNamesMap = new Map();
    podcastList.forEach((podcast) => {
      normalizedNamesMap.set(podcast.id, {
        normalizedTitle: normalizeStr(podcast.title),
        normalizedAuthor: normalizeStr(podcast.author)
      });
    });
    return normalizedNamesMap;
  };

  const normalizedNamesMap = useMemo(
    () => initializeNormalizedNamesMap(),
    [podcastList]
  );

  const filterPodcast = () => {
    let productList = [...podcastList];
    if (search !== '' && normalizedNamesMap.size) {
      const token = normalizeStr(search);
      productList = productList.filter((podcast) => normalizedNamesMap.get(podcast.id).normalizedTitle.includes(token)
                || normalizedNamesMap.get(podcast.id).normalizedAuthor.includes(token));
    }
    return productList;
  };

  const filteredPodcastList = useMemo(
    () => filterPodcast(),
    [podcastList, search]
  );

  return { filteredPodcastList };
};
