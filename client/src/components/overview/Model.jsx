import React, { createContext, useState } from 'react';

export const OverviewContext = createContext();

export function useOverview() {
  const [example, setExample] = useState('');
  return {example, setExample};
}