import { BinaryNode } from "./binarynode";
import construct = Reflect.construct;

export class BinaryTree<T> {
    protected _root: BinaryNode<T> = null;
    public isEmpty(): boolean {
        return (this._root === null);
    }
    public insert(value: T): void {
        const node: BinaryNode<T> = new BinaryNode<T>(value);
        if (this.isEmpty()) {
            this._root = node;
        } else {
            this.insertNode(node, this._root);
        }
    }
    protected insertNode(node: BinaryNode<T>, subtree: BinaryNode<T>): void {
        if (subtree === null) {
            subtree = node;
        } else {
            if (node.value < subtree.value) {
                this.insertNode(node, subtree.left);
            } else if (node.value > subtree.value) {
                this.insertNode(node, subtree.right);
            }
        }
        console.log(subtree);
    }
    protected delete(value: T): void {
        if (this.isEmpty()) {
            throw new Error("Three is empty");
        }
        const node = this.findNode(value, this._root);
        if (node) {
            this.deleteNode(node);
        }
    }
    protected findNode(value: T, subtree: BinaryNode<T>): BinaryNode<T> {
        if (subtree.value > value) {
            subtree =  this.findNode(subtree.value, subtree.left);
        } else if (subtree.value < value) {
            subtree =  this.findNode(subtree.value, subtree.right);
        }
        return subtree;
    }
    protected deleteNode(node: BinaryNode<T>): void {
        if ((typeof node.left == null) && (typeof node.right == null)) {
            node = null;
        } else if (typeof node.left == null) {
            node = node.right;
        } else if (typeof node.right == null) {
            node = node.left;
        } else {
            if (typeof node.right.left == null) {
                node.right.left = node.right;
                node = node.right;
            } else {
                node.value = node.right.left.value;
                this.deleteNode(node);
            }
        }
    }
    public consoleIt(): void {
        console.log(this._root);
    }
}

