(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"C:\\Users\\aggrezzorhsdj\\Documents\\work\\netcracker\\binarytree\\project\\src\\ts\\binarynode.ts":[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var BinaryNode = function BinaryNode(data) {
    _classCallCheck(this, BinaryNode);

    this._data = data;
};

exports.BinaryNode = BinaryNode;

},{}],"C:\\Users\\aggrezzorhsdj\\Documents\\work\\netcracker\\binarytree\\project\\src\\ts\\binarytree.ts":[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var binarynode_1 = require("./binarynode");

var BinaryTree = function BinaryTree(data) {
    _classCallCheck(this, BinaryTree);

    this.node = new binarynode_1.BinaryNode(this._data);
    this._data = data;
};

exports.BinaryTree = BinaryTree;

},{"./binarynode":"C:\\Users\\aggrezzorhsdj\\Documents\\work\\netcracker\\binarytree\\project\\src\\ts\\binarynode.ts"}],"C:\\Users\\aggrezzorhsdj\\Documents\\work\\netcracker\\binarytree\\project\\src\\ts\\main.ts":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binarytree_1 = require("./binarytree");
var tree = new binarytree_1.BinaryTree();

},{"./binarytree":"C:\\Users\\aggrezzorhsdj\\Documents\\work\\netcracker\\binarytree\\project\\src\\ts\\binarytree.ts"}]},{},["C:\\Users\\aggrezzorhsdj\\Documents\\work\\netcracker\\binarytree\\project\\src\\ts\\main.ts"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvYmluYXJ5bm9kZS50cyIsInNyYy90cy9iaW5hcnl0cmVlLnRzIiwic3JjL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7SUNBYSxVLEdBSVQsb0JBQVksSUFBWixFQUFtQjtBQUFBOztBQUNmLFNBQUssS0FBTCxHQUFhLElBQWI7QUFDSCxDOztBQU5MLFFBQUEsVUFBQSxHQUFBLFVBQUE7Ozs7Ozs7O0FDQUEsSUFBQSxlQUFBLFFBQUEsY0FBQSxDQUFBOztJQUVhLFUsR0FFVCxvQkFBWSxJQUFaLEVBQW1CO0FBQUE7O0FBR1gsU0FBQSxJQUFBLEdBQU8sSUFBSSxhQUFBLFVBQUosQ0FBZSxLQUFLLEtBQXBCLENBQVA7QUFGSixTQUFLLEtBQUwsR0FBYSxJQUFiO0FBQ0gsQzs7QUFKTCxRQUFBLFVBQUEsR0FBQSxVQUFBOzs7Ozs7QUNGQSxJQUFBLGVBQUEsUUFBQSxjQUFBLENBQUE7QUFDQSxJQUFNLE9BQW1CLElBQUksYUFBQSxVQUFKLEVBQXpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGNsYXNzIEJpbmFyeU5vZGU8VD4ge1xyXG4gICAgcHJpdmF0ZSBfZGF0YTogVDtcclxuICAgIHByaXZhdGUgX3BhcmVudDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfY2hpbGRyZW46IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IFQpIHtcclxuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQmluYXJ5Tm9kZSB9IGZyb20gXCIuL2JpbmFyeW5vZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCaW5hcnlUcmVlPFQ+IHtcclxuICAgIHByaXZhdGUgX2RhdGE6IFQ7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBUKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG5vZGUgPSBuZXcgQmluYXJ5Tm9kZSh0aGlzLl9kYXRhKTtcclxufVxyXG4iLCJpbXBvcnQgeyBCaW5hcnlUcmVlIH0gZnJvbSBcIi4vYmluYXJ5dHJlZVwiO1xyXG5jb25zdCB0cmVlOiBCaW5hcnlUcmVlID0gbmV3IEJpbmFyeVRyZWUoKTtcclxuIl19
