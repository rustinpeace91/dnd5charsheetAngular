
export class Character {
    id: number;
    level: number;
    name: string;
    char_class: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    image: string;
    description: string;

    constructor(
        id,
        level,
        name,
        char_class,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
        image,
        description
    ){
        this.id= id;
        this.level= level;
        this.name= name;
        this.char_class= char_class;
        this.strength= strength;
        this.dexterity= dexterity;
        this.constitution= constitution;
        this.intelligence= intelligence;
        this.wisdom= wisdom;
        this.charisma= charisma;
        this.image= image;
        this.description= description;
    }
}

