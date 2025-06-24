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
    category: "",
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
    category: "Damage (Linear)",
    description:
      "10% chance to fire a missile that deals 300% (+300% per stack) TOTAL damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/AtG_Missile_Mk._1",
  },
  {
    id: "bandolier",
    name: "Bandolier",
    imageUrl: "/items/uncommon/bandolier.png",
    rarity: "uncommon",
    category: "Utility (Special)",
    description:
      "18% (+10% per stack) chance on kill to drop an ammo pack that resets all skill cooldowns.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Bandolier",
  },
  {
    id: "berzerker-pauldron",
    name: "Berzerker's Pauldron",
    imageUrl: "/items/uncommon/berzerker-pauldron.png",
    rarity: "uncommon",
    category: "Damage (Linear)",
    description:
      "Killing 4 enemies within 1 second sends you into a frenzy for 6s (+4s per stack). Increases movement speed by 50% and attack speed by 100%.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Berzerker%27s_Pauldron",
  },
  {
    id: "breaching-fin",
    name: "Breaching Fin",
    imageUrl: "/items/common/breaching-fin.png",
    rarity: "uncommon",
    category: "Utility (Linear)",
    description:
      "Grounded enemies hit with any skill are launched and stunned. Enemies hit while airborne are launched again up to 2 times (+1 per stack). Launched enemies take increased damage by 10% from all sources per launch. Recharges after 15s.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Breaching_Fin",
  },
  {
    id: "chance-doll",
    name: "Chance Doll",
    imageUrl: "/items/uncommon/chance-doll.png",
    rarity: "uncommon",
    category: "Utility (Linear)",
    description:
      "On Shrine of Chance success, 40% (+10% per stack) chance to get higher rarity items.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Chance_Doll",
  },
  {
    id: "chronobauble",
    name: "Chronobauble",
    imageUrl: "/items/uncommon/chronobauble.png",
    rarity: "uncommon",
    category: "Utility (Linear)",
    description:
      "Slow enemies on hit for -60% movement speed for 2s (+2s per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Chronobauble",
  },
  {
    id: "death-mark",
    name: "Death Mark",
    imageUrl: "/items/uncommon/death-mark.png",
    rarity: "uncommon",
    category: "Damage (Linear)",
    description:
      "Enemies with 4 or more debuffs are marked for death, increasing damage taken by 50% from all sources for 7 (+7 per stack) seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Death_Mark",
  },
  {
    id: "fuel-cell",
    name: "Fuel Cell",
    imageUrl: "/items/uncommon/fuel-cell.png",
    rarity: "uncommon",
    category: "Utility (Mixed)",
    description:
      "Hold an additional equipment charge (+1 per stack [Linear]). Reduce equipment cooldown by 15% (+15% per stack [Exponential]).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Fuel_Cell",
  },
  {
    id: "ghor-tome",
    name: "Ghor's Tome",
    imageUrl: "/items/uncommon/ghor-tome.png",
    rarity: "uncommon",
    category: "Utility (Linear)",
    description: "4% (+4% on stack) chance on kill to drop a treasure worth $25. Scales over time.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Ghor%27s_Tome",
  },
  {
    id: "harvester-scythe",
    name: "Harvester's Scythe",
    imageUrl: "/items/uncommon/harvester-scythe.png",
    rarity: "uncommon",
    category: "Healing (Linear)",
    description:
      "Gain +5% critical chance. Critical hits heal for 8 (+4 per stack) health.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Harvester%27s_Scythe",
  },
  {
    id: "hopoo-feather",
    name: "Hopoo Feather",
    imageUrl: "/items/uncommon/hopoo-feather.png",
    rarity: "uncommon",
    category: "Utility (Linear)",
    description: "Gain +1 (+1 per stack) maximum jump count.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Hopoo_Feather",
  },
  {
    id: "hunter-harpoon",
    name: "Hunter's Harpoon",
    imageUrl: "/items/uncommon/hunter-harpoon.png",
    rarity: "uncommon",
    category: "Utility (Linear)",
    description:
      "Killing an enemy increases movement speed by 125%, fading over 1 (+0.5 per stack) seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Hunter%27s_Harpoon",
  },
  {
    id: "ignition-tank",
    name: "Ignition Tank",
    imageUrl: "/items/uncommon/ignition-tank.png",
    rarity: "uncommon",
    category: "Damage (Linear)",
    description: "Ignite effects deal +300% (+300% per stack) more damage over time.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Ignition_Tank",
  },
  {
    id: "infusion",
    name: "Infusion",
    imageUrl: "/items/uncommon/infusion.png",
    rarity: "uncommon",
    category: "Healing (Linear)",
    description:
      "Killing an enemy increases your health permanently by 1 (+1 per stack), up to a maximum of 100 (+100 per stack) health.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Infusion",
  },
  {
    id: "scrapg",
    name: "Item Scrap, Green",
    imageUrl: "/items/uncommon/scrapg.png",
    rarity: "uncommon",
    category: "",
    description:
      "Does nothing. Prioritized when used with 3D Printers.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Item_Scrap,_Green",
  },
  {
    id: "kjaro-band",
    name: "Kjaro's Band",
    imageUrl: "/items/uncommon/kjaro-band.png",
    rarity: "uncommon",
    category: "Damage (Linear)",
    description:
      "Hits that deal more than 400% damage also blasts enemies with a runic flame tornado, dealing 300% (+300% per stack) TOTAL damage over time. Recharges every 10 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Kjaro%27s_Band",
  },
  {
    id: "leeching-seed",
    name: "Leeching Seed",
    imageUrl: "/items/uncommon/leeching-seed.png",
    rarity: "uncommon",
    category: "Healing (Linear)",
    description: "Dealing damage heals you for 1 (+1 per stack) health.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Leeching_Seed",
  },
  {
    id: "lepton-daisy",
    name: "Lepton Daisy",
    imageUrl: "/items/uncommon/lepton-daisy.png",
    rarity: "uncommon",
    category: "Healing (Linear)",
    description:
      "Release a healing nova during the Teleporter event, healing all nearby allies for 50% of their maximum health. Occurs 1 (+1 per stack) times.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Lepton_Daisy",
  },
  {
    id: "luminous-shot",
    name: "Luminous Shot",
    imageUrl: "/items/uncommon/luminous-shot.png",
    rarity: "uncommon",
    category: "Damage (Linear)",
    description:
      "Activating Secondary skill stores up to 5 charges (+1 per stack). Requires 3 charges for your Primary skill to fire lightning strikes, dealing 175% TOTAL damage (+50% per stack) each. Reduces Secondary skill cooldown by 20%.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Luminous_Shot",
  },
  {
    id: "noxious-thorn",
    name: "Noxious Thorn",
    imageUrl: "/items/uncommon/noxious-thorn.png",
    rarity: "uncommon",
    category: "Damage (Linear)",
    description:
      "Gain 10% chance to bleed an enemy. On killing an enemy, transfer 33% of every debuff stack to 1 enemy (+1 per stack) within 20m (+5m per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Noxious_Thorn",
  },
  {
    id: "old-guillotine",
    name: "Old Guillotine",
    imageUrl: "/items/uncommon/old-guillotine.png",
    rarity: "uncommon",
    category: "Damage (Hyperbolic)",
    description:
      "Instantly kill Elite enemies below 13% (+13% per stack) health",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Old_Guillotine",
  },
  {
    id: "war-stealthkit",
    name: "Old Stealthkit",
    imageUrl: "/items/uncommon/war-stealthkit.png",
    rarity: "uncommon",
    category: "Utility (Exponential)",
    description:
      "Falling below 25% health causes you to gain 40% movement speed and invisibility for 5s. Recharges every 30 seconds (-50% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Old_Stealthkit",
  },
  {
    id: "prayer-beads",
    name: "Prayer Beads",
    imageUrl: "/items/uncommon/prayer-beads.png",
    rarity: "uncommon",
    category: "Utility (Linear)",
    description:
      "Grows by gaining experience, storing 20% (+5% per item stack) bonus stats (health, regeneration, and damage). On removal, gain all stored stats.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Prayer_Beads",
  },
  {
    id: "predatory-instincts",
    name: "Predatory Instincts",
    imageUrl: "/items/uncommon/predatory-instincts.png",
    rarity: "uncommon",
    category: "Damage (Linear)",
    description:
      "Gain 5% critical chance. Critical strikes increase attack speed by 12%. Maximum cap of 36% (+24% per stack) attack speed.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Predatory_Instincts",
  },
  {
    id: "razorwire",
    name: "Razorwire",
    imageUrl: "/items/uncommon/razorwire.png",
    rarity: "uncommon",
    category: "Damage (Linear)",
    description:
      "Getting hit causes you to explode in a burst of razors, dealing 160% damage. Hits up to 5 (+2 per stack) targets in a 25m (+10m per stack) radius",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Razorwire",
  },
  {
    id: "red-whip",
    name: "Red Whip",
    imageUrl: "/items/uncommon/red-whip.png",
    rarity: "uncommon",
    category: "Utility (Linear)",
    description:
      "Leaving combat increases your movement speed by 30% (+30% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Red_Whip",
  },
  {
    id: "regenerating-scrap",
    name: "Regenerating Scrap",
    imageUrl: "/items/uncommon/regenerating-scrap.png",
    rarity: "uncommon",
    category: "",
    description:
      "Does nothing. Prioritized when used with Uncommon 3D Printers. At the start of each stage, it regenerates.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Regenerating_Scrap",
  },
  {
    id: "rose-buckler",
    name: "Rose Buckler",
    imageUrl: "/items/uncommon/rose-buckler.png",
    rarity: "uncommon",
    category: "Defense (Linear)",
    description: "Increase armor by 30 (+30 per stack) while sprinting.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Rose_Buckler",
  },
  {
    id: "runald-band",
    name: "Runald's Band",
    imageUrl: "/items/uncommon/runald-band.png",
    rarity: "uncommon",
    category: "Damage (Linear)",
    description:
      "Hits that deal more than 400% damage also blasts enemies with a runic ice blast, slowing them by 80% for 3s (+3s per stack) and dealing 250% (+250% per stack) TOTAL damage. Recharges every 10 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Runald%27s_Brand",
  },
  {
    id: "sale-star",
    name: "Sale Star",
    imageUrl: "/items/uncommon/sale-star.png",
    rarity: "uncommon",
    category: "Utility (Linear)",
    description:
      "Gain an extra item on the first chest opened per stage. Each additional Sale Star increases the chance of getting more items by 5%.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Sale_Star",
  },
  {
    id: "request-form",
    name: "Shipping Request Form",
    imageUrl: "/items/uncommon/request-form.png",
    rarity: "uncommon",
    category: "Utility (Special)",
    description:
      "A delivery containing 2 items (79%/20%/1%) will appear in a random location on each stage. (Increases rarity chances of the items per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Shipping_Request_Form",
  },
  {
    id: "shuriken",
    name: "Shuriken",
    imageUrl: "/items/uncommon/shuriken.png",
    rarity: "uncommon",
    category: "Damage (Linear)",
    description:
      "Activating your Primary skill also throws a shuriken that deals 400% (+100% per stack) base damage. You can hold up to 3 (+3 per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Shuriken",
  },
  {
    id: "squid-polyp",
    name: "Squid Polyp",
    imageUrl: "/items/uncommon/squid-polyp.png",
    rarity: "uncommon",
    category: "Utility (Linear)",
    description:
      "Activating an interactable summons a Squid Turret nearby that attacks nearby enemies for 100% damage. Lasts 30 seconds, up to 2 (+2 per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Squid_Polyp",
  },
  {
    id: "ukulele",
    name: "Ukulele",
    imageUrl: "/items/uncommon/ukulele.png",
    rarity: "uncommon",
    category: "Damage (Linear)",
    description:
      "25% chance to fire chain lightning for 80% TOTAL damage on up to 3 (+2 per stack) targets within 20m (+2m per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Ukulele",
  },
  {
    id: "transmitter",
    name: "Unstable Transmitter",
    imageUrl: "/items/uncommon/transmitter.png",
    rarity: "uncommon",
    category: "Utility (Linear)",
    description:
      "Falling below 25% health gives you temporary barrier and a dimensional aura that bleeds and teleports away enemies for 8s. Enemies killed by the aura extend the duration by 1s. At the start of each stage, it regenerates",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Unstable_Transmitter",
  },
  {
    id: "war-horn",
    name: "War Horn",
    imageUrl: "/items/uncommon/war-horn.png",
    rarity: "uncommon",
    category: "Utility (Linear)",
    description:
      "Activating your Equipment gives you +70% attack speed for 8s (+4s per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/War_Horn",
  },
  {
    id: "wax-quail",
    name: "Wax Quail",
    imageUrl: "/items/uncommon/wax-quail.png",
    rarity: "uncommon",
    category: "Utility (Linear)",
    description:
      "Jumping while sprinting boosts you forward by 10m (+10m per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Wax_Quail",
  },
  {
    id: "wotw",
    name: "Will-o'-the-wisp",
    imageUrl: "/items/uncommon/wotw.png",
    rarity: "uncommon",
    category: "Damage (Linear)",
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
    category: "Utility (Linear)",
    description:
      "All random effects are rolled +1 (+1 per stack) times for a favorable outcome.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/57_Leaf_Clover",
  },
  {
    id: "aegis",
    name: "Aegis",
    imageUrl: "/items/legendary/aegis.png",
    rarity: "legendary",
    category: "Defense (Linear)",
    description:
      "Healing past full grants you a temporary barrier for 50% (+50% per stack) of the amount you healed.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Aegis",
  },
  {
    id: "alien-head",
    name: "Alien Head",
    imageUrl: "/items/legendary/alien-head.png",
    rarity: "legendary",
    category: "Utility (Exponential)",
    description: "Reduce skill cooldowns by 25% (+25% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Alien_Head",
  },
  {
    id: "raincoat",
    name: "Ben's Raincoat",
    imageUrl: "/items/legendary/raincoat.png",
    rarity: "legendary",
    category: "Defense (Linear)",
    description:
      "Prevents 1 (+1 per stack) debuff and instead grants a temporary barrier for 10% of maximum health. Recharges every 5 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Ben%27s_Raincoat",
  },
  {
    id: "bottled-chaos",
    name: "Bottled Chaos",
    imageUrl: "/items/legendary/bottled-chaos.png",
    rarity: "legendary",
    category: "Utility (Linear)",
    description:
      "Trigger a random equipment effect 1 (+1 per stack) time(s).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Bottled_Chaos",
  },
  {
    id: "brainstalks",
    name: "Brainstalks",
    imageUrl: "/items/legendary/brainstalks.png",
    rarity: "legendary",
    category: "Utility (Linear)",
    description:
      "Upon killing an elite monster, enter a frenzy for 4s (+4s per stack) where skills have 0.5s cooldowns.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Brainstalks",
  },
  {
    id: "behemoth",
    name: "Brilliant Behemoth",
    imageUrl: "/items/legendary/behemoth.png",
    rarity: "legendary",
    category: "Damage (Linear)",
    description:
      "All your attacks explode in a 4m (+2.5m per stack) radius for a bonus 60% TOTAL damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Brilliant_Behemoth",
  },
  {
    id: "ceremonial-dagger",
    name: "Ceremonial Dagger",
    imageUrl: "/items/legendary/ceremonial-dagger.png",
    rarity: "legendary",
    category: "Damage (Linear)",
    description:
      "Killing an enemy fires out 3 homing daggers that deal 150% (+150% per stack) base damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Ceremonial_Dagger",
  },
  {
    id: "defensive-microbots",
    name: "Defensive Microbots",
    imageUrl: "/items/legendary/defensive-microbots.png",
    rarity: "legendary",
    category: "Defense (Linear)",
    description:
      "Shoot down 1 (+1 per stack) projectiles within 20m every 0.5 seconds. Recharge rate scales with attack speed.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Defensive_Microbots",
  },
  {
    id: "dio",
    name: "Dio's Best Friend",
    imageUrl: "/items/legendary/dio.png",
    rarity: "legendary",
    category: "Utility (Linear)",
    description:
      "Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Dio%27s_Best_Friend",
  },
  {
    id: "electric-boomerang",
    name: "Electric Boomerang",
    imageUrl: "/items/legendary/electric-boomerang.png",
    rarity: "legendary",
    category: "Damage (Linear)",
    description:
      "15% chance on hit to fire an electric boomerang that slices through enemies dealing 120% base damage (+120% per stack) and deals an additional 120% base damage per second and stuns all enemies hit. Can strike enemies on the way back.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Electric_Boomerang",
  },
  {
    id: "frost-relic",
    name: "Frost Relic",
    imageUrl: "/items/legendary/frost-relic.png",
    rarity: "legendary",
    category: "Damage (Linear)",
    description:
      "Killing an enemy surrounds you with an ice storm that deals 1200% damage per second and slows enemies by 80% for 1.5s. The storm grows with every kill, increasing its radius by 2m. Stacks up to 18m (+12m per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Frost_Relic",
  },
  {
    id: "growth-nectar",
    name: "Growth Nectar",
    imageUrl: "/items/legendary/growth-nectar.png",
    rarity: "legendary",
    category: "Utility (Linear)",
    description:
      "Grants 4% increase to ALL stats for each buff, up to a maximum of 4 (+4 per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Growth_Nectar",
  },
  {
    id: "h3ad-5t",
    name: "H3AD-5T v2",
    imageUrl: "/items/legendary/h3ad-5t.png",
    rarity: "legendary",
    category: "Utility (Reciprocal)",
    description:
      "Increase jump height. Creates a 5m-100m radius kinetic explosion on hitting the ground, dealing 1000%-10000% base damage that scales up with fall distance. Recharges in 10 (-50% per stack) seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/H3AD-5T_v2",
  },
  {
    id: "happiest-mask",
    name: "Happiest Mask",
    imageUrl: "/items/legendary/happiest-mask.png",
    rarity: "legendary",
    category: "Utility (Linear)",
    description:
      "Killing enemies has a 7% chance to spawn a ghost of the killed enemy with 1500% damage. Lasts 30s (+30s per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Happiest_Mask",
  },
  {
    id: "afterburner",
    name: "Hardlight Afterburner",
    imageUrl: "/items/legendary/afterburner.png",
    rarity: "legendary",
    category: "Utility (Linear)",
    description:
      "Add +2 (+2 per stack) charges of your Utility skill. Reduces Utility skill cooldown by 33%.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Hardlight_Afterburner",
  },
  {
    id: "desk-plant",
    name: "Interstellar Desk Plant",
    imageUrl: "/items/legendary/desk-plant.png",
    rarity: "legendary",
    category: "Healing (Linear)",
    description:
      "On kill, plant a healing fruit seed that grows into a plant after 5 seconds. The plant heals for 5% (+5% per stack) of maximum health every 0.5 second to allies within 5m (+5m per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Interstellar_Desk_Plant",
  },
  {
    id: "scrapr",
    name: "Item Scrap, Red",
    imageUrl: "/items/legendary/scrapr.png",
    rarity: "legendary",
    category: "",
    description:
      "Does nothing. Prioritized when used with 3D Printers.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Item_Scrap,_Red",
  },

  {
    id: "laser-scope",
    name: "Laser Scope",
    imageUrl: "/items/legendary/laser-scope.png",
    rarity: "legendary",
    category: "Damage (Linear)",
    description:
      "Critical Strikes deal an additional 100% damage (+100% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Laser_Scope",
  },
  {
    id: "nkuhana-opinion",
    name: "N'kuhana's Opinion",
    imageUrl: "/items/legendary/nkuhana-opinion.png",
    rarity: "legendary",
    category: "Damage (Linear)",
    description:
      "Store 100% (+100% per stack) of healing as Soul Energy. After your Soul Energy reaches 10% of your maximum health, fire a skull that deals 250% of your Soul Energy as damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/N%27kuhana%27s_Opinion",
  },
  {
    id: "pocket-icbm",
    name: "Pocket I.C.B.M.",
    imageUrl: "/items/legendary/pocket-icbm.png",
    rarity: "legendary",
    category: "Damage (Linear)",
    description:
      "All missile items and equipment fire an additional 2 missiles. Increase missile damage by 0% (+50% per stack)",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Pocket_I.C.B.M.",
  },
  {
    id: "rejuvenation-rack",
    name: "Rejuvenation Rack",
    imageUrl: "/items/legendary/rejuvenation-rack.png",
    rarity: "legendary",
    category: "Healing (Linear)",
    description: "Heal +100% (+100% per stack) more.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Rejuvenation_Rack",
  },
  {
    id: "resonance-disc",
    name: "Resonance Disc",
    imageUrl: "/items/legendary/resonance-disc.png",
    rarity: "legendary",
    category: "Damage (Linear)",
    description:
      "Killing 4 enemies in 7 seconds charges the Resonance Disc. The disc launches itself toward a target for 300% base damage (+300% per stack), piercing all enemies it doesn't kill, and then explodes for 1000% base damage (+1000% per stack). Returns to the user, striking all enemies along the way for 300% base damage (+300% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Resonance_Disc",
  },
  {
    id: "runic-lens",
    name: "Runic Lens",
    imageUrl: "/items/legendary/runic-lens.png",
    rarity: "legendary",
    category: "Damage (Linear)",
    description:
      "3% chance on hit to call a meteor strike, dealing 2000% base damage. Every 100% attack damage dealt increase the activation chance by 3% (+3% per stack) and damage by 150% (+50% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Runic_Lens",
  },
  {
    id: "sentinent-hook",
    name: "Sentient Meat Hook",
    imageUrl: "/items/legendary/sentinent-hook.png",
    rarity: "legendary",
    category: "Damage (Mixed)",
    description:
      "20% (+20% per stack [Hyperbolic]) chance on hit to fire homing hooks at up to 10 (+5 per stack [Linear]) enemies for 100% TOTAL damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Sentient_Meat_Hook",
  },
  {
    id: "shattering-justice",
    name: "Shattering Justice",
    imageUrl: "/items/legendary/shattering-justice.png",
    rarity: "legendary",
    category: "Damage (Linear)",
    description: "After hitting an enemy 5 times, reduce their armor by 60 for 8 (+8 per stack) seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Shattering_Justice",
  },
  {
    id: "sonorous-whispers",
    name: "Sonorous Whispers",
    imageUrl: "/items/legendary/sonorous-whispers.png",
    rarity: "legendary",
    category: "Utility (Linear)",
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
    category: "Summon (Linear)",
    description:
      "Gain Col. Droneman. Drones gain +50% (+50% per stack) attack speed and cooldown reduction. Drones gain 10% chance to fire a missile on hit, dealing 300% TOTAL damage. Drones gain an automatic chain gun that deals 6x100% damage, bouncing to 2 enemies.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Spare_Drone_Parts",
  },

  {
    id: "scorpion",
    name: "Symbiotic Scorpion",
    imageUrl: "/items/legendary/scorpion.png",
    rarity: "legendary",
    category: "Damage (Linear)",
    description:
      "100% chance on hit to reduce armor by 2 (+2 per stack) permanently.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Symbiotic_Scorpion",
  },

  {
    id: "tesla-coil",
    name: "Tesla Coil",
    imageUrl: "/items/legendary/tesla-coil.png",
    rarity: "legendary",
    category: "Damage (Linear)",
    description:
      "Fire out lightning that hits 3 (+2 per stack) enemies for 200% base damage every 0.5s. The Tesla Coil switches off every 10 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Tesla_Coil",
  },
  {
    id: "wake-vultures",
    name: "Wake of Vultures",
    imageUrl: "/items/legendary/wake-vultures.png",
    rarity: "legendary",
    category: "Utility (Linear)",
    description:
      "Killing an elite enemy temporarily grants you their power for 8s (+5s per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Wake_of_Vultures",
  },
  {
    id: "war-bonds",
    name: "War Bonds",
    imageUrl: "/items/legendary/war-bonds.png",
    rarity: "legendary",
    category: "Utility (Linear)",
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
    category: "",
    description:
      "A stone shard with immense power.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Artifact_Key",
  },
  {
    id: "charged-perforator",
    name: "Charged Perforator",
    imageUrl: "/items/boss/charged-perforator.png",
    rarity: "boss",
    category: "Damage (Linear)",
    description:
      "10% chance on hit to down a lightning strike, dealing 500% (+500% per stack) damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Charged_Perforator",
  },
  {
    id: "defense-nucleus",
    name: "Defense Nucleus",
    imageUrl: "/items/boss/defense-nucleus.png",
    rarity: "boss",
    category: "Summon (Linear)",
    description:
      "Killing elite monsters spawns an Alpha Construct with bonus 300% damage and 300% health. Limited to 4 (+4 per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Defense_Nucleus",
  },
  {
    id: "empathy-cores",
    name: "Empathy Cores",
    imageUrl: "/items/boss/empathy-cores.png",
    rarity: "boss",
    category: "Summon (Linear)",
    description:
      "Every 30 seconds, summon two Solus Probes that gain +100% (+100% per stack) damage per ally on your team.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Empathy_Cores",
  },
  {
    id: "genesis-loop",
    name: "Genesis Loop",
    imageUrl: "/items/boss/genesis-loop.png",
    rarity: "boss",
    category: "Damage (Linear)",
    description:
      "Falling below 25% health causes you to explode, dealing 6000% base damage. Recharges every 30 / (2 +1 per stack) seconds .",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Genesis_Loop",
  },
  {
    id: "halcyon-seed",
    name: "Halcyon Seed",
    imageUrl: "/items/boss/halcyon-seed.png",
    rarity: "boss",
    category: "Summon (Linear)",
    description:
      "Summon Aurelionite during the Teleporter event with +100% (+100% per stack) damage and +100% health.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Halcyon_Seed",
  },
  {
    id: "irradiant-pearl",
    name: "Irradiant Pearl",
    imageUrl: "/items/boss/irradiant-pearl.png",
    rarity: "boss",
    category: "Utility (Linear)",
    description: "Increase ALL stats by 10% (+10% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Irradiant_Pearl",
  },
  {
    id: "scrapy",
    name: "Item Scrap, Yellow",
    imageUrl: "/items/boss/scrapy.png",
    rarity: "boss",
    category: "",
    description:
      "Does nothing. Prioritized when used with 3D Printers.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Item_Scrap,_Yellow",
  },
  {
    id: "little-disciple",
    name: "Little Disciple",
    imageUrl: "/items/boss/little-disciple.png",
    rarity: "boss",
    category: "Damage (Linear)",
    description:
      "Fire a tracking wisp for 300% (+300% per stack) damage. Fires every 1.6 seconds while sprinting. Fire rate increases with movement speed.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Little_Disciple",
  },
  {
    id: "mired-urn",
    name: "Mired Urn",
    imageUrl: "/items/boss/mired-urn.png",
    rarity: "boss",
    category: "Damage (Linear)",
    description:
      "While in combat, the nearest 1 (+1 per stack) enemies to you within 13m will be 'tethered' to you, dealing 100% damage per second, applying tar, and healing you for 100% of the damage dealt.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Mired_Urn",
  },
  {
    id: "molten-perforator",
    name: "Molten Perforator",
    imageUrl: "/items/boss/molten-perforator.png",
    rarity: "boss",
    category: "Damage (Linear)",
    description:
      "10% chance on hit to call forth 3 magma balls from an enemy, dealing 300% (+300% per stack) damage each.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Molten_Perforator",
  },
  {
    id: "pearl",
    name: "Pearl",
    imageUrl: "/items/boss/pearl.png",
    rarity: "boss",
    category: "Utility (Linear)",
    description: "Increase maximum health by 10% (+10% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Pearl",
  },
  {
    id: "planula",
    name: "Planula",
    imageUrl: "/items/boss/planula.png",
    rarity: "boss",
    category: "Healing (Linear)",
    description: "Heal from incoming damage for 15 (+15 per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Planula",
  },
  {
    id: "gland",
    name: "Queen's Gland",
    imageUrl: "/items/boss/gland.png",
    rarity: "boss",
    category: "Summon (Linear)",
    description:
      "Every 30 seconds, summon a Beetle Guard with bonus 300% damage and 100% health. Can have up to 1 (+1 per stack) Guards at a time.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Queen%27s_Gland",
  },
  {
    id: "shatterspleen",
    name: "Shatterspleen",
    imageUrl: "/items/boss/shatterspleen.png",
    rarity: "boss",
    category: "Damage (Linear)",
    description:
      "Gain 5% critical chance. Critical Strikes bleed enemies for 240% base damage. Bleeding enemies explode on death for 400% (+400% per stack) damage, plus an additional 15% (+15% per stack) of their maximum health.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Shatterspleen",
  },
  {
    id: "titanic-knurl",
    name: "Titanic Knurl",
    imageUrl: "/items/boss/titanic-knurl.png",
    rarity: "boss",
    category: "Utility (Linear)",
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
    category: "",
    description:
      "Seems to do nothing... but...",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Beads_of_Fealty",
  },
  {
    id: "brittle-crown",
    name: "Brittle Crown",
    imageUrl: "/items/lunar/brittle-crown.png",
    rarity: "lunar",
    category: "Utility (Linear)",
    description:
      "30% chance on hit to gain 2 (+2 per stack) gold. Scales over time. Lose gold on taking damage equal to 100% (+100% per stack) of the maximum health percentage you lost.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Brittle_Crown",
  },
  {
    id: "corpsebloom",
    name: "Corpsebloom",
    imageUrl: "/items/lunar/corpsebloom.png",
    rarity: "lunar",
    category: "Healing (Mixed)",
    description:
      "Heal +100% (+100% per stack [Linear]) more. All healing is applied over time. Can heal for a maximum of 10% (-50% per stack [Reciprocal]) of your health per second.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Corpsebloom",
  },
  {
    id: "defiant-gouge",
    name: "Defiant Gouge",
    imageUrl: "/items/lunar/defiant-gouge.png",
    rarity: "lunar",
    category: "Summon (Linear)",
    description:
      "Using a Shrine summons enemies (stronger per stack) nearby. Scales over time.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Defiant_Gouge",
  },
  {
    id: "egoc",
    name: "Egocentrism",
    imageUrl: "/items/lunar/egocentrism.png",
    rarity: "lunar",
    category: "Damage (Mixed)",
    description:
      "Every 3 (-50% per stack [Reciprocal]) seconds, gain an orbiting bomb that detonates on impact for 360% damage, up to a maximum of 3 bombs (+1 per stack [Linear]). Every 60 seconds, a random item is converted into this item.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Egocentrism",
  },
  {
    id: "essence",
    name: "Essence of Heresy",
    imageUrl: "/items/lunar/essence-heresy.png",
    rarity: "lunar",
    category: "Utility (Linear)",
    description:
      "Replace your Special Skill with Ruin. Dealing damage adds a stack of Ruin for 10 (+10 per stack) seconds. Activating the skill detonates all Ruin stacks at unlimited range, dealing 300% damage plus 120% damage per stack of Ruin. Recharges after 8 (+8 per stack) seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Essence_of_Heresy",
  },
  {
    id: "eulogy",
    name: "Eulogy Zero",
    imageUrl: "/items/lunar/eulogy-zero.png",
    rarity: "lunar",
    category: "Utility (Linear)",
    description:
      "Items have a 5% (+5% per stack) chance to become a lunar item instead.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Eulogy_Zero",
  },
  {
    id: "focused-convergence",
    name: "Focused Convergence",
    imageUrl: "/items/lunar/focused-convergence.png",
    rarity: "lunar",
    category: "Utility (Mixed)",
    description:
      "Teleporters charge 30% (+30% per stack [Linear]) faster, but the size of the Teleporter zone is 50% (-50% per stack [Reciprocal]) smaller.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Focused_Convergence",
  },
  {
    id: "gesture-drowned",
    name: "Gesture of the Drowned",
    imageUrl: "/items/lunar/gesture-drowned.png",
    rarity: "lunar",
    category: "Utility (Exponential)",
    description:
      "Reduce Equipment cooldown by 50% (+15% per stack). Forces your Equipment to activate whenever it is off cooldown.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Gesture_of_the_Drowned",
  },

  {
    id: "hooks",
    name: "Hooks of Heresy",
    imageUrl: "/items/lunar/hooks-heresy.png",
    rarity: "lunar",
    category: "Utility (Linear)",
    description:
      "Replace your Secondary Skill with Slicing Maelstrom. Charge up a projectile that deals 875% damage per second to nearby enemies, exploding after 3 seconds to deal 700% damage and root enemies for 3 (+3 per stack) seconds. Recharges after 5 (+5 per stack) seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Hooks_of_Heresy",
  },
  {
    id: "light-flux",
    name: "Light Flux Pauldron",
    imageUrl: "/items/lunar/light-flux.png",
    rarity: "lunar",
    category: "Utility (Mixed)",
    description:
      "Decrease skill cooldowns by 50% (+50% per stack [Exponential]). Decrease attack speed by 50% (+50% per stack [Reciprocal]).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Light_Flux_Pauldron",
  },
  {
    id: "longstanding-solitude",
    name: "Longstanding Solitude",
    imageUrl: "/items/lunar/longstanding-solitude.png",
    rarity: "lunar",
    category: "Utility (Linear)",
    description:
      "On level up gain a free unlock for the next purchase (+1 free unlock per item stack) but all gold is converted to experience. Anything that costs gold is increased by 50% (+50% per item stack)",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Longstanding_Solitude",
  },
  {
    id: "mercurial",
    name: "Mercurial Rachis",
    imageUrl: "/items/lunar/mercurial-rachis.png",
    rarity: "lunar",
    category: "Utility (Exponential)",
    description:
      "Creates a Ward of Power in a random location nearby that buffs both enemies and allies within 16m (+50% per stack), causing them to deal +50% damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Mercurial_Rachis",
  },
  {
    id: "purity",
    name: "Purity",
    imageUrl: "/items/lunar/purity.png",
    rarity: "lunar",
    category: "Utility (Linear)",
    description:
      "All skill cooldowns are reduced by 2 (+1 per stack) seconds. All random effects are rolled +1 (+1 per stack) times for an unfavorable outcome.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Purity",
  },
  {
    id: "glass",
    name: "Shaped Glass",
    imageUrl: "/items/lunar/glass.png",
    rarity: "lunar",
    category: "Damage (Exponential)",
    description:
      "Increase base damage by 100% (+100% per stack). Reduce maximum health by 50% (+50% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Shaped_Glass",
  },
  {
    id: "stone-flux",
    name: "Stone Flux Pauldron",
    imageUrl: "/items/lunar/stone-flux.png",
    rarity: "lunar",
    category: "Utility (Mixed)",
    description:
      "Increase max health by 100% (+100% per stack [Linear]). Reduce movement speed by 50% (+50% per stack [Reciprocal]).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Stone_Flux_Pauldron",
  },
  {
    id: "strides",
    name: "Strides of Heresy",
    imageUrl: "/items/lunar/strides-heresy.png",
    rarity: "lunar",
    category: "Utility (Linear)",
    description:
      "Replace your Utility Skill with Shadowfade. Fade away, becoming intangible and gaining +30% movement speed. Heal for 18.2% (+18.2% per stack) of your maximum health. Lasts 3 (+3 per stack) seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Strides_of_Heresy",
  },
  {
    id: "transcendence",
    name: "Transcendence",
    imageUrl: "/items/lunar/transcendence.png",
    rarity: "lunar",
    category: "Defense (Linear)",
    description:
      "Convert all but 1 health into regenerating shields. Gain 50% (+25% per stack) maximum health.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Transcendence",
  },
  {
    id: "visions",
    name: "Visions of Heresy",
    imageUrl: "/items/lunar/visions-heresy.png",
    rarity: "lunar",
    category: "Utility (Linear)",
    description:
      "Replace your Primary Skill with Hungering Gaze. Fire a flurry of tracking shards that detonate after a delay, dealing 120% base damage. Hold up to 12 charges (+12 per stack) that reload after 2 seconds (+2 per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/VVisions_of_Heresy",
  },
  // Void Items
  {
    id: "benthic-bloom",
    name: "Benthic Bloom",
    imageUrl: "/items/void/benthic-bloom.png",
    rarity: "void",
    category: "Utility (Linear)",
    description:
      "Upgrades 3 (+3 per stack) random items to items of the next higher rarity at the start of each stage. Corrupts all 57 Leaf Clovers.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Benthic_Bloom",
  },
  {
    id: "encrusted-key",
    name: "Encrusted Key",
    imageUrl: "/items/void/encrusted-key.png",
    rarity: "void",
    category: "",
    description:
      "A hidden cache containing an item (60%/30%/10%) will appear in a random location on each stage. Opening the cache consumes this item. Corrupts all Rusted Keys.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Encrusted_Key",
  },

  {
    id: "lenses",
    name: "Lost Seer's Lenses",
    imageUrl: "/items/void/lenses.png",
    rarity: "void",
    category: "Damage (Linear)",
    description:
      "Your attacks have a 0.5% (+0.5% per stack) chance to instantly kill a non-Boss enemy. Corrupts all Lens-Maker's Glasses.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Lost_Seer%27s_Lenses",
  },
  {
    id: "lysate-cell",
    name: "Lysate Cell",
    imageUrl: "/items/void/lysate-cell.png",
    rarity: "void",
    category: "Utility (Linear)",
    description:
      "Add +1 (+1 per stack) charge of your Special skill. Reduces Special skill cooldown by 33%. Corrupts all Fuel Cells.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Lysate_Cell",
  },
  {
    id: "needletick",
    name: "Needletick",
    imageUrl: "/items/void/needletick.png",
    rarity: "void",
    category: "Damage (Linear)",
    description:
      "10% (+10% per stack) chance to collapse an enemy for 400% base damage. Corrupts all Tri-Tip Daggers.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Needletick",
  },
  {
    id: "hatched-zoea",
    name: "Newly Hatched Zoea",
    imageUrl: "/items/void/hatched-zoea.png",
    rarity: "void",
    category: "Summon (Mixed)",
    description:
      "Every 60 (-50% per stack [Reciprocal]) seconds, gain a random Void ally. Can have up to 1 (+1 per stack [Linear]) allies at a time. Corrupts all yellow items.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Hatched_Zoea",
  },
  {
    id: "plasma-shrimp",
    name: "Plasma Shrimp",
    imageUrl: "/items/void/plasma-shrimp.png",
    rarity: "void",
    category: "Damage (Linear)",
    description:
      "Gain a shield equal to 10% of your maximum health. While you have a shield, hitting an enemy fires a missile that deals 40% (+40% per stack) TOTAL damage. Corrupts all AtG Missile Mk. 1s.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Plasma_Shrimp",
  },
  {
    id: "pluripotent-larva",
    name: "Pluripotent Larva",
    imageUrl: "/items/void/pluripotent-larva.png",
    rarity: "void",
    category: "Utility (Linear)",
    description:
      "Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability, and all of your items that can be corrupted will be. Corrupts all Dio's Best Friends.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Pluripotent_Larva",
  },
  {
    id: "polylute",
    name: "Polylute",
    imageUrl: "/items/void/polylute.png",
    rarity: "void",
    category: "Damage (Linear)",
    description:
      "25% chance to fire lightning for 60% TOTAL damage up to 3 (+3 per stack) times. Corrupts all Ukuleles",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Polylute",
  },
  {
    id: "safer-spaces",
    name: "Safer Spaces",
    imageUrl: "/items/void/safer-spaces.png",
    rarity: "void",
    category: "Defense (Exponential)",
    description:
      "Blocks incoming damage once. Recharges after 15 seconds (-10% per stack) Corrupts all Tougher Times.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Safer_Spaces",
  },
  {
    id: "singularity-band",
    name: "Singularity Band",
    imageUrl: "/items/void/singularity-band.png",
    rarity: "void",
    category: "Damage (Linear)",
    description:
      "Hits that deal more than 400% damage also fire a black hole that draws enemies within 15m into its center. Lasts 5 seconds before collapsing, dealing 100% (+100% per stack) TOTAL damage. Recharges every 20 seconds. Corrupts all Runald's and Kjaro's Bands.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Singularity_Band",
  },
  {
    id: "tentabauble",
    name: "Tentabauble",
    imageUrl: "/items/void/tentabauble.png",
    rarity: "void",
    category: "Utility (Mixed)",
    description:
      "5% (+5% per stack [Hyperbolic]) chance on hit to root enemies for 1s (+1s per stack [Linear]). Corrupts all Chronobaubles.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Tentabauble",
  },
  {
    id: "voidsent-flame",
    name: "Voidsent Flame",
    imageUrl: "/items/void/voidsent-flame.png",
    rarity: "void",
    category: "Damage (Linear)",
    description:
      "Upon hitting an enemy at full health, spawn a lava pillar in a 12m (+2.4m per stack) radius for 260% (+156% per stack) base damage. Corrupts all Will-o'-the-wisps.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Voidsent_Flame",
  },
  {
    id: "weeping-fungus",
    name: "Weeping Fungus",
    imageUrl: "/items/void/weeping-fungus.png",
    rarity: "void",
    category: "Healing (Linear)",
    description:
      "Heals for 2% (+2% per stack) of your health every second while sprinting. Corrupts all Bustling Fungi.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Weeping_Fungus",
  },
  // Equipment
  {
    id: "blast-shower",
    name: "Blast Shower",
    imageUrl: "/items/equipment/blast-shower.png",
    rarity: "equipment",
    category: "Utility (20s Cooldown)",
    description:
      "Cleanse all negative effects. Includes debuffs, damage over time, and nearby projectiles.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Blast_Shower",
  },
  {
    id: "missile-launcher",
    name: "Disposable Missile Launcher",
    imageUrl: "/items/equipment/missile-launcher.png",
    rarity: "equipment",
    category: "Damage (45s Cooldown)",
    description:
      "Fire a swarm of 12 missiles that deal 12x300% damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Disposable_Missile_Launcher",
  },
  {
    id: "eccentric-vase",
    name: "Eccentric Vase",
    imageUrl: "/items/equipment/eccentric-vase.png",
    rarity: "equipment",
    category: "Utility (45s Cooldown)",
    description:
      "Create a quantum tunnel of up to 1000m in length. Lasts 30 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Eccentric_Vase",
  },
  {
    id: "executive-card",
    name: "Executive Card",
    imageUrl: "/items/equipment/executive-card.png",
    rarity: "equipment",
    category: "Utility (0.1s Cooldown)",
    description:
      "Whenever you make a gold purchase, get 10% of the spent gold back. If the purchase is a multishop terminal, the other terminals will remain open.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Executive_Card",
  },
  {
    id: "foreign-fruit",
    name: "Foreign Fruit",
    imageUrl: "/items/equipment/foreign-fruit.png",
    rarity: "equipment",
    category: "Healing (45s Cooldown)",
    description:
      "Instantly heal for 50% of your maximum health.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Foreign_Fruit",
  },
  {
    id: "forgive-me",
    name: "Forgive Me Please",
    imageUrl: "/items/equipment/forgive-me.png",
    rarity: "equipment",
    category: "Summon (45s Cooldown)",
    description:
      "Throw a cursed doll out that triggers any On-Kill effects you have every 1 second for 8 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Forgive_Me_Please",
  },
  {
    id: "fuel-array",
    name: "Fuel Array",
    imageUrl: "/items/equipment/fuel-array.png",
    rarity: "equipment",
    category: "",
    description: "Looks like it could power something. EXTREMELY unstable...",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Fuel_AArray",
  },
  {
    id: "gnarled",
    name: "Gnarled Woodsprite",
    imageUrl: "/items/equipment/gnarled-woodsprite.png",
    rarity: "equipment",
    category: "Summon (15s Cooldown)",
    description:
      "Gain a Woodsprite follower that heals for 1.5% of your maximum health/second. Can be sent to an ally to heal them for 10% of their maximum health.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Gnarled_Woodsprite",
  },
  {
    id: "goboo-jr",
    name: "Ghor's Jr.",
    imageUrl: "/items/equipment/goboo-jr.png",
    rarity: "equipment",
    category: "Summon (100s Cooldown)",
    description:
      "Spawn a gummy clone that has 300% damage and 300% health. Expires in 30 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Goobo_Jr.",
  },
  {
    id: "gorag-opus",
    name: "Gorag's Opus",
    imageUrl: "/items/equipment/gorag-opus.png",
    rarity: "equipment",
    category: "Utility (45s Cooldown)",
    description:
      "All allies enter a frenzy for 7 seconds. Increases movement speed by 50% and attack speed by 100%.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Gorag%27s_Opus",
  },
  {
    id: "jade",
    name: "Jade Elephant",
    imageUrl: "/items/equipment/jade-elephant.png",
    rarity: "equipment",
    category: "Defense (45s Cooldown)",
    description: "Gain 500 armor for 5 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Jade_Elephant",
  },
  {
    id: "milky-chrysalis",
    name: "Milky Chrysalis",
    imageUrl: "/items/equipment/milky-chrysalis.png",
    rarity: "equipment",
    category: "Utility (60s Cooldown)",
    description:
      "Sprout wings and fly for 15 seconds. Gain +20% movement speed for the duration.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Milky_Chrysalis",
  },
  {
    id: "molotov",
    name: "Molotov (6-Pack)",
    imageUrl: "/items/equipment/molotov.png",
    rarity: "equipment",
    category: "Damage (45s Cooldown)",
    description:
      "Throw 6 molotov cocktails that ignites enemies for 500% base damage. Each molotov leaves a burning area for 200% damage per second.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Molotov_(6-Pack)",
  },
  {
    id: "ocular",
    name: "Ocular HUD",
    imageUrl: "/items/equipment/ocular.png",
    rarity: "equipment",
    category: "Utility (60s Cooldown)",
    description:
      "Gain +100% Critical Strike Chance for 8 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Ocular_HUD",
  },
  {
    id: "preon",
    name: "Preon Accumulator",
    imageUrl: "/items/equipment/preon-accumulator.png",
    rarity: "equipment",
    category: "Damage (140s Cooldown)",
    description:
      "Fires preon tendrils, zapping enemies within 35m for up to 600% damage/second. On contact, detonate in an enormous 20m explosion for 4000% damage.",
    wikiUrl: "https://riskofrain2andom.com/wiki/Preon_Accumulator",
  },
  {
    id: "primordial",
    name: "Primordial Cube",
    imageUrl: "/items/equipment/primordial-cube.png",
    rarity: "equipment",
    category: "Utility (60s Cooldown)",
    description:
      "Fire a black hole that draws enemies within 30m into its center. Lasts 10 seconds",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Primordial_Cube",
  },
  {
    id: "radar-scanner",
    name: "Radar Scanner",
    imageUrl: "/items/equipment/radar-scanner.png",
    rarity: "equipment",
    category: "Utility (45s Cooldown)",
    description:
      "Reveal all interactables within 500m for 10 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Radar_Scanner",
  },
  {
    id: "recycler",
    name: "Recycler",
    imageUrl: "/items/equipment/recycler.png",
    rarity: "equipment",
    category: "Utility (45s Cooldown)",
    description:
      "Transform an Item or Equipment into a different one. Can only be converted into the same tier one time.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Recycler",
  },
  {
    id: "remote-caffeinator",
    name: "Remote Caffeinator",
    imageUrl: "/items/equipment/remote-caffeinator.png",
    rarity: "equipment",
    category: "Healing (60s Cooldown)",
    description:
      "Request an Eclipse Zero Vending Machine from the UES Safe Travels. Delivery guaranteed in 5 seconds, dealing 2000% damage. Heal up to 3 targets for 25% of their maximum health.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Remote_Caffeinator",
  },
  {
    id: "capacitor",
    name: "Royal Capacitor",
    imageUrl: "/items/equipment/capacitor.png",
    rarity: "equipment",
    category: "Damage (20s Cooldown)",
    description:
      "Call down a lightning strike on a targeted monster, dealing 3000% damage and stunning nearby monsters.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Royal_Capacitor",
  },
  {
    id: "sawmerang",
    name: "Sawmerang",
    imageUrl: "/items/equipment/sawmerang.png",
    rarity: "equipment",
    category: "Damage (45s Cooldown)",
    description:
      "Throw three large saw blades that slice through enemies for 3x400% damage. Also deals an additional 3x100% damage per second while bleeding enemies. Can strike enemies again on the way back.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Sawmerang",
  },
  {
    id: "seed-life",
    name: "Seed of Life",
    imageUrl: "/items/equipment/seed-life.png",
    rarity: "equipment",
    category: "Revive (60s Cooldown)",
    description:
      "Revives the user when killed or dead allies on activation. Consumed on use.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Seed_of_Life",
  },
  {
    id: "massive-leech",
    name: "Massive Leech",
    imageUrl: "/items/equipment/massive-leech.png",
    rarity: "equipment",
    category: "Healing (60s Cooldown)",
    description:
      "Heal for 20% of the damage you deal. Lasts 8 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Massive_leech",
  },
  {
    id: "back-up",
    name: "The Back-Up",
    imageUrl: "/items/equipment/back-up.png",
    rarity: "equipment",
    category: "Summon (100s Cooldown)",
    description: "Call 4 Strike Drones to fight for you. Lasts 25 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/The_Back-up",
  },
  {
    id: "crowdfunder",
    name: "Crowdfunder",
    imageUrl: "/items/equipment/crowdfunder.png",
    rarity: "equipment",
    category: "Damage (Toggle)",
    description:
      "Fires a continuous barrage that deals 100% damage per bullet. Costs $1 per bullet. Cost increases over time.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Crowdfunder",
  },
  {
    id: "tricorn",
    name: "Trophy Hunter's Tricorn",
    imageUrl: "/items/equipment/tricorn.png",
    rarity: "equipment",
    category: "Unique (0s Cooldown)",
    description:
      "Execute any enemy capable of spawning a unique reward, and it will drop that item. Equipment is consumed on use.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/CCaptain%27s_Tricorn",
  },
  {
    id: "volcanic-egg",
    name: "Volcanic Egg",
    imageUrl: "/items/equipment/volcanic-egg.png",
    rarity: "equipment",
    category: "Utility (30s Cooldown)",
    description:
      "Turn into a draconic fireball for 5 seconds. Deal 500% damage on impact. Detonates at the end for 800% damage.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/VVolcanic_Egg",
  },
  // LunarEquipment Items
  {
    id: "effigy-grief",
    name: "Effigy of Grief",
    imageUrl: "/items/lunarEquipment/effigy-grief.png",
    rarity: "lunarEquipment",
    category: "Utility (15s Cooldown)",
    description:
      "ALL characters within are slowed by 50% and have their armor reduced by 20. Can place up to 5.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Effigy_of_Grief",
  },
  {
    id: "glowing-meteorite",
    name: "Glowing Meteorite",
    imageUrl: "/items/lunarEquipment/glowing-meteorite.png",
    rarity: "lunarEquipment",
    category: "Damage (140s Cooldown)",
    description:
      "Rain meteors from the sky, damaging ALL characters for 600% damage per blast. Lasts 20 seconds.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Glowing_Meteorite",
  },
  {
    id: "helfire",
    name: "Helfire Tincture",
    imageUrl: "/items/lunarEquipment/helfire-tincture.png",
    rarity: "lunarEquipment",
    category: "Damage (45s Cooldown)",
    description:
      "Ignite ALL characters within 15m for 12s. Deal 5% of your maximum health/second as burning as damage. The burn is 0.5x stronger on yourself, 0.25x stronger on allies, and 24x stronger on enemies.",
    wikiUrl: "https://riskofrain2andom.com/wiki/Helfire_Tincture",
  },
  {
    id: "spinel",
    name: "Spinel Tonic",
    imageUrl: "/items/lunarEquipment/spinel-tonic.png",
    rarity: "lunarEquipment",
    category: "Utility (60s Cooldown)",
    description:
      "Drink the Tonic, gaining a boost for 20 seconds. Increases damage by +100%. Increases attack speed by +70%. Increases armor by +20. Increases maximum health by +50%. Increases passive health regeneration by +300%. Increases movespeed by +30%. When the Tonic wears off, you have a 20% chance to gain a Tonic Affliction, reducing all of your stats by -5% (-5% per stack).",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Spinel_Tonic",
  },
  // EliteEquipment Items
  {
    id: "aurelionite-blessing",
    name: "Aurelionite's Blessing",
    imageUrl: "/items/eliteEquipment/aurelionite-blessing.png",
    rarity: "eliteEquipment",
    category: "(25s Cooldown)",
    description:
      "Become an aspect of radiance.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Aurelionite%27s_Blessing",
  },
  {
    id: "biting-embrace",
    name: "Her Biting Embrace",
    imageUrl: "/items/eliteEquipment/biting-embrace.png",
    rarity: "eliteEquipment",
    category: "",
    description:
      "Become an aspect of ice.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Her_Biting_Embrace",
  },
    {
    id: "reassurance",
    name: "His Reassurance",
    imageUrl: "/items/eliteEquipment/reassurance.png",
    rarity: "eliteEquipment",
    category: "",
    description:
      "Become an aspect of earth.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/His_Reassurance",
  },
    {
    id: "spiteful-boon",
    name: "His Spiteful Boon",
    imageUrl: "/items/eliteEquipment/spiteful-boon.png",
    rarity: "eliteEquipment",
    category: "",
    description:
      "Become an aspect of spite.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/His_Spiteful_Boon",
  },
  {
    id: "ifrit",
    name: "Ifrit's Distinction",
    imageUrl: "/items/eliteEquipment/ifrit-distinction.png",
    rarity: "eliteEquipment",
    category: "",
    description:
      "Become an aspect of fire.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Ifrit%27s_Distinction",
  },
  {
    id: "nkuhana-retort",
    name: "N'kuhana's Retort",
    imageUrl: "/items/eliteEquipment/nkuhana-retort.png",
    rarity: "eliteEquipment",
    category: "",
    description:
      "Become an aspect of corruption.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/N%27kuhana%27s_Retort",
  },

  {
    id: "shared-design",
    name: "Shared Design",
    imageUrl: "/items/eliteEquipment/shared-design.png",
    rarity: "eliteEquipment",
    category: "",
    description:
      "Become an aspect of perfection.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Shared_Design",
  },
  {
    id: "silence-strikes",
    name: "Silence Between Two Strikes",
    imageUrl: "/items/eliteEquipment/silence-strikes.png",
    rarity: "eliteEquipment",
    category: "",
    description:
      "Become an aspect of lightning.",
    wikiUrl:
      "https://riskofrain2.fandom.com/wiki/Silence_Between_Two_Strikes",
  },
  {
    id: "spectral-circlet",
    name: "Spectral Circlet",
    imageUrl: "/items/eliteEquipment/spectral-circlet.png",
    rarity: "eliteEquipment",
    category: "",
    description:
      "Become an aspect of incorporeality.",
    wikiUrl: "https://riskofrain2.fandom.com/wiki/Spectral_Circlet",
  },
];
