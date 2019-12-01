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
            this._root = this.insertNode(node, this._root);
        }
    }
    protected insertNode(node: BinaryNode<T>, subtree: BinaryNode<T>): BinaryNode<T> {
        if (subtree === null) {
            subtree = node;
        } else {
            if (node.value < subtree.value) {
                subtree.left = this.insertNode(node, subtree.left);
            } else if (node.value > subtree.value) {
                subtree.right = this.insertNode(node, subtree.right);
            }
        }
        return subtree;
    }
    protected findNode(value: T, subtree: BinaryNode<T>): BinaryNode<T> {
        if (subtree == null) {
            throw new Error("Node isn't found");
        }
        if (subtree.value > value) {
            subtree =  this.findNode(value, subtree.left);
        } else if (subtree.value < value) {
            subtree =  this.findNode(value, subtree.right);
        } else if (subtree.value === value) {
            subtree = subtree;
        }
        return subtree;
    }
    public delete(value: T): void {
        if (this.isEmpty()) {
            throw new Error("Three is empty");
        }
        const node: BinaryNode<T> = this.findNode(value, this._root);
        if (node) {
            this._root = this.deleteNode(node, this._root);
        }
    }
    protected deleteNode(node: BinaryNode<T>, subtree: BinaryNode<T>): BinaryNode<T> {
        if (subtree == null) {
            return null;
        }
        if (subtree.value > node.value) {
            subtree.left = this.deleteNode(subtree.left, node);
        } else if (subtree.value < node.value) {
            subtree.right = this.deleteNode(subtree.right, node);
        } else {
            if (subtree.left == null && subtree.right == null) {
                subtree = null;
            } else {
                if (subtree.left == null) {
                    subtree = subtree.right;
                }
                if (subtree.right == null) {
                    subtree = subtree.left;
                }
            }
        }
        return subtree;
    }
    public consoleIt(): void {
        console.log(this._root);
    }
    public draw(): string {
        if (this.isEmpty()) {
            throw new Error("Three is empty");
        }
        return <string><unknown>this.drawNode(this._root);
    }
    public drawNode(subtree: BinaryNode<T>): HTMLElement {
        const nodeElement = document.createElement("li");
        const nodeChildElement = document.createElement("ul");
        if (subtree.left == null && subtree.right == null) {
            nodeElement.innerHTML = <string><unknown>subtree.value;
        } else if (subtree.right == null) {
            nodeElement.innerHTML = <string><unknown>subtree.value;
            nodeChildElement.append(this.drawNode(subtree.left));
            nodeElement.append(nodeChildElement);
        } else if (subtree.left == null) {
            nodeElement.innerHTML = <string><unknown>subtree.value;
            nodeChildElement.append(this.drawNode(subtree.right));
            nodeElement.append(nodeChildElement);
        }
        return nodeElement;
    }
}

