'use client'
import { IItemType } from "@/types/AllTypes";
import React, { createContext, ReactNode, SetStateAction, useState } from "react";


interface IItemsContextType {
  todaysPlan: IItemType[];
  setTodaysPlan: React.Dispatch<SetStateAction<IItemType[]>>;
  saved: IItemType[];
  setSaved: React.Dispatch<SetStateAction<IItemType[]>>
}

export const ItemsContext = createContext<IItemsContextType>({
  todaysPlan: [],
  setTodaysPlan: () => { },
  saved: [],
  setSaved: () => { }
});

const ItemsProvider = ({children}:{children:ReactNode}) => {
  const [todaysPlan, setTodaysPlan] = useState<IItemType[]>([]);
  const [saved, setSaved] = useState<IItemType[]>([]);

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