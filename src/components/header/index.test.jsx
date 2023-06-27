import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import Header from './index';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn()
}));

describe('Header component', () => {
  it('navigates to the home page on title click', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const { getByText } = render(<Header loading={false} />);
    const titleElement = getByText('Podcaster');

    fireEvent.click(titleElement);

    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('/');
  });

  it('renders loader when loading prop is true', () => {
    const { container } = render(<Header loading />);
    const loaderElement = container.querySelector('.loader');

    expect(loaderElement).toBeInTheDocument();
  });

  it('does not render loader when loading prop is false', () => {
    const { container } = render(<Header loading={false} />);
    const loaderElement = container.querySelector('.loader');

    expect(loaderElement).not.toBeInTheDocument();
  });
});
