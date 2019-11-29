export class BinaryNode<T> {
    private _data: T;
    private _parent: number;
    private _children: number;
    constructor(data: T) {
        this._data = data;
    }
}

