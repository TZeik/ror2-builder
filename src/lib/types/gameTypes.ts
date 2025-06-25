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
  statistics: Statistics;
}

interface Statistics {
  health: number;
  $health: number;
  healthRegen: number;
  $healthRegen: number;
  damage: number;
  $damage: number;
  speed: number;
  armor: number;
  mass: number;
}

export interface Build {
  survivor: Survivor | null;
  items: {
    [itemId: string]: number; // Cantidad por item
  };
}

export interface BuildItem {
  item: Item;
  count: number;
}
