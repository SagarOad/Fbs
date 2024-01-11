// DropdownContext.js
import React, { createContext, useState } from 'react';

const DropdownContext = createContext();

const DropdownProvider = ({ children }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <DropdownContext.Provider value={{ isDropdownOpen, toggleDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
};

export { DropdownProvider, DropdownContext };
