import React, { createContext, useState, useContext } from 'react';
import { getTodayKST } from '../utils/dateUtils.js';

const DateContext = createContext();

export function DateProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(getTodayKST());
  const value = { selectedDate, setSelectedDate };

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
}

export function useDate() {
  return useContext(DateContext);
}