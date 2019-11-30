(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"C:\\Users\\aggrezzorhsdj\\Documents\\work\\netcracker\\binarytree\\project\\src\\ts\\binarynode.ts":[function(require,module,exports){
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

},{}],"C:\\Users\\aggrezzorhsdj\\Documents\\work\\netcracker\\binarytree\\project\\src\\ts\\binarytree.ts":[function(require,module,exports){
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
    }]);

    return BinaryTree;
}();

exports.BinaryTree = BinaryTree;

},{"./binarynode":"C:\\Users\\aggrezzorhsdj\\Documents\\work\\netcracker\\binarytree\\project\\src\\ts\\binarynode.ts"}],"C:\\Users\\aggrezzorhsdj\\Documents\\work\\netcracker\\binarytree\\project\\src\\ts\\main.ts":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binarytree_1 = require("./binarytree");
var tree = new binarytree_1.BinaryTree();
tree.insert(55);
tree.insert(56);
tree.insert(98);
tree.insert(59);
tree.consoleIt();

},{"./binarytree":"C:\\Users\\aggrezzorhsdj\\Documents\\work\\netcracker\\binarytree\\project\\src\\ts\\binarytree.ts"}]},{},["C:\\Users\\aggrezzorhsdj\\Documents\\work\\netcracker\\binarytree\\project\\src\\ts\\main.ts"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvYmluYXJ5bm9kZS50cyIsInNyYy90cy9iaW5hcnl0cmVlLnRzIiwic3JjL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7SUNBYSxVLEdBSVQsb0JBQVksS0FBWixFQUFvQjtBQUFBOztBQUhiLFNBQUEsS0FBQSxHQUFXLElBQVg7QUFDQSxTQUFBLElBQUEsR0FBc0IsSUFBdEI7QUFDQSxTQUFBLEtBQUEsR0FBdUIsSUFBdkI7QUFFSCxTQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0gsQzs7QUFOTCxRQUFBLFVBQUEsR0FBQSxVQUFBOzs7Ozs7Ozs7O0FDQUEsSUFBQSxlQUFBLFFBQUEsY0FBQSxDQUFBOztJQUdhLFU7QUFBYiwwQkFBQTtBQUFBOztBQUNjLGFBQUEsS0FBQSxHQUF1QixJQUF2QjtBQXVFYjs7OztrQ0F0RWlCO0FBQ1YsbUJBQVEsS0FBSyxLQUFMLEtBQWUsSUFBdkI7QUFDSDs7OytCQUNhLEssRUFBUTtBQUNsQixnQkFBTSxPQUFzQixJQUFJLGFBQUEsVUFBSixDQUFrQixLQUFsQixDQUE1QjtBQUNBLGdCQUFJLEtBQUssT0FBTCxFQUFKLEVBQW9CO0FBQ2hCLHFCQUFLLEtBQUwsR0FBYSxJQUFiO0FBQ0gsYUFGRCxNQUVPO0FBQ0gscUJBQUssS0FBTCxHQUFhLEtBQUssVUFBTCxDQUFnQixJQUFoQixFQUFzQixLQUFLLEtBQTNCLENBQWI7QUFDSDtBQUNKOzs7bUNBQ29CLEksRUFBcUIsTyxFQUFzQjtBQUM1RCxnQkFBSSxZQUFZLElBQWhCLEVBQXNCO0FBQ2xCLDBCQUFVLElBQVY7QUFDSCxhQUZELE1BRU87QUFDSCxvQkFBSSxLQUFLLEtBQUwsR0FBYSxRQUFRLEtBQXpCLEVBQWdDO0FBQzVCLDRCQUFRLElBQVIsR0FBZSxLQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsRUFBc0IsUUFBUSxJQUE5QixDQUFmO0FBQ0gsaUJBRkQsTUFFTyxJQUFJLEtBQUssS0FBTCxHQUFhLFFBQVEsS0FBekIsRUFBZ0M7QUFDbkMsNEJBQVEsS0FBUixHQUFnQixLQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsRUFBc0IsUUFBUSxLQUE5QixDQUFoQjtBQUNIO0FBQ0o7QUFDRCxtQkFBTyxPQUFQO0FBQ0g7OztpQ0FDa0IsSyxFQUFVLE8sRUFBc0I7QUFDL0MsZ0JBQUksV0FBVyxJQUFmLEVBQXFCO0FBQ2pCLHNCQUFNLElBQUksS0FBSixDQUFVLGtCQUFWLENBQU47QUFDSDtBQUNELGdCQUFJLFFBQVEsS0FBUixHQUFnQixLQUFwQixFQUEyQjtBQUN2QiwwQkFBVyxLQUFLLFFBQUwsQ0FBYyxLQUFkLEVBQXFCLFFBQVEsSUFBN0IsQ0FBWDtBQUNILGFBRkQsTUFFTyxJQUFJLFFBQVEsS0FBUixHQUFnQixLQUFwQixFQUEyQjtBQUM5QiwwQkFBVyxLQUFLLFFBQUwsQ0FBYyxLQUFkLEVBQXFCLFFBQVEsS0FBN0IsQ0FBWDtBQUNILGFBRk0sTUFFQSxJQUFJLFFBQVEsS0FBUixLQUFrQixLQUF0QixFQUE2QjtBQUNoQywwQkFBVSxPQUFWO0FBQ0g7QUFDRCxtQkFBTyxPQUFQO0FBQ0g7OztnQ0FDYSxLLEVBQVE7QUFDbEIsZ0JBQUksS0FBSyxPQUFMLEVBQUosRUFBb0I7QUFDaEIsc0JBQU0sSUFBSSxLQUFKLENBQVUsZ0JBQVYsQ0FBTjtBQUNIO0FBQ0QsZ0JBQU0sT0FBc0IsS0FBSyxRQUFMLENBQWMsS0FBZCxFQUFxQixLQUFLLEtBQTFCLENBQTVCO0FBQ0EsZ0JBQUksSUFBSixFQUFVO0FBQ04scUJBQUssS0FBTCxHQUFhLEtBQUssVUFBTCxDQUFnQixJQUFoQixFQUFzQixLQUFLLEtBQTNCLENBQWI7QUFDSDtBQUNKOzs7bUNBQ29CLEksRUFBcUIsTyxFQUFzQjtBQUM1RCxnQkFBSSxXQUFXLElBQWYsRUFBcUI7QUFDakIsdUJBQU8sSUFBUDtBQUNIO0FBQ0QsZ0JBQUksUUFBUSxLQUFSLEdBQWdCLEtBQUssS0FBekIsRUFBZ0M7QUFDNUIsd0JBQVEsSUFBUixHQUFlLEtBQUssVUFBTCxDQUFnQixRQUFRLElBQXhCLEVBQThCLElBQTlCLENBQWY7QUFDSCxhQUZELE1BRU8sSUFBSSxRQUFRLEtBQVIsR0FBZ0IsS0FBSyxLQUF6QixFQUFnQztBQUNuQyx3QkFBUSxLQUFSLEdBQWdCLEtBQUssVUFBTCxDQUFnQixRQUFRLEtBQXhCLEVBQStCLElBQS9CLENBQWhCO0FBQ0gsYUFGTSxNQUVBO0FBQ0gsb0JBQUksUUFBUSxJQUFSLElBQWdCLElBQWhCLElBQXdCLFFBQVEsS0FBUixJQUFpQixJQUE3QyxFQUFtRDtBQUMvQyw4QkFBVSxJQUFWO0FBQ0gsaUJBRkQsTUFFTztBQUNILHdCQUFJLFFBQVEsSUFBUixJQUFnQixJQUFwQixFQUEwQjtBQUN0QixrQ0FBVSxRQUFRLEtBQWxCO0FBQ0g7QUFDRCx3QkFBSSxRQUFRLEtBQVIsSUFBaUIsSUFBckIsRUFBMkI7QUFDdkIsa0NBQVUsUUFBUSxJQUFsQjtBQUNIO0FBQ0o7QUFDSjtBQUNELG1CQUFPLE9BQVA7QUFDSDs7O29DQUNlO0FBQ1osb0JBQVEsR0FBUixDQUFZLEtBQUssS0FBakI7QUFDSDs7Ozs7O0FBdkVMLFFBQUEsVUFBQSxHQUFBLFVBQUE7Ozs7OztBQ0hBLElBQUEsZUFBQSxRQUFBLGNBQUEsQ0FBQTtBQUNBLElBQU0sT0FBMkIsSUFBSSxhQUFBLFVBQUosRUFBakM7QUFDQSxLQUFLLE1BQUwsQ0FBWSxFQUFaO0FBQ0EsS0FBSyxNQUFMLENBQVksRUFBWjtBQUNBLEtBQUssTUFBTCxDQUFZLEVBQVo7QUFDQSxLQUFLLE1BQUwsQ0FBWSxFQUFaO0FBQ0EsS0FBSyxTQUFMIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGNsYXNzIEJpbmFyeU5vZGU8VD4ge1xyXG4gICAgcHVibGljIHZhbHVlOiBUID0gbnVsbDtcclxuICAgIHB1YmxpYyBsZWZ0OiBCaW5hcnlOb2RlPFQ+ID0gbnVsbDtcclxuICAgIHB1YmxpYyByaWdodDogQmluYXJ5Tm9kZTxUPiA9IG51bGw7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogVCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCaW5hcnlOb2RlIH0gZnJvbSBcIi4vYmluYXJ5bm9kZVwiO1xyXG5pbXBvcnQgY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XHJcblxyXG5leHBvcnQgY2xhc3MgQmluYXJ5VHJlZTxUPiB7XHJcbiAgICBwcm90ZWN0ZWQgX3Jvb3Q6IEJpbmFyeU5vZGU8VD4gPSBudWxsO1xyXG4gICAgcHVibGljIGlzRW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLl9yb290ID09PSBudWxsKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBpbnNlcnQodmFsdWU6IFQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBub2RlOiBCaW5hcnlOb2RlPFQ+ID0gbmV3IEJpbmFyeU5vZGU8VD4odmFsdWUpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yb290ID0gbm9kZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9yb290ID0gdGhpcy5pbnNlcnROb2RlKG5vZGUsIHRoaXMuX3Jvb3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBpbnNlcnROb2RlKG5vZGU6IEJpbmFyeU5vZGU8VD4sIHN1YnRyZWU6IEJpbmFyeU5vZGU8VD4pOiBCaW5hcnlOb2RlPFQ+IHtcclxuICAgICAgICBpZiAoc3VidHJlZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzdWJ0cmVlID0gbm9kZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAobm9kZS52YWx1ZSA8IHN1YnRyZWUudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHN1YnRyZWUubGVmdCA9IHRoaXMuaW5zZXJ0Tm9kZShub2RlLCBzdWJ0cmVlLmxlZnQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUudmFsdWUgPiBzdWJ0cmVlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJ0cmVlLnJpZ2h0ID0gdGhpcy5pbnNlcnROb2RlKG5vZGUsIHN1YnRyZWUucmlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdWJ0cmVlO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGZpbmROb2RlKHZhbHVlOiBULCBzdWJ0cmVlOiBCaW5hcnlOb2RlPFQ+KTogQmluYXJ5Tm9kZTxUPiB7XHJcbiAgICAgICAgaWYgKHN1YnRyZWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb2RlIGlzbid0IGZvdW5kXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3VidHJlZS52YWx1ZSA+IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHN1YnRyZWUgPSAgdGhpcy5maW5kTm9kZSh2YWx1ZSwgc3VidHJlZS5sZWZ0KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHN1YnRyZWUudmFsdWUgPCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBzdWJ0cmVlID0gIHRoaXMuZmluZE5vZGUodmFsdWUsIHN1YnRyZWUucmlnaHQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3VidHJlZS52YWx1ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgc3VidHJlZSA9IHN1YnRyZWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdWJ0cmVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlbGV0ZSh2YWx1ZTogVCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaHJlZSBpcyBlbXB0eVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgbm9kZTogQmluYXJ5Tm9kZTxUPiA9IHRoaXMuZmluZE5vZGUodmFsdWUsIHRoaXMuX3Jvb3QpO1xyXG4gICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSB0aGlzLmRlbGV0ZU5vZGUobm9kZSwgdGhpcy5fcm9vdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGRlbGV0ZU5vZGUobm9kZTogQmluYXJ5Tm9kZTxUPiwgc3VidHJlZTogQmluYXJ5Tm9kZTxUPik6IEJpbmFyeU5vZGU8VD4ge1xyXG4gICAgICAgIGlmIChzdWJ0cmVlID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdWJ0cmVlLnZhbHVlID4gbm9kZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBzdWJ0cmVlLmxlZnQgPSB0aGlzLmRlbGV0ZU5vZGUoc3VidHJlZS5sZWZ0LCBub2RlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHN1YnRyZWUudmFsdWUgPCBub2RlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHN1YnRyZWUucmlnaHQgPSB0aGlzLmRlbGV0ZU5vZGUoc3VidHJlZS5yaWdodCwgbm9kZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHN1YnRyZWUubGVmdCA9PSBudWxsICYmIHN1YnRyZWUucmlnaHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc3VidHJlZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3VidHJlZS5sZWZ0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlID0gc3VidHJlZS5yaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzdWJ0cmVlLnJpZ2h0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlID0gc3VidHJlZS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdWJ0cmVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNvbnNvbGVJdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9yb290KTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQmluYXJ5VHJlZSB9IGZyb20gXCIuL2JpbmFyeXRyZWVcIjtcclxuY29uc3QgdHJlZTogQmluYXJ5VHJlZTxudW1iZXI+ID0gbmV3IEJpbmFyeVRyZWU8bnVtYmVyPigpO1xyXG50cmVlLmluc2VydCg1NSk7XHJcbnRyZWUuaW5zZXJ0KDU2KTtcclxudHJlZS5pbnNlcnQoOTgpO1xyXG50cmVlLmluc2VydCg1OSk7XHJcbnRyZWUuY29uc29sZUl0KCk7XHJcbiJdfQ==
