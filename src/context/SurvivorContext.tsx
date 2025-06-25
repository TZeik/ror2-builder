'use client';
import { SURVIVORS } from "@/data/survivors";
import { Survivor } from "@/lib/types/gameTypes";
import { createContext, useContext, useState } from "react";

const SurvivorContext = createContext<{
  selectedSurvivor: Survivor;
  setSelectedSurvivor: (survivor: Survivor) => void;
}>({
  selectedSurvivor: SURVIVORS.at(0) as Survivor,
  setSelectedSurvivor: () => {},
});

export const SurvivorProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedSurvivor, setSelectedSurvivor] = useState<Survivor>(SURVIVORS.at(0) as Survivor);
  
  return (
    <SurvivorContext.Provider value={{ selectedSurvivor, setSelectedSurvivor }}>
      {children}
    </SurvivorContext.Provider>
  );
};

export const useSurvivor = () => useContext(SurvivorContext);