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
            return typeof this._root == null;
        }
    }, {
        key: "insert",
        value: function insert(value) {
            var node = new binarynode_1.BinaryNode(value);
            this.insertNode(node, this._root);
        }
    }, {
        key: "insert2",
        value: function insert2(value) {
            this._root.value = value;
        }
    }, {
        key: "insertNode",
        value: function insertNode(node, subtree) {
            if (subtree == null) {
                subtree = node;
                console.log(subtree);
            } else {
                if (node.value < subtree.value) {
                    this.insertNode(node, subtree.left);
                } else if (node.value > subtree.value) {
                    this.insertNode(node, subtree.right);
                }
            }
            return this;
        }
    }, {
        key: "delete",
        value: function _delete(value) {
            if (this.isEmpty()) {
                throw new Error("Three is empty");
            }
            var node = this.findNode(value, this._root);
            if (node) {
                this.deleteNode(node);
            }
        }
    }, {
        key: "findNode",
        value: function findNode(value, subtree) {
            if (subtree.value > value) {
                subtree = this.findNode(subtree.value, subtree.left);
            } else if (subtree.value < value) {
                subtree = this.findNode(subtree.value, subtree.right);
            }
            return subtree;
        }
    }, {
        key: "deleteNode",
        value: function deleteNode(node) {
            if (typeof node.left == null && typeof node.right == null) {
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
    }]);

    return BinaryTree;
}();

exports.BinaryTree = BinaryTree;

},{"./binarynode":"G:\\Work\\netcracker\\binarytree\\src\\ts\\binarynode.ts"}],"G:\\Work\\netcracker\\binarytree\\src\\ts\\main.ts":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binarytree_1 = require("./binarytree");
var tree = new binarytree_1.BinaryTree();
tree.insert2(55);

},{"./binarytree":"G:\\Work\\netcracker\\binarytree\\src\\ts\\binarytree.ts"}]},{},["G:\\Work\\netcracker\\binarytree\\src\\ts\\main.ts"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvYmluYXJ5bm9kZS50cyIsInNyYy90cy9iaW5hcnl0cmVlLnRzIiwic3JjL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7SUNBYSxVLEdBSVQsb0JBQVksS0FBWixFQUFvQjtBQUFBOztBQUhiLFNBQUEsS0FBQSxHQUFXLElBQVg7QUFDQSxTQUFBLElBQUEsR0FBc0IsSUFBdEI7QUFDQSxTQUFBLEtBQUEsR0FBdUIsSUFBdkI7QUFFSCxTQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0gsQzs7QUFOTCxRQUFBLFVBQUEsR0FBQSxVQUFBOzs7Ozs7Ozs7O0FDQUEsSUFBQSxlQUFBLFFBQUEsY0FBQSxDQUFBOztJQUdhLFU7QUFBYiwwQkFBQTtBQUFBOztBQUNjLGFBQUEsS0FBQSxHQUF1QixJQUF2QjtBQTBEYjs7OztrQ0F6RGlCO0FBQ1YsbUJBQVEsT0FBTyxLQUFLLEtBQVosSUFBcUIsSUFBN0I7QUFDSDs7OytCQUNhLEssRUFBUTtBQUNsQixnQkFBTSxPQUFzQixJQUFJLGFBQUEsVUFBSixDQUFrQixLQUFsQixDQUE1QjtBQUNBLGlCQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsRUFBc0IsS0FBSyxLQUEzQjtBQUNIOzs7Z0NBQ2MsSyxFQUFRO0FBQ25CLGlCQUFLLEtBQUwsQ0FBVyxLQUFYLEdBQW1CLEtBQW5CO0FBQ0g7OzttQ0FDb0IsSSxFQUFxQixPLEVBQXNCO0FBQzVELGdCQUFJLFdBQVcsSUFBZixFQUFxQjtBQUNqQiwwQkFBVSxJQUFWO0FBQ0Esd0JBQVEsR0FBUixDQUFZLE9BQVo7QUFDSCxhQUhELE1BR087QUFDSCxvQkFBSSxLQUFLLEtBQUwsR0FBYSxRQUFRLEtBQXpCLEVBQWdDO0FBQzVCLHlCQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsRUFBc0IsUUFBUSxJQUE5QjtBQUNILGlCQUZELE1BRU8sSUFBSSxLQUFLLEtBQUwsR0FBYSxRQUFRLEtBQXpCLEVBQWdDO0FBQ25DLHlCQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsRUFBc0IsUUFBUSxLQUE5QjtBQUNIO0FBQ0o7QUFDRCxtQkFBTyxJQUFQO0FBQ0g7OztnQ0FDZ0IsSyxFQUFRO0FBQ3JCLGdCQUFJLEtBQUssT0FBTCxFQUFKLEVBQW9CO0FBQ2hCLHNCQUFNLElBQUksS0FBSixDQUFVLGdCQUFWLENBQU47QUFDSDtBQUNELGdCQUFNLE9BQU8sS0FBSyxRQUFMLENBQWMsS0FBZCxFQUFxQixLQUFLLEtBQTFCLENBQWI7QUFDQSxnQkFBSSxJQUFKLEVBQVU7QUFDTixxQkFBSyxVQUFMLENBQWdCLElBQWhCO0FBQ0g7QUFDSjs7O2lDQUNrQixLLEVBQVUsTyxFQUFzQjtBQUMvQyxnQkFBSSxRQUFRLEtBQVIsR0FBZ0IsS0FBcEIsRUFBMkI7QUFDdkIsMEJBQVcsS0FBSyxRQUFMLENBQWMsUUFBUSxLQUF0QixFQUE2QixRQUFRLElBQXJDLENBQVg7QUFDSCxhQUZELE1BRU8sSUFBSSxRQUFRLEtBQVIsR0FBZ0IsS0FBcEIsRUFBMkI7QUFDOUIsMEJBQVcsS0FBSyxRQUFMLENBQWMsUUFBUSxLQUF0QixFQUE2QixRQUFRLEtBQXJDLENBQVg7QUFDSDtBQUNELG1CQUFPLE9BQVA7QUFDSDs7O21DQUNvQixJLEVBQW1CO0FBQ3BDLGdCQUFLLE9BQU8sS0FBSyxJQUFaLElBQW9CLElBQXJCLElBQStCLE9BQU8sS0FBSyxLQUFaLElBQXFCLElBQXhELEVBQStEO0FBQzNELHVCQUFPLElBQVA7QUFDSCxhQUZELE1BRU8sSUFBSSxPQUFPLEtBQUssSUFBWixJQUFvQixJQUF4QixFQUE4QjtBQUNqQyx1QkFBTyxLQUFLLEtBQVo7QUFDSCxhQUZNLE1BRUEsSUFBSSxPQUFPLEtBQUssS0FBWixJQUFxQixJQUF6QixFQUErQjtBQUNsQyx1QkFBTyxLQUFLLElBQVo7QUFDSCxhQUZNLE1BRUE7QUFDSCxvQkFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLElBQWxCLElBQTBCLElBQTlCLEVBQW9DO0FBQ2hDLHlCQUFLLEtBQUwsQ0FBVyxJQUFYLEdBQWtCLEtBQUssS0FBdkI7QUFDQSwyQkFBTyxLQUFLLEtBQVo7QUFDSCxpQkFIRCxNQUdPO0FBQ0gseUJBQUssS0FBTCxHQUFhLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsS0FBN0I7QUFDQSx5QkFBSyxVQUFMLENBQWdCLElBQWhCO0FBQ0g7QUFDSjtBQUNKOzs7Ozs7QUExREwsUUFBQSxVQUFBLEdBQUEsVUFBQTs7Ozs7O0FDSEEsSUFBQSxlQUFBLFFBQUEsY0FBQSxDQUFBO0FBQ0EsSUFBTSxPQUEyQixJQUFJLGFBQUEsVUFBSixFQUFqQztBQUNBLEtBQUssT0FBTCxDQUFhLEVBQWIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgY2xhc3MgQmluYXJ5Tm9kZTxUPiB7XHJcbiAgICBwdWJsaWMgdmFsdWU6IFQgPSBudWxsO1xyXG4gICAgcHVibGljIGxlZnQ6IEJpbmFyeU5vZGU8VD4gPSBudWxsO1xyXG4gICAgcHVibGljIHJpZ2h0OiBCaW5hcnlOb2RlPFQ+ID0gbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBUKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJpbmFyeU5vZGUgfSBmcm9tIFwiLi9iaW5hcnlub2RlXCI7XHJcbmltcG9ydCBjb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcclxuXHJcbmV4cG9ydCBjbGFzcyBCaW5hcnlUcmVlPFQ+IHtcclxuICAgIHByb3RlY3RlZCBfcm9vdDogQmluYXJ5Tm9kZTxUPiA9IG51bGw7XHJcbiAgICBwdWJsaWMgaXNFbXB0eSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHR5cGVvZiB0aGlzLl9yb290ID09IG51bGwpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGluc2VydCh2YWx1ZTogVCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5vZGU6IEJpbmFyeU5vZGU8VD4gPSBuZXcgQmluYXJ5Tm9kZTxUPih2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5pbnNlcnROb2RlKG5vZGUsIHRoaXMuX3Jvb3QpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGluc2VydDIodmFsdWU6IFQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yb290LnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgaW5zZXJ0Tm9kZShub2RlOiBCaW5hcnlOb2RlPFQ+LCBzdWJ0cmVlOiBCaW5hcnlOb2RlPFQ+KTogYW55IHtcclxuICAgICAgICBpZiAoc3VidHJlZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHN1YnRyZWUgPSBub2RlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdWJ0cmVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAobm9kZS52YWx1ZSA8IHN1YnRyZWUudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0Tm9kZShub2RlLCBzdWJ0cmVlLmxlZnQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUudmFsdWUgPiBzdWJ0cmVlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc2VydE5vZGUobm9kZSwgc3VidHJlZS5yaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZGVsZXRlKHZhbHVlOiBUKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRocmVlIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5maW5kTm9kZSh2YWx1ZSwgdGhpcy5fcm9vdCk7XHJcbiAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVOb2RlKG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBmaW5kTm9kZSh2YWx1ZTogVCwgc3VidHJlZTogQmluYXJ5Tm9kZTxUPik6IEJpbmFyeU5vZGU8VD4ge1xyXG4gICAgICAgIGlmIChzdWJ0cmVlLnZhbHVlID4gdmFsdWUpIHtcclxuICAgICAgICAgICAgc3VidHJlZSA9ICB0aGlzLmZpbmROb2RlKHN1YnRyZWUudmFsdWUsIHN1YnRyZWUubGVmdCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdWJ0cmVlLnZhbHVlIDwgdmFsdWUpIHtcclxuICAgICAgICAgICAgc3VidHJlZSA9ICB0aGlzLmZpbmROb2RlKHN1YnRyZWUudmFsdWUsIHN1YnRyZWUucmlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3VidHJlZTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBkZWxldGVOb2RlKG5vZGU6IEJpbmFyeU5vZGU8VD4pOiB2b2lkIHtcclxuICAgICAgICBpZiAoKHR5cGVvZiBub2RlLmxlZnQgPT0gbnVsbCkgJiYgKHR5cGVvZiBub2RlLnJpZ2h0ID09IG51bGwpKSB7XHJcbiAgICAgICAgICAgIG5vZGUgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG5vZGUubGVmdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnJpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG5vZGUucmlnaHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5sZWZ0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygbm9kZS5yaWdodC5sZWZ0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUucmlnaHQubGVmdCA9IG5vZGUucmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5yaWdodDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vZGUudmFsdWUgPSBub2RlLnJpZ2h0LmxlZnQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZU5vZGUobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IEJpbmFyeVRyZWUgfSBmcm9tIFwiLi9iaW5hcnl0cmVlXCI7XHJcbmNvbnN0IHRyZWU6IEJpbmFyeVRyZWU8bnVtYmVyPiA9IG5ldyBCaW5hcnlUcmVlPG51bWJlcj4oKTtcclxudHJlZS5pbnNlcnQyKDU1KTtcclxuIl19
