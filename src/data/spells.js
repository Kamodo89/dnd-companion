// D&D 5.5e (2024) Spell Data
// Sources: PHB 2024, XGtE, TCoE, and other sourcebooks

export const SPELL_SCHOOLS = [
  'Abjuration', 'Conjuration', 'Divination', 'Enchantment',
  'Evocation', 'Illusion', 'Necromancy', 'Transmutation'
];

export const SPELL_CLASSES = [
  'Artificer', 'Bard', 'Cleric', 'Druid', 'Paladin',
  'Ranger', 'Sorcerer', 'Warlock', 'Wizard'
];

export const spells = [
  // ─── CANTRIPS (Level 0) ───
  {
    id: 'acid-splash', name: 'Acid Splash', level: 0, school: 'Conjuration',
    castingTime: '1 Action', range: '60 feet', components: ['V', 'S'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Artificer', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'You hurl a bubble of acid. Choose one creature you can see within range, or choose two creatures you can see within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 Acid damage. This spell\'s damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).'
  },
  {
    id: 'blade-ward', name: 'Blade Ward', level: 0, school: 'Abjuration',
    castingTime: '1 Action', range: 'Self', components: ['V', 'S'],
    duration: '1 Round', concentration: false, ritual: false,
    classes: ['Bard', 'Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'Until the end of your next turn, you have Resistance to Bludgeoning, Piercing, and Slashing damage.'
  },
  {
    id: 'booming-blade', name: 'Booming Blade', level: 0, school: 'Evocation',
    castingTime: '1 Action', range: 'Self (5-foot radius)', components: ['S', 'M (a melee weapon worth 1+ sp)'],
    duration: '1 Round', concentration: false, ritual: false,
    classes: ['Artificer', 'Sorcerer', 'Warlock', 'Wizard'],
    source: 'TCoE',
    description: 'You brandish the weapon used in the spell\'s casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack\'s normal effects and then becomes sheathed in booming energy until the start of your next turn. If the target willingly moves 1+ feet before then, the target takes 1d8 Thunder damage, and the spell ends. This spell\'s damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 Thunder damage to the target on a hit, and the damage the target takes for moving increases to 2d8.'
  },
  {
    id: 'chill-touch', name: 'Chill Touch', level: 0, school: 'Necromancy',
    castingTime: '1 Action', range: '60 feet', components: ['V', 'S'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'Channeling the chill of the grave, make a ranged spell attack against a target within range. On a hit, the target takes 1d10 Necrotic damage, and it can\'t regain Hit Points until the end of your next turn. This spell\'s damage increases by 1d10 when you reach levels 5 (2d10), 11 (3d10), and 17 (4d10).'
  },
  {
    id: 'dancing-lights', name: 'Dancing Lights', level: 0, school: 'Illusion',
    castingTime: '1 Action', range: '120 feet', components: ['V', 'S', 'M (a bit of phosphorus)'],
    duration: 'Concentration, up to 1 minute', concentration: true, ritual: false,
    classes: ['Artificer', 'Bard', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air. Alternatively, you combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds Dim Light in a 10-foot radius. As a Bonus Action, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell\'s range.'
  },
  {
    id: 'druidcraft', name: 'Druidcraft', level: 0, school: 'Transmutation',
    castingTime: '1 Action', range: '30 feet', components: ['V', 'S'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Druid'],
    source: 'PHB 2024',
    description: 'Whispering to the spirits of nature, you create one of the following effects within range: Tiny Thorn. You create a Tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. Flame Seed. You instantly make a flower blossom, a seed pod open, or a leaf bud bloom. Plant Growth. You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint odor of skunk. The effect must fit in a 5-foot Cube.'
  },
  {
    id: 'eldritch-blast', name: 'Eldritch Blast', level: 0, school: 'Evocation',
    castingTime: '1 Action', range: '120 feet', components: ['V', 'S'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Warlock'],
    source: 'PHB 2024',
    description: 'A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 Force damage. The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.'
  },
  {
    id: 'fire-bolt', name: 'Fire Bolt', level: 0, school: 'Evocation',
    castingTime: '1 Action', range: '120 feet', components: ['V', 'S'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Artificer', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 Fire damage. A flammable object hit by this spell ignites if it isn\'t being worn or carried. This spell\'s damage increases by 1d10 when you reach levels 5 (2d10), 11 (3d10), and 17 (4d10).'
  },
  {
    id: 'friends', name: 'Friends', level: 0, school: 'Enchantment',
    castingTime: '1 Action', range: 'Self', components: ['S', 'M (some makeup)'],
    duration: 'Concentration, up to 1 minute', concentration: true, ritual: false,
    classes: ['Bard', 'Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'Until the spell ends, you have Advantage on Charisma checks against one creature of your choice that isn\'t Hostile toward you. When the spell ends, the creature realizes you used magic to influence its mood and becomes Hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM\'s discretion), depending on the nature of your interaction with it.'
  },
  {
    id: 'guidance', name: 'Guidance', level: 0, school: 'Divination',
    castingTime: '1 Action', range: 'Touch', components: ['V', 'S'],
    duration: 'Concentration, up to 1 minute', concentration: true, ritual: false,
    classes: ['Artificer', 'Cleric', 'Druid'],
    source: 'PHB 2024',
    description: 'You touch one willing creature. Once before the spell ends, the target can roll 1d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.'
  },
  {
    id: 'light', name: 'Light', level: 0, school: 'Evocation',
    castingTime: '1 Action', range: 'Touch', components: ['V', 'M (a firefly or phosphorescent moss)'],
    duration: '1 hour', concentration: false, ritual: false,
    classes: ['Artificer', 'Bard', 'Cleric', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'You touch one Large or smaller object that isn\'t being worn or carried by a Hostile creature. Until the spell ends, the object sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet. The light can be colored as you like. Covering the object with something opaque blocks the light. The spell ends if you cast it again.'
  },
  {
    id: 'mage-hand', name: 'Mage Hand', level: 0, school: 'Conjuration',
    castingTime: '1 Action', range: '30 feet', components: ['V', 'S'],
    duration: '1 minute', concentration: false, ritual: false,
    classes: ['Artificer', 'Bard', 'Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as a Bonus Action. The hand vanishes if it is ever more than 30 feet from you or if you cast this spell again. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it. The hand can\'t attack, activate magic items, or carry more than 10 pounds.'
  },
  {
    id: 'message', name: 'Message', level: 0, school: 'Transmutation',
    castingTime: '1 Action', range: '120 feet', components: ['S', 'M (a copper wire)'],
    duration: '1 Round', concentration: false, ritual: false,
    classes: ['Artificer', 'Bard', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear. You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn\'t have to follow a straight line and can travel freely around corners or through openings.'
  },
  {
    id: 'minor-illusion', name: 'Minor Illusion', level: 0, school: 'Illusion',
    castingTime: '1 Action', range: '30 feet', components: ['S', 'M (a bit of fleece)'],
    duration: '1 minute', concentration: false, ritual: false,
    classes: ['Bard', 'Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'You create a sound or an image of an object within range that lasts for the duration. See each effect\'s description for its specifics. Sound: If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else\'s voice, a lion\'s roar, a beating of drums, or any other sound you choose. Image: If you create an image of an object — such as a chair, muddy footprints, or a small chest — it must be no larger than a 5-foot Cube.'
  },
  {
    id: 'poison-spray', name: 'Poison Spray', level: 0, school: 'Conjuration',
    castingTime: '1 Action', range: '30 feet', components: ['V', 'S'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Artificer', 'Druid', 'Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'You spray toxic mist at a creature within range. The target must succeed on a Constitution saving throw or take 1d12 Poison damage. This spell\'s damage increases by 1d12 when you reach levels 5 (2d12), 11 (3d12), and 17 (4d12).'
  },
  {
    id: 'prestidigitation', name: 'Prestidigitation', level: 0, school: 'Transmutation',
    castingTime: '1 Action', range: '10 feet', components: ['V', 'S'],
    duration: '1 hour', concentration: false, ritual: false,
    classes: ['Artificer', 'Bard', 'Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'You create one of the following magical effects within range: Shake and Shimmer. You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor. Clean or Soil. You instantaneously light or snuff out a candle, a torch, or a small campfire. Chill, Warm, or Flavor. You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour. Color, Mark, or Symbol. You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour. Magic Trinket. You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.'
  },
  {
    id: 'ray-of-frost', name: 'Ray of Frost', level: 0, school: 'Evocation',
    castingTime: '1 Action', range: '60 feet', components: ['V', 'S'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Artificer', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 Cold damage, and its Speed is reduced by 10 feet until the start of your next turn. This spell\'s damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).'
  },
  {
    id: 'sacred-flame', name: 'Sacred Flame', level: 0, school: 'Evocation',
    castingTime: '1 Action', range: '60 feet', components: ['V', 'S'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Cleric'],
    source: 'PHB 2024',
    description: 'Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 Radiant damage. The target gains no benefit from Half Cover or Three-Quarters Cover for this saving throw. This spell\'s damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).'
  },
  {
    id: 'shillelagh', name: 'Shillelagh', level: 0, school: 'Transmutation',
    castingTime: '1 Bonus Action', range: 'Self', components: ['V', 'S', 'M (mistletoe and a club or quarterstaff)'],
    duration: '1 minute', concentration: false, ritual: false,
    classes: ['Druid'],
    source: 'PHB 2024',
    description: 'A club or a quarterstaff you are holding is imbued with nature\'s power. For the duration, you can use your Spellcasting Ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon\'s damage die becomes a d8. The weapon also becomes magical, if it isn\'t already. The spell ends if you cast it again or if you let go of the weapon.'
  },
  {
    id: 'shocking-grasp', name: 'Shocking Grasp', level: 0, school: 'Evocation',
    castingTime: '1 Action', range: 'Touch', components: ['V', 'S'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Artificer', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have Advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 Lightning damage, and it can\'t take Reactions until the start of its next turn. This spell\'s damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).'
  },
  {
    id: 'spare-the-dying', name: 'Spare the Dying', level: 0, school: 'Necromancy',
    castingTime: '1 Action', range: '15 feet', components: ['V', 'S'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Artificer', 'Cleric'],
    source: 'PHB 2024',
    description: 'Choose a creature within range that has 0 Hit Points and isn\'t dead. The creature becomes Stable. This spell has no effect on Constructs or Undead.'
  },
  {
    id: 'thaumaturgy', name: 'Thaumaturgy', level: 0, school: 'Transmutation',
    castingTime: '1 Action', range: '30 feet', components: ['V'],
    duration: '1 minute', concentration: false, ritual: false,
    classes: ['Cleric'],
    source: 'PHB 2024',
    description: 'You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range: Your voice booms up to three times as loud as normal for 1 minute. You cause flames to flicker, brighten, dim, or change color for 1 minute. You cause harmless tremors in the ground for 1 minute. You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers. You instantaneously cause an unlocked door or window to fly open or slam shut. You alter the appearance of your eyes for 1 minute.'
  },
  {
    id: 'toll-the-dead', name: 'Toll the Dead', level: 0, school: 'Necromancy',
    castingTime: '1 Action', range: '60 feet', components: ['V', 'S'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Cleric', 'Warlock', 'Wizard'],
    source: 'XGtE',
    description: 'You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 Necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 Necrotic damage. The spell\'s damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12).'
  },
  {
    id: 'true-strike', name: 'True Strike', level: 0, school: 'Divination',
    castingTime: '1 Action', range: 'Self', components: ['S', 'M (a weapon worth 1+ sp)'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Bard', 'Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'Guided by a flash of magical insight, you make one attack with the weapon used in the spell\'s casting. The attack uses your Spellcasting Ability for the attack and damage rolls instead of using Strength or Dexterity. If the attack deals damage, it can be Radiant damage or the weapon\'s normal damage type (your choice). This spell\'s damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d6 Radiant damage on a hit.'
  },
  {
    id: 'vicious-mockery', name: 'Vicious Mockery', level: 0, school: 'Enchantment',
    castingTime: '1 Action', range: '60 feet', components: ['V'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Bard'],
    source: 'PHB 2024',
    description: 'You unleash a string of insults laced with subtle enchantments at a creature you can see within range. The target must succeed on a Wisdom saving throw or take 1d6 Psychic damage and have Disadvantage on the next attack roll it makes before the end of its next turn. This spell\'s damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).'
  },
  // ─── LEVEL 1 SPELLS ───
  {
    id: 'alarm', name: 'Alarm', level: 1, school: 'Abjuration',
    castingTime: '1 minute', range: '30 feet', components: ['V', 'S', 'M (a tiny bell and a piece of fine silver wire)'],
    duration: '8 hours', concentration: false, ritual: true,
    classes: ['Artificer', 'Ranger', 'Wizard'],
    source: 'PHB 2024',
    description: 'You set an alarm against intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot Cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won\'t set off the alarm. You also choose whether the alarm is mental or audible.'
  },
  {
    id: 'animal-friendship', name: 'Animal Friendship', level: 1, school: 'Enchantment',
    castingTime: '1 Action', range: '30 feet', components: ['V', 'S', 'M (a morsel of food)'],
    duration: '24 hours', concentration: false, ritual: false,
    classes: ['Bard', 'Druid', 'Ranger'],
    source: 'PHB 2024',
    description: 'Target a Beast that you can see within range. The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration. If you or one of your allies deals damage to the target, the spell ends. Higher Levels: You can target one additional Beast for each spell slot level above 1.'
  },
  {
    id: 'bane', name: 'Bane', level: 1, school: 'Enchantment',
    castingTime: '1 Action', range: '30 feet', components: ['V', 'S', 'M (a drop of blood)'],
    duration: 'Concentration, up to 1 minute', concentration: true, ritual: false,
    classes: ['Bard', 'Cleric'],
    source: 'PHB 2024',
    description: 'Up to three creatures of your choice that you can see within range must each make a Charisma saving throw. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll 1d4 and subtract the number rolled from the attack roll or saving throw. Higher Levels: You can target one additional creature for each slot level above 1.'
  },
  {
    id: 'bless', name: 'Bless', level: 1, school: 'Enchantment',
    castingTime: '1 Action', range: '30 feet', components: ['V', 'S', 'M (a sprinkling of holy water)'],
    duration: 'Concentration, up to 1 minute', concentration: true, ritual: false,
    classes: ['Cleric', 'Paladin'],
    source: 'PHB 2024',
    description: 'You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll 1d4 and add the number rolled to the attack roll or saving throw. Higher Levels: You can target one additional creature for each slot level above 1.'
  },
  {
    id: 'burning-hands', name: 'Burning Hands', level: 1, school: 'Evocation',
    castingTime: '1 Action', range: 'Self (15-foot cone)', components: ['V', 'S'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot Cone must make a Dexterity saving throw. A creature takes 3d6 Fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren\'t being worn or carried. Higher Levels: The damage increases by 1d6 for each slot level above 1.'
  },
  {
    id: 'charm-person', name: 'Charm Person', level: 1, school: 'Enchantment',
    castingTime: '1 Action', range: '30 feet', components: ['V', 'S'],
    duration: '1 hour', concentration: false, ritual: false,
    classes: ['Bard', 'Druid', 'Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'One Humanoid you can see within range must succeed on a Wisdom saving throw or have the Charmed condition until the spell ends or until you or your allies deal damage to it. The Charmed target regards you as a friendly acquaintance. When the spell ends, the target knows it was Charmed by you. Higher Levels: You can target one additional creature for each slot level above 1.'
  },
  {
    id: 'color-spray', name: 'Color Spray', level: 1, school: 'Illusion',
    castingTime: '1 Action', range: 'Self (15-foot cone)', components: ['V', 'S', 'M (a pinch of powder or sand colored red, yellow, and blue)'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'A dazzling array of flashing, colored light springs from your hand. Roll 6d10; the total is how many Hit Points of creatures this spell can affect. Creatures in a 15-foot Cone originating from you are affected in ascending order of their current Hit Points (ignoring Unconscious creatures and creatures that can\'t see). Starting with the creature that has the lowest current Hit Points, each creature affected by this spell has the Blinded condition until the end of your next turn. Subtract each creature\'s Hit Points from the total before moving on to the creature with the next lowest Hit Points. A creature\'s Hit Points must be equal to or less than the remaining total for that creature to be affected.'
  },
  {
    id: 'comprehend-languages', name: 'Comprehend Languages', level: 1, school: 'Divination',
    castingTime: '1 Action', range: 'Self', components: ['V', 'S', 'M (a pinch of soot and salt)'],
    duration: '1 hour', concentration: false, ritual: true,
    classes: ['Bard', 'Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'For the duration, you understand the literal meaning of any language that you hear or see spoken. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text. This spell doesn\'t decode secret messages in a text or a glyph, such as an arcane sigil, that isn\'t part of a written language.'
  },
  {
    id: 'cure-wounds', name: 'Cure Wounds', level: 1, school: 'Abjuration',
    castingTime: '1 Action', range: 'Touch', components: ['V', 'S'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Artificer', 'Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger'],
    source: 'PHB 2024',
    description: 'A creature you touch regains a number of Hit Points equal to 2d8 plus your spellcasting ability modifier. This spell has no effect on Constructs or Undead. Higher Levels: The healing increases by 2d8 for each spell slot level above 1.'
  },
  {
    id: 'detect-magic', name: 'Detect Magic', level: 1, school: 'Divination',
    castingTime: '1 Action', range: 'Self (30-foot radius)', components: ['V', 'S'],
    duration: 'Concentration, up to 10 minutes', concentration: true, ritual: true,
    classes: ['Artificer', 'Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'For the duration, you sense the presence of magical effects within 30 feet of yourself. If you sense magic in this way, you can take the Magic action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any. The spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.'
  },
  {
    id: 'disguise-self', name: 'Disguise Self', level: 1, school: 'Illusion',
    castingTime: '1 Action', range: 'Self', components: ['V', 'S'],
    duration: '1 hour', concentration: false, ritual: false,
    classes: ['Artificer', 'Bard', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends or until you take a Magic action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can\'t change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The changes wrought by this spell fail to hold up to physical inspection.'
  },
  {
    id: 'divine-favor', name: 'Divine Favor', level: 1, school: 'Transmutation',
    castingTime: '1 Bonus Action', range: 'Self', components: ['V', 'S'],
    duration: 'Concentration, up to 1 minute', concentration: true, ritual: false,
    classes: ['Paladin'],
    source: 'PHB 2024',
    description: 'Until the spell ends, your attacks with weapons deal an extra 1d4 Radiant damage on a hit.'
  },
  {
    id: 'faerie-fire', name: 'Faerie Fire', level: 1, school: 'Evocation',
    castingTime: '1 Action', range: '60 feet', components: ['V'],
    duration: 'Concentration, up to 1 minute', concentration: true, ritual: false,
    classes: ['Artificer', 'Bard', 'Druid'],
    source: 'PHB 2024',
    description: 'Objects in a 20-foot Cube within range are outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed Dim Light in a 10-foot radius and can\'t benefit from the Invisible condition. Attack rolls against an affected creature or object have Advantage if the attacker can see it.'
  },
  {
    id: 'false-life', name: 'False Life', level: 1, school: 'Necromancy',
    castingTime: '1 Action', range: 'Self', components: ['V', 'S', 'M (a small amount of alcohol or distilled spirits)'],
    duration: '1 hour', concentration: false, ritual: false,
    classes: ['Artificer', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'You gain 2d4+4 Temporary Hit Points. Higher Levels: You gain 5 additional Temporary Hit Points for each spell slot level above 1.'
  },
  {
    id: 'feather-fall', name: 'Feather Fall', level: 1, school: 'Transmutation',
    castingTime: '1 Reaction', range: '60 feet', components: ['V', 'M (a small feather or piece of down)'],
    duration: '1 minute', concentration: false, ritual: false,
    classes: ['Artificer', 'Bard', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'Choose up to five falling creatures within range. A falling creature\'s rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no damage from the fall and can land on its feet, and the spell ends for that creature.'
  },
  {
    id: 'find-familiar', name: 'Find Familiar', level: 1, school: 'Conjuration',
    castingTime: '1 hour', range: '10 feet', components: ['V', 'S', 'M (10 gp worth of charcoal, incense, and herbs)'],
    duration: 'Instantaneous', concentration: false, ritual: true,
    classes: ['Wizard'],
    source: 'PHB 2024',
    description: 'You gain the service of a familiar, a spirit that takes an animal form you choose: Bat, Cat, Crab, Frog, Hawk, Lizard, Octopus, Owl, Rat, Raven, Sea Horse, Snake, or Weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a Celestial, Fey, or Fiend (your choice) instead of a Beast.'
  },
  {
    id: 'fog-cloud', name: 'Fog Cloud', level: 1, school: 'Conjuration',
    castingTime: '1 Action', range: '120 feet', components: ['V', 'S'],
    duration: 'Concentration, up to 1 hour', concentration: true, ritual: false,
    classes: ['Druid', 'Ranger', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'You create a 20-foot-radius Sphere of fog centered on a point within range. The Sphere spreads around corners, and its area is Heavily Obscured. It lasts for the duration or until a strong wind (such as the one created by Gust of Wind) disperses it. Higher Levels: The fog\'s radius increases by 20 feet for each slot level above 1.'
  },
  {
    id: 'goodberry', name: 'Goodberry', level: 1, school: 'Conjuration',
    castingTime: '1 Action', range: 'Self', components: ['V', 'S', 'M (a sprig of mistletoe)'],
    duration: '24 hours', concentration: false, ritual: false,
    classes: ['Druid', 'Ranger'],
    source: 'PHB 2024',
    description: 'Ten berries appear in your hand and are infused with magic for the duration. A creature can take a Bonus Action to eat one berry. Eating a berry restores 1 Hit Point, and the berry provides enough nourishment to sustain a creature for one day. Uneaten berries lose their potency at the end of your next Long Rest.'
  },
  {
    id: 'healing-word', name: 'Healing Word', level: 1, school: 'Abjuration',
    castingTime: '1 Bonus Action', range: '60 feet', components: ['V'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Bard', 'Cleric', 'Druid'],
    source: 'PHB 2024',
    description: 'A creature of your choice that you can see within range regains Hit Points equal to 2d4 plus your spellcasting ability modifier. This spell has no effect on Constructs or Undead. Higher Levels: The healing increases by 2d4 for each spell slot level above 1.'
  },
  {
    id: 'hex', name: 'Hex', level: 1, school: 'Enchantment',
    castingTime: '1 Bonus Action', range: '90 feet', components: ['V', 'S', 'M (the petrified eye of a newt)'],
    duration: 'Concentration, up to 1 hour', concentration: true, ritual: false,
    classes: ['Warlock'],
    source: 'PHB 2024',
    description: 'You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 Necrotic damage to the target whenever you hit it with an attack roll. Also, choose one ability when you cast the spell. The target has Disadvantage on ability checks using the chosen ability. If the target drops to 0 Hit Points before this spell ends, you can take a Bonus Action on a later turn of yours to curse a new creature. Higher Levels: Duration extends to 8 hours (2), 24 hours (3–4), or until dispelled (5+).'
  },
  {
    id: 'hunters-mark', name: "Hunter's Mark", level: 1, school: 'Divination',
    castingTime: '1 Bonus Action', range: '90 feet', components: ['V'],
    duration: 'Concentration, up to 1 hour', concentration: true, ritual: false,
    classes: ['Ranger'],
    source: 'PHB 2024',
    description: 'You magically mark a creature you can see within range as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with an attack roll, and you have Advantage on any Perception or Survival check you make to find it. If the target drops to 0 Hit Points before this spell ends, you can take a Bonus Action to move the mark to a new creature you can see within range. Higher Levels: Duration extends to 8 hours (2), 8 hours (3–4), or 24 hours (5+).'
  },
  {
    id: 'identify', name: 'Identify', level: 1, school: 'Divination',
    castingTime: '1 minute', range: 'Touch', components: ['V', 'S', 'M (a pearl worth 100+ gp)'],
    duration: 'Instantaneous', concentration: false, ritual: true,
    classes: ['Artificer', 'Bard', 'Wizard'],
    source: 'PHB 2024',
    description: 'You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires Attunement to use, and how many Charges it has, if any. You learn whether any ongoing spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it. If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.'
  },
  {
    id: 'jump', name: 'Jump', level: 1, school: 'Transmutation',
    castingTime: '1 Bonus Action', range: 'Touch', components: ['V', 'S', 'M (a grasshopper\'s hind leg)'],
    duration: '1 minute', concentration: false, ritual: false,
    classes: ['Artificer', 'Druid', 'Ranger', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'You touch a willing creature. Once on each of its turns until the spell ends, that creature can jump up to 30 feet by spending 10 feet of movement. Higher Levels: You can target one additional creature for each slot level above 1.'
  },
  {
    id: 'longstrider', name: 'Longstrider', level: 1, school: 'Transmutation',
    castingTime: '1 Action', range: 'Touch', components: ['V', 'S', 'M (a pinch of dirt)'],
    duration: '1 hour', concentration: false, ritual: false,
    classes: ['Artificer', 'Bard', 'Druid', 'Ranger', 'Wizard'],
    source: 'PHB 2024',
    description: 'You touch a creature. The target\'s Speed increases by 10 feet until the spell ends. Higher Levels: You can target one additional creature for each slot level above 1.'
  },
  {
    id: 'magic-missile', name: 'Magic Missile', level: 1, school: 'Evocation',
    castingTime: '1 Action', range: '120 feet', components: ['V', 'S'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'You create three glowing darts of magical force. Each dart can hit a creature of your choice that you can see within range. A dart deals 1d4+1 Force damage to its target. The darts all strike simultaneously and you can direct them to hit one creature or several. Higher Levels: The spell creates one more dart for each slot level above 1.'
  },
  {
    id: 'sanctuary', name: 'Sanctuary', level: 1, school: 'Abjuration',
    castingTime: '1 Bonus Action', range: '30 feet', components: ['V', 'S', 'M (a small silver mirror)'],
    duration: '1 minute', concentration: false, ritual: false,
    classes: ['Artificer', 'Cleric'],
    source: 'PHB 2024',
    description: 'You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn\'t protect the warded creature from area effects, such as the explosion of a Fireball. If the warded creature makes an attack roll, deals damage, or casts a spell that affects an enemy creature, this spell ends.'
  },
  {
    id: 'shield', name: 'Shield', level: 1, school: 'Abjuration',
    castingTime: '1 Reaction', range: 'Self', components: ['V', 'S'],
    duration: '1 Round', concentration: false, ritual: false,
    classes: ['Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from Magic Missile.'
  },
  {
    id: 'shield-of-faith', name: 'Shield of Faith', level: 1, school: 'Abjuration',
    castingTime: '1 Bonus Action', range: '60 feet', components: ['V', 'S', 'M (a small parchment with holy text)'],
    duration: 'Concentration, up to 10 minutes', concentration: true, ritual: false,
    classes: ['Cleric', 'Paladin'],
    source: 'PHB 2024',
    description: 'A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.'
  },
  {
    id: 'sleep', name: 'Sleep', level: 1, school: 'Enchantment',
    castingTime: '1 Action', range: '60 feet', components: ['V', 'S', 'M (a pinch of sand or rose petals)'],
    duration: 'Concentration, up to 1 minute', concentration: true, ritual: false,
    classes: ['Bard', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'Each creature of your choice in a 5-foot-radius Sphere centered on a point within range must succeed on a Wisdom saving throw or have the Incapacitated condition until the end of its next turn, at which point it must repeat the save. The target falls Unconscious if it fails the second save. A sleeping target wakes up if it takes damage or if someone within 5 feet of it takes an action to shake it awake. Higher Levels: You can target one additional creature for each slot level above 1.'
  },
  {
    id: 'speak-with-animals', name: 'Speak with Animals', level: 1, school: 'Divination',
    castingTime: '1 Action', range: 'Self', components: ['V', 'S'],
    duration: '10 minutes', concentration: false, ritual: true,
    classes: ['Bard', 'Druid', 'Ranger'],
    source: 'PHB 2024',
    description: 'For the duration, you can comprehend and verbally communicate with Beasts, and you can use any of the Influence action\'s skill options with them. Most Beasts lack the intelligence to convey a lot of information orally, but at minimum, a Beast can give you information about nearby locations and monsters, including whatever it has perceived within the past day.'
  },
  {
    id: 'thunderwave', name: 'Thunderwave', level: 1, school: 'Evocation',
    castingTime: '1 Action', range: 'Self (15-foot cube)', components: ['V', 'S'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Bard', 'Cleric', 'Druid', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'You unleash a wave of thunderous energy. Each creature in a 15-foot Cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 Thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage only. In addition, unsecured objects that are completely within the Cube are pushed 10 feet away from you, and a thunderclap is audible within 300 feet. Higher Levels: The damage increases by 1d8 for each slot level above 1.'
  },
  // ─── LEVEL 2 SPELLS ───
  {
    id: 'aid', name: 'Aid', level: 2, school: 'Abjuration',
    castingTime: '1 Action', range: '30 feet', components: ['V', 'S', 'M (a tiny strip of white cloth)'],
    duration: '8 hours', concentration: false, ritual: false,
    classes: ['Artificer', 'Bard', 'Cleric', 'Paladin'],
    source: 'PHB 2024',
    description: 'Choose up to three creatures within range. Each target\'s Hit Point maximum and current Hit Points increase by 5 for the duration. Higher Levels: Each target\'s Hit Points increase by 5 for each slot level above 2.'
  },
  {
    id: 'arcane-lock', name: 'Arcane Lock', level: 2, school: 'Abjuration',
    castingTime: '1 Action', range: 'Touch', components: ['V', 'S', 'M (gold dust worth 25+ gp)'],
    duration: 'Until dispelled', concentration: false, ritual: false,
    classes: ['Artificer', 'Wizard'],
    source: 'PHB 2024',
    description: 'You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed. Casting Knock on the object suppresses Arcane Lock for 10 minutes.'
  },
  {
    id: 'blur', name: 'Blur', level: 2, school: 'Illusion',
    castingTime: '1 Action', range: 'Self', components: ['V'],
    duration: 'Concentration, up to 1 minute', concentration: true, ritual: false,
    classes: ['Artificer', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has Disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn\'t rely on sight, as with Blindsight, or can see through illusions, as with Truesight.'
  },
  {
    id: 'darkness', name: 'Darkness', level: 2, school: 'Evocation',
    castingTime: '1 Action', range: '60 feet', components: ['V', 'M (bat fur and a drop of pitch or a piece of coal)'],
    duration: 'Concentration, up to 10 minutes', concentration: true, ritual: false,
    classes: ['Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'For the duration, magical Darkness spreads from a point within range and fills a 15-foot-radius Sphere. Darkvision can\'t penetrate this Darkness, and no natural light can illuminate it. If the point of Darkness is on an object you are holding or one that isn\'t being worn or carried, the Darkness emanates from the object and moves with it. Completely covering the source of the Darkness with an opaque object, such as a bowl or a helm, blocks the Darkness. If this spell\'s area overlaps with an area of light created by a spell of level 2 or lower, that other spell is dispelled.'
  },
  {
    id: 'darkvision', name: 'Darkvision', level: 2, school: 'Transmutation',
    castingTime: '1 Action', range: 'Touch', components: ['V', 'S', 'M (a dried carrot or an agate)'],
    duration: '8 hours', concentration: false, ritual: false,
    classes: ['Artificer', 'Druid', 'Ranger', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'You touch a willing creature to grant it the ability to see in the dark. For the duration, that creature has Darkvision with a range of 60 feet.'
  },
  {
    id: 'enhance-ability', name: 'Enhance Ability', level: 2, school: 'Transmutation',
    castingTime: '1 Action', range: 'Touch', components: ['V', 'S', 'M (fur or a feather from a beast)'],
    duration: 'Concentration, up to 1 hour', concentration: true, ritual: false,
    classes: ['Artificer', 'Bard', 'Cleric', 'Druid', 'Ranger', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'You touch a creature and choose one of the following effects: Bear\'s Endurance (Con checks, 2d6 temp HP), Bull\'s Strength (Str checks, double carry capacity), Cat\'s Grace (Dex checks, no damage from 20 ft fall), Eagle\'s Splendor (Cha checks), Fox\'s Cunning (Int checks), or Owl\'s Wisdom (Wis checks). Higher Levels: You can target one additional creature for each slot level above 2.'
  },
  {
    id: 'enlarge-reduce', name: 'Enlarge/Reduce', level: 2, school: 'Transmutation',
    castingTime: '1 Action', range: '30 feet', components: ['V', 'S', 'M (a pinch of powdered iron)'],
    duration: 'Concentration, up to 1 minute', concentration: true, ritual: false,
    classes: ['Artificer', 'Druid', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'You cause a creature or an object you can see within range to grow larger or smaller for the duration. Enlarge: The target\'s size increases by one size category. Everything it is wearing and carrying changes size with it. Attack rolls with weapons deal extra 1d4 damage. Reduce: The target\'s size decreases by one size category. Attack rolls with weapons deal -1d4 damage.'
  },
  {
    id: 'fireball', name: 'Fireball', level: 3, school: 'Evocation',
    castingTime: '1 Action', range: '150 feet', components: ['V', 'S', 'M (a tiny ball of bat guano and sulfur)'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius Sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 Fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren\'t being worn or carried. Higher Levels: The damage increases by 1d6 for each slot level above 3.'
  },
  {
    id: 'fly', name: 'Fly', level: 3, school: 'Transmutation',
    castingTime: '1 Action', range: 'Touch', components: ['V', 'S', 'M (a wing feather from any bird)'],
    duration: 'Concentration, up to 10 minutes', concentration: true, ritual: false,
    classes: ['Artificer', 'Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'You touch a willing creature. The target gains a Fly Speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall. Higher Levels: You can target one additional creature for each slot level above 3.'
  },
  {
    id: 'counterspell', name: 'Counterspell', level: 3, school: 'Abjuration',
    castingTime: '1 Reaction', range: '60 feet', components: ['S'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'You attempt to interrupt a creature in the process of casting a spell. The creature must make a Constitution saving throw (DC 10 + the spell\'s level). On a failed save, the spell fails and has no effect. If the spell was cast at 3rd level or lower, it automatically fails. Higher Levels: The spell automatically fails if its level is equal to or less than the slot level used.'
  },
  {
    id: 'hypnotic-pattern', name: 'Hypnotic Pattern', level: 3, school: 'Illusion',
    castingTime: '1 Action', range: '120 feet', components: ['S', 'M (a glowing stick of incense)'],
    duration: 'Concentration, up to 1 minute', concentration: true, ritual: false,
    classes: ['Bard', 'Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'You create a twisting pattern of colors that weaves through the air inside a 30-foot Cube within range. The pattern appears for a moment and vanishes. Each creature in the area who sees the pattern must make a Wisdom saving throw. On a failed save, the creature has the Charmed and Incapacitated conditions for the duration. While Charmed by this spell, the creature\'s Speed is 0 and the creature is Incapacitated. The spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor.'
  },
  {
    id: 'lightning-bolt', name: 'Lightning Bolt', level: 3, school: 'Evocation',
    castingTime: '1 Action', range: 'Self (100-foot line)', components: ['V', 'S', 'M (a bit of fur and a rod of amber, crystal, or glass)'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'A stroke of lightning forming a line of 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 Lightning damage on a failed save, or half as much damage on a successful one. The lightning ignites flammable objects in the area that aren\'t being worn or carried. Higher Levels: The damage increases by 1d6 for each slot level above 3.'
  },
  // ─── LEVEL 4 SPELLS ───
  {
    id: 'banishment', name: 'Banishment', level: 4, school: 'Abjuration',
    castingTime: '1 Action', range: '30 feet', components: ['V', 'S', 'M (a pentacle)'],
    duration: 'Concentration, up to 1 minute', concentration: true, ritual: false,
    classes: ['Cleric', 'Paladin', 'Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'One creature that you can see within range must succeed on a Charisma saving throw or be transported to a harmless demiplane for the duration. While there, the target has the Incapacitated condition. When the spell ends, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. If the target is an Extraplanar creature, the creature is banished to its native plane instead. The creature can\'t return for 1 minute, after which it reappears in the space it left or in the nearest unoccupied space. Higher Levels: You can target one additional creature for each slot level above 4.'
  },
  {
    id: 'greater-invisibility', name: 'Greater Invisibility', level: 4, school: 'Illusion',
    castingTime: '1 Action', range: 'Touch', components: ['V', 'S'],
    duration: 'Concentration, up to 1 minute', concentration: true, ritual: false,
    classes: ['Bard', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'A creature you touch has the Invisible condition until the spell ends.'
  },
  {
    id: 'polymorph', name: 'Polymorph', level: 4, school: 'Transmutation',
    castingTime: '1 Action', range: '60 feet', components: ['V', 'S', 'M (a caterpillar cocoon)'],
    duration: 'Concentration, up to 1 hour', concentration: true, ritual: false,
    classes: ['Bard', 'Cleric', 'Druid', 'Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. A shapechanger automatically succeeds. The transformation lasts for the duration, or until the target drops to 0 Hit Points or dies. The creature\'s game statistics, including mental ability scores, are replaced by the statistics of the new form. It retains its alignment and personality.'
  },
  // ─── LEVEL 5 SPELLS ───
  {
    id: 'animate-objects', name: 'Animate Objects', level: 5, school: 'Transmutation',
    castingTime: '1 Action', range: '120 feet', components: ['V', 'S'],
    duration: 'Concentration, up to 1 minute', concentration: true, ritual: false,
    classes: ['Artificer', 'Bard', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can\'t animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 Hit Points.'
  },
  {
    id: 'cone-of-cold', name: 'Cone of Cold', level: 5, school: 'Evocation',
    castingTime: '1 Action', range: 'Self (60-foot cone)', components: ['V', 'S', 'M (a small crystal or glass cone)'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Druid', 'Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'You unleash a blast of cold air. Each creature in a 60-foot Cone must make a Constitution saving throw. On a failed save, a creature takes 8d8 Cold damage, and its Speed is reduced by 10 feet until the start of your next turn. On a successful save, a creature takes half as much damage only. Higher Levels: The damage increases by 1d8 for each slot level above 5.'
  },
  {
    id: 'hold-monster', name: 'Hold Monster', level: 5, school: 'Enchantment',
    castingTime: '1 Action', range: '90 feet', components: ['V', 'S', 'M (a small piece of iron)'],
    duration: 'Concentration, up to 1 minute', concentration: true, ritual: false,
    classes: ['Bard', 'Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or have the Paralyzed condition for the duration. At the end of each of its turns, the target repeats the save, ending the spell on a success. Higher Levels: You can target one additional creature for each slot level above 5.'
  },
  {
    id: 'mass-cure-wounds', name: 'Mass Cure Wounds', level: 5, school: 'Abjuration',
    castingTime: '1 Action', range: '60 feet', components: ['V', 'S'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Bard', 'Cleric', 'Druid'],
    source: 'PHB 2024',
    description: 'A wave of healing energy washes out from a point of your choice within range. Choose up to six creatures in a 30-foot-radius Sphere centered on that point. Each target regains Hit Points equal to 5d8 plus your spellcasting ability modifier. This spell has no effect on Constructs or Undead. Higher Levels: The healing increases by 1d8 for each slot level above 5.'
  },
  {
    id: 'telekinesis', name: 'Telekinesis', level: 5, school: 'Transmutation',
    castingTime: '1 Action', range: '60 feet', components: ['V', 'S'],
    duration: 'Concentration, up to 10 minutes', concentration: true, ritual: false,
    classes: ['Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell, and as your action each round for the duration, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round, or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell.'
  },
  // ─── LEVEL 6 SPELLS ───
  {
    id: 'chain-lightning', name: 'Chain Lightning', level: 6, school: 'Evocation',
    castingTime: '1 Action', range: '150 feet', components: ['V', 'S', 'M (a bit of fur, amber, or crystal and a piece of copper)'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'You create a bolt of lightning that arcs toward a target of your choice that you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts. A target must make a Dexterity saving throw. The target takes 10d8 Lightning damage on a failed save, or half as much damage on a successful one. Higher Levels: One additional bolt leaps for each slot level above 6.'
  },
  {
    id: 'heal', name: 'Heal', level: 6, school: 'Abjuration',
    castingTime: '1 Action', range: '60 feet', components: ['V', 'S'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Cleric', 'Druid'],
    source: 'PHB 2024',
    description: 'Choose a creature that you can see within range. A surge of positive energy washes through the creature, causing it to regain 70 Hit Points. The spell also ends the Blinded, Deafened, and Diseased conditions on the target. This spell has no effect on Constructs or Undead. Higher Levels: The healing increases by 10 for each slot level above 6.'
  },
  {
    id: 'true-seeing', name: 'True Seeing', level: 6, school: 'Divination',
    castingTime: '1 Action', range: 'Touch', components: ['V', 'S', 'M (mushroom powder worth 25+ gp)'],
    duration: '1 hour', concentration: false, ritual: false,
    classes: ['Bard', 'Cleric', 'Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'You give the willing creature you touch the ability to see things as they actually are. For the duration, the creature has Truesight with a range of 120 feet.'
  },
  // ─── LEVEL 7 SPELLS ───
  {
    id: 'etherealness', name: 'Etherealness', level: 7, school: 'Transmutation',
    castingTime: '1 Action', range: 'Self', components: ['V', 'S'],
    duration: '8 hours', concentration: false, ritual: false,
    classes: ['Bard', 'Cleric', 'Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'You step into the border regions of the Ethereal Plane, in the area where it overlaps with your current plane. You remain in the Border Ethereal for the duration or until you use your action to dismiss the spell. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can see and hear the plane you originated from, but everything there looks gray, and you can\'t see anything more than 60 feet away.'
  },
  {
    id: 'finger-of-death', name: 'Finger of Death', level: 7, school: 'Necromancy',
    castingTime: '1 Action', range: '60 feet', components: ['V', 'S'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'You send negative energy coursing through a creature that you can see within range, causing it searing pain. The target must make a Constitution saving throw. The target takes 7d8+30 Necrotic damage on a failed save, or half as much damage on a successful one. A Humanoid killed by this spell rises at the start of your next turn as a Zombie that has the Undead type. The zombie pursues whatever creature it can see that is closest to it.'
  },
  // ─── LEVEL 8 SPELLS ───
  {
    id: 'dominate-monster', name: 'Dominate Monster', level: 8, school: 'Enchantment',
    castingTime: '1 Action', range: '60 feet', components: ['V', 'S'],
    duration: 'Concentration, up to 1 hour', concentration: true, ritual: false,
    classes: ['Bard', 'Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'One creature you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The charmed target obeys your commands to the best of its ability. Whenever the target takes damage, it makes a new Wisdom saving throw. On a success, the spell ends.'
  },
  {
    id: 'earthquake', name: 'Earthquake', level: 8, school: 'Evocation',
    castingTime: '1 Action', range: '500 feet', components: ['V', 'S', 'M (a pinch of dirt, a piece of rock, and a lump of clay)'],
    duration: 'Concentration, up to 1 minute', concentration: true, ritual: false,
    classes: ['Cleric', 'Druid', 'Sorcerer'],
    source: 'PHB 2024',
    description: 'You create a seismic disturbance at a point on the ground you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot-radius Circle centered on that point. The spell has several effects on creatures and objects in the area. Each creature on the ground that is concentrating must make a Constitution saving throw. On a failed save, the creature\'s Concentration breaks.'
  },
  // ─── LEVEL 9 SPELLS ───
  {
    id: 'meteor-swarm', name: 'Meteor Swarm', level: 9, school: 'Evocation',
    castingTime: '1 Action', range: '1 mile', components: ['V', 'S'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius Sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creature takes 20d6 Fire damage and 20d6 Bludgeoning damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one fiery Sphere is affected only once. A nonmagical object that isn\'t being worn or carried also takes the damage if it\'s in the spell\'s area.'
  },
  {
    id: 'power-word-kill', name: 'Power Word Kill', level: 9, school: 'Enchantment',
    castingTime: '1 Action', range: '60 feet', components: ['V'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Bard', 'Sorcerer', 'Warlock', 'Wizard'],
    source: 'PHB 2024',
    description: 'You speak a word of power that can compel one creature you can see within range to die instantly. If the creature you choose has 100 Hit Points or fewer, it dies. Otherwise, the spell has no effect.'
  },
  {
    id: 'time-stop', name: 'Time Stop', level: 9, school: 'Transmutation',
    castingTime: '1 Action', range: 'Self', components: ['V'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'You briefly stop the flow of time for everyone but yourself. No time passes for other creatures, while you take 1d4+1 turns in a row, during which you can use actions and move as normal. This effect ends if one of the actions you use during this period, or any effects that you create during this period, affects a creature other than you or an object being worn or carried by someone other than you. In addition, the effect ends if you move to a place more than 1,000 feet from the location where you cast the spell.'
  },
  {
    id: 'wish', name: 'Wish', level: 9, school: 'Conjuration',
    castingTime: '1 Action', range: 'Self', components: ['V'],
    duration: 'Instantaneous', concentration: false, ritual: false,
    classes: ['Sorcerer', 'Wizard'],
    source: 'PHB 2024',
    description: 'Wish is the mightiest spell a mortal creature can cast. By simply speaking aloud, you can alter the very foundations of reality in accord with your desires. The basic use of this spell is to duplicate any other spell of 8th level or lower. Alternatively, you can create one of the following effects of your choice: Create objects worth up to 25,000 gp; grant up to 10 creatures resistance to a damage type; grant up to 10 creatures immunity to a single spell or magical effect; undo a single recent event by forcing a reroll. You might also be able to accomplish something beyond the scope of the above examples.'
  },
];

export function getSpellsByClass(className) {
  return spells.filter(s => s.classes.includes(className));
}

export function getSpellsByLevel(level) {
  return spells.filter(s => s.level === level);
}

export function getSpellsBySchool(school) {
  return spells.filter(s => s.school === school);
}

export function searchSpells(query) {
  const q = query.toLowerCase();
  return spells.filter(s =>
    s.name.toLowerCase().includes(q) ||
    s.description.toLowerCase().includes(q) ||
    s.school.toLowerCase().includes(q)
  );
}
