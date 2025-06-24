import { Item } from "@/lib/types/gameTypes";

export const ITEMS: Item[] = [
  // Common Items
  {
    id: "piercing-rounds",
    name: "Armor-Piercing Rounds",
    imageUrl: "/items/common/piercing-rounds.png",
    rarity: "common",
    category: "Damage (Linear)",
    description: "Deal an additional 20% damage (+20% per stack) to bosses.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Armor-Piercing_Rounds",
  },
  {
    id: "magazine",
    name: "Backup Magazine",
    imageUrl: "/items/common/magazine.png",
    rarity: "common",
    category: "Utility (Linear)",
    description: "Add +1 (+1 per stack) charge of your Secondary skill.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Backup_Magazine",
  },
  {
    id: "steak",
    name: "Bison Steak",
    imageUrl: "/items/common/steak.png",
    rarity: "common",
    category: "Health (Linear)",
    description: "Increases maximum health by 25 (+25 per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Bison_Steak",
  },
  {
    id: "lantern",
    name: "Bolstering Lantern",
    imageUrl: "/items/common/lantern.png",
    rarity: "common",
    category: "Utility (Linear)",
    description:
      "Increase your attack speed by 10% (+3.5% per stack) for up to 3 (+1 per stack) enemies and allies within 20 meters.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Bolstering_Lantern",
  },
  {
    id: "fireworks",
    name: "Bundle of Fireworks",
    imageUrl: "/items/common/fireworks.png",
    rarity: "common",
    category: "Damage (Linear)",
    description:
      "Activating an interactable launches 8 (+4 per stack) fireworks that deal 300% base damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Bundle_of_Fireworks",
  },
  {
    id: "fungus",
    name: "Bustling Fungus",
    imageUrl: "/items/common/fungus.png",
    rarity: "common",
    category: "Healing (Linear)",
    description:
      "After standing still for 1 second, create a zone that heals for 4.5% (+2.25% per stack) of health every second to allies within 3m (+1.5m per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Bustling_Fungus",
  },
  {
    id: "slug",
    name: "Cautious Slug",
    imageUrl: "/items/common/slug.png",
    rarity: "common",
    category: "Healing (Linear)",
    description:
      "Increases base health regeneration by +3 hp/s (+3 hp/s per stack) while outside of combat.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Cautious_Slug",
  },
  {
    id: "expansion",
    name: "Chronic Expansion",
    imageUrl: "/items/common/expansion.png",
    rarity: "common",
    category: "Damage (Linear)",
    description:
      "Killing an enemy increase your damage by 3.5 (+1% per stack), up to 10 (+5 per stack), for 7s. Dealing damage refreshes the timer.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Chronic_Expansion",
  },
  {
    id: "crowbar",
    name: "Crowbar",
    imageUrl: "/items/common/crowbar.png",
    rarity: "common",
    category: "Damage (Linear)",
    description:
      "Deal +75% (+75% per stack) damage to enemies above 90% health.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Crowbar",
  },
  {
    id: "watch",
    name: "Delicate Watch",
    imageUrl: "/items/common/watch.png",
    rarity: "common",
    category: "Damage (Linear)",
    description:
      "Increase damage by 20% (+20% per stack). Taking damage to below 25% health breaks this item.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Delicate_Watch",
  },
  {
    id: "antlers",
    name: "Elusive Antlers",
    imageUrl: "/items/common/antlers.png",
    rarity: "common",
    category: "Utility (Mixed)",
    description:
      "Spawns orbs of energy nearby every 10s (-10% per stack [Hyperbolic]), giving +12% movement speed up to 3 (+3 per stack [Linear]) times for 12s.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Elusive_Antlers",
  },
  {
    id: "drink",
    name: "Energy Drink",
    imageUrl: "/items/common/drink.png",
    rarity: "common",
    category: "Utility (Linear)",
    description: "Sprint speed is improved by 25% (+25% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Energy_Drink",
  },
  {
    id: "crystal",
    name: "Focus Crystal",
    imageUrl: "/items/common/crystal.png",
    rarity: "common",
    category: "Damage (Linear)",
    description:
      "Increase damage to enemies within 13m by 20% (+20% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Focus_Crystal",
  },
  {
    id: "gasoline",
    name: "Gasoline",
    imageUrl: "/items/common/gasoline.png",
    rarity: "common",
    category: "Damage (Linear)",
    description:
      "Killing an enemy ignites all enemies within 12m (+4m per stack). Enemies burn for 150% (+75% per stack) base damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Gasoline",
  },
  {
    id: "scrapw",
    name: "Item Scrap, White",
    imageUrl: "/items/common/scrapw.png",
    rarity: "common",
    category: "Utility",
    description: "Does nothing. Prioritized when used with 3D Printers.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Item_Scrap,_White",
  },
  {
    id: "glasses",
    name: "Lens-Maker's Glasses",
    imageUrl: "/items/common/glasses.png",
    rarity: "common",
    category: "Damage (Linear)",
    description:
      "Attacks have 10% (+10% per stack) chance to Critically Strike, dealing double damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Lens-Maker%27s_Glasses",
  },
  {
    id: "medkit",
    name: "Medkit",
    imageUrl: "/items/common/medkit.png",
    rarity: "common",
    category: "Healing (Linear)",
    description:
      "2 seconds after getting hurt, heal for 20 plus an additional 5% (+5% per stack) of maximum health.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Medkit",
  },
  {
    id: "mocha",
    name: "Mocha",
    imageUrl: "/items/common/mocha.png",
    rarity: "common",
    category: "Utility (Linear)",
    description:
      "Increases attack speed by 7.5% (+7.5% per stack) and movement speed by 7% (+7% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Mocha",
  },
  {
    id: "monster-tooth",
    name: "Monster Tooth",
    imageUrl: "/items/common/monster-tooth.png",
    rarity: "common",
    category: "Healing (Linear)",
    description:
      "Killing an enemy spawns a healing orb that heals for 8 plus 2% (+2% per stack) of maximum health.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Monster_Tooth",
  },
  {
    id: "shaped-opal",
    name: "Oddly-shaped Opal",
    imageUrl: "/items/common/shaped-opal.png",
    rarity: "common",
    category: "Defense (Linear)",
    description: "Increase armor by 100 (+100 per stack) while out of danger.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Oddly-shaped_Opal",
  },
  {
    id: "goat-hoof",
    name: "Paul's Goat Hoof",
    imageUrl: "/items/common/goat-hoof.png",
    rarity: "common",
    category: "Utility (Linear)",
    description: "Increases movement speed by 14% (+14% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Paul%27s_Goat_Hoof",
  },
  {
    id: "shield-generator",
    name: "Personal Shield Generator",
    imageUrl: "/items/common/shield-generator.png",
    rarity: "common",
    category: "Defense (Linear)",
    description:
      "Gain a shield equal to 8% (+8% per stack) of your maximum health. Recharges outside of danger.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Personal_Shield_Generator",
  },
  {
    id: "elixir",
    name: "Power Elixir",
    imageUrl: "/items/common/elixir.png",
    rarity: "common",
    category: "Healing",
    description:
      "Taking damage to below 25% health consumes this item, healing you for 75% of maximum health.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Power_Elixir",
  },
  {
    id: "armor-plate",
    name: "Repulsion Armor Plate",
    imageUrl: "/items/common/armor-plate.png",
    rarity: "common",
    category: "Defense (Linear)",
    description:
      "Reduce all incoming damage by 5 (+5 per stack). Cannot be reduced below 1.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Repulsion_Armor_Plate",
  },
  {
    id: "roll-pennies",
    name: "Roll of Pennies",
    imageUrl: "/items/common/roll-pennies.png",
    rarity: "common",
    category: "Utility (Linear)",
    description:
      "Gain 3 (+3 per stack) gold on taking damage from an enemy. Scales over time.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Roll_of_Pennies",
  },

  {
    id: "rusted-key",
    name: "Rusted Key",
    imageUrl: "/items/common/rusted-key.png",
    rarity: "common",
    category: "Utility",
    description:
      "A hidden cache containing an item (80%/20%) will appear in a random location on each stage. Opening the cache consumes this item.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Rusted_Key",
  },
  {
    id: "syringe",
    name: "Soldier's Syringe",
    imageUrl: "/items/common/syringe.png",
    rarity: "common",
    category: "Damage (Linear)",
    description: "Increases attack speed by 15% (+15% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Soldier%27s_Syringe",
  },
  {
    id: "sticky-bomb",
    name: "Sticky Bomb",
    imageUrl: "/items/common/sticky-bomb.png",
    rarity: "common",
    category: "Damage (Linear)",
    description:
      "5% (+5% per stack) chance on hit to attach a bomb to an enemy, detonating for 180% TOTAL damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Sticky_Bomb",
  },
  {
    id: "stun-grenade",
    name: "Stun Grenade",
    imageUrl: "/items/common/stun-grenade.png",
    rarity: "common",
    category: "Utility (Hyperbolic)",
    description:
      "5% (+5% on stack) chance on hit to stun enemies for 2 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Stun_Grenade",
  },
  {
    id: "topaz-brooch",
    name: "Topaz Brooch",
    imageUrl: "/items/common/topaz-brooch.png",
    rarity: "common",
    category: "Defense (Linear)",
    description:
      "Gain a temporary barrier on kill for 15 health (+15 per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Topaz_Brooch",
  },
  {
    id: "teddy",
    name: "Tougher Times",
    imageUrl: "/items/common/teddy.png",
    rarity: "common",
    category: "Defense (Hyperbolic)",
    description:
      "15% (+15% per stack) chance to block incoming damage. Unaffected by luck.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Tougher_Times",
  },
  {
    id: "tri-tip",
    name: "Tri-Tip Dagger",
    imageUrl: "/items/common/tri-tip.png",
    rarity: "common",
    category: "Damage (Linear)",
    description:
      "10% (+10% per stack) chance to bleed an enemy for 240% base damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Tri-Tip_Dagger",
  },
  {
    id: "warbanner",
    name: "Warbanner",
    imageUrl: "/items/common/warbanner.png",
    rarity: "common",
    category: "Utility (Linear)",
    description:
      "On level up or starting Teleporter event, drop a banner that strengthens all allies within 16m (+8m per stack). Raise attack and movement speed by 30%.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Warbanner",
  },
  {
    id: "warped-echo",
    name: "Warped Echo",
    imageUrl: "/items/common/warped-echo.png",
    rarity: "common",
    category: "Defense (Linear)",
    description:
      "The next source of damage is reduced by 20% and spread into 3 (+1 per stack) hits. All echoed damage is non-lethal except for the final hit. Recharges every 15s.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Warped_Echo",
  },

  // Uncommon Items
  {
    id: "missile",
    name: "AtG Missile Mk. 1",
    imageUrl: "/items/uncommon/missile.png",
    rarity: "uncommon",
    category: "Damage",
    description:
      "10% chance to fire a missile that deals 300% (+300% per stack) TOTAL damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/AtG_Missile_Mk._1",
  },
  {
    id: "bandolier",
    name: "Bandolier",
    imageUrl: "/items/uncommon/bandolier.png",
    rarity: "uncommon",
    category: "Utility",
    description:
      "18% (+10% per stack) chance on kill to drop an ammo pack that resets all skill cooldowns.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Bandolier",
  },
  {
    id: "berzerker-pauldron",
    name: "Berzerker's Pauldron",
    imageUrl: "/items/uncommon/berzerker-pauldron.png",
    rarity: "uncommon",
    category: "Damage",
    description:
      "Killing 4 enemies within 1 second sends you into a frenzy for 6s (+4s per stack). Increases movement speed by 50% and attack speed by 100%.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Berzerker%27s_Pauldron",
  },
  {
    id: "breaching-fin",
    name: "Breaching Fin",
    imageUrl: "/items/common/breaching-fin.png",
    rarity: "uncommon",
    category: "Utility",
    description:
      "Grounded enemies hit with any skill are launched and stunned. Enemies hit while airborne are launched again up to 2 times (+1 per stack). Launched enemies take increased damage by 10% from all sources per launch. Recharges after 15s.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Breaching_Fin",
  },
  {
    id: "chance-doll",
    name: "Chance Doll",
    imageUrl: "/items/uncommon/chance-doll.png",
    rarity: "uncommon",
    category: "Utility",
    description:
      "On Shrine of Chance success, 40% (+10% per stack) chance to get higher rarity items.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Chance_Doll",
  },
  {
    id: "chronobauble",
    name: "Chronobauble",
    imageUrl: "/items/uncommon/chronobauble.png",
    rarity: "uncommon",
    category: "Utility",
    description:
      "Slow enemies on hit for -60% movement speed for 2s (+2s per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Chronobauble",
  },
  {
    id: "death-mark",
    name: "Death Mark",
    imageUrl: "/items/uncommon/death-mark.png",
    rarity: "uncommon",
    category: "Damage",
    description:
      "Enemies with 4 or more debuffs are marked for death, increasing damage taken by 50% from all sources for 7 (+7 per stack) seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Death_Mark",
  },
  {
    id: "fuel-cell",
    name: "Fuel Cell",
    imageUrl: "/items/uncommon/fuel-cell.png",
    rarity: "uncommon",
    category: "Utility",
    description:
      "Hold an additional equipment charge (+1 per stack). Reduce equipment cooldown by 15% (+15% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Fuel_Cell",
  },
  {
    id: "ghor-tome",
    name: "Ghor's Tome",
    imageUrl: "/items/uncommon/ghor-tome.png",
    rarity: "uncommon",
    category: "Utility",
    description: "25% (+4% per stack) chance on kill to drop bonus gold.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Ghor%27s_Tome",
  },
  {
    id: "harvester-scythe",
    name: "Harvester's Scythe",
    imageUrl: "/items/uncommon/harvester-scythe.png",
    rarity: "uncommon",
    category: "Healing",
    description:
      "Gain +5% critical chance. Critical hits heal for 8 (+4 per stack) health.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Harvester%27s_Scythe",
  },
  {
    id: "hopoo-feather",
    name: "Hopoo Feather",
    imageUrl: "/items/uncommon/hopoo-feather.png",
    rarity: "uncommon",
    category: "Utility",
    description: "Gain +1 (+1 per stack) maximum jump count.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Hopoo_Feather",
  },
  {
    id: "hunter-harpoon",
    name: "Hunter's Harpoon",
    imageUrl: "/items/uncommon/hunter-harpoon.png",
    rarity: "uncommon",
    category: "Utility",
    description:
      "Killing an enemy increases movement speed by 125% for 1s (+1s per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Hunter%27s_Harpoon",
  },
  {
    id: "ignition-tank",
    name: "Ignition Tank",
    imageUrl: "/items/uncommon/ignition-tank.png",
    rarity: "uncommon",
    category: "Damage",
    description: "Your ignite effects deal +300% (+300% per stack) damage",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Ignition_Tank",
  },
  {
    id: "infusion",
    name: "Infusion",
    imageUrl: "/items/uncommon/infusion.png",
    rarity: "uncommon",
    category: "Healing",
    description:
      "Killing an enemy permanently increases your maximum health by 1 (+2 per stack), up to a maximum of 100 (+100 per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Infusion",
  },
  {
    id: "scrapg",
    name: "Item Scrap, Green",
    imageUrl: "/items/uncommon/scrapg.png",
    rarity: "uncommon",
    category: "WorldUnique Scrap",
    description:
      "Does nothing. Prioritized when used with 3D Printers, Scrapper, or Cleansers.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Item_Scrap,_Green",
  },
  {
    id: "kjaro-band",
    name: "Kjaro's Band",
    imageUrl: "/items/uncommon/kjaro-band.png",
    rarity: "uncommon",
    category: "Damage",
    description:
      "Hits that deal more than 400% damage also create a fiery blast that deals 300% (+300% per stack) TOTAL damage. Recharges every 10 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Kjaro%27s_Band",
  },
  {
    id: "leeching-seed",
    name: "Leeching Seed",
    imageUrl: "/items/uncommon/leeching-seed.png",
    rarity: "uncommon",
    category: "Healing",
    description: "Dealing damage heals you for 1 (+1 per stack) health.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Leeching_Seed",
  },
  {
    id: "lepton-daisy",
    name: "Lepton Daisy",
    imageUrl: "/items/uncommon/lepton-daisy.png",
    rarity: "uncommon",
    category: "Healing",
    description:
      "During Teleporter events, release a nova a of healing periodically that heals all nearby allies for 50% of their maximum health. Occurs 1 (+1 per stack) times.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Lepton_Daisy",
  },
  {
    id: "luminous-shot",
    name: "Luminous Shot",
    imageUrl: "/items/uncommon/luminous-shot.png",
    rarity: "uncommon",
    category: "Damage",
    description:
      "Activating Secondary skill stores up to 5 charges (+1 per stack). Requires 3 charges for your Primary skill to fire lightning strikes, dealing 175% TOTAL damage (+50% per stack) each. Reduces Secondary skill cooldown by 20%.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Luminous_Shot",
  },
  {
    id: "noxious-thorn",
    name: "Noxious Thorn",
    imageUrl: "/items/uncommon/noxious-thorn.png",
    rarity: "uncommon",
    category: "Damage",
    description:
      "Gain 10% chance to bleed an enemy. On killing an enemy, transfer 33% of every debuff stack to 1 enemy (+1 per stack) within 20m (+5m per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Noxious_Thorn",
  },
  {
    id: "old-guillotine",
    name: "Old Guillotine",
    imageUrl: "/items/uncommon/old-guillotine.png",
    rarity: "uncommon",
    category: "Damage",
    description:
      "Instantly kill Elite enemies below 13% (+13% per stack) health",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Old_Guillotine",
  },
  {
    id: "war-stealthkit",
    name: "Old Stealthkit",
    imageUrl: "/items/uncommon/war-stealthkit.png",
    rarity: "uncommon",
    category: "Utility",
    description:
      "Falling below 25% health causes you to gain 40% movement speed and invisibility for 5s (+5%). Recharges every 30 seconds (-50% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Old_Stealthkit",
  },
  {
    id: "prayer-beads",
    name: "Prayer Beads",
    imageUrl: "/items/uncommon/prayer-beads.png",
    rarity: "uncommon",
    category: "Utility",
    description:
      "Grows by gaining experience, storing 20% (+5% per item stack) bonus stats (health, regeneration, and damage). On removal, gain all stored stats.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Prayer_Beads",
  },
  {
    id: "predatory-instincts",
    name: "Predatory Instincts",
    imageUrl: "/items/uncommon/predatory-instincts.png",
    rarity: "uncommon",
    category: "Damage",
    description:
      "Critical hits increase attack speed by 12%. Maximum cap of 36% (+24% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Predatory_Instincts",
  },
  {
    id: "razorwire",
    name: "Razorwire",
    imageUrl: "/items/uncommon/razorwire.png",
    rarity: "uncommon",
    category: "Damage",
    description:
      "Getting hit causes you to explode in a burst of razors, dealing 160% damage (+80% per stack) to up to 5 enemies in a 25m radius.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Razorwire",
  },
  {
    id: "red-whip",
    name: "Red Whip",
    imageUrl: "/items/uncommon/red-whip.png",
    rarity: "uncommon",
    category: "Utility",
    description:
      "Leaving combat increases your movement speed by 30% (+30% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Red_Whip",
  },
  {
    id: "regenerating-scrap",
    name: "Regenerating Scrap",
    imageUrl: "/items/uncommon/regenerating-scrap.png",
    rarity: "uncommon",
    category: "Utility",
    description:
      "Does nothing. Prioritized when used with Scrapper. Regenerates at the start of each stage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Regenerating_Scrap",
  },
  {
    id: "rose-buckler",
    name: "Rose Buckler",
    imageUrl: "/items/uncommon/rose-buckler.png",
    rarity: "uncommon",
    category: "Defense",
    description: "Increase armor by 30 (+30 per stack) while sprinting.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Rose_Buckler",
  },
  {
    id: "runald-band",
    name: "Runald's Band",
    imageUrl: "/items/uncommon/runald-band.png",
    rarity: "uncommon",
    category: "Damage",
    description:
      "Hits that deal more than 400% damage also slow enemies by 80% for 3s (+3s per stack). Recharges every 10 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Runald%27s_Brand",
  },
  {
    id: "sale-star",
    name: "Sale Star",
    imageUrl: "/items/uncommon/sale-star.png",
    rarity: "uncommon",
    category: "Utility",
    description:
      "Gain an extra item on the first chest opened per stage. Each additional Sale Star increases the chance of getting more items by 5%.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Sale_Star",
  },
  {
    id: "request-form",
    name: "Shipping Request Form",
    imageUrl: "/items/uncommon/request-form.png",
    rarity: "uncommon",
    category: "Utility",
    description:
      "A delivery containing 2 items (79%/20%/1%) will appear in a random location on each stage. (Increases rarity chances of the items per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Shipping_Request_Form",
  },
  {
    id: "shuriken",
    name: "Shuriken",
    imageUrl: "/items/uncommon/shuriken.png",
    rarity: "uncommon",
    category: "Damage",
    description:
      "Activating your Primary skill also throws a shuriken that deals 400% (+100% per stack) base damage. You can hold up to 3 (+3 per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Shuriken",
  },
  {
    id: "squid-polyp",
    name: "Squid Polyp",
    imageUrl: "/items/uncommon/squid-polyp.png",
    rarity: "uncommon",
    category: "Utility",
    description:
      "Activating an interactable summons a Squid Turret nearby that attacks nearby enemies for 100% damage. Lasts 30 seconds, up to 2 (+2 per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Squid_Polyp",
  },
  {
    id: "ukulele",
    name: "Ukulele",
    imageUrl: "/items/uncommon/ukulele.png",
    rarity: "uncommon",
    category: "Damage",
    description:
      "25% chance on hit to fire chain lightning for 80% TOTAL damage on up to 3 (+2 per stack) targets within 20m.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Ukulele",
  },
  {
    id: "transmitter",
    name: "Unstable Transmitter",
    imageUrl: "/items/uncommon/transmitter.png",
    rarity: "uncommon",
    category: "Utility",
    description:
      "Falling below 25% health gives you temporary barrier and a dimensional aura that bleeds and teleports away enemies for 8s. Enemies killed by the aura extend the duration by 1s. At the start of each stage, it regenerates",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Unstable_Transmitter",
  },
  {
    id: "war-horn",
    name: "War Horn",
    imageUrl: "/items/uncommon/war-horn.png",
    rarity: "uncommon",
    category: "Utility",
    description:
      "Activating your Equipment gives you +70% attack speed for 8s (+4s per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/War_Horn",
  },
  {
    id: "wax-quail",
    name: "Wax Quail",
    imageUrl: "/items/uncommon/wax-quail.png",
    rarity: "uncommon",
    category: "Utility",
    description:
      "Jumping while sprinting boosts you forward by 10m (+10m per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Wax_Quail",
  },
  {
    id: "wotw",
    name: "Will-o'-the-wisp",
    imageUrl: "/items/uncommon/wotw.png",
    rarity: "uncommon",
    category: "Damage",
    description:
      "On killing an enemy, spawn a lava pillar in a 12m (+2.4m per stack) radius for 350% (+280% per stack) base damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Will-o%27-the-wisp",
  },

  // Legendary Items
  {
    id: "57-clover",
    name: "57 Leaf Clover",
    imageUrl: "/items/legendary/57-clover.png",
    rarity: "legendary",
    category: "Utility",
    description:
      "All random effects are rolled +1 (+1 per stack) times for a favorable outcome.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/57_Leaf_Clover",
  },
  {
    id: "aegis",
    name: "Aegis",
    imageUrl: "/items/legendary/aegis.png",
    rarity: "legendary",
    category: "Defense",
    description:
      "Healing past full grants you a temporary barrier for 50% (+50% per stack) of the amount you healed.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Aegis",
  },
  {
    id: "alien-head",
    name: "Alien Head",
    imageUrl: "/items/legendary/alien-head.png",
    rarity: "legendary",
    category: "Utility",
    description: "Reduce skill cooldowns by 25% (+25% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Alien_Head",
  },
  {
    id: "raincoat",
    name: "Ben's Raincoat",
    imageUrl: "/items/legendary/raincoat.png",
    rarity: "legendary",
    category: "Defense",
    description:
      "Prevents 1 (+1 per stack) debuff and instead grants a temporary barrier for 10% of maximum health. Recharges every 5 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Ben%27s_Raincoat",
  },
  {
    id: "bottled-chaos",
    name: "Bottled Chaos",
    imageUrl: "/items/legendary/bottled-chaos.png",
    rarity: "legendary",
    category: "Utility",
    description:
      "Activating your equipment triggers an additional random equipment effect 1 (+1 per stack) times.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Bottled_Chaos",
  },
  {
    id: "brainstalks",
    name: "Brainstalks",
    imageUrl: "/items/legendary/brainstalks.png",
    rarity: "legendary",
    category: "Utility",
    description:
      "Upon killing an elite monster, enter a frenzy for 4s (+4s per stack) where skills have 0.5s cooldowns.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Brainstalks",
  },
  {
    id: "behemoth",
    name: "Brilliant Behemoth",
    imageUrl: "/items/legendary/behemoth.png",
    rarity: "legendary",
    category: "Damage",
    description:
      "All your attacks explode in a 4m (+2.5m per stack) radius for a bonus 60% TOTAL damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Brilliant_Behemoth",
  },
  {
    id: "ceremonial-dagger",
    name: "Ceremonial Dagger",
    imageUrl: "/items/legendary/ceremonial-dagger.png",
    rarity: "legendary",
    category: "Damage",
    description:
      "Killing an enemy fires out 3 (+3 per stack) homing daggers that deal 150% base damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Ceremonial_Dagger",
  },
  {
    id: "defensive-microbots",
    name: "Defensive Microbots",
    imageUrl: "/items/legendary/defensive-microbots.png",
    rarity: "legendary",
    category: "Defense",
    description:
      "Shoot down 1 (+1 per stack) nearby projectiles every 0.5 seconds. Recharge every 15 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Defensive_Microbots",
  },
  {
    id: "dio",
    name: "Dio's Best Friend",
    imageUrl: "/items/legendary/dio.png",
    rarity: "legendary",
    category: "Utility",
    description:
      "Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability, with all skills available.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Dio%27s_Best_Friend",
  },
  {
    id: "electric-boomerang",
    name: "Electric Boomerang",
    imageUrl: "/items/legendary/electric-boomerang.png",
    rarity: "legendary",
    category: "Damage",
    description:
      "10% chance on hit to throw a boomerang that deals 200% (+200% per stack) TOTAL damage and stuns enemies.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Electric_Boomerang",
  },
  {
    id: "frost-relic",
    name: "Frost Relic",
    imageUrl: "/items/legendary/frost-relic.png",
    rarity: "legendary",
    category: "Damage",
    description:
      "Killing an enemy surrounds you with an ice storm that deals 1200% damage per second and slows enemies by 80% for 1.5s. The storm grows with every kill, increasing its radius by 2m. Recharges every 6 seconds (+50% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Frost_Relic",
  },
  {
    id: "growth-nectar",
    name: "Growth Nectar",
    imageUrl: "/items/legendary/growth-nectar.png",
    rarity: "legendary",
    category: "Utility",
    description:
      "Every 60 seconds (-50% per stack), gain a random temporary buff that lasts 20 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Growth_Nectar",
  },
  {
    id: "h3ad-5t",
    name: "H3AD-5T v2",
    imageUrl: "/items/legendary/h3ad-5t.png",
    rarity: "legendary",
    category: "Utility",
    description:
      "Increase jump height. Holding the jump button causes you to spin and deal 1000% damage per second in a 3m (+1m per stack) radius. Recharges every 10 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/H3AD-5T_v2",
  },
  {
    id: "happiest-mask",
    name: "Happiest Mask",
    imageUrl: "/items/legendary/happiest-mask.png",
    rarity: "legendary",
    category: "Utility",
    description:
      "Killing enemies has a 7% chance to spawn a ghost of the killed enemy with 1500% damage and 30% health, lasting 30s (+30s per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Happiest_Mask",
  },
  {
    id: "afterburner",
    name: "Hardlight Afterburner",
    imageUrl: "/items/legendary/afterburner.png",
    rarity: "legendary",
    category: "Utility",
    description:
      "Add +2 (+2 per stack) charges of your Utility skill. Reduces Utility skill cooldown by 33%.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Hardlight_Afterburner",
  },
  {
    id: "desk-plant",
    name: "Interstellar Desk Plant",
    imageUrl: "/items/legendary/desk-plant.png",
    rarity: "legendary",
    category: "Healing",
    description:
      "On kill, plant a healing fruit seed that grows into a plant after 5 seconds. The plant heals for 5% (+5% per stack) of maximum health every 0.5 second to allies within 5m (+5m per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Interstellar_Desk_Plant",
  },
  {
    id: "scrapr",
    name: "Item Scrap, Red",
    imageUrl: "/items/legendary/scrapr.png",
    rarity: "legendary",
    category: "Utility",
    description:
      "Does nothing. Prioritized when used with 3D Printers, Scrappers, or Cleansers.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Item_Scrap,_Red",
  },

  {
    id: "laser-scope",
    name: "Laser Scope",
    imageUrl: "/items/legendary/laser-scope.png",
    rarity: "legendary",
    category: "Damage",
    description:
      "Gain +5% critical chance. Critical strikes deal an additional 100% (+100% per stack) damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Laser_Scope",
  },
  {
    id: "nkuhana-opinion",
    name: "N'kuhana's Opinion",
    imageUrl: "/items/legendary/nkuhana-opinion.png",
    rarity: "legendary",
    category: "Damage",
    description:
      "Store 100% (+100% per stack) of healing as Soul Energy. After your Soul Energy reaches 10% of your maximum health, fire a skull that deals 250% of your Soul Energy as damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/N%27kuhana%27s_Opinion",
  },
  {
    id: "pocket-icbm",
    name: "Pocket I.C.B.M.",
    imageUrl: "/items/legendary/pocket-icbm.png",
    rarity: "legendary",
    category: "Damage",
    description:
      "All missile items and equipment deal double damage and fire an additional two missiles. Gain +50% (+50% per stack) missile speed and +10% (+10% per stack) explosion radius.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Pocket_I.C.B.M.",
  },
  {
    id: "rejuvenation-rack",
    name: "Rejuvenation Rack",
    imageUrl: "/items/legendary/rejuvenation-rack.png",
    rarity: "legendary",
    category: "Healing",
    description: "Increase ALL healing by 100% (+100% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Rejuvenation_Rack",
  },
  {
    id: "resonance-disc",
    name: "Resonance Disc",
    imageUrl: "/items/legendary/resonance-disc.png",
    rarity: "legendary",
    category: "Damage",
    description:
      "Killing enemies charges the disc. At 4 stacks, the disc launches itself dealing 300% (+300% per stack) damage in a 15m radius and returning to you.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Resonance_Disc",
  },
  {
    id: "runic-lens",
    name: "Runic Lens",
    imageUrl: "/items/legendary/runic-lens.png",
    rarity: "legendary",
    category: "Damage",
    description:
      "10% chance on hit to create a void implosion that deals 600% (+600% per stack) TOTAL damage and pulls enemies.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Runic_Lens",
  },
  {
    id: "sentinent-hook",
    name: "Sentient Meat Hook",
    imageUrl: "/items/legendary/sentinent-hook.png",
    rarity: "legendary",
    category: "Damage",
    description:
      "20% (+20% per stack) chance on hit to fire homing hooks at up to 10 (+5 per stack) enemies for 100% TOTAL damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Sentient_Meat_Hook",
  },
  {
    id: "shattering-justice",
    name: "Shattering Justice",
    imageUrl: "/items/legendary/shattering-justice.png",
    rarity: "legendary",
    category: "Damage",
    description: "Hits reduce enemy armor by 60 for 8s (+8s per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Shattering_Justice",
  },
  {
    id: "sonorous-whispers",
    name: "Sonorous Whispers",
    imageUrl: "/items/legendary/sonorous-whispers.png",
    rarity: "legendary",
    category: "Damage",
    description:
      "When a large monster is killed it will always drop an item. All elites have a 4% chance of dropping an item (+1% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Sonorous_Whispers",
  },
  {
    id: "soulbound-catalyst",
    name: "Soulbound Catalyst",
    imageUrl: "/items/legendary/soulbound-catalyst.png",
    rarity: "legendary",
    category: "Utility",
    description: "Kills reduce equipment cooldown by 4s (+2s per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Soulbound_Catalyst",
  },
  {
    id: "drone-parts",
    name: "Spare Drone Parts",
    imageUrl: "/items/legendary/drone-parts.png",
    rarity: "legendary",
    category: "Utility",
    description:
      "Your drones fire faster, have less cooldowns, shoot missiles, and gain a 10% (+10% per stack) chance to fire a missile on hit, dealing 300% damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Spare_Drone_Parts",
  },

  {
    id: "scorpion",
    name: "Symbiotic Scorpion",
    imageUrl: "/items/legendary/scorpion.png",
    rarity: "legendary",
    category: "Damage",
    description:
      "100% chance on hit to reduce enemy armor by 2 (+2 per stack) permanently.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Symbiotic_Scorpion",
  },

  {
    id: "tesla-coil",
    name: "Tesla Coil",
    imageUrl: "/items/legendary/tesla-coil.png",
    rarity: "legendary",
    category: "Damage",
    description:
      "Fire lightning at up to 3 (+2 per stack) nearby enemies for 200% damage every 0.5 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Tesla_Coil",
  },
  {
    id: "wake-vultures",
    name: "Wake of Vultures",
    imageUrl: "/items/legendary/wake-vultures.png",
    rarity: "legendary",
    category: "Utility",
    description:
      "Killing an elite enemy temporarily grants you their power for 8s (+5s per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Wake_of_Vultures",
  },
  {
    id: "war-bonds",
    name: "War Bonds",
    imageUrl: "/items/legendary/war-bonds.png",
    rarity: "legendary",
    category: "Utility",
    description:
      "During boss events, 5 missiles bombard the area, dealing 2.5% (+2.5% per stack) of boss' Max Health in damage. Before the boss event, gain additional missiles, up to a maximum of 20 (+5 per stack), per 50 gold gained. Gold requirement scales over time.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/War_Bonds",
  },
  // Boss Items
  {
    id: "artifact-key",
    name: "Artifact Key",
    imageUrl: "/items/boss/artifact-key.png",
    rarity: "boss",
    category: "Utility",
    description:
      "Used to unlock Artifact Reliquaries during the Bulwark's Ambry event.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Artifact_Key",
  },
  {
    id: "charged-perforator",
    name: "Charged Perforator",
    imageUrl: "/items/boss/charged-perforator.png",
    rarity: "boss",
    category: "Damage",
    description:
      "10% chance on hit to call down a lightning strike for 500% (+500% per stack) TOTAL damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Charged_Perforator",
  },
  {
    id: "defense-nucleus",
    name: "Defense Nucleus",
    imageUrl: "/items/boss/defense-nucleus.png",
    rarity: "boss",
    category: "Utility",
    description:
      "Killing elite monsters spawns an Alpha Construct with bonus 300% damage and 300% health. Limited to 4 (+4 per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Defense_Nucleus",
  },
  {
    id: "empathy-cores",
    name: "Empathy Cores",
    imageUrl: "/items/boss/empathy-cores.png",
    rarity: "boss",
    category: "Utility",
    description:
      "Every 30 seconds, summon two Solus Probes that gain +100% (+100% per stack) damage per ally on your team.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Empathy_Cores",
  },
  {
    id: "genesis-loop",
    name: "Genesis Loop",
    imageUrl: "/items/boss/genesis-loop.png",
    rarity: "boss",
    category: "Damage",
    description:
      "Falling below 25% health causes you to explode for 4000% base damage in a 15m (+5m per stack) radius. Recharges every 30 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Genesis_Loop",
  },
  {
    id: "halcyon-seed",
    name: "Halcyon Seed",
    imageUrl: "/items/boss/halcyon-seed.png",
    rarity: "boss",
    category: "Utility",
    description:
      "Summon Aurelionite during the Teleporter event with +100% (+100% per stack) damage and +100% health.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Halcyon_Seed",
  },
  {
    id: "irradiant-pearl",
    name: "Irradiant Pearl",
    imageUrl: "/items/boss/irradiant-pearl.png",
    rarity: "boss",
    category: "Utility",
    description: "Increase ALL stats by 10% (+10% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Irradiant_Pearl",
  },
  {
    id: "scrapy",
    name: "Item Scrap, Yellow",
    imageUrl: "/items/boss/scrapy.png",
    rarity: "boss",
    category: "Utility",
    description:
      "Does nothing. Prioritized when used with 3D Printers, Scrappers, or Cleansers.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Item_Scrap,_Yellow",
  },
  {
    id: "little-disciple",
    name: "Little Disciple",
    imageUrl: "/items/boss/little-disciple.png",
    rarity: "boss",
    category: "Damage",
    description:
      "While sprinting, fire a tracking wisp for 300% (+300% per stack) damage every 0.5 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Little_Disciple",
  },
  {
    id: "mired-urn",
    name: "Mired Urn",
    imageUrl: "/items/boss/mired-urn.png",
    rarity: "boss",
    category: "Damage",
    description:
      "Tether to a nearby enemy, dealing 100% damage per second, and heal for 2 (+2 per stack) per second. Tethered enemies have reduced movement speed by 20%.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Mired_Urn",
  },
  {
    id: "molten-perforator",
    name: "Molten Perforator",
    imageUrl: "/items/boss/molten-perforator.png",
    rarity: "boss",
    category: "Damage",
    description:
      "10% chance on hit to call down 3 molten boulders that deal 300% (+300% per stack) TOTAL damage each.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Molten_Perforator",
  },
  {
    id: "pearl",
    name: "Pearl",
    imageUrl: "/items/boss/pearl.png",
    rarity: "boss",
    category: "Health",
    description: "Increase maximum health by 10% (+10% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Pearl",
  },
  {
    id: "planula",
    name: "Planula",
    imageUrl: "/items/boss/planula.png",
    rarity: "boss",
    category: "Healing",
    description: "Heal from incoming damage for 15 (+15 per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Planula",
  },
  {
    id: "gland",
    name: "Queen's Gland",
    imageUrl: "/items/boss/gland.png",
    rarity: "boss",
    category: "Utility",
    description:
      "Every 30 seconds, summon a Beetle Guard with 100% (+100% per stack) damage and 100% health.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Queen%27s_Gland",
  },
  {
    id: "shatterspleen",
    name: "Shatterspleen",
    imageUrl: "/items/boss/shatterspleen.png",
    rarity: "boss",
    category: "Damage",
    description:
      "Critical hits always bleed enemies. Bleeding enemies now explode on death for 400% (+400% per stack) damage in a 15m radius.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Shatterspleen",
  },
  {
    id: "titanic-knurl",
    name: "Titanic Knurl",
    imageUrl: "/items/boss/titanic-knurl.png",
    rarity: "boss",
    category: "Health",
    description:
      "Increase maximum health by 40 (+40 per stack) and base health regeneration by +1.6 hp/s (+1.6 hp/s per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Titanic_Knurl",
  },
  // Lunar Items
  {
    id: "beads-fealty",
    name: "Beads of Fealty",
    imageUrl: "/items/lunar/beads-fealty.png",
    rarity: "lunar",
    category: "Utility",
    description:
      "Seems to do nothing... but upon entering a a Void stage, you are transported to a hidden realm.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Beads_of_Fealty",
  },
  {
    id: "brittle-crown",
    name: "Brittle Crown",
    imageUrl: "/items/lunar/brittle-crown.png",
    rarity: "lunar",
    category: "Common",
    description:
      "30% chance on hit to gain 20 (+20 per stack) gold. Lose gold equal to the damage you take.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Brittle_Crown",
  },
  {
    id: "corpsebloom",
    name: "Corpsebloom",
    imageUrl: "/items/lunar/corpsebloom.png",
    rarity: "lunar",
    category: "Healing",
    description:
      "Heal +100% (+100% per stack) more. All healing is applied over time, up to a maximum of 10% (+5% per stack) of your maximum health per second.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Corpsebloom",
  },
  {
    id: "defiant-gouge",
    name: "Defiant Gouge",
    imageUrl: "/items/lunar/defiant-gouge.png",
    rarity: "lunar",
    category: "Utility",
    description:
      "Using a Shrine summons 1 (+1 per stack) additional enemy for each enemy type on the stage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Defiant_Gouge",
  },
  {
    id: "egoc",
    name: "Egocentrism",
    imageUrl: "/items/lunar/egocentrism.png",
    rarity: "lunar",
    category: "Common",
    description:
      "Every 3 (-50% per stack) seconds, gain an orbiting bomb that detonates for 360% base damage, up to a maximum of 3 bombs. Every 10 stacks converts a random item into a lunar item.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Egocentrism",
  },
  {
    id: "essence",
    name: "Essence of Heresy",
    imageUrl: "/items/lunar/essence-heresy.png",
    rarity: "lunar",
    category: "Utility",
    description:
      "Replace your Special skill with 'Ruin'. Ruin deals 300% (+180% per stack) damage over time and can stack indefinitely.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Essence_of_Heresy",
  },
  {
    id: "eulogy",
    name: "Eulogy Zero",
    imageUrl: "/items/lunar/eulogy-zero.png",
    rarity: "lunar",
    category: "Utility",
    description:
      "Items have a 5% (+5% per stack) chance to become a lunar item instead.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Eulogy_Zero",
  },
  {
    id: "focused-convergence",
    name: "Focused Convergence",
    imageUrl: "/items/lunar/focused-convergence.png",
    rarity: "lunar",
    category: "Utility",
    description:
      "Teleporters charge 30% (+30% per stack) faster, but the size of the Teleporter zone is 50% smaller.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Focused_Convergence",
  },
  {
    id: "gesture-drowned",
    name: "Gesture of the Drowned",
    imageUrl: "/items/lunar/gesture-drowned.png",
    rarity: "lunar",
    category: "Utility",
    description:
      "Reduce Equipment cooldown by 50% (+15% per stack). Forces your Equipment to activate whenever it is off cooldown.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Gesture_of_the_Drowned",
  },

  {
    id: "hooks",
    name: "Hooks of Heresy",
    imageUrl: "/items/lunar/hooks-heresy.png",
    rarity: "lunar",
    category: "Utility",
    description:
      "Replace your Secondary skill with 'Sorrow'. Sorrow pulls enemies toward a black hole and deals 175% (+100% per stack) damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Hooks_of_Heresy",
  },
  {
    id: "light-flux",
    name: "Light Flux Pauldron",
    imageUrl: "/items/lunar/light-flux.png",
    rarity: "lunar",
    category: "Utility",
    description:
      "Reduce skill cooldowns by 50% (+50% per stack). Reduce attack speed by 50% (+50% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Light_Flux_Pauldron",
  },
  {
    id: "longstanding-solitude",
    name: "Longstanding Solitude",
    imageUrl: "/items/lunar/longstanding-solitude.png",
    rarity: "lunar",
    category: "Utility",
    description:
      "On level up gain a free unlock for the next purchase (+1 free unlock per item stack) but all gold is converted to experience. Anything that costs gold is increased by 50% (+50% per item stack)",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Longstanding_Solitude",
  },
  {
    id: "mercurial",
    name: "Mercurial Rachis",
    imageUrl: "/items/lunar/mercurial-rachis.png",
    rarity: "lunar",
    category: "Utility",
    description:
      "Creates a a random Ward of of random radius that grants 50% (+25% per stack) movement speed and attack speed to all characters within.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Mercurial_Rachis",
  },
  {
    id: "purity",
    name: "Purity",
    imageUrl: "/items/lunar/purity.png",
    rarity: "lunar",
    category: "Utility",
    description:
      "All random effects are rolled +2 (-1 per stack) times for an unfavorable outcome. Reduce skill cooldowns by 2s (+2s per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Purity",
  },
  {
    id: "glass",
    name: "Shaped Glass",
    imageUrl: "/items/lunar/glass.png",
    rarity: "lunar",
    category: "Damage",
    description:
      "Increase your damage by 100% (+100% per stack). Reduce your maximum health by 50% (+50% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Shaped_Glass",
  },
  {
    id: "stone-flux",
    name: "Stone Flux Pauldron",
    imageUrl: "/items/lunar/stone-flux.png",
    rarity: "lunar",
    category: "Common",
    description:
      "Increase your maximum health by 100% (+100% per stack). Reduce your movement speed by 50% (+50% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Stone_Flux_Pauldron",
  },
  {
    id: "strides",
    name: "Strides of Heresy",
    imageUrl: "/items/lunar/strides-heresy.png",
    rarity: "lunar",
    category: "Utility",
    description:
      "Replace your Utility skill with 'Shadowfade'. Shadowfade heals for 18.2% (+18.2% per stack) maximum health over 1.5s and grants temporary invisibility.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Strides_S_of_Heresy",
  },
  {
    id: "transcendence",
    name: "Transcendence",
    imageUrl: "/items/lunar/transcendence.png",
    rarity: "lunar",
    category: "Defense",
    description:
      "Convert all but 1 health into regenerating shield. Gain +50% (+25% per stack) maximum shield.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Transcendence",
  },
  {
    id: "visions",
    name: "Visions of Heresy",
    imageUrl: "/items/lunar/visions-heresy.png",
    rarity: "lunar",
    category: "Utility",
    description:
      "Replace your Primary skill with 'Hunger', which fires 12 (+12 per stack) tracking shards for 100% damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/VVisions_of_Heresy",
  },
  // Void Items
  {
    id: "benthic-bloom",
    name: "Benthic Bloom",
    imageUrl: "/items/void/benthic-bloom.png",
    rarity: "void",
    category: "Utility",
    description:
      "Corrupts all 57 Leaf Clovers. Upgrades 3 (+3 per stack) random items to items of the next higher rarity every 60 seconds (-50% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Benthic_Bloom",
  },
  {
    id: "encrusted-key",
    name: "Encrusted Key",
    imageUrl: "/items/void/encrusted-key.png",
    rarity: "void",
    category: "Utility",
    description:
      "Corrupts all Rusted Keys. A hidden cache containing a void item (80% chance) or void scrap (20% chance) appears in a random location on each stage. Opening the cache consumes this item.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Encrusted_Key",
  },

  {
    id: "lenses",
    name: "Lost Seer's Lenses",
    imageUrl: "/items/void/lenses.png",
    rarity: "void",
    category: "Damage",
    description:
      "Your attacks have a 0.5% (+0.5% per stack) chance to instantly kill a non-Boss enemy. Corrupts all Lens-Maker's Glasses.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Lost_Seer%27s_Lenses",
  },
  {
    id: "lysate-cell",
    name: "Lysate Cell",
    imageUrl: "/items/void/lysate-cell.png",
    rarity: "void",
    category: "Utility",
    description:
      "Add +1 (+1 per stack) charge of your Special skill. Reduces Special skill cooldown by 33%. Corrupts all Fuel Cells.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Lysate_Cell",
  },
  {
    id: "needletick",
    name: "Needletick",
    imageUrl: "/items/void/needletick.png",
    rarity: "void",
    category: "Damage",
    description:
      "Corrupts all Tri-Tip Daggers. 10% (+10% per stack) chance to collapse an enemy for 400% base damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Needletick",
  },
    {
    id: "hatched-zoea",
    name: "Newly Hatched Zoea",
    imageUrl: "/items/void/hatched-zoea.png",
    rarity: "void",
    category: "Utility",
    description:
      "Every 60 (-50% per stack) seconds, gain a random Void ally. Can have up to 1 (+1 per stack) allies at a time. Corrupts all yellow items.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Hatched_Zoea",
  },
  {
    id: "plasma-shrimp",
    name: "Plasma Shrimp",
    imageUrl: "/items/void/plasma-shrimp.png",
    rarity: "void",
    category: "Damage",
    description:
      "Gain a shield equal to 10% of your maximum health. While you have a shield, hitting an enemy fires a missile that deals 40% (+40% per stack) TOTAL damage. Corrupts all AtG Missile Mk. 1s.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Plasma_Shrimp",
  },
  {
    id: "pluripotent-larva",
    name: "Pluripotent Larva",
    imageUrl: "/items/void/pluripotent-larva.png",
    rarity: "void",
    category: "Utility",
    description:
      "Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability, and all of your items that can be corrupted will be. Corrupts all Dio's Best Friends.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Pluripotent_Larva",
  },
  {
    id: "polylute",
    name: "Polylute",
    imageUrl: "/items/void/polylute.png",
    rarity: "void",
    category: "Damage",
    description:
      "25% chance to fire lightning for 60% TOTAL damage up to 3 (+3 per stack) times. Corrupts all Ukuleles",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Polylute",
  },
  {
    id: "safer-spaces",
    name: "Safer Spaces",
    imageUrl: "/items/void/safer-spaces.png",
    rarity: "void",
    category: "Defense",
    description:
      "Blocks incoming damage once. Recharges after 15 seconds (-10% per stack) Corrupts all Tougher Times.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Safer_Spaces",
  },
  {
    id: "singularity-band",
    name: "Singularity Band",
    imageUrl: "/items/void/singularity-band.png",
    rarity: "void",
    category: "Damage",
    description:
      "Hits that deal more than 400% damage also fire a black hole that draws enemies within 15m into its center. Lasts 5 seconds before collapsing, dealing 100% (+100% per stack) TOTAL damage. Recharges every 20 seconds. Corrupts all Runald's and Kjaro's Bands.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Singularity_Band",
  },
  {
    id: "tentabauble",
    name: "Tentabauble",
    imageUrl: "/items/void/tentabauble.png",
    rarity: "void",
    category: "Utility",
    description:
      "5% (+5% per stack) chance on hit to root enemies for 1s (+1s per stack). Corrupts all Chronobaubles.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Tentabauble",
  },
  {
    id: "voidsent-flame",
    name: "Voidsent Flame",
    imageUrl: "/items/void/voidsent-flame.png",
    rarity: "void",
    category: "Damage",
    description:
      "Upon hitting an enemy at full health, spawn a lava pillar in a 12m (+2.4m per stack) radius for 260% (+156% per stack) base damage. Corrupts all Will-o'-the-wisps.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Voidsent_Flame",
  },
  {
    id: "weeping-fungus",
    name: "Weeping Fungus",
    imageUrl: "/items/void/weeping-fungus.png",
    rarity: "void",
    category: "Healing",
    description:
      "Heals for 2% (+2% per stack) of your health every second while sprinting. Corrupts all Bustling Fungi.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Weeping_Fungus",
  },
  // Equipment
  {
    id: "back-up",
    name: "The Back-Up",
    imageUrl: "/items/equipment/back-up.png",
    rarity: "equipment",
    category: "Equipment",
    description: "Summon 4 strike drones to fight for you for 25 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/The_Back-up",
  },
  {
    id: "blast-shower",
    name: "Blast Shower",
    imageUrl: "/items/equipment/blast-shower.png",
    rarity: "equipment",
    category: "Utility",
    description:
      "Cleanse all negative status effects. Recharges every 20 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Blast_Shower",
  },
  {
    id: "capacitor",
    name: "Royal Capacitor",
    imageUrl: "/items/equipment/capacitor.png",
    rarity: "equipment",
    category: "Damage",
    description:
      "Call down a lightning strike on a targeted enemy for 3000% damage, stunning nearby enemies nearby. Recharges every 20 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Royal_Capacitor",
  },
  {
    id: "crowdfunder",
    name: "Crowdfunder",
    imageUrl: "/items/equipment/crowdfunder.png",
    rarity: "equipment",
    category: "Damage",
    description:
      "Toggle to fire a continuous barrage for 100% damage per bullet, costing gold per second. Recharges every 0 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Crowdfunder",
  },
  {
    id: "eccentric-vase",
    name: "Eccentric Vase",
    imageUrl: "/items/equipment/eccentric-vase.png",
    rarity: "equipment",
    category: "Utility",
    description:
      "Create a a quantum tunnel up to 1000 meters. Recharges every every 45 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Eccentric_Vase",
  },
  {
    id: "executive-card",
    name: "Executive Card",
    imageUrl: "/items/equipment/executive-card.png",
    rarity: "equipment",
    category: "Utility",
    description:
      "Gain 10% cashback on all purchases. Every purchase briefly reduces combat effectiveness by -10% (-10% per stack). Recharges every 0 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Executive_Card",
  },
  {
    id: "foreign-fruit",
    name: "Foreign Fruit",
    imageUrl: "/items/equipment/foreign-fruit.png",
    rarity: "equipment",
    category: "Healing",
    description:
      "Heal for 50% of your maximum health. Recharges every 45 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Foreign_Fruit",
  },
  {
    id: "forgive-me",
    name: "Forgive Me Please",
    imageUrl: "/items/equipment/forgive-me.png",
    rarity: "equipment",
    category: "Utility",
    description:
      "Throw a a cursed doll that triggers any on-kill effects you have 8 times. Recharges every 45 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Forgive_Me_Please",
  },
  {
    id: "fuel-array",
    name: "Fuel Array",
    imageUrl: "/items/equipment/fuel-array.png",
    rarity: "equipment",
    category: "Utility",
    description:
      "Looks like it could power something. EXTREMELY unstable...",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Fuel_AArray",
  },
  {
    id: "gnarled",
    name: "Gnarled Woodsprite",
    imageUrl: "/items/equipment/gnarled-woodsprite.png",
    rarity: "equipment",
    category: "Healing",
    description:
      "Gain a Woodsprite sprite follower that heals a nearby ally for 1.5% of their maximum health every 2 seconds. Recharges every 15 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Gnarled_Woodsprite",
  },
  {
    id: "goboo-jr",
    name: "Ghor's Jr.",
    imageUrl: "/items/equipment/goboo-jr.png",
    rarity: "equipment",
    category: "Utility",
    description:
      "Summon a a Robo-Ball companion that fires a laser for 100% damage per second. Recharges every 45 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Ghor%27s_Jr.",
  },
  {
    id: "jade",
    name: "Jade Elephant",
    imageUrl: "/items/equipment/jade-elephant.png",
    rarity: "equipment",
    category: "Defense",
    description: "Gain 500 armor for 5 seconds. Recharges every 45 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Jade_Elephant",
  },
  {
    id: "massive-leech",
    name: "Massive Leech",
    imageUrl: "/items/equipment/massive-leech.png",
    rarity: "equipment",
    category: "Healing",
    description:
      "For 8 seconds, hits heal for 1% of damage dealt. Recharges every 45 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Massive_leech",
  },
  {
    id: "milky-chrysalis",
    name: "Milky Chrysalis",
    imageUrl: "/items/equipment/milky-chrysalis.png",
    rarity: "equipment",
    category: "Utility",
    description:
      "Sprout wings and fly for 15 seconds. Gain +20% movement speed for the duration. Recharges every 60 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Milky_Chrysalis",
  },
  {
    id: "missile-launcher",
    name: "Disposable Missile Launcher",
    imageUrl: "/items/equipment/missile-launcher.png",
    rarity: "equipment",
    category: "Damage",
    description:
      "Fire a swarm of 12 missiles that deal 12x300% damage. Recharges every 45 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Disposable_Missile_Launcher",
  },
  {
    id: "molotov",
    name: "Molotov (6-Pack)",
    imageUrl: "/items/equipment/molotov.png",
    rarity: "equipment",
    category: "Damage",
    description:
      "Throw 6 Molotov cocktails that ignite enemies, dealing 6x500% damage over time. Recharges every 45 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Molotov_(6-Pack)",
  },
  {
    id: "ocular",
    name: "Ocular HUD",
    imageUrl: "/items/equipment/ocular.png",
    rarity: "equipment",
    category: "Utility",
    description:
      "Gain +100% critical chance for 8 seconds. Recharges every 60 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Ocular_HUD",
  },
  {
    id: "preon",
    name: "Preon Accumulator",
    imageUrl: "/items/equipment/preon-accumulator.png",
    rarity: "equipment",
    category: "Damage",
    description:
      "Fire a a Preon tendril, dealing 600% damage per second and detonating for 4000% damage. Recharges every 140 seconds.",
    wikiUrl: "https://riskofrain2andom.com/wiki/Preon_Accumulator",
  },
  {
    id: "primordial",
    name: "Primordial Cube",
    imageUrl: "/items/equipment/primordial-cube.png",
    rarity: "equipment",
    category: "Utility",
    description:
      "Fire a black hole that sucks in all enemies within a a 30-meter radius for 10 seconds. Recharges every 60 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Primordial_Cube",
  },
  {
    id: "radar-scanner",
    name: "Radar Scanner",
    imageUrl: "/items/equipment/radar-scanner.png",
    rarity: "equipment",
    category: "Utility",
    description:
      "Reveal all interactables within 125 meters for 10 seconds. Recharges every 45 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Radar_Scanner",
  },
  {
    id: "recycler",
    name: "Recycler",
    imageUrl: "/items/equipment/recycler.png",
    rarity: "equipment",
    category: "Utility",
    description:
      "Transform an item or or equipment into a different one of the same rarity. Recharges every 45 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Recycler",
  },
  {
    id: "remote-caffeinator",
    name: "Remote Caffeinator",
    imageUrl: "/items/equipment/remote-caffeinator.png",
    rarity: "equipment",
    category: "Healing",
    description:
      "Request a coffee machine to drop, healing all nearby allies for 100 health per second for 10 seconds. Recharges every 45 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Remote_Caffeinator",
  },
  {
    id: "sawmerang",
    name: "Sawmerang",
    imageUrl: "/items/equipment/sawmerang.png",
    rarity: "equipment",
    category: "Damage",
    description:
      "Throw 3 large saw blades that slice through enemies for 3x400% damage and bleed them. Recharges every 45 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/SSawmerang",
  },
  {
    id: "seed-life",
    name: "Seed of Life",
    imageUrl: "/items/equipment/seed-life.png",
    rarity: "equipment",
    category: "Heal & Revive",
    description:
      "Revives the user when killed or dead allies on activation. Consumed on use.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Seed_of_Life",
  },
  {
    id: "tricorn",
    name: "Trophy Hunter's Tricorn",
    imageUrl: "/items/equipment/tricorn.png",
    rarity: "equipment",
    category: "Unique",
    description:
      "Execute any enemy capable of spawning a unique reward, and it will drop that item. Equipment is consumed on use.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/CCaptain%27s_Tricorn",
  },
  {
    id: "volcanic-egg",
    name: "Volcanic Egg",
    imageUrl: "/items/equipment/volcanic-egg.png",
    rarity: "equipment",
    category: "Utility",
    description:
      "Transform into a a fireball, dealing 500% damage on impact for 1000% damage in a a radius. Lasts 8 seconds. Recharges every 30 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/VVolcanic_Egg",
  },
  // LunarEquipment Items
  {
    id: "effigy-grief",
    name: "Effigy of Grief",
    imageUrl: "/items/lunarEquipment/effigy-grief.png",
    rarity: "lunarEquipment",
    category: "Equipment",
    description:
      "Drop a a permanent effigy that slows all characters within 15 meters by 50% and reduces their armor by -20. Recharges every 15 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Effigy_of_Grief",
  },
  {
    id: "glowing-meteorite",
    name: "Glowing Meteorite",
    imageUrl: "/items/lunarEquipment/glowing-meteorite.png",
    rarity: "lunarEquipment",
    category: "Damage",
    description:
      "Rain meteors from the sky for 600% damage per blast, also hurting yourself. Recharges every 140 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Glowing_MMeteorite",
  },
  {
    id: "hellfire",
    name: "Hellfire Tincture",
    imageUrl: "/items/lunarEquipment/helfire-tincture.png",
    rarity: "lunarEquipment",
    category: "Damage",
    description:
      "Ignite ALL characters within 8 meters for 5% damage per second to enemies and yourself for 12 seconds. Recharges every 20 seconds.",
    wikiUrl: "https://riskofrain2andom.com/wiki/Hellfire_TTincture",
  },
  {
    id: "spinel",
    name: "Spinel Tonic",
    imageUrl: "/items/lunarEquipment/spinel-tonic.png",
    rarity: "lunarEquipment",
    category: "Utility",
    description:
      "Drink the tonic, gaining +70% damage, +100% attack speed, +20 armor, +20% movement speed, and +100% skill regeneration for 20 seconds, with a 20% chance to gain a a negative effect. Recharges every 60 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/SSpinel_Tonic",
  },
  // EliteEquipment Items
  {
    id: "aurelionite-blessing",
    name: "Aurelionite's Blessing",
    imageUrl: "/items/eliteEquipment/aurelionite-blessing.png",
    rarity: "eliteEquipment",
    category: "Utility",
    description:
      "Gain a a temporary ally, Aurelion Sol, for 30 seconds, dealing 300% damage per second. Recharges every 120 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Aurelionite_s_Blessing",
  },
  {
    id: "biting-embrace",
    name: "Biting Embrace",
    imageUrl: "/items/eliteEquipment/biting-embrace.png",
    rarity: "eliteEquipment",
    category: "Damage",
    description:
      "For 8 seconds, all your attacks apply a a chilling effect, slowing enemies by -50%. Recharges every 60 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Biting_Embrace",
  },
  {
    id: "ifrit",
    name: "Ifrit's Distinction",
    imageUrl: "/items/eliteEquipment/ifrit-distinction.png",
    rarity: "eliteEquipment",
    category: "Damage",
    description:
      "Create a a fiery aura for 8 seconds, dealing 100% burn damage per second to nearby enemies in. Recharges every 60 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/IIfrit%27s_Distinction",
  },
  {
    id: "nkuhana-retort",
    name: "N'kuhana's Retort",
    imageUrl: "/items/eliteEquipment/nkuhana-retort.png",
    rarity: "eliteEquipment",
    category: "Damage",
    description:
      "For 8 seconds, emit a a toxic aura that deals 50% damage per second and poisons enemies. Recharges every 60 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Nkuhana%27s_RRetort",
  },
  {
    id: "reassurance",
    name: "His Reassurance",
    imageUrl: "/items/eliteEquipment/reassurance.png",
    rarity: "eliteEquipment",
    category: "Utility",
    description:
      "Grant a a temporary blessing for 8 seconds, increasing allied damage by +20% within a a 15-meter radius. Recharges every 60 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/HHis_RReassurance",
  },
  {
    id: "shared-design",
    name: "Shared Design",
    imageUrl: "/items/eliteEquipment/shared-design.png",
    rarity: "eliteEquipment",
    category: "Utility",
    description:
      "Summon a a temporary clone of yourself with 100% damage and health for 15 seconds. Recharges every 90 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/SHShared_Design",
  },
  {
    id: "silence-strikes",
    name: "Silence Between Two Strikes",
    imageUrl: "/items/eliteEquipment/silence-strikes.png",
    rarity: "eliteEquipment",
    category: "Defense",
    description:
      "Gain a a temporary invulnerability shield for 3 seconds after taking damage. Recharges every 60 seconds.",
    wikiUrl:
      "https://riskofrain2.fandom.com/wiki/SSilence_Between_Two_TStrikes",
  },
  {
    id: "spiteful-boon",
    name: "Spiteful Boon",
    imageUrl: "/items/eliteEquipment/spiteful-boon.png",
    rarity: "eliteEquipment",
    category: "Damage",
    description:
      "For 8 seconds, your attacks apply a a debuff that causes enemies to explode for 200% damage on death. Recharges every 60 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/SPpiteful_Boon",
  },
  {
    id: "spectral-circlet",
    name: "Spectral Circlet",
    imageUrl: "/items/eliteEquipment/spectral-circlet.png",
    rarity: "eliteEquipment",
    category: "Utility",
    description:
      "Become intangible for 5 seconds, avoiding all damage. Recharges every 60 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/SSpectral_Circlet",
  },
];
