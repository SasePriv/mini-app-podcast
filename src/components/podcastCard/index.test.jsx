import { render } from '@testing-library/react';
import PodcastCard from './index';
import { Podcast } from '../../models/podcast';

describe('PodcastCard component', () => {
  it('renders the podcast details correctly', () => {
    const podcast = new Podcast(
      '123',
      'Example Podcast',
      'https://example.com/podcast-image.jpg',
      'John Doe'
    );

    const { getByText, getByAltText } = render(<PodcastCard podcast={podcast} />);

    const titleElement = getByText('Example Podcast');
    const authorElement = getByText('Author: John Doe');
    const imageElement = getByAltText('podcast-logo');

    expect(titleElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toBe('https://example.com/podcast-image.jpg');
  });
});
