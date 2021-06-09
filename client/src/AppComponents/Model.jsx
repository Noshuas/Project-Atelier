import React, { createContext, useState } from 'react';
import { clickListener } from './index.js';
import API from '../configAPI.js';
import axios from 'axios';

export const AppContext = createContext();

export function useApp() {
  // There are just example state variables, they are not returned.
  const [example, setExample] = useState('');

  return {clickListener};
}