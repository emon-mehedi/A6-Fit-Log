import { IItemType } from "@/types/AllTypes";
import { createContext, ReactNode, SetStateAction, useState } from "react";

import React from 'react';

interface IItemsContextType {
  todaysPlan: [];
  setTodaysPlan: React.Dispatch<SetStateAction<IItemType[]>>;
  saved: [];
  setSaved: React.Dispatch<SetStateAction<IItemType[]>>
}

export const ItemsContext = createContext<IItemsContextType>({
  todaysPlan: [],
  setTodaysPlan: () => { },
  saved: [],
  setSaved: () => { }
});

const ItemsProvider = ({children}:{children:ReactNode}) => {
  const [todaysPlan, setTodaysPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  const sharedData: IItemsContextType = {
    todaysPlan, setTodaysPlan, saved, setSaved
  }
  
  return (
    <ItemsContext.Provider value={sharedData}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;