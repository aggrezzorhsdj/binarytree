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
            if (this.isEmpty()) {
                this._root = node;
            } else {
                this.insertNode(node, this._root);
            }
        }
    }, {
        key: "insertNode",
        value: function insertNode(node, subtree) {
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
    }, {
        key: "consoleIt",
        value: function consoleIt() {
            console.log(this._root);
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
tree.insert(45);

},{"./binarytree":"G:\\Work\\netcracker\\binarytree\\src\\ts\\binarytree.ts"}]},{},["G:\\Work\\netcracker\\binarytree\\src\\ts\\main.ts"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvYmluYXJ5bm9kZS50cyIsInNyYy90cy9iaW5hcnl0cmVlLnRzIiwic3JjL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7SUNBYSxVLEdBSVQsb0JBQVksS0FBWixFQUFvQjtBQUFBOztBQUhiLFNBQUEsS0FBQSxHQUFXLElBQVg7QUFDQSxTQUFBLElBQUEsR0FBc0IsSUFBdEI7QUFDQSxTQUFBLEtBQUEsR0FBdUIsSUFBdkI7QUFFSCxTQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0gsQzs7QUFOTCxRQUFBLFVBQUEsR0FBQSxVQUFBOzs7Ozs7Ozs7O0FDQUEsSUFBQSxlQUFBLFFBQUEsY0FBQSxDQUFBOztJQUdhLFU7QUFBYiwwQkFBQTtBQUFBOztBQUNjLGFBQUEsS0FBQSxHQUF1QixJQUF2QjtBQTZEYjs7OztrQ0E1RGlCO0FBQ1YsbUJBQVEsS0FBSyxLQUFMLEtBQWUsSUFBdkI7QUFDSDs7OytCQUNhLEssRUFBUTtBQUNsQixnQkFBTSxPQUFzQixJQUFJLGFBQUEsVUFBSixDQUFrQixLQUFsQixDQUE1QjtBQUNBLGdCQUFJLEtBQUssT0FBTCxFQUFKLEVBQW9CO0FBQ2hCLHFCQUFLLEtBQUwsR0FBYSxJQUFiO0FBQ0gsYUFGRCxNQUVPO0FBQ0gscUJBQUssVUFBTCxDQUFnQixJQUFoQixFQUFzQixLQUFLLEtBQTNCO0FBQ0g7QUFDSjs7O21DQUNvQixJLEVBQXFCLE8sRUFBc0I7QUFDNUQsZ0JBQUksWUFBWSxJQUFoQixFQUFzQjtBQUNsQiwwQkFBVSxJQUFWO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsb0JBQUksS0FBSyxLQUFMLEdBQWEsUUFBUSxLQUF6QixFQUFnQztBQUM1Qix5QkFBSyxVQUFMLENBQWdCLElBQWhCLEVBQXNCLFFBQVEsSUFBOUI7QUFDSCxpQkFGRCxNQUVPLElBQUksS0FBSyxLQUFMLEdBQWEsUUFBUSxLQUF6QixFQUFnQztBQUNuQyx5QkFBSyxVQUFMLENBQWdCLElBQWhCLEVBQXNCLFFBQVEsS0FBOUI7QUFDSDtBQUNKO0FBQ0Qsb0JBQVEsR0FBUixDQUFZLE9BQVo7QUFDSDs7O2dDQUNnQixLLEVBQVE7QUFDckIsZ0JBQUksS0FBSyxPQUFMLEVBQUosRUFBb0I7QUFDaEIsc0JBQU0sSUFBSSxLQUFKLENBQVUsZ0JBQVYsQ0FBTjtBQUNIO0FBQ0QsZ0JBQU0sT0FBTyxLQUFLLFFBQUwsQ0FBYyxLQUFkLEVBQXFCLEtBQUssS0FBMUIsQ0FBYjtBQUNBLGdCQUFJLElBQUosRUFBVTtBQUNOLHFCQUFLLFVBQUwsQ0FBZ0IsSUFBaEI7QUFDSDtBQUNKOzs7aUNBQ2tCLEssRUFBVSxPLEVBQXNCO0FBQy9DLGdCQUFJLFFBQVEsS0FBUixHQUFnQixLQUFwQixFQUEyQjtBQUN2QiwwQkFBVyxLQUFLLFFBQUwsQ0FBYyxRQUFRLEtBQXRCLEVBQTZCLFFBQVEsSUFBckMsQ0FBWDtBQUNILGFBRkQsTUFFTyxJQUFJLFFBQVEsS0FBUixHQUFnQixLQUFwQixFQUEyQjtBQUM5QiwwQkFBVyxLQUFLLFFBQUwsQ0FBYyxRQUFRLEtBQXRCLEVBQTZCLFFBQVEsS0FBckMsQ0FBWDtBQUNIO0FBQ0QsbUJBQU8sT0FBUDtBQUNIOzs7bUNBQ29CLEksRUFBbUI7QUFDcEMsZ0JBQUssT0FBTyxLQUFLLElBQVosSUFBb0IsSUFBckIsSUFBK0IsT0FBTyxLQUFLLEtBQVosSUFBcUIsSUFBeEQsRUFBK0Q7QUFDM0QsdUJBQU8sSUFBUDtBQUNILGFBRkQsTUFFTyxJQUFJLE9BQU8sS0FBSyxJQUFaLElBQW9CLElBQXhCLEVBQThCO0FBQ2pDLHVCQUFPLEtBQUssS0FBWjtBQUNILGFBRk0sTUFFQSxJQUFJLE9BQU8sS0FBSyxLQUFaLElBQXFCLElBQXpCLEVBQStCO0FBQ2xDLHVCQUFPLEtBQUssSUFBWjtBQUNILGFBRk0sTUFFQTtBQUNILG9CQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsSUFBbEIsSUFBMEIsSUFBOUIsRUFBb0M7QUFDaEMseUJBQUssS0FBTCxDQUFXLElBQVgsR0FBa0IsS0FBSyxLQUF2QjtBQUNBLDJCQUFPLEtBQUssS0FBWjtBQUNILGlCQUhELE1BR087QUFDSCx5QkFBSyxLQUFMLEdBQWEsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixLQUE3QjtBQUNBLHlCQUFLLFVBQUwsQ0FBZ0IsSUFBaEI7QUFDSDtBQUNKO0FBQ0o7OztvQ0FDZTtBQUNaLG9CQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQWpCO0FBQ0g7Ozs7OztBQTdETCxRQUFBLFVBQUEsR0FBQSxVQUFBOzs7Ozs7QUNIQSxJQUFBLGVBQUEsUUFBQSxjQUFBLENBQUE7QUFDQSxJQUFNLE9BQTJCLElBQUksYUFBQSxVQUFKLEVBQWpDO0FBQ0EsS0FBSyxNQUFMLENBQVksRUFBWjtBQUNBLEtBQUssTUFBTCxDQUFZLEVBQVoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgY2xhc3MgQmluYXJ5Tm9kZTxUPiB7XHJcbiAgICBwdWJsaWMgdmFsdWU6IFQgPSBudWxsO1xyXG4gICAgcHVibGljIGxlZnQ6IEJpbmFyeU5vZGU8VD4gPSBudWxsO1xyXG4gICAgcHVibGljIHJpZ2h0OiBCaW5hcnlOb2RlPFQ+ID0gbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBUKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJpbmFyeU5vZGUgfSBmcm9tIFwiLi9iaW5hcnlub2RlXCI7XHJcbmltcG9ydCBjb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcclxuXHJcbmV4cG9ydCBjbGFzcyBCaW5hcnlUcmVlPFQ+IHtcclxuICAgIHByb3RlY3RlZCBfcm9vdDogQmluYXJ5Tm9kZTxUPiA9IG51bGw7XHJcbiAgICBwdWJsaWMgaXNFbXB0eSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuX3Jvb3QgPT09IG51bGwpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGluc2VydCh2YWx1ZTogVCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5vZGU6IEJpbmFyeU5vZGU8VD4gPSBuZXcgQmluYXJ5Tm9kZTxUPih2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSBub2RlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0Tm9kZShub2RlLCB0aGlzLl9yb290KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgaW5zZXJ0Tm9kZShub2RlOiBCaW5hcnlOb2RlPFQ+LCBzdWJ0cmVlOiBCaW5hcnlOb2RlPFQ+KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHN1YnRyZWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgc3VidHJlZSA9IG5vZGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUudmFsdWUgPCBzdWJ0cmVlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc2VydE5vZGUobm9kZSwgc3VidHJlZS5sZWZ0KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLnZhbHVlID4gc3VidHJlZS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnNlcnROb2RlKG5vZGUsIHN1YnRyZWUucmlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN1YnRyZWUpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGRlbGV0ZSh2YWx1ZTogVCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaHJlZSBpcyBlbXB0eVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZmluZE5vZGUodmFsdWUsIHRoaXMuX3Jvb3QpO1xyXG4gICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlTm9kZShub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZmluZE5vZGUodmFsdWU6IFQsIHN1YnRyZWU6IEJpbmFyeU5vZGU8VD4pOiBCaW5hcnlOb2RlPFQ+IHtcclxuICAgICAgICBpZiAoc3VidHJlZS52YWx1ZSA+IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHN1YnRyZWUgPSAgdGhpcy5maW5kTm9kZShzdWJ0cmVlLnZhbHVlLCBzdWJ0cmVlLmxlZnQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3VidHJlZS52YWx1ZSA8IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHN1YnRyZWUgPSAgdGhpcy5maW5kTm9kZShzdWJ0cmVlLnZhbHVlLCBzdWJ0cmVlLnJpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN1YnRyZWU7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZGVsZXRlTm9kZShub2RlOiBCaW5hcnlOb2RlPFQ+KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygbm9kZS5sZWZ0ID09IG51bGwpICYmICh0eXBlb2Ygbm9kZS5yaWdodCA9PSBudWxsKSkge1xyXG4gICAgICAgICAgICBub2RlID0gbnVsbDtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBub2RlLmxlZnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5yaWdodDtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBub2RlLnJpZ2h0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgbm9kZSA9IG5vZGUubGVmdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG5vZGUucmlnaHQubGVmdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLnJpZ2h0LmxlZnQgPSBub2RlLnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucmlnaHQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLnZhbHVlID0gbm9kZS5yaWdodC5sZWZ0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVOb2RlKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGNvbnNvbGVJdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9yb290KTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQmluYXJ5VHJlZSB9IGZyb20gXCIuL2JpbmFyeXRyZWVcIjtcclxuY29uc3QgdHJlZTogQmluYXJ5VHJlZTxudW1iZXI+ID0gbmV3IEJpbmFyeVRyZWU8bnVtYmVyPigpO1xyXG50cmVlLmluc2VydCg1NSk7XHJcbnRyZWUuaW5zZXJ0KDQ1KTtcclxuIl19
