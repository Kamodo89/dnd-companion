// D&D 5.5e Equipment & Items Data
// Sources: PHB 2024, DMG 2024

// ─── WEAPONS ───
export const WEAPONS = [
  // Simple Melee
  { id: 'club', name: 'Club', category: 'Simple Melee', damage: '1d4', damageType: 'Bludgeoning', weight: 2, cost: '1 sp', properties: ['Light'], mastery: 'Slow' },
  { id: 'dagger', name: 'Dagger', category: 'Simple Melee', damage: '1d4', damageType: 'Piercing', weight: 1, cost: '2 gp', properties: ['Finesse', 'Light', 'Thrown (20/60)'], mastery: 'Nick' },
  { id: 'greatclub', name: 'Greatclub', category: 'Simple Melee', damage: '1d8', damageType: 'Bludgeoning', weight: 10, cost: '2 sp', properties: ['Two-Handed'], mastery: 'Push' },
  { id: 'handaxe', name: 'Handaxe', category: 'Simple Melee', damage: '1d6', damageType: 'Slashing', weight: 2, cost: '5 gp', properties: ['Light', 'Thrown (20/60)'], mastery: 'Vex' },
  { id: 'javelin', name: 'Javelin', category: 'Simple Melee', damage: '1d6', damageType: 'Piercing', weight: 2, cost: '5 sp', properties: ['Thrown (30/120)'], mastery: 'Slow' },
  { id: 'light-hammer', name: 'Light Hammer', category: 'Simple Melee', damage: '1d4', damageType: 'Bludgeoning', weight: 2, cost: '2 gp', properties: ['Light', 'Thrown (20/60)'], mastery: 'Nick' },
  { id: 'mace', name: 'Mace', category: 'Simple Melee', damage: '1d6', damageType: 'Bludgeoning', weight: 4, cost: '5 gp', properties: [], mastery: 'Sap' },
  { id: 'quarterstaff', name: 'Quarterstaff', category: 'Simple Melee', damage: '1d6', damageType: 'Bludgeoning', weight: 4, cost: '2 sp', properties: ['Versatile (1d8)'], mastery: 'Topple' },
  { id: 'sickle', name: 'Sickle', category: 'Simple Melee', damage: '1d4', damageType: 'Slashing', weight: 2, cost: '1 gp', properties: ['Light'], mastery: 'Nick' },
  { id: 'spear', name: 'Spear', category: 'Simple Melee', damage: '1d6', damageType: 'Piercing', weight: 3, cost: '1 gp', properties: ['Thrown (20/60)', 'Versatile (1d8)'], mastery: 'Sap' },
  // Simple Ranged
  { id: 'dart', name: 'Dart', category: 'Simple Ranged', damage: '1d4', damageType: 'Piercing', weight: 0.25, cost: '5 cp', properties: ['Finesse', 'Thrown (20/60)'], mastery: 'Vex' },
  { id: 'light-crossbow', name: 'Light Crossbow', category: 'Simple Ranged', damage: '1d8', damageType: 'Piercing', weight: 5, cost: '25 gp', properties: ['Ammunition (80/320)', 'Loading', 'Two-Handed'], mastery: 'Slow' },
  { id: 'shortbow', name: 'Shortbow', category: 'Simple Ranged', damage: '1d6', damageType: 'Piercing', weight: 2, cost: '25 gp', properties: ['Ammunition (80/320)', 'Two-Handed'], mastery: 'Vex' },
  { id: 'sling', name: 'Sling', category: 'Simple Ranged', damage: '1d4', damageType: 'Bludgeoning', weight: 0, cost: '1 sp', properties: ['Ammunition (30/120)'], mastery: 'Slow' },
  // Martial Melee
  { id: 'battleaxe', name: 'Battleaxe', category: 'Martial Melee', damage: '1d8', damageType: 'Slashing', weight: 4, cost: '10 gp', properties: ['Versatile (1d10)'], mastery: 'Topple' },
  { id: 'flail', name: 'Flail', category: 'Martial Melee', damage: '1d8', damageType: 'Bludgeoning', weight: 2, cost: '10 gp', properties: [], mastery: 'Sap' },
  { id: 'glaive', name: 'Glaive', category: 'Martial Melee', damage: '1d10', damageType: 'Slashing', weight: 6, cost: '20 gp', properties: ['Heavy', 'Reach', 'Two-Handed'], mastery: 'Graze' },
  { id: 'greataxe', name: 'Greataxe', category: 'Martial Melee', damage: '1d12', damageType: 'Slashing', weight: 7, cost: '30 gp', properties: ['Heavy', 'Two-Handed'], mastery: 'Cleave' },
  { id: 'greatsword', name: 'Greatsword', category: 'Martial Melee', damage: '2d6', damageType: 'Slashing', weight: 6, cost: '50 gp', properties: ['Heavy', 'Two-Handed'], mastery: 'Graze' },
  { id: 'halberd', name: 'Halberd', category: 'Martial Melee', damage: '1d10', damageType: 'Slashing', weight: 6, cost: '20 gp', properties: ['Heavy', 'Reach', 'Two-Handed'], mastery: 'Cleave' },
  { id: 'lance', name: 'Lance', category: 'Martial Melee', damage: '1d10', damageType: 'Piercing', weight: 6, cost: '10 gp', properties: ['Heavy', 'Reach', 'Special'], mastery: 'Topple' },
  { id: 'longsword', name: 'Longsword', category: 'Martial Melee', damage: '1d8', damageType: 'Slashing', weight: 3, cost: '15 gp', properties: ['Versatile (1d10)'], mastery: 'Sap' },
  { id: 'maul', name: 'Maul', category: 'Martial Melee', damage: '2d6', damageType: 'Bludgeoning', weight: 10, cost: '10 gp', properties: ['Heavy', 'Two-Handed'], mastery: 'Topple' },
  { id: 'morningstar', name: 'Morningstar', category: 'Martial Melee', damage: '1d8', damageType: 'Piercing', weight: 4, cost: '15 gp', properties: [], mastery: 'Sap' },
  { id: 'pike', name: 'Pike', category: 'Martial Melee', damage: '1d10', damageType: 'Piercing', weight: 18, cost: '5 gp', properties: ['Heavy', 'Reach', 'Two-Handed'], mastery: 'Push' },
  { id: 'rapier', name: 'Rapier', category: 'Martial Melee', damage: '1d8', damageType: 'Piercing', weight: 2, cost: '25 gp', properties: ['Finesse'], mastery: 'Vex' },
  { id: 'scimitar', name: 'Scimitar', category: 'Martial Melee', damage: '1d6', damageType: 'Slashing', weight: 3, cost: '25 gp', properties: ['Finesse', 'Light'], mastery: 'Nick' },
  { id: 'shortsword', name: 'Shortsword', category: 'Martial Melee', damage: '1d6', damageType: 'Piercing', weight: 2, cost: '10 gp', properties: ['Finesse', 'Light'], mastery: 'Vex' },
  { id: 'trident', name: 'Trident', category: 'Martial Melee', damage: '1d6', damageType: 'Piercing', weight: 4, cost: '5 gp', properties: ['Thrown (20/60)', 'Versatile (1d8)'], mastery: 'Topple' },
  { id: 'war-pick', name: 'War Pick', category: 'Martial Melee', damage: '1d8', damageType: 'Piercing', weight: 2, cost: '5 gp', properties: ['Versatile (1d10)'], mastery: 'Sap' },
  { id: 'warhammer', name: 'Warhammer', category: 'Martial Melee', damage: '1d8', damageType: 'Bludgeoning', weight: 2, cost: '15 gp', properties: ['Versatile (1d10)'], mastery: 'Push' },
  { id: 'whip', name: 'Whip', category: 'Martial Melee', damage: '1d4', damageType: 'Slashing', weight: 3, cost: '2 gp', properties: ['Finesse', 'Reach'], mastery: 'Slow' },
  // Martial Ranged
  { id: 'blowgun', name: 'Blowgun', category: 'Martial Ranged', damage: '1', damageType: 'Piercing', weight: 1, cost: '10 gp', properties: ['Ammunition (25/100)', 'Loading'], mastery: 'Vex' },
  { id: 'hand-crossbow', name: 'Hand Crossbow', category: 'Martial Ranged', damage: '1d6', damageType: 'Piercing', weight: 3, cost: '75 gp', properties: ['Ammunition (30/120)', 'Light', 'Loading'], mastery: 'Vex' },
  { id: 'heavy-crossbow', name: 'Heavy Crossbow', category: 'Martial Ranged', damage: '1d10', damageType: 'Piercing', weight: 18, cost: '50 gp', properties: ['Ammunition (100/400)', 'Heavy', 'Loading', 'Two-Handed'], mastery: 'Push' },
  { id: 'longbow', name: 'Longbow', category: 'Martial Ranged', damage: '1d8', damageType: 'Piercing', weight: 2, cost: '50 gp', properties: ['Ammunition (150/600)', 'Heavy', 'Two-Handed'], mastery: 'Slow' },
  { id: 'musket', name: 'Musket', category: 'Martial Ranged', damage: '1d12', damageType: 'Piercing', weight: 10, cost: '500 gp', properties: ['Ammunition (40/120)', 'Loading', 'Two-Handed'], mastery: 'Slow' },
  { id: 'pistol', name: 'Pistol', category: 'Martial Ranged', damage: '1d10', damageType: 'Piercing', weight: 3, cost: '250 gp', properties: ['Ammunition (30/90)', 'Loading'], mastery: 'Vex' },
];

// ─── ARMOR ───
export const ARMOR = [
  // Light Armor
  { id: 'padded', name: 'Padded', category: 'Light', ac: 11, addDex: true, maxDex: null, stealthDis: true, weight: 8, cost: '5 gp' },
  { id: 'leather', name: 'Leather', category: 'Light', ac: 11, addDex: true, maxDex: null, stealthDis: false, weight: 10, cost: '10 gp' },
  { id: 'studded-leather', name: 'Studded Leather', category: 'Light', ac: 12, addDex: true, maxDex: null, stealthDis: false, weight: 13, cost: '45 gp' },
  // Medium Armor
  { id: 'hide', name: 'Hide', category: 'Medium', ac: 12, addDex: true, maxDex: 2, stealthDis: false, weight: 12, cost: '10 gp' },
  { id: 'chain-shirt', name: 'Chain Shirt', category: 'Medium', ac: 13, addDex: true, maxDex: 2, stealthDis: false, weight: 20, cost: '50 gp' },
  { id: 'scale-mail', name: 'Scale Mail', category: 'Medium', ac: 14, addDex: true, maxDex: 2, stealthDis: true, weight: 45, cost: '50 gp' },
  { id: 'breastplate', name: 'Breastplate', category: 'Medium', ac: 14, addDex: true, maxDex: 2, stealthDis: false, weight: 20, cost: '400 gp' },
  { id: 'half-plate', name: 'Half Plate', category: 'Medium', ac: 15, addDex: true, maxDex: 2, stealthDis: true, weight: 40, cost: '750 gp' },
  // Heavy Armor
  { id: 'ring-mail', name: 'Ring Mail', category: 'Heavy', ac: 14, addDex: false, maxDex: 0, stealthDis: true, weight: 40, cost: '30 gp' },
  { id: 'chain-mail', name: 'Chain Mail', category: 'Heavy', ac: 16, addDex: false, maxDex: 0, stealthDis: true, strRequirement: 13, weight: 55, cost: '75 gp' },
  { id: 'splint', name: 'Splint', category: 'Heavy', ac: 17, addDex: false, maxDex: 0, stealthDis: true, strRequirement: 15, weight: 60, cost: '200 gp' },
  { id: 'plate', name: 'Plate', category: 'Heavy', ac: 18, addDex: false, maxDex: 0, stealthDis: true, strRequirement: 15, weight: 65, cost: '1500 gp' },
  // Shield
  { id: 'shield', name: 'Shield', category: 'Shield', ac: 2, addDex: false, maxDex: null, stealthDis: false, weight: 6, cost: '10 gp' },
];

// ─── CONDITIONS ───
export const CONDITIONS = [
  { id: 'blinded', name: 'Blinded', description: 'A blinded creature can\'t see and automatically fails any ability check that requires sight. Attack rolls against the creature have Advantage, and the creature\'s attack rolls have Disadvantage.' },
  { id: 'charmed', name: 'Charmed', description: 'A charmed creature can\'t attack the charmer or target the charmer with harmful abilities or magical effects. The charmer has Advantage on any ability check to interact socially with the creature.' },
  { id: 'deafened', name: 'Deafened', description: 'A deafened creature can\'t hear and automatically fails any ability check that requires hearing.' },
  { id: 'exhaustion', name: 'Exhaustion', description: 'Exhaustion is measured in six levels. Each level applies a cumulative -2 penalty to all d20 Tests. At level 5: Speed halved. At level 6: Death. One level removed per Long Rest.' },
  { id: 'frightened', name: 'Frightened', description: 'A frightened creature has Disadvantage on ability checks and attack rolls while the source of its fear is within line of sight. The creature can\'t willingly move closer to the source of its fear.' },
  { id: 'grappled', name: 'Grappled', description: 'A grappled creature\'s speed becomes 0, and it can\'t benefit from any bonus to its speed. The condition ends if the grappler is incapacitated or if the creature is removed from reach.' },
  { id: 'incapacitated', name: 'Incapacitated', description: 'An incapacitated creature can\'t take Actions, Bonus Actions, or Reactions.' },
  { id: 'invisible', name: 'Invisible', description: 'An invisible creature is impossible to see without the aid of magic or a special sense. Attack rolls against the creature have Disadvantage, and the creature\'s attack rolls have Advantage.' },
  { id: 'paralyzed', name: 'Paralyzed', description: 'A paralyzed creature is Incapacitated and can\'t move or speak. It automatically fails Str and Dex saving throws. Attack rolls against it have Advantage, and any attack that hits it from within 5 feet is a critical hit.' },
  { id: 'petrified', name: 'Petrified', description: 'A petrified creature is transformed into solid inanimate substance. It is Incapacitated, can\'t move or speak, is unaware of its surroundings. Resistance to all damage. Immune to poison and disease.' },
  { id: 'poisoned', name: 'Poisoned', description: 'A poisoned creature has Disadvantage on attack rolls and ability checks.' },
  { id: 'prone', name: 'Prone', description: 'A prone creature\'s only movement option is to crawl or stand up (costs half speed). The creature has Disadvantage on attack rolls. Attack rolls against the creature have Advantage if the attacker is within 5 feet, or Disadvantage if farther.' },
  { id: 'restrained', name: 'Restrained', description: 'A restrained creature\'s speed becomes 0. Attack rolls against the creature have Advantage, and the creature\'s attack rolls have Disadvantage. The creature has Disadvantage on Dexterity saving throws.' },
  { id: 'stunned', name: 'Stunned', description: 'A stunned creature is Incapacitated, can\'t move, and can speak only falteringly. It automatically fails Str and Dex saving throws. Attack rolls against it have Advantage.' },
  { id: 'unconscious', name: 'Unconscious', description: 'An unconscious creature is Incapacitated, can\'t move or speak, and is unaware of its surroundings. It drops whatever it\'s holding and falls Prone. It automatically fails Str and Dex saving throws. Attack rolls against it have Advantage, and any hit from within 5 feet is a critical hit.' },
];

// ─── WEAPON MASTERY PROPERTIES ───
export const WEAPON_MASTERY = {
  Cleave: 'If you hit a creature with a melee attack using this weapon, you can make a melee attack with the same weapon against a second creature within 5 feet of the first target and within your reach. On a hit, the second target takes the weapon\'s damage, but you don\'t add your ability modifier to that damage unless it is negative.',
  Graze: 'If your attack roll with this weapon misses a creature, you can deal damage to that creature equal to the ability modifier you used to make the attack roll. This damage is the same type dealt by the weapon, and the damage can be increased only by increasing the ability modifier.',
  Nick: 'When you make the extra attack of the Light property, you can make it as part of the Attack action instead of as a Bonus Action. You can make this extra attack only once per turn.',
  Push: 'If you hit a creature with this weapon, you can push the creature up to 10 feet straight away from yourself if it is Large or smaller.',
  Sap: 'If you hit a creature with this weapon, that creature has Disadvantage on its next attack roll before the start of your next turn.',
  Slow: 'If you hit a creature with this weapon and deal damage to the creature, you can reduce its Speed by 10 feet until the start of your next turn. If the creature is hit more than once by weapons that have this property, the Speed reduction doesn\'t exceed 10 feet.',
  Topple: 'If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw (DC 8 + your Proficiency Bonus + the ability modifier used to make the attack roll). On a failed save, the creature has the Prone condition.',
  Vex: 'If you hit a creature with this weapon and deal damage to the creature, you have Advantage on your next attack roll against that creature before the end of your next turn.',
};

export function getWeaponById(id) {
  return WEAPONS.find(w => w.id === id);
}

export function getArmorById(id) {
  return ARMOR.find(a => a.id === id);
}

export function getConditionById(id) {
  return CONDITIONS.find(c => c.id === id);
}
