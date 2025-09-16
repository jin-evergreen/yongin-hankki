import React, { createContext, useState, useContext } from "react";
import { getTodayKST } from "../utils/dateUtils.js";

const SelectionContext = createContext();

export function SelectionProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(getTodayKST());
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const value = {
    selectedDate,
    setSelectedDate,
    selectedRestaurant,
    setSelectedRestaurant,
  };

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
}

export function useSelection() {
  return useContext(SelectionContext);
}
