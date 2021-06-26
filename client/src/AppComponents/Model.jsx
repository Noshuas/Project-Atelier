import React, { createContext, useState } from 'react';
import { clickListener } from './index.js';
import API from '../../../configAPI.js';
import axios from 'axios';

export const AppContext = createContext();

export function useApp() {
  // These are just example state variables, they are not returned
  let light = {
    body: 'white',
    text: 'rgb(82,82,82)'
  };

  let dark = {
    body: 'rgb(13,17,23)',
    text: 'white'
  };

  const [example, setExample] = useState('');
  const [theme, setTheme] = useState(light);

  function toggleTheme () {
    if (theme.body === 'white') {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  }


  return { clickListener, theme, toggleTheme};
}