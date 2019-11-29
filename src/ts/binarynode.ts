export class BinaryNode<T> {
    public value: T = null;
    public left: BinaryNode<T> = null;
    public right: BinaryNode<T> = null;
    constructor(value: T) {
        this.value = value;
    }
}
