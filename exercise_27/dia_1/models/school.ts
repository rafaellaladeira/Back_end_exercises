export default class Student {
   private _enrollment: string;
   private _name: string;
   private _examsGrades: number[];
   private _worksGrades: number[];

    constructor(enrollment: string,name: string ){
        this._enrollment = enrollment;
        this._name = name;
        this._examsGrades = [];
        this._worksGrades = [];
    }

    get enrollment():string {
        return this._enrollment;
    }

    set enrollment(value: string) {
        this._enrollment = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value.length < 3) {
            throw new Error (' O nome deve conter no mínimo 3 caracteres')
        }

        this._name = value;
    }

    get examsGrades(): number[] {
        return this._examsGrades;
    }

    set examsGrades(value: number[]) {
        if (value.length > 4) {
            throw new Error (' A pessoa estudante só pode possuir 4 notas de provas');
        }

        this._examsGrades = value;
    }

    get worksGrades(): number[] {
        return this._worksGrades;
    }

    set worksGrades(value: number[]) {
        if (value.length > 2) {
            throw new Error (' A pessoa estudante só pode possuir 2 notas de trabalhos')
        }

        this._worksGrades = value;
    }

    // Add dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa
    // estudante.

    sumGrades(): number {
        const data = [...this.examsGrades, ...this.worksGrades];
        return data.reduce((acc, note) => acc + note, 0)
    };

    averageGrades(): number {
        const sumGrades = this.sumGrades();
        const size = this.examsGrades.length + this.worksGrades.length;
        const media = sumGrades / size;
        return Math.round(media);
    }

}


// para testar:

const personOne = new Student('2020000', "Rafaella Ladeira");
console.log(personOne);

const personTwo = new Student('556223', 'Joãozinho');
console.log(personTwo);

// Para testar 2:

personTwo.examsGrades = [20, 15, 3,2];
personTwo.worksGrades = [45, 4];

console.log('Soma de todas as notas', personTwo.averageGrades());
