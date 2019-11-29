import { BinaryNode } from "./binarynode";

export class BinaryTree<T> {
    private _data: T;
    constructor(data: T) {
        this._data = data;
    }
    private node = new BinaryNode(this._data);
}
