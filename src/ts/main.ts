import { BinaryTree } from "./binarytree";
const tree: BinaryTree<number> = new BinaryTree<number>();
tree.insert(55);
tree.insert(44);
tree.insert(98);

const binaryTreeStructure = document.getElementById("binarytreeStructure");
binaryTreeStructure.append(tree.draw());
tree.consoleIt();
