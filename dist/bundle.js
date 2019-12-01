(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"G:\\Work\\netcracker\\binarytree\\src\\ts\\binarynode.ts":[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var BinaryNode = function BinaryNode(value) {
    _classCallCheck(this, BinaryNode);

    this.value = null;
    this.left = null;
    this.right = null;
    this.value = value;
};

exports.BinaryNode = BinaryNode;

},{}],"G:\\Work\\netcracker\\binarytree\\src\\ts\\binarytree.ts":[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var binarynode_1 = require("./binarynode");

var BinaryTree = function () {
    function BinaryTree() {
        _classCallCheck(this, BinaryTree);

        this._root = null;
    }

    _createClass(BinaryTree, [{
        key: "isEmpty",
        value: function isEmpty() {
            return this._root === null;
        }
    }, {
        key: "insert",
        value: function insert(value) {
            var node = new binarynode_1.BinaryNode(value);
            // tslint:disable-next-line:prefer-conditional-expression
            if (this.isEmpty()) {
                this._root = node;
            } else {
                this._root = this.insertNode(node, this._root);
            }
        }
    }, {
        key: "insertNode",
        value: function insertNode(node, subtree) {
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
    }, {
        key: "findNode",
        value: function findNode(value, subtree) {
            if (subtree == null) {
                throw new Error("Node isn't found");
            }
            if (subtree.value > value) {
                subtree = this.findNode(value, subtree.left);
            } else if (subtree.value < value) {
                subtree = this.findNode(value, subtree.right);
            } else if (subtree.value === value) {
                subtree = subtree;
            }
            return subtree;
        }
    }, {
        key: "delete",
        value: function _delete(value) {
            if (this.isEmpty()) {
                throw new Error("Three is empty");
            }
            var node = this.findNode(value, this._root);
            if (node) {
                this._root = this.deleteNode(node, this._root);
            }
        }
    }, {
        key: "deleteNode",
        value: function deleteNode(node, subtree) {
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
    }, {
        key: "consoleIt",
        value: function consoleIt() {
            console.log(this._root);
        }
    }, {
        key: "draw",
        value: function draw() {
            if (this.isEmpty()) {
                throw new Error("Three is empty");
            }
            return this.drawNode(this._root);
        }
    }, {
        key: "drawNode",
        value: function drawNode(subtree) {
            var nodeElement = document.createElement("li");
            var nodeChildElement = document.createElement("ul");
            if (subtree.left == null && subtree.right == null) {
                nodeElement.innerHTML = subtree.value;
            } else if (subtree.right == null) {
                nodeElement.innerHTML = subtree.value;
                nodeChildElement.append(this.drawNode(subtree.left));
                nodeElement.append(nodeChildElement);
            } else if (subtree.left == null) {
                nodeElement.innerHTML = subtree.value;
                nodeChildElement.append(this.drawNode(subtree.right));
                nodeElement.append(nodeChildElement);
            } else {
                nodeElement.append(subtree.value);
                nodeChildElement.append(this.drawNode(subtree.left));
                nodeChildElement.append(this.drawNode(subtree.right));
                nodeElement.append(nodeChildElement);
            }
            return nodeElement;
        }
    }]);

    return BinaryTree;
}();

exports.BinaryTree = BinaryTree;

},{"./binarynode":"G:\\Work\\netcracker\\binarytree\\src\\ts\\binarynode.ts"}],"G:\\Work\\netcracker\\binarytree\\src\\ts\\main.ts":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binarytree_1 = require("./binarytree");
var tree = new binarytree_1.BinaryTree();
tree.insert(55);
tree.insert(44);
tree.insert(98);
tree.insert(45);
tree.insert(67);
tree.insert(130);
tree.insert(150);
tree.insert(160);
tree.insert(23);
var binaryTreeStructure = document.getElementById("binarytreeStructure");
binaryTreeStructure.append(tree.draw());
tree.consoleIt();

},{"./binarytree":"G:\\Work\\netcracker\\binarytree\\src\\ts\\binarytree.ts"}]},{},["G:\\Work\\netcracker\\binarytree\\src\\ts\\main.ts"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvYmluYXJ5bm9kZS50cyIsInNyYy90cy9iaW5hcnl0cmVlLnRzIiwic3JjL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7SUNBYSxVLEdBSVQsb0JBQVksS0FBWixFQUFvQjtBQUFBOztBQUhiLFNBQUEsS0FBQSxHQUFXLElBQVg7QUFDQSxTQUFBLElBQUEsR0FBc0IsSUFBdEI7QUFDQSxTQUFBLEtBQUEsR0FBdUIsSUFBdkI7QUFFSCxTQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0gsQzs7QUFOTCxRQUFBLFVBQUEsR0FBQSxVQUFBOzs7Ozs7Ozs7O0FDQUEsSUFBQSxlQUFBLFFBQUEsY0FBQSxDQUFBOztJQUdhLFU7QUFBYiwwQkFBQTtBQUFBOztBQUNjLGFBQUEsS0FBQSxHQUF1QixJQUF2QjtBQW1HYjs7OztrQ0FsR2lCO0FBQ1YsbUJBQVEsS0FBSyxLQUFMLEtBQWUsSUFBdkI7QUFDSDs7OytCQUNhLEssRUFBUTtBQUNsQixnQkFBTSxPQUFzQixJQUFJLGFBQUEsVUFBSixDQUFrQixLQUFsQixDQUE1QjtBQUNBO0FBQ0EsZ0JBQUksS0FBSyxPQUFMLEVBQUosRUFBb0I7QUFDaEIscUJBQUssS0FBTCxHQUFhLElBQWI7QUFDSCxhQUZELE1BRU87QUFDSCxxQkFBSyxLQUFMLEdBQWEsS0FBSyxVQUFMLENBQWdCLElBQWhCLEVBQXNCLEtBQUssS0FBM0IsQ0FBYjtBQUNIO0FBQ0o7OzttQ0FDb0IsSSxFQUFxQixPLEVBQXNCO0FBQzVELGdCQUFJLFlBQVksSUFBaEIsRUFBc0I7QUFDbEIsMEJBQVUsSUFBVjtBQUNILGFBRkQsTUFFTztBQUNILG9CQUFJLEtBQUssS0FBTCxHQUFhLFFBQVEsS0FBekIsRUFBZ0M7QUFDNUIsNEJBQVEsSUFBUixHQUFlLEtBQUssVUFBTCxDQUFnQixJQUFoQixFQUFzQixRQUFRLElBQTlCLENBQWY7QUFDSCxp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TCxFQUEzQjtBQUNBLEtBQUssU0FBTCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBjbGFzcyBCaW5hcnlOb2RlPFQ+IHtcclxuICAgIHB1YmxpYyB2YWx1ZTogVCA9IG51bGw7XHJcbiAgICBwdWJsaWMgbGVmdDogQmluYXJ5Tm9kZTxUPiA9IG51bGw7XHJcbiAgICBwdWJsaWMgcmlnaHQ6IEJpbmFyeU5vZGU8VD4gPSBudWxsO1xyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IFQpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmluYXJ5Tm9kZSB9IGZyb20gXCIuL2JpbmFyeW5vZGVcIjtcclxuaW1wb3J0IGNvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xyXG5cclxuZXhwb3J0IGNsYXNzIEJpbmFyeVRyZWU8VD4ge1xyXG4gICAgcHJvdGVjdGVkIF9yb290OiBCaW5hcnlOb2RlPFQ+ID0gbnVsbDtcclxuICAgIHB1YmxpYyBpc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5fcm9vdCA9PT0gbnVsbCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaW5zZXJ0KHZhbHVlOiBUKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgbm9kZTogQmluYXJ5Tm9kZTxUPiA9IG5ldyBCaW5hcnlOb2RlPFQ+KHZhbHVlKTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWNvbmRpdGlvbmFsLWV4cHJlc3Npb25cclxuICAgICAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fcm9vdCA9IG5vZGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcm9vdCA9IHRoaXMuaW5zZXJ0Tm9kZShub2RlLCB0aGlzLl9yb290KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgaW5zZXJ0Tm9kZShub2RlOiBCaW5hcnlOb2RlPFQ+LCBzdWJ0cmVlOiBCaW5hcnlOb2RlPFQ+KTogQmluYXJ5Tm9kZTxUPiB7XHJcbiAgICAgICAgaWYgKHN1YnRyZWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgc3VidHJlZSA9IG5vZGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUudmFsdWUgPCBzdWJ0cmVlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJ0cmVlLmxlZnQgPSB0aGlzLmluc2VydE5vZGUobm9kZSwgc3VidHJlZS5sZWZ0KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLnZhbHVlID4gc3VidHJlZS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgc3VidHJlZS5yaWdodCA9IHRoaXMuaW5zZXJ0Tm9kZShub2RlLCBzdWJ0cmVlLnJpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3VidHJlZTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBmaW5kTm9kZSh2YWx1ZTogVCwgc3VidHJlZTogQmluYXJ5Tm9kZTxUPik6IEJpbmFyeU5vZGU8VD4ge1xyXG4gICAgICAgIGlmIChzdWJ0cmVlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm9kZSBpc24ndCBmb3VuZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN1YnRyZWUudmFsdWUgPiB2YWx1ZSkge1xyXG4gICAgICAgICAgICBzdWJ0cmVlID0gIHRoaXMuZmluZE5vZGUodmFsdWUsIHN1YnRyZWUubGVmdCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdWJ0cmVlLnZhbHVlIDwgdmFsdWUpIHtcclxuICAgICAgICAgICAgc3VidHJlZSA9ICB0aGlzLmZpbmROb2RlKHZhbHVlLCBzdWJ0cmVlLnJpZ2h0KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHN1YnRyZWUudmFsdWUgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHN1YnRyZWUgPSBzdWJ0cmVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3VidHJlZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWxldGUodmFsdWU6IFQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhyZWUgaXMgZW1wdHlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5vZGU6IEJpbmFyeU5vZGU8VD4gPSB0aGlzLmZpbmROb2RlKHZhbHVlLCB0aGlzLl9yb290KTtcclxuICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yb290ID0gdGhpcy5kZWxldGVOb2RlKG5vZGUsIHRoaXMuX3Jvb3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBkZWxldGVOb2RlKG5vZGU6IEJpbmFyeU5vZGU8VD4sIHN1YnRyZWU6IEJpbmFyeU5vZGU8VD4pOiBCaW5hcnlOb2RlPFQ+IHtcclxuICAgICAgICBpZiAoc3VidHJlZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3VidHJlZS52YWx1ZSA+IG5vZGUudmFsdWUpIHtcclxuICAgICAgICAgICAgc3VidHJlZS5sZWZ0ID0gdGhpcy5kZWxldGVOb2RlKHN1YnRyZWUubGVmdCwgbm9kZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdWJ0cmVlLnZhbHVlIDwgbm9kZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBzdWJ0cmVlLnJpZ2h0ID0gdGhpcy5kZWxldGVOb2RlKHN1YnRyZWUucmlnaHQsIG5vZGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChzdWJ0cmVlLmxlZnQgPT0gbnVsbCAmJiBzdWJ0cmVlLnJpZ2h0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHN1YnRyZWUgPSBudWxsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN1YnRyZWUubGVmdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZSA9IHN1YnRyZWUucmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc3VidHJlZS5yaWdodCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZSA9IHN1YnRyZWUubGVmdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3VidHJlZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjb25zb2xlSXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fcm9vdCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZHJhdygpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaHJlZSBpcyBlbXB0eVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxzdHJpbmc+PHVua25vd24+dGhpcy5kcmF3Tm9kZSh0aGlzLl9yb290KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkcmF3Tm9kZShzdWJ0cmVlOiBCaW5hcnlOb2RlPFQ+KTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IG5vZGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGNvbnN0IG5vZGVDaGlsZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgaWYgKHN1YnRyZWUubGVmdCA9PSBudWxsICYmIHN1YnRyZWUucmlnaHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBub2RlRWxlbWVudC5pbm5lckhUTUwgPSA8c3RyaW5nPjx1bmtub3duPnN1YnRyZWUudmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdWJ0cmVlLnJpZ2h0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgbm9kZUVsZW1lbnQuaW5uZXJIVE1MID0gPHN0cmluZz48dW5rbm93bj5zdWJ0cmVlLnZhbHVlO1xyXG4gICAgICAgICAgICBub2RlQ2hpbGRFbGVtZW50LmFwcGVuZCh0aGlzLmRyYXdOb2RlKHN1YnRyZWUubGVmdCkpO1xyXG4gICAgICAgICAgICBub2RlRWxlbWVudC5hcHBlbmQobm9kZUNoaWxkRWxlbWVudCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdWJ0cmVlLmxlZnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBub2RlRWxlbWVudC5pbm5lckhUTUwgPSA8c3RyaW5nPjx1bmtub3duPnN1YnRyZWUudmFsdWU7XHJcbiAgICAgICAgICAgIG5vZGVDaGlsZEVsZW1lbnQuYXBwZW5kKHRoaXMuZHJhd05vZGUoc3VidHJlZS5yaWdodCkpO1xyXG4gICAgICAgICAgICBub2RlRWxlbWVudC5hcHBlbmQobm9kZUNoaWxkRWxlbWVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm9kZUVsZW1lbnQuYXBwZW5kKDxzdHJpbmc+PHVua25vd24+c3VidHJlZS52YWx1ZSk7XHJcbiAgICAgICAgICAgIG5vZGVDaGlsZEVsZW1lbnQuYXBwZW5kKHRoaXMuZHJhd05vZGUoc3VidHJlZS5sZWZ0KSk7XHJcbiAgICAgICAgICAgIG5vZGVDaGlsZEVsZW1lbnQuYXBwZW5kKHRoaXMuZHJhd05vZGUoc3VidHJlZS5yaWdodCkpO1xyXG4gICAgICAgICAgICBub2RlRWxlbWVudC5hcHBlbmQobm9kZUNoaWxkRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub2RlRWxlbWVudDtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQmluYXJ5VHJlZSB9IGZyb20gXCIuL2JpbmFyeXRyZWVcIjtcclxuY29uc3QgdHJlZTogQmluYXJ5VHJlZTxudW1iZXI+ID0gbmV3IEJpbmFyeVRyZWU8bnVtYmVyPigpO1xyXG50cmVlLmluc2VydCg1NSk7XHJcbnRyZWUuaW5zZXJ0KDQ0KTtcclxudHJlZS5pbnNlcnQoOTgpO1xyXG50cmVlLmluc2VydCg0NSk7XHJcbnRyZWUuaW5zZXJ0KDY3KTtcclxudHJlZS5pbnNlcnQoMTMwKTtcclxudHJlZS5pbnNlcnQoMTUwKTtcclxudHJlZS5pbnNlcnQoMTYwKTtcclxudHJlZS5pbnNlcnQoMjMpO1xyXG5cclxuY29uc3QgYmluYXJ5VHJlZVN0cnVjdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmluYXJ5dHJlZVN0cnVjdHVyZVwiKTtcclxuYmluYXJ5VHJlZVN0cnVjdHVyZS5hcHBlbmQodHJlZS5kcmF3KCkpO1xyXG50cmVlLmNvbnNvbGVJdCgpO1xyXG4iXX0=
