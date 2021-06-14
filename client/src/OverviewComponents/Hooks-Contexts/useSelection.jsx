import React, { useState, useEffect, createContext } from 'react';

export const SelectionContext = createContext();

export function useSelection() {
  const [userSizeAndQuantSelect, setUserSizeAndQuantSelect] = useState({});
  const [cartErrorDisplayClass, setCartErrorDisplayClass] = useState('hide-atc-err');

  return {
    userSizeAndQuantSelect, setUserSizeAndQuantSelect,
    cartErrorDisplayClass, setCartErrorDisplayClass
  };
}