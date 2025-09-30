import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from './Button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-gray-600');
    expect(button).toHaveClass('h-[40px] px-[13px]');
  });

  it('renders with primary colorPalette', () => {
    render(<Button colorPalette="primary">Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('bg-primary-600');
  });

  it('renders with outline variant', () => {
    render(<Button variant="outline">Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('bg-transparent border border-gray-600');
  });

    it('renders with primary colorPalette and outline variant', () => {
    render(<Button colorPalette="primary" variant="outline">Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('bg-transparent border border-primary-600 text-primary-600');
  });

  it('renders with a different size', () => {
    render(<Button size="lg">Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('h-[50px] px-[17px]');
  });

  it('applies additional className', () => {
    render(<Button className="extra-class">Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('extra-class');
  });

  it('renders children correctly', () => {
    render(<Button><span>Inner Span</span></Button>);
    expect(screen.getByText('Inner Span')).toBeInTheDocument();
  });
});