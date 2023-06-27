import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import PodcastDetailCard from './index';
import { PodcastDetail } from '../../models/podcastDetail';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn()
}));

describe('PodcastDetailCard component', () => {
  const podcast = new PodcastDetail(
    '123',
    'Example Podcast',
    'https://example.com/podcast-image.jpg',
    'John Doe',
    2,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    []
  );

  it('renders the podcast details correctly', () => {
    const { getByText, getByAltText } = render(<PodcastDetailCard podcast={podcast} />);

    const titleElement = getByText('Example Podcast');
    const authorElement = getByText('by John Doe');
    const descriptionElement = getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    const imageElement = getByAltText('podcast-logo');

    expect(titleElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toBe('https://example.com/podcast-image.jpg');
  });

  it('navigates to the podcast detail page when clicked', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const { getByAltText } = render(<PodcastDetailCard podcast={podcast} />);
    const imageElement = getByAltText('podcast-logo');
    fireEvent.click(imageElement);

    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('/podcast/123');
  });
});
