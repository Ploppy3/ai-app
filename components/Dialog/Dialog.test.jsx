import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Dialog from './Dialog';

describe('Dialog', () => {
  it('does not render when isOpen is false', () => {
    render(<Dialog isOpen={false} onClose={() => {}}>Test</Dialog>);
    expect(screen.queryByText('Test')).not.toBeInTheDocument();
  });

  it('renders when isOpen is true', () => {
    render(<Dialog isOpen={true} onClose={() => {}}>Test</Dialog>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', () => {
    const handleClose = vi.fn();
    render(<Dialog isOpen={true} onClose={handleClose}>Test</Dialog>);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('renders children correctly', () => {
    render(<Dialog isOpen={true} onClose={() => {}}><h2>Dialog Title</h2><p>Dialog content</p></Dialog>);
    expect(screen.getByText('Dialog Title')).toBeInTheDocument();
    expect(screen.getByText('Dialog content')).toBeInTheDocument();
  });
});