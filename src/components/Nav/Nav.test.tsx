import { render, screen } from '@/config/test-utils';
import { Nav } from './Nav';

describe('Logo', () => {
  it('links to home page', () => {
    render(<Nav />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
