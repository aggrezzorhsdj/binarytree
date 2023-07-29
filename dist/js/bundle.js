(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"G:\\Work\\netcracker\\binarytree\\src\\ts\\binarynode.ts":[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var BinaryNode = function BinaryNode(value, key) {
    _classCallCheck(this, BinaryNode);

    this.key = null;
    this.value = null;
    this.left = null;
    this.right = null;
    this.value = value;
    this.key = key;
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
        this.counter = 1;
    }

    _createClass(BinaryTree, [{
        key: "isEmpty",
        value: function isEmpty() {
            return this._root === null;
        }
    }, {
        key: "insert",
        value: function insert(value, key) {
            if (key === undefined) {
                key = this.counter++;
            }
            var node = new binarynode_1.BinaryNode(value, key);
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
                if (node.key < subtree.key) {
                    subtree.left = this.insertNode(node, subtree.left);
                } else if (node.key > subtree.key) {
                    subtree.right = this.insertNode(node, subtree.right);
                }
            }
            return subtree;
        }
    }, {
        key: "find",
        value: function find(key) {
            return this.findNode(key, this._root);
        }
    }, {
        key: "findNode",
        value: function findNode(key, subtree) {
            if (subtree == null) {
                throw new Error("Node isn't found");
            }
            if (subtree.key > key) {
                subtree = this.findNode(key, subtree.left);
            } else if (subtree.key < key) {
                subtree = this.findNode(key, subtree.right);
            } else if (subtree.key === key) {
                subtree = subtree;
            }
            return subtree;
        }
    }, {
        key: "delete",
        value: function _delete(key) {
            if (this.isEmpty()) {
                throw new Error("Three is empty");
            }
            var node = this.findNode(key, this._root);
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
            if (subtree.key > node.key) {
                subtree.left = this.deleteNode(node, subtree.left);
            } else if (subtree.key < node.key) {
                subtree.right = this.deleteNode(node, subtree.right);
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
            var aElement = document.createElement("a");
            if (subtree.left == null && subtree.right == null) {
                nodeElement.innerHTML = "<a>" + subtree.value + "</a>";
            } else if (subtree.right == null) {
                nodeElement.innerHTML = "<a>" + subtree.value + "</a>";
                nodeElement.classList.add("has-child", "left");
                nodeChildElement.append(this.drawNode(subtree.left));
                nodeChildElement.classList.add("left");
                nodeElement.append(nodeChildElement);
            } else if (subtree.left == null) {
                nodeElement.innerHTML = "<a>" + subtree.value + "</a>";
                nodeElement.classList.add("has-child", "right");
                nodeChildElement.append(this.drawNode(subtree.right));
                nodeChildElement.classList.add("right");
                nodeElement.append(nodeChildElement);
            } else {
                aElement.innerHTML = subtree.value;
                nodeElement.append(aElement);
                nodeElement.classList.add("has-child");
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
function nodeInititator(type, selector) {
    var binaryUl = document.getElementById("binaryTreeStructure");
    var output = document.getElementById("find-output");
    var el = selector.closest(".field-group").querySelector("[name=\"binary-input\"]");
    var key = selector.closest(".field-group").querySelector("[name=\"binary-key\"]");
    switch (type) {
        case "add":
            tree.insert(parseFloat(el.value), parseFloat(key.value));
            tree.consoleIt();
            break;
        case "del":
            tree.delete(parseFloat(key.value));
            tree.consoleIt();
            break;
        case "find":
            output.innerHTML = tree.find(parseFloat(key.value)).value;
            break;
    }
    binaryUl.innerHTML = tree.draw().innerHTML;
}
var initiator = document.querySelectorAll(".binary-mod");
if (initiator) {
    [].forEach.call(initiator, function (e) {
        e.addEventListener("click", function (e) {
            var param = e.target.getAttribute("id");
            var selector = e.target;
            nodeInititator(param, selector);
        });
    });
}

},{"./binarytree":"G:\\Work\\netcracker\\binarytree\\src\\ts\\binarytree.ts"}]},{},["G:\\Work\\netcracker\\binarytree\\src\\ts\\main.ts"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvYmluYXJ5bm9kZS50cyIsInNyYy90cy9iaW5hcnl0cmVlLnRzIiwic3JjL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7SUNBYSxVLEdBS1Qsb0JBQVksS0FBWixFQUFzQixHQUF0QixFQUFrQztBQUFBOztBQUozQixTQUFBLEdBQUEsR0FBYyxJQUFkO0FBQ0EsU0FBQSxLQUFBLEdBQVcsSUFBWDtBQUNBLFNBQUEsSUFBQSxHQUFzQixJQUF0QjtBQUNBLFNBQUEsS0FBQSxHQUF1QixJQUF2QjtBQUVILFNBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxTQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0gsQzs7QUFSTCxRQUFBLFVBQUEsR0FBQSxVQUFBOzs7Ozs7Ozs7O0FDQUEsSUFBQSxlQUFBLFFBQUEsY0FBQSxDQUFBOztJQUdhLFU7QUFBYiwwQkFBQTtBQUFBOztBQUNjLGFBQUEsS0FBQSxHQUF1QixJQUF2QjtBQUNILGFBQUEsT0FBQSxHQUFrQixDQUFsQjtBQWlIVjs7OztrQ0FoSGlCO0FBQ1YsbUJBQVEsS0FBSyxLQUFMLEtBQWUsSUFBdkI7QUFDSDs7OytCQUNhLEssRUFBVSxHLEVBQVk7QUFDaEMsZ0JBQUksUUFBUSxTQUFaLEVBQXVCO0FBQ25CLHNCQUFNLEtBQUssT0FBTCxFQUFOO0FBQ0g7QUFDRCxnQkFBTSxPQUFzQixJQUFJLGFBQUEsVUFBSixDQUFrQixLQUFsQixFQUF5QixHQUF6QixDQUE1QjtBQUNBO0FBQ0EsZ0JBQUksS0FBSyxPQUFMLEVBQUosRUFBb0I7QUFDaEIscUJBQUssS0FBTCxHQUFhLElBQWI7QUFDSCxhQUZELE1BRU87QUFDSCxxQkFBSyxLQUFMLEdBQWEsS0FBSyxVQUFMLENBQWdCLElBQWhCLEVBQXNCLEtBQUssS0FBM0IsQ0FBYjtBQUNIO0FBQ0o7OzttQ0FDb0IsSSxFQUFxQixPLEVBQXNCO0FBQzVELGdC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LEVBQWU7QUFDWCxPQUFHLE9BQUgsQ0FBVyxJQUFYLENBQWdCLFNBQWhCLEVBQTJCLFVBQVMsQ0FBVCxFQUFVO0FBQ2pDLFVBQUUsZ0JBQUYsQ0FBbUIsT0FBbkIsRUFBNEIsVUFBUyxDQUFULEVBQVU7QUFDbEMsZ0JBQU0sUUFBUSxFQUFFLE1BQUYsQ0FBUyxZQUFULENBQXNCLElBQXRCLENBQWQ7QUFDQSxnQkFBTSxXQUFXLEVBQUUsTUFBbkI7QUFDQSwyQkFBZSxLQUFmLEVBQXNCLFFBQXRCO0FBQ0gsU0FKRDtBQUtILEtBTkQ7QUFPSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBjbGFzcyBCaW5hcnlOb2RlPFQ+IHtcclxuICAgIHB1YmxpYyBrZXk6IG51bWJlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgdmFsdWU6IFQgPSBudWxsO1xyXG4gICAgcHVibGljIGxlZnQ6IEJpbmFyeU5vZGU8VD4gPSBudWxsO1xyXG4gICAgcHVibGljIHJpZ2h0OiBCaW5hcnlOb2RlPFQ+ID0gbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBULCBrZXk/OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmluYXJ5Tm9kZSB9IGZyb20gXCIuL2JpbmFyeW5vZGVcIjtcclxuaW1wb3J0IGNvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xyXG5cclxuZXhwb3J0IGNsYXNzIEJpbmFyeVRyZWU8VD4ge1xyXG4gICAgcHJvdGVjdGVkIF9yb290OiBCaW5hcnlOb2RlPFQ+ID0gbnVsbDtcclxuICAgIHB1YmxpYyBjb3VudGVyOiBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIGlzRW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLl9yb290ID09PSBudWxsKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBpbnNlcnQodmFsdWU6IFQsIGtleT86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBrZXkgPSB0aGlzLmNvdW50ZXIrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgbm9kZTogQmluYXJ5Tm9kZTxUPiA9IG5ldyBCaW5hcnlOb2RlPFQ+KHZhbHVlLCBrZXkpO1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItY29uZGl0aW9uYWwtZXhwcmVzc2lvblxyXG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yb290ID0gbm9kZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9yb290ID0gdGhpcy5pbnNlcnROb2RlKG5vZGUsIHRoaXMuX3Jvb3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBpbnNlcnROb2RlKG5vZGU6IEJpbmFyeU5vZGU8VD4sIHN1YnRyZWU6IEJpbmFyeU5vZGU8VD4pOiBCaW5hcnlOb2RlPFQ+IHtcclxuICAgICAgICBpZiAoc3VidHJlZSA9PT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgc3VidHJlZSA9IG5vZGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUua2V5IDwgc3VidHJlZS5rZXkpIHtcclxuICAgICAgICAgICAgICAgIHN1YnRyZWUubGVmdCA9IHRoaXMuaW5zZXJ0Tm9kZShub2RlLCBzdWJ0cmVlLmxlZnQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUua2V5ID4gc3VidHJlZS5rZXkpIHtcclxuICAgICAgICAgICAgICAgIHN1YnRyZWUucmlnaHQgPSB0aGlzLmluc2VydE5vZGUobm9kZSwgc3VidHJlZS5yaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN1YnRyZWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZmluZChrZXk6IG51bWJlcik6IEJpbmFyeU5vZGU8VD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbmROb2RlKGtleSwgdGhpcy5fcm9vdCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZmluZE5vZGUoa2V5OiBudW1iZXIsIHN1YnRyZWU6IEJpbmFyeU5vZGU8VD4pOiBCaW5hcnlOb2RlPFQ+IHtcclxuICAgICAgICBpZiAoc3VidHJlZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vZGUgaXNuJ3QgZm91bmRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdWJ0cmVlLmtleSA+IGtleSkge1xyXG4gICAgICAgICAgICBzdWJ0cmVlID0gIHRoaXMuZmluZE5vZGUoa2V5LCBzdWJ0cmVlLmxlZnQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3VidHJlZS5rZXkgPCBrZXkpIHtcclxuICAgICAgICAgICAgc3VidHJlZSA9ICB0aGlzLmZpbmROb2RlKGtleSwgc3VidHJlZS5yaWdodCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdWJ0cmVlLmtleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgIHN1YnRyZWUgPSBzdWJ0cmVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3VidHJlZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZWxldGUoa2V5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhyZWUgaXMgZW1wdHlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5vZGU6IEJpbmFyeU5vZGU8VD4gPSB0aGlzLmZpbmROb2RlKGtleSwgdGhpcy5fcm9vdCk7XHJcbiAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcm9vdCA9IHRoaXMuZGVsZXRlTm9kZShub2RlLCB0aGlzLl9yb290KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZGVsZXRlTm9kZShub2RlOiBCaW5hcnlOb2RlPFQ+LCBzdWJ0cmVlOiBCaW5hcnlOb2RlPFQ+KTogQmluYXJ5Tm9kZTxUPiB7XHJcbiAgICAgICAgaWYgKHN1YnRyZWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN1YnRyZWUua2V5ID4gbm9kZS5rZXkpIHtcclxuICAgICAgICAgICAgc3VidHJlZS5sZWZ0ID0gdGhpcy5kZWxldGVOb2RlKG5vZGUsIHN1YnRyZWUubGVmdCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdWJ0cmVlLmtleSA8IG5vZGUua2V5KSB7XHJcbiAgICAgICAgICAgIHN1YnRyZWUucmlnaHQgPSB0aGlzLmRlbGV0ZU5vZGUobm9kZSwgc3VidHJlZS5yaWdodCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHN1YnRyZWUubGVmdCA9PSBudWxsICYmIHN1YnRyZWUucmlnaHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc3VidHJlZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3VidHJlZS5sZWZ0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlID0gc3VidHJlZS5yaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzdWJ0cmVlLnJpZ2h0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlID0gc3VidHJlZS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdWJ0cmVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNvbnNvbGVJdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9yb290KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBkcmF3KCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRocmVlIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPHN0cmluZz48dW5rbm93bj50aGlzLmRyYXdOb2RlKHRoaXMuX3Jvb3QpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRyYXdOb2RlKHN1YnRyZWU6IEJpbmFyeU5vZGU8VD4pOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3Qgbm9kZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgY29uc3Qgbm9kZUNoaWxkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICBjb25zdCBhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGlmIChzdWJ0cmVlLmxlZnQgPT0gbnVsbCAmJiBzdWJ0cmVlLnJpZ2h0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgbm9kZUVsZW1lbnQuaW5uZXJIVE1MID0gYDxhPiR7PHN0cmluZz48dW5rbm93bj5zdWJ0cmVlLnZhbHVlfTwvYT5gO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3VidHJlZS5yaWdodCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5vZGVFbGVtZW50LmlubmVySFRNTCA9IGA8YT4kezxzdHJpbmc+PHVua25vd24+c3VidHJlZS52YWx1ZX08L2E+YDtcclxuICAgICAgICAgICAgbm9kZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhhcy1jaGlsZFwiLCBcImxlZnRcIik7XHJcbiAgICAgICAgICAgIG5vZGVDaGlsZEVsZW1lbnQuYXBwZW5kKHRoaXMuZHJhd05vZGUoc3VidHJlZS5sZWZ0KSk7XHJcbiAgICAgICAgICAgIG5vZGVDaGlsZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxlZnRcIik7XHJcbiAgICAgICAgICAgIG5vZGVFbGVtZW50LmFwcGVuZChub2RlQ2hpbGRFbGVtZW50KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHN1YnRyZWUubGVmdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5vZGVFbGVtZW50LmlubmVySFRNTCA9IGA8YT4kezxzdHJpbmc+PHVua25vd24+c3VidHJlZS52YWx1ZX08L2E+YDtcclxuICAgICAgICAgICAgbm9kZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhhcy1jaGlsZFwiLCBcInJpZ2h0XCIpO1xyXG4gICAgICAgICAgICBub2RlQ2hpbGRFbGVtZW50LmFwcGVuZCh0aGlzLmRyYXdOb2RlKHN1YnRyZWUucmlnaHQpKTtcclxuICAgICAgICAgICAgbm9kZUNoaWxkRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XHJcbiAgICAgICAgICAgIG5vZGVFbGVtZW50LmFwcGVuZChub2RlQ2hpbGRFbGVtZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhRWxlbWVudC5pbm5lckhUTUwgPSA8c3RyaW5nPjx1bmtub3duPnN1YnRyZWUudmFsdWU7XHJcbiAgICAgICAgICAgIG5vZGVFbGVtZW50LmFwcGVuZChhRWxlbWVudCk7XHJcbiAgICAgICAgICAgIG5vZGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoYXMtY2hpbGRcIik7XHJcbiAgICAgICAgICAgIG5vZGVDaGlsZEVsZW1lbnQuYXBwZW5kKHRoaXMuZHJhd05vZGUoc3VidHJlZS5sZWZ0KSk7XHJcbiAgICAgICAgICAgIG5vZGVDaGlsZEVsZW1lbnQuYXBwZW5kKHRoaXMuZHJhd05vZGUoc3VidHJlZS5yaWdodCkpO1xyXG4gICAgICAgICAgICBub2RlRWxlbWVudC5hcHBlbmQobm9kZUNoaWxkRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub2RlRWxlbWVudDtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQmluYXJ5VHJlZSB9IGZyb20gXCIuL2JpbmFyeXRyZWVcIjtcclxuY29uc3QgdHJlZTogQmluYXJ5VHJlZTxudW1iZXI+ID0gbmV3IEJpbmFyeVRyZWU8bnVtYmVyPigpO1xyXG5cclxuZnVuY3Rpb24gbm9kZUluaXRpdGF0b3IodHlwZTogc3RyaW5nLCBzZWxlY3RvcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGJpbmFyeVVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiaW5hcnlUcmVlU3RydWN0dXJlXCIpO1xyXG4gICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaW5kLW91dHB1dFwiKTtcclxuICAgIGNvbnN0IGVsID0gPEhUTUxJbnB1dEVsZW1lbnQ+c2VsZWN0b3IuY2xvc2VzdChcIi5maWVsZC1ncm91cFwiKS5xdWVyeVNlbGVjdG9yKFwiW25hbWU9XFxcImJpbmFyeS1pbnB1dFxcXCJdXCIpO1xyXG4gICAgY29uc3Qga2V5ID0gPEhUTUxJbnB1dEVsZW1lbnQ+c2VsZWN0b3IuY2xvc2VzdChcIi5maWVsZC1ncm91cFwiKS5xdWVyeVNlbGVjdG9yKFwiW25hbWU9XFxcImJpbmFyeS1rZXlcXFwiXVwiKTtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJhZGRcIjpcclxuICAgICAgICAgICAgdHJlZS5pbnNlcnQocGFyc2VGbG9hdChlbC52YWx1ZSksIHBhcnNlRmxvYXQoa2V5LnZhbHVlKSk7XHJcbiAgICAgICAgICAgIHRyZWUuY29uc29sZUl0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRlbFwiOlxyXG4gICAgICAgICAgICB0cmVlLmRlbGV0ZShwYXJzZUZsb2F0KGtleS52YWx1ZSkpO1xyXG4gICAgICAgICAgICB0cmVlLmNvbnNvbGVJdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJmaW5kXCI6XHJcbiAgICAgICAgICAgIG91dHB1dC5pbm5lckhUTUwgPSA8c3RyaW5nPjx1bmtub3duPnRyZWUuZmluZChwYXJzZUZsb2F0KGtleS52YWx1ZSkpLnZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgYmluYXJ5VWwuaW5uZXJIVE1MID0gKDxIVE1MRWxlbWVudD48dW5rbm93bj50cmVlLmRyYXcoKSkuaW5uZXJIVE1MO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWF0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJpbmFyeS1tb2RcIik7XHJcbmlmIChpbml0aWF0b3IpIHtcclxuICAgIFtdLmZvckVhY2guY2FsbChpbml0aWF0b3IsIGZ1bmN0aW9uKGUpOiB2b2lkIHtcclxuICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIG5vZGVJbml0aXRhdG9yKHBhcmFtLCBzZWxlY3Rvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iXX0=
