import { render, fireEvent } from '@testing-library/react';
import PodcastFilter from './index';

describe('PodcastFilter component', () => {
  it('renders the count and input field correctly', () => {
    const count = 10;
    const onChangeSearch = jest.fn();

    const { getByText, getByPlaceholderText } = render(
      <PodcastFilter count={count} onChangeSearch={onChangeSearch} />
    );

    const countElement = getByText('10');
    const inputElement = getByPlaceholderText('Filter podcasts...');

    expect(countElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it('triggers onChangeSearch callback when input value changes', () => {
    const count = 10;
    const onChangeSearch = jest.fn();

    const { getByPlaceholderText } = render(
      <PodcastFilter count={count} onChangeSearch={onChangeSearch} />
    );

    const inputElement = getByPlaceholderText('Filter podcasts...');
    fireEvent.change(inputElement, { target: { value: 'search term' } });

    expect(onChangeSearch).toHaveBeenCalledTimes(1);
    expect(onChangeSearch).toHaveBeenCalledWith('search term');
  });
});
