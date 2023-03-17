interface AbilityScoreModifiers {
    [score: number]: number;
  }
  
  const abilityScoreModifiers: AbilityScoreModifiers = {
    1: -5,
    2: -4,
    3: -4,
    4: -3,
    5: -3,
    6: -2,
    7: -2,
    8: -1,
    9: -1,
    10: 0,
    11: 0,
    12: 1,
    13: 1,
    14: 2,
    15: 2,
    16: 3,
    17: 3,
    18: 4,
    19: 4,
    20: 5,
  }

  interface RacialBonuses {
    [key: string]: any;
  }

 const RacialBonuses = {
    "Orc": {
      "ability_modifiers": {
        "strength": 2,
        "intelligence": -2
      }
    },
    "Elf": {
      "ability_modifiers": {
        "dexterity": 2,
        "constitution": -2
      }
    },
    "Dwarf": {
      "ability_modifiers": {
        "constitution": 2,
        "charisma": -2
      }
    },
    "Halfling": {
      "ability_modifiers": {
        "dexterity": 2,
        "strength": -2
      }
    },
    "Human": {
      "ability_modifiers": {
        "strength": 1,
        "dexterity": 1,
        "constitution": 1,
        "intelligence": 1,
        "wisdom": 1,
        "charisma": 1
      }
    },
    "Dragonborn": {
      "ability_modifiers": {
        "strength": 2,
        "charisma": 1
      }
    },
    "Gnome": {
      "ability_modifiers": {
        "intelligence": 2,
        "strength": -2
      }
    },
    "Half-Orc": {
      "ability_modifiers": {
        "strength": 2,
        "constitution": 1,
        "intelligence": -2,
        "charisma": -2
      }
    },
    "Tiefling": {
      "ability_modifiers": {
        "intelligence": 1,
        "charisma": 2
      }
    }
  }