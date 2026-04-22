import { RootStore } from "@/stores/RootStore";
import React, { createContext } from "react";
// import { RootStore } from "../stores/RootStore";



const rootStore = new RootStore();

export const StoreContext = createContext<RootStore>(rootStore);

interface StoreProviderProps {
    children: React.ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  return (
    <StoreContext.Provider value={rootStore}>
      {children}
    </StoreContext.Provider>
  );
}

// export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return (
//     <StoreContext.Provider value={rootStore}>
//       {children}
//     </StoreContext.Provider>
//   );

 
// };
