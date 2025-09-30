import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Portal from './Portal';

describe('Portal', () => {
  it('renders children into the document body', () => {
    render(<Portal><div>Portal Content</div></Portal>);
    expect(screen.getByText('Portal Content')).toBeInTheDocument();
  });

  it('removes the portal from the document body on unmount', () => {
    const { unmount } = render(<Portal><div>Portal Content</div></Portal>);
    const portalContent = screen.getByText('Portal Content');
    expect(portalContent).toBeInTheDocument();

    unmount();

    expect(screen.queryByText('Portal Content')).not.toBeInTheDocument();
  });
});