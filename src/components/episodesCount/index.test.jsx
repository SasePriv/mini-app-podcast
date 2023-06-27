import { render } from '@testing-library/react';
import EpisodesCount from './index';

describe('EpisodesCount', () => {
  it('renders episodes count correctly', () => {
    const count = 10;
    const { getByText } = render(<EpisodesCount count={count} />);

    const countElement = getByText(`Episodes: ${count}`);
    expect(countElement).toBeInTheDocument();
  });
});
