'use client';

import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

export default function HTML({ children }) {
  const { currentMode } = useContext(ThemeContext);
  return (
    <html lang="en" className={currentMode}>
      {children}
    </html>
  );
}
