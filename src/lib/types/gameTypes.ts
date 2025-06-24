export type Rarity = 
  'common' | 'uncommon' | 'legendary' | 
  'boss' | 'void' | 'lunar' | 'equipment' | 
  'lunarEquipment' | 'eliteEquipment';

export interface Item {
  id: string;
  name: string;
  imageUrl: string;
  rarity: Rarity;
  category: string;
  description: string;
  wikiUrl: string;
}

export interface Survivor {
  id: string;
  name: string;
  iconUrl: string;
  description: string;
  wikiUrl: string;
}

export interface Build {
  survivor: Survivor | null;
  items: {
    [itemId: string]: number; // Cantidad por item
  };
}