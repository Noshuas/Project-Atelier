import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function useApp() {
  const [example, setExample] = useState('');
  return {example, setExample};
}