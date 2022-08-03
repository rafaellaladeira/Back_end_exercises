export default class OrdersItem {
    private _name: string;
    private _price: number;

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value.length < 3) {
            throw new Error ('O nome deve ter ao menos 3 caracteres');
        } 

        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if (value === 0 || value < 0) {
            throw new Error ('O preço deve ser maior que 0')
        }
        this._price = value;
    }
}