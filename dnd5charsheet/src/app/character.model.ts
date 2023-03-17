
export class Character {
    [key: string]: any;
    constructor(
        public id: number,
        public level: number,
        public name: string,
        public charClass: string,
        public strength: number,
        public dexterity: number,
        public constitution: number,
        public intelligence: number,
        public wisdom: number,
        public charisma: number,
        public image: string,
        public description: string,
    ) {}
}

