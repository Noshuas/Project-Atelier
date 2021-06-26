import React, { createContext, useState } from 'react';

export const RelatedContext = createContext();

export function useRelated() {
  const [example, setExample] = useState('');
  return {example, setExample};
}