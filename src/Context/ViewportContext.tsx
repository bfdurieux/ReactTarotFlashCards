import React, { createContext, useState } from "react";

const viewportSize: { height: number; width: number } = { height: 1, width: 2 };
//get from document.window or something
export const viewportContext = createContext(viewportSize);

// This context provider is passed to any component requiring the context
export const ViewportProvider = ({ children }: any) => {
  //   const [name, setName] = useState("William");
  //   const [location, setLocation] = useState("Mars");

  return (
    <viewportContext.Provider value={viewportSize}>
      {children}
    </viewportContext.Provider>
  );
};
