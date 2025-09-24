function Button({ children, colorPalette = 'primary' }) {
  const paletteClass = `bg-${colorPalette}-600`;

  return (
    <button className={`cursor-pointer ${paletteClass} text-white`}>
      {children}
    </button>
  );
}

export default Button;
