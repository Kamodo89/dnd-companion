// D&D 5.5e (2024) Species Data
// Sources: PHB 2024, MToF, MotM, Fizban's, and other sourcebooks

export const SPECIES = [
  // ── PHB 2024 ──
  {
    id: 'aasimar', name: 'Aasimar', source: 'PHB 2024',
    size: ['Medium', 'Small'], speed: 30,
    description: 'Aasimar are mortals touched by the divine, bearing a spark of celestial radiance.',
    traits: [
      { name: 'Celestial Resistance', description: 'You have Resistance to Necrotic and Radiant damage.' },
      { name: 'Darkvision', description: '60-foot Darkvision.' },
      { name: 'Healing Hands', description: 'As a Magic action, you touch a creature and roll a number of d4s equal to your Proficiency Bonus. The creature regains a number of Hit Points equal to the total rolled. Once you use this trait, you can\'t use it again until you finish a Long Rest.' },
      { name: 'Light Bearer', description: 'You know the Light cantrip. Charisma is your spellcasting ability for it.' },
      { name: 'Celestial Revelation', description: 'When you reach character level 3, you can transform as a Bonus Action. Choose: Heavenly Wings (fly speed equal to walking speed), Inner Radiance (bright light 10 ft, dim 10 ft additional, radiant damage once per turn), or Necrotic Shroud (frightened enemies within 10 ft). Lasts 1 minute, once per Long Rest.' },
    ]
  },
  {
    id: 'dragonborn', name: 'Dragonborn', source: 'PHB 2024',
    size: ['Medium'], speed: 30,
    description: 'Dragonborn walk proudly through a world that greets them with fearful incomprehension.',
    traits: [
      { name: 'Draconic Ancestry', description: 'Choose a dragon type: Black (Acid, 5×30 ft line), Blue (Lightning, 5×30 ft line), Brass (Fire, 5×30 ft line), Bronze (Lightning, 5×30 ft line), Copper (Acid, 5×30 ft line), Gold (Fire, 15 ft cone), Green (Poison, 15 ft cone), Red (Fire, 15 ft cone), Silver (Cold, 15 ft cone), or White (Cold, 15 ft cone). Determines Breath Weapon shape and damage type.' },
      { name: 'Breath Weapon', description: 'When you take the Attack action, you can replace one attack with a Breath Weapon. Save DC = 8 + Con modifier + Proficiency Bonus. Damage: 1d10 per character level (max 10d10). Uses: Proficiency Bonus per Long Rest.' },
      { name: 'Damage Resistance', description: 'You have Resistance to the damage type determined by your Draconic Ancestry.' },
      { name: 'Darkvision', description: '60-foot Darkvision.' },
      { name: 'Draconic Flight', description: 'At character level 5, you sprout draconic wings. As a Bonus Action, you gain a Fly Speed equal to your walking Speed.' },
    ]
  },
  {
    id: 'dwarf', name: 'Dwarf', source: 'PHB 2024',
    size: ['Medium'], speed: 30,
    description: 'Dwarves are a stocky people known for their mining expertise, stonecrafting, and fierce martial traditions.',
    traits: [
      { name: 'Darkvision', description: '120-foot Darkvision.' },
      { name: 'Dwarven Resilience', description: 'You have Resistance to Poison damage. Advantage on saving throws against the Poisoned condition.' },
      { name: 'Dwarven Toughness', description: 'Your Hit Point maximum increases by 1, and it increases by 1 again whenever you gain a level.' },
      { name: 'Forge Wise', description: 'Your divine connection to the forge gives you Proficiency with two of the following tools of your choice: Jeweler\'s Tools, Mason\'s Tools, Smith\'s Tools, or Tinker\'s Tools.' },
      { name: 'Stonecunning', description: 'As a Bonus Action, you gain Tremorsense with a range of 60 feet for 10 minutes. You must be on a stone surface or touching a stone surface to use this Tremorsense. The stone can be natural or worked. You can use this Bonus Action a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.' },
    ]
  },
  {
    id: 'elf', name: 'Elf', source: 'PHB 2024',
    size: ['Medium'], speed: 30,
    description: 'Elves are a magical people of otherworldly grace, living in places of ethereal beauty.',
    traits: [
      { name: 'Darkvision', description: '60-foot Darkvision.' },
      { name: 'Elven Lineage', description: 'Choose one lineage: Drow (darkness, faerie fire, darkness spells), High Elf (detect magic, misty step, additional Wizard cantrip), or Wood Elf (druidcraft, longstrider, pass without trace). Gain lineage spells at levels 3 and 5.' },
      { name: 'Fey Ancestry', description: 'You have Advantage on saving throws against the Charmed condition.' },
      { name: 'Keen Senses', description: 'You have Proficiency in the Perception skill.' },
      { name: 'Trance', description: 'You don\'t need to sleep. Instead, you meditate deeply for 4 hours a day. After resting this way, you gain the same benefit as a human does from 8 hours of sleep.' },
    ]
  },
  {
    id: 'gnome', name: 'Gnome', source: 'PHB 2024',
    size: ['Small'], speed: 30,
    description: 'A gnome\'s energy and enthusiasm for living shines through every inch of their tiny form.',
    traits: [
      { name: 'Darkvision', description: '60-foot Darkvision.' },
      { name: 'Gnomish Cunning', description: 'You have Advantage on Intelligence, Wisdom, and Charisma saving throws.' },
      { name: 'Gnomish Lineage', description: 'Choose: Forest Gnome (minor illusion, speak with small beasts) or Rock Gnome (mending, magic tinker item).' },
    ]
  },
  {
    id: 'goliath', name: 'Goliath', source: 'PHB 2024',
    size: ['Medium'], speed: 35,
    description: 'Towering wanderers who live on the highest mountain peaks, wrestling giants for sport.',
    traits: [
      { name: 'Giant Ancestry', description: 'Choose one: Cloud (misty step once/LR), Fire (damage enemy on hit once/SR), Frost (ice slam on hit once/SR), Hill (roll d4 for advantage on Str checks), or Stone (stone\'s endurance reaction, reduce damage once/SR).' },
      { name: 'Large Form', description: 'Starting at level 5, you can change your size to Large as a Bonus Action, gaining reach and weapon damage increases for 10 minutes. Once per Long Rest.' },
      { name: 'Powerful Build', description: 'You have Advantage on saving throws to avoid being moved, and you count as one size larger for carrying capacity.' },
    ]
  },
  {
    id: 'halfling', name: 'Halfling', source: 'PHB 2024',
    size: ['Small'], speed: 30,
    description: 'Halflings are an optimistic people who tend toward the comfortable and familiar.',
    traits: [
      { name: 'Brave', description: 'You have Advantage on saving throws against the Frightened condition.' },
      { name: 'Halfling Nimbleness', description: 'You can move through the space of any creature that is a size larger than you, but you can\'t stop in the same space.' },
      { name: 'Luck', description: 'When you roll a 1 on the d20 for a d20 Test, you can reroll the die, and you must use the new roll.' },
      { name: 'Naturally Stealthy', description: 'You can take the Hide action even when you are obscured only by a creature that is at least one size larger than you.' },
    ]
  },
  {
    id: 'human', name: 'Human', source: 'PHB 2024',
    size: ['Medium', 'Small'], speed: 30,
    description: 'Humans are the most adaptable and ambitious species in the known world.',
    traits: [
      { name: 'Resourceful', description: 'You gain Heroic Inspiration whenever you finish a Long Rest.' },
      { name: 'Skillful', description: 'You gain Proficiency in one skill of your choice.' },
      { name: 'Versatile', description: 'You gain the Origin feat: Skilled.' },
    ]
  },
  {
    id: 'orc', name: 'Orc', source: 'PHB 2024',
    size: ['Medium'], speed: 30,
    description: 'Orcs trace their creation to Gruumsh, one of the most powerful gods in the multiverse.',
    traits: [
      { name: 'Adrenaline Rush', description: 'You can take the Dash action as a Bonus Action. You can use this trait a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Short or Long Rest. When you use this trait, you gain a number of Temporary Hit Points equal to your Proficiency Bonus.' },
      { name: 'Darkvision', description: '120-foot Darkvision.' },
      { name: 'Relentless Endurance', description: 'When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 Hit Point instead. Once you use this trait, you can\'t use it again until you finish a Long Rest.' },
    ]
  },
  {
    id: 'tiefling', name: 'Tiefling', source: 'PHB 2024',
    size: ['Medium', 'Small'], speed: 30,
    description: 'Tieflings are formed by an infernal touch that shaped their ancestors.',
    traits: [
      { name: 'Darkvision', description: '60-foot Darkvision.' },
      { name: 'Fiendish Legacy', description: 'Choose one: Abyssal (poison spray, ray of sickness, hold person/darkness), Chthonic (chill touch, false life, ray of enfeeblement/darkness), or Infernal (fire bolt, hellish rebuke, darkness). Gain spells at levels 3 and 5. Cha is spellcasting ability.' },
      { name: 'Otherworldly Presence', description: 'You know the Thaumaturgy cantrip. Charisma is your spellcasting ability for it.' },
    ]
  },
  // ── Monsters of the Multiverse / MToF Species ──
  {
    id: 'aarakocra', name: 'Aarakocra', source: 'MotM',
    size: ['Medium'], speed: 30,
    description: 'Aarakocra soar through the sky, resembling large birds with humanoid features.',
    traits: [
      { name: 'Flight', description: 'You have a Fly Speed equal to your Speed. To use this Speed, you can\'t be wearing Medium or Heavy armor.' },
      { name: 'Talons', description: 'You have Talons that you can use to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier Slashing damage, instead of the bludgeoning damage normal for an unarmed strike.' },
    ]
  },
  {
    id: 'air-genasi', name: 'Air Genasi', source: 'MotM',
    size: ['Medium', 'Small'], speed: 35,
    description: 'Air genasi descend from beings of elemental air.',
    traits: [
      { name: 'Unending Breath', description: 'You can hold your breath indefinitely while you\'re not incapacitated.' },
      { name: 'Lightning Resistance', description: 'You have Resistance to Lightning damage.' },
      { name: 'Mingle with the Wind', description: 'You know the Shocking Grasp cantrip. Starting at 3rd level, you can cast the Feather Fall spell with this trait, without requiring a material component. Starting at 5th level, you can also cast the Levitate spell with this trait, without requiring a material component. Constitution is your spellcasting ability.' },
    ]
  },
  {
    id: 'bugbear', name: 'Bugbear', source: 'MotM',
    size: ['Medium'], speed: 30,
    description: 'Neither bugs nor bears, bugbears are massive goblinoids with great physical strength.',
    traits: [
      { name: 'Darkvision', description: '60-foot Darkvision.' },
      { name: 'Fey Ancestry', description: 'Advantage on saves against Charmed.' },
      { name: 'Long-Limbed', description: 'When you make a melee attack on your turn, your reach for it is 5 feet greater than normal.' },
      { name: 'Powerful Build', description: 'You count as one size larger for carrying capacity.' },
      { name: 'Sneaky', description: 'You have Proficiency in the Stealth skill.' },
      { name: 'Surprise Attack', description: 'If you hit a creature with an attack roll, the creature takes an extra 2d6 damage if it hasn\'t taken a turn yet in the current combat.' },
    ]
  },
  {
    id: 'centaur', name: 'Centaur', source: 'MotM',
    size: ['Medium'], speed: 40,
    description: 'Half horse, half humanoid, centaurs are proud beings who roam the wilds.',
    traits: [
      { name: 'Charge', description: 'If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack on the same turn, you can immediately follow that attack with a bonus action, making one attack against the target with your hooves.' },
      { name: 'Equine Build', description: 'You count as one size larger for carrying capacity and your jump distance is doubled.' },
      { name: 'Hooves', description: 'You have hooves that you can use to make unarmed strikes. When you hit with them, the strike deals 1d6 + Str modifier Bludgeoning damage.' },
      { name: 'Natural Affinity', description: 'Your fey connection grants you proficiency in one of: Animal Handling, Medicine, Nature, or Survival.' },
    ]
  },
  {
    id: 'changeling', name: 'Changeling', source: 'MotM',
    size: ['Medium', 'Small'], speed: 30,
    description: 'Changelings are humanoids with a supernatural gift for disguise.',
    traits: [
      { name: 'Shapechanger', description: 'As an action, you can change your appearance and your voice. You determine the specifics of the changes. You can\'t duplicate the appearance of an individual you\'ve never seen, and you must adopt a form that has the same basic arrangement of limbs that you have.' },
      { name: 'Changeling Instincts', description: 'You gain proficiency with two of: Deception, Insight, Intimidation, Performance, or Persuasion.' },
    ]
  },
  {
    id: 'deep-gnome', name: 'Deep Gnome (Svirfneblin)', source: 'MotM',
    size: ['Small'], speed: 30,
    description: 'Deep gnomes are secretive and sober gnomes who dwell in the Underdark.',
    traits: [
      { name: 'Darkvision', description: '120-foot Darkvision.' },
      { name: 'Gift of the Svirfneblin', description: 'You know the Disguise Self spell. Starting at 3rd level, you can cast Nondetection on yourself without material components. Starting at 5th level, you can cast Blindness/Deafness.' },
      { name: 'Gnomish Magic Resistance', description: 'You have Advantage on Intelligence, Wisdom, and Charisma saving throws against spells.' },
      { name: 'Stone Camouflage', description: 'You have Advantage on Dexterity (Stealth) checks in rocky or underground terrain.' },
    ]
  },
  {
    id: 'duergar', name: 'Duergar', source: 'MotM',
    size: ['Medium'], speed: 30,
    description: 'Duergar are gray dwarves hardened by millennia of toil in the Underdark.',
    traits: [
      { name: 'Darkvision', description: '120-foot Darkvision.' },
      { name: 'Duergar Resilience', description: 'Advantage on saves against poison, illusions, and being charmed or paralyzed.' },
      { name: 'Duergar Magic', description: 'Enlarge/Reduce on self at level 3. Invisibility at level 5.' },
      { name: 'Psionic Fortitude', description: 'You are immune to the Charmed and Frightened conditions.' },
    ]
  },
  {
    id: 'earth-genasi', name: 'Earth Genasi', source: 'MotM',
    size: ['Medium', 'Small'], speed: 30,
    description: 'Earth genasi descend from beings of elemental earth.',
    traits: [
      { name: 'Earth Walk', description: 'You can move across difficult terrain made of earth or stone without expending extra movement.' },
      { name: 'Merge with Stone', description: 'Pass without trace at level 1, Meld into Stone 1/LR at level 5.' },
      { name: 'Stone\'s Endurance', description: 'As a Reaction, you can reduce damage taken by 1d12 + Con modifier. Recharges on Short or Long Rest.' },
    ]
  },
  {
    id: 'eladrin', name: 'Eladrin', source: 'MotM',
    size: ['Medium'], speed: 30,
    description: 'Eladrin are elves native to the Feywild, a realm of beauty, unpredictable emotion, and boundless magic.',
    traits: [
      { name: 'Darkvision', description: '60-foot Darkvision.' },
      { name: 'Fey Ancestry', description: 'Advantage on saves against Charmed, can\'t be put to sleep magically.' },
      { name: 'Fey Step', description: 'As a Bonus Action, you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this Bonus Action a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest. When you reach 3rd level, your Fey Step now carries additional effects based on your season.' },
      { name: 'Trance', description: '4 hours meditation replaces 8 hours sleep.' },
    ]
  },
  {
    id: 'fairy', name: 'Fairy', source: 'MotM',
    size: ['Small'], speed: 30,
    description: 'Fairies are Feywild beings who delight in magic and trickery.',
    traits: [
      { name: 'Fairy Flight', description: 'You have a Fly Speed equal to your Speed and can hover.' },
      { name: 'Fairy Magic', description: 'You know the Druidcraft and Faerie Fire cantrips. You can cast Enlarge/Reduce once per Long Rest. Wis is your spellcasting ability.' },
      { name: 'Puny', description: 'You have Disadvantage on Strength checks and Strength saving throws.' },
    ]
  },
  {
    id: 'firbolg', name: 'Firbolg', source: 'MotM',
    size: ['Medium'], speed: 30,
    description: 'Firbolgs are forest-dwelling giants with a deep connection to nature.',
    traits: [
      { name: 'Firbolg Magic', description: 'You can cast Detect Magic and Disguise Self (appearing up to 3 feet shorter) once per Short Rest each. Wis is your spellcasting ability.' },
      { name: 'Hidden Step', description: 'As a Bonus Action, you can magically turn Invisible until the start of your next turn or until you attack, damage a creature, or force someone to make a saving throw. Once per Short or Long Rest.' },
      { name: 'Powerful Build', description: 'You count as one size larger for carrying capacity.' },
      { name: 'Speech of Beast and Leaf', description: 'You have the ability to communicate in a limited manner with Beasts, Plants, and vegetation.' },
    ]
  },
  {
    id: 'fire-genasi', name: 'Fire Genasi', source: 'MotM',
    size: ['Medium', 'Small'], speed: 30,
    description: 'Fire genasi descend from beings of elemental fire.',
    traits: [
      { name: 'Darkvision', description: '60-foot Darkvision.' },
      { name: 'Fire Resistance', description: 'You have Resistance to Fire damage.' },
      { name: 'Reach to the Blaze', description: 'Produce Flame cantrip at 1st. Burning Hands at 3rd. Flame Blade at 5th. Con is spellcasting ability.' },
    ]
  },
  {
    id: 'githyanki', name: 'Githyanki', source: 'MotM',
    size: ['Medium'], speed: 30,
    description: 'Githyanki are astral raiders who escaped mind flayer enslavement.',
    traits: [
      { name: 'Astral Knowledge', description: 'You can gain Proficiency in any skill or tool after a Long Rest.' },
      { name: 'Githyanki Psionics', description: 'Mage Hand cantrip at 1st. Jump at 3rd. Misty Step at 5th. Int is spellcasting ability.' },
      { name: 'Psychic Resilience', description: 'You have Resistance to Psychic damage.' },
    ]
  },
  {
    id: 'githzerai', name: 'Githzerai', source: 'MotM',
    size: ['Medium'], speed: 30,
    description: 'Githzerai are monastic warriors who honed their psionic power in the chaos of Limbo.',
    traits: [
      { name: 'Githzerai Psionics', description: 'Mage Hand cantrip at 1st. Shield at 3rd. Detect Thoughts at 5th. Wis is spellcasting ability.' },
      { name: 'Mental Discipline', description: 'Advantage on saving throws against the Charmed and Frightened conditions.' },
      { name: 'Psychic Resilience', description: 'You have Resistance to Psychic damage.' },
    ]
  },
  {
    id: 'goblin', name: 'Goblin', source: 'MotM',
    size: ['Small'], speed: 30,
    description: 'Goblins are small folk who endure a dangerous existence, relying on cunning and wits to survive.',
    traits: [
      { name: 'Darkvision', description: '60-foot Darkvision.' },
      { name: 'Fey Ancestry', description: 'Advantage on saves against Charmed.' },
      { name: 'Fury of the Small', description: 'When you damage a creature with an attack or a spell and the creature\'s size is larger than yours, you can cause the attack or spell to deal extra damage to the creature equal to your Proficiency Bonus. You can use this trait a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.' },
      { name: 'Nimble Escape', description: 'You can take the Disengage or Hide action as a Bonus Action on each of your turns.' },
    ]
  },
  {
    id: 'grung', name: 'Grung', source: 'One Grung Above',
    size: ['Small'], speed: 25,
    description: 'Grungs are froglike beings who live in trees and are naturally poisonous.',
    traits: [
      { name: 'Arboreal Alertness', description: 'You have Proficiency in the Perception skill.' },
      { name: 'Amphibious', description: 'You can breathe air and water.' },
      { name: 'Climb', description: 'You have a Climb Speed equal to your Speed.' },
      { name: 'Poisonous Skin', description: 'Any creature that grapples you or otherwise comes into direct contact with your skin must succeed on a DC 12 Con saving throw or become Poisoned for 1 minute.' },
      { name: 'Standing Leap', description: 'Your long jump is up to 25 feet and high jump up to 15 feet, with or without a running start.' },
    ]
  },
  {
    id: 'harengon', name: 'Harengon', source: 'MotM',
    size: ['Medium', 'Small'], speed: 30,
    description: 'Harengons are rabbit-folk originally from the Feywild.',
    traits: [
      { name: 'Hare-Trigger', description: 'You can add your Proficiency Bonus to your Initiative rolls.' },
      { name: 'Leporine Senses', description: 'You have Proficiency in the Perception skill.' },
      { name: 'Lucky Footwork', description: 'When you fail a Dexterity saving throw, you can use your Reaction to roll a d4 and add it to the save, potentially turning the failure into a success.' },
      { name: 'Rabbit Hop', description: 'As a Bonus Action, you can jump a number of feet equal to five times your Proficiency Bonus, without provoking opportunity attacks. You can use this trait only if your Speed is greater than 0.' },
    ]
  },
  {
    id: 'hobgoblin', name: 'Hobgoblin', source: 'MotM',
    size: ['Medium'], speed: 30,
    description: 'Hobgoblins are goblinoids shaped by military discipline and the drive to dominate.',
    traits: [
      { name: 'Darkvision', description: '60-foot Darkvision.' },
      { name: 'Fey Ancestry', description: 'Advantage on saves against Charmed.' },
      { name: 'Fortune from the Many', description: 'If you miss with an attack roll or fail an ability check or saving throw, you can draw on your bonds of loyalty to reroll the d20. You succeed if the new roll is equal to or higher than the DC or AC. You can use this trait a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.' },
      { name: 'Fey Gift', description: 'You can use the Help action as a Bonus Action.' },
    ]
  },
  {
    id: 'kenku', name: 'Kenku', source: 'MotM',
    size: ['Medium', 'Small'], speed: 30,
    description: 'Kenku are cursed humanoids who resemble wingless ravens and can only mimic voices they have heard.',
    traits: [
      { name: 'Expert Duplication', description: 'When you copy writing or craftwork produced by yourself or someone else, you have Advantage on any ability checks you make to produce an exact duplicate.' },
      { name: 'Kenku Recall', description: 'You have Expertise in two skills you are Proficient in.' },
      { name: 'Mimicry', description: 'You can mimic sounds you have heard, including voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Insight check.' },
    ]
  },
  {
    id: 'kobold', name: 'Kobold', source: 'MotM',
    size: ['Small'], speed: 30,
    description: 'Kobolds are small, reptilian humanoids who serve dragons or dig tunnels beneath the earth.',
    traits: [
      { name: 'Darkvision', description: '60-foot Darkvision.' },
      { name: 'Draconic Cry', description: 'As a Bonus Action, you let out a fearsome draconic cry. Until the start of your next turn, you and your allies have Advantage on attack rolls against any of the affected creatures within 10 feet of you that can hear the cry.' },
      { name: 'Kobold Legacy', description: 'Choose: Craftiness (Proficiency in any one skill), Defiance (Advantage on saves against Frightened), or Draconic Sorcery (one extra Sorcerer spell known).' },
    ]
  },
  {
    id: 'leonin', name: 'Leonin', source: 'Mythic Odysseys',
    size: ['Medium'], speed: 35,
    description: 'Leonin are lion-like humanoids of the grasslands, proud and fierce.',
    traits: [
      { name: 'Darkvision', description: '60-foot Darkvision.' },
      { name: 'Claws', description: 'Your claws are natural weapons. Slashing, 1d4 + Str modifier.' },
      { name: 'Hunter\'s Instincts', description: 'You gain Proficiency in one of: Athletics, Intimidation, Perception, or Survival.' },
      { name: 'Daunting Roar', description: 'As a Bonus Action, you let out a terrifying roar. Each creature within 10 feet must succeed on a Wisdom saving throw (8 + Prof + Con) or be Frightened until the end of your next turn. Recharges on Short or Long Rest.' },
    ]
  },
  {
    id: 'lizardfolk', name: 'Lizardfolk', source: 'MotM',
    size: ['Medium'], speed: 30,
    description: 'Lizardfolk are cunning reptilians who view the world through a primal lens.',
    traits: [
      { name: 'Bite', description: 'Unarmed strike deals 1d6 + Str modifier Piercing damage.' },
      { name: 'Cunning Artisan', description: 'As part of a Short Rest, you can harvest bone and hide from a slain Beast to make: shield, club, javelin, or 1d4 darts.' },
      { name: 'Hold Breath', description: 'You can hold your breath for up to 15 minutes at a time.' },
      { name: 'Hunter\'s Lore', description: 'You gain Proficiency in two of: Animal Handling, Nature, Perception, Stealth, or Survival.' },
      { name: 'Natural Armor', description: 'You have tough, scaly skin. When you aren\'t wearing armor, your base AC is 13 + Dex modifier.' },
      { name: 'Swim', description: 'You have a Swim Speed equal to your Speed.' },
    ]
  },
  {
    id: 'loxodon', name: 'Loxodon', source: 'Strixhaven',
    size: ['Medium'], speed: 30,
    description: 'Loxodons are elephant-like humanoids known for their wisdom and fierce loyalty.',
    traits: [
      { name: 'Powerful Build', description: 'You count as one size larger for carrying capacity.' },
      { name: 'Loxodon Serenity', description: 'You have Advantage on saving throws against being Charmed or Frightened.' },
      { name: 'Natural Armor', description: 'AC = 12 + Con modifier when not wearing armor.' },
      { name: 'Trunk', description: 'You can use your trunk to lift and carry up to half your carrying capacity. Shove creatures, or make an unarmed strike for 1d6 + Str Bludgeoning damage.' },
      { name: 'Keen Smell', description: 'Advantage on Perception, Survival, and Investigation checks that rely on smell.' },
    ]
  },
  {
    id: 'minotaur', name: 'Minotaur', source: 'MotM',
    size: ['Medium'], speed: 30,
    description: 'Minotaurs are maze-navigating warriors born of a dark curse long ago.',
    traits: [
      { name: 'Horns', description: 'You have horns that you can use to make unarmed strikes. When you hit with them, the strike deals 1d6 + Str modifier Piercing damage. If you move at least 10 feet straight toward a target and then hit it with your Horns attack on the same turn, the target takes an extra 1d6 Piercing damage.' },
      { name: 'Goring Rush', description: 'Immediately after you use the Dash action, you can make one melee attack with your Horns as a Bonus Action.' },
      { name: 'Hammering Horns', description: 'Immediately after you hit a creature with a melee attack as part of the Attack action, you can use a Bonus Action to attempt to push that target with your horns. The target must be within 5 feet of you and no more than one size larger than you.' },
      { name: 'Imposing Presence', description: 'You gain Proficiency in one of: Intimidation or Persuasion.' },
    ]
  },
  {
    id: 'satyr', name: 'Satyr', source: 'MotM',
    size: ['Medium'], speed: 35,
    description: 'Satyrs are Feywild natives who love revelry and music.',
    traits: [
      { name: 'Ram', description: 'Unarmed strike: 1d4 + Str Bludgeoning. If you move at least 20 feet toward a target and hit with Ram on the same turn, the target must make a Str save or be knocked Prone.' },
      { name: 'Magic Resistance', description: 'You have Advantage on saving throws against spells and other magical effects.' },
      { name: 'Mirthful Leaps', description: 'You can add 1d8 to your long jump distance and your high jump distance.' },
      { name: 'Reveler', description: 'Proficiency in Performance and Persuasion, and one musical instrument.' },
    ]
  },
  {
    id: 'sea-elf', name: 'Sea Elf', source: 'MotM',
    size: ['Medium'], speed: 30,
    description: 'Sea elves guard the depths of the oceans, far from the sight of land.',
    traits: [
      { name: 'Darkvision', description: '60-foot Darkvision.' },
      { name: 'Child of the Sea', description: 'You have a Swim Speed of 30 feet, and you can breathe air and water.' },
      { name: 'Friend of the Sea', description: 'You can communicate simple ideas with any creature that has a Swim Speed via sounds and gestures.' },
      { name: 'Fey Ancestry', description: 'Advantage on saves against Charmed.' },
      { name: 'Trance', description: '4 hours meditation replaces 8 hours sleep.' },
    ]
  },
  {
    id: 'shadar-kai', name: 'Shadar-kai', source: 'MotM',
    size: ['Medium'], speed: 30,
    description: 'Shadar-kai are elves whose souls are pledged to the Raven Queen of the Shadowfell.',
    traits: [
      { name: 'Darkvision', description: '60-foot Darkvision.' },
      { name: 'Fey Ancestry', description: 'Advantage on saves against Charmed.' },
      { name: 'Necrotic Resistance', description: 'You have Resistance to Necrotic damage.' },
      { name: 'Blessing of the Raven Queen', description: 'As a Bonus Action, you can magically teleport up to 30 feet to an unoccupied space you can see. At 3rd level, you also gain Resistance to all damage until the start of your next turn. Recharges on Long Rest.' },
      { name: 'Trance', description: '4 hours meditation replaces 8 hours sleep.' },
    ]
  },
  {
    id: 'shifter', name: 'Shifter', source: 'MotM',
    size: ['Medium'], speed: 30,
    description: 'Shifters are sometimes called the weretouched; they carry a bestial spark.',
    traits: [
      { name: 'Darkvision', description: '60-foot Darkvision.' },
      { name: 'Shifting', description: 'As a Bonus Action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert as a Bonus Action. Recharges on Short or Long Rest.' },
      { name: 'Shifting Feature', description: 'Choose: Beasthide (Temp HP, +1 AC), Longtooth (Fangs unarmed attack), Swiftstride (Dex proficiency, move on reaction), or Wildhunt (Wis proficiency, can\'t be surprised).' },
    ]
  },
  {
    id: 'simic-hybrid', name: 'Simic Hybrid', source: 'Strixhaven',
    size: ['Medium', 'Small'], speed: 30,
    description: 'Magically fused with animal attributes by the Simic Combine.',
    traits: [
      { name: 'Darkvision', description: '60-foot Darkvision.' },
      { name: 'Animal Enhancement', description: 'Choose two traits at level 1 (Manta Glide, Nimble Climber, Underwater Adaptation, Grappling Appendages, Carapace, or Acid Spit). Choose one more at level 5.' },
    ]
  },
  {
    id: 'tabaxi', name: 'Tabaxi', source: 'MotM',
    size: ['Medium', 'Small'], speed: 30,
    description: 'Tabaxi are feline humanoids driven by a deep curiosity.',
    traits: [
      { name: 'Darkvision', description: '60-foot Darkvision.' },
      { name: 'Feline Agility', description: 'Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can\'t use it again until you move 0 feet on one of your turns.' },
      { name: 'Cat\'s Claws', description: 'You have a Climb Speed equal to your Speed. Your claws deal 1d6 + Str Slashing damage.' },
      { name: 'Cat\'s Talent', description: 'You have Proficiency in the Perception and Stealth skills.' },
    ]
  },
  {
    id: 'tortle', name: 'Tortle', source: 'MotM',
    size: ['Medium', 'Small'], speed: 30,
    description: 'Tortles are turtle-folk who carry their home on their backs and have a natural connection to nature.',
    traits: [
      { name: 'Claws', description: 'Your claws are natural weapons: 1d6 + Str Slashing.' },
      { name: 'Hold Breath', description: 'You can hold your breath for up to 1 hour.' },
      { name: 'Natural Armor', description: 'Your shell gives you a base AC of 17 when not wearing armor.' },
      { name: 'Shell Defense', description: 'You can withdraw into your shell as an action, gaining +4 AC and Advantage on Str and Con saves, but you are Prone, Speed 0, can\'t take reactions, and have Disadvantage on Dex saves.' },
      { name: 'Survival Instinct', description: 'You gain Proficiency in the Survival skill.' },
    ]
  },
  {
    id: 'triton', name: 'Triton', source: 'MotM',
    size: ['Medium'], speed: 30,
    description: 'Tritons are sea folk who rose from the ocean\'s depths to become guardians of the deep.',
    traits: [
      { name: 'Amphibious', description: 'You can breathe air and water.' },
      { name: 'Control Air and Water', description: 'Fog Cloud at 1st. Gust of Wind at 3rd. Wall of Water at 5th. Cha is spellcasting ability.' },
      { name: 'Darkvision', description: '60-foot Darkvision.' },
      { name: 'Emissary of the Sea', description: 'You can communicate simple ideas to any creature with a Swim Speed.' },
      { name: 'Guardians of the Depths', description: 'You have Resistance to Cold damage.' },
      { name: 'Swim Speed', description: '30-foot Swim Speed.' },
    ]
  },
  {
    id: 'vedalken', name: 'Vedalken', source: 'Strixhaven',
    size: ['Medium'], speed: 30,
    description: 'Vedalken are methodical, detail-oriented humanoids who strive for perfection in all they do.',
    traits: [
      { name: 'Partially Amphibious', description: 'You can breathe air and water. You can speak underwater.' },
      { name: 'Tireless Precision', description: 'You have Proficiency in one of: Arcana, History, Investigation, Medicine, Performance, or Sleight of Hand. You have Expertise in the chosen skill.' },
      { name: 'Vedalken Dispassion', description: 'You have Advantage on all Intelligence, Wisdom, and Charisma saving throws.' },
    ]
  },
  {
    id: 'verdan', name: 'Verdan', source: 'Acquisitions',
    size: ['Small'], speed: 30,
    description: 'Verdans are green-skinned former goblins changed by consuming a mystical substance.',
    traits: [
      { name: 'Black Blood Healing', description: 'You regain a Hit Point at the start of your turn if you have at least 1 HP.' },
      { name: 'Limited Telepathy', description: 'You can communicate simple ideas to other creatures you can see, in a range of 30 feet, without using words.' },
      { name: 'Persuasive', description: 'You gain Proficiency in the Persuasion skill.' },
      { name: 'Telepathic Insight', description: 'Advantage on Wis and Cha saving throws.' },
    ]
  },
  {
    id: 'warforged', name: 'Warforged', source: 'TCoE',
    size: ['Medium', 'Small'], speed: 30,
    description: 'Warforged are living constructs built for combat, now searching for purpose beyond war.',
    traits: [
      { name: 'Constructed Resilience', description: 'Advantage on saves against disease, poison resistance, don\'t need to eat/drink/breathe, immune to sleep.' },
      { name: 'Sentry\'s Rest', description: 'During a Long Rest, you spend at least 6 hours in an inactive, motionless state, rather than sleeping. While in this state, you appear inert, but it doesn\'t render you Unconscious, and you can see and hear as normal.' },
      { name: 'Integrated Protection', description: 'Your armor can\'t be removed, and you have a base AC = 11 + Dex modifier (natural armor). You can attach armor to your body permanently.' },
      { name: 'Specialized Design', description: 'You gain Proficiency in one skill and one tool of your choice.' },
    ]
  },
  {
    id: 'yuan-ti', name: 'Yuan-ti', source: 'MotM',
    size: ['Medium'], speed: 30,
    description: 'Yuan-ti are serpentine humanoids who are largely devoid of emotion.',
    traits: [
      { name: 'Darkvision', description: '60-foot Darkvision.' },
      { name: 'Poison Immunity', description: 'You are immune to Poison damage and the Poisoned condition.' },
      { name: 'Magic Resistance', description: 'Advantage on saving throws against spells and other magical effects.' },
      { name: 'Serpentine Spellcasting', description: 'Poison Spray cantrip at 1st. Animal Friendship (snakes only) at 3rd. Suggestion at 5th. Cha is spellcasting ability.' },
    ]
  },
];

export function getSpeciesById(id) {
  return SPECIES.find(s => s.id === id);
}
