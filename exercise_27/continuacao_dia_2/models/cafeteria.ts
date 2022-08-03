export default class Client {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value.length < 2) {
            throw new Error ('O nome deve ter mais de 2 caracteres');
        }

        this._name = value
    }

}