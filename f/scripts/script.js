/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(5);

	__webpack_require__(6);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	NodeList.prototype.map = HTMLCollection.prototype.map = Array.prototype.map;
	NodeList.prototype.filter = HTMLCollection.prototype.filter = Array.prototype.filter;

	Element.prototype.offset = function () {
	    var bodyRect = document.body.getBoundingClientRect(),
	        elemRect = this.getBoundingClientRect();

	    return {
	        top: elemRect.top - bodyRect.top,
	        left: elemRect.left - bodyRect.left
	    };
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck2 = __webpack_require__(7);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(8);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _api = __webpack_require__(27);

	var _api2 = _interopRequireDefault(_api);

	var _cart = __webpack_require__(29);

	var _cart2 = _interopRequireDefault(_cart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Product = (function () {
	    function Product() {
	        var _this = this;

	        (0, _classCallCheck3.default)(this, Product);

	        this.el = {
	            buy: document.getElementsByClassName('product__button')
	        };

	        this.el.buy.map((function (item) {
	            item.addEventListener('click', (function (e) {
	                if (item.classList.contains('product__button_buy')) {
	                    _cart2.default.open();
	                } else {
	                    _this.addCart(item);
	                }

	                e.preventDefault();
	            }));
	        }));
	    }

	    (0, _createClass3.default)(Product, [{
	        key: 'addCart',
	        value: function addCart(item) {
	            var productId = parseInt(item.getAttribute('data-product-id'));

	            item.classList.remove('button_fill');
	            item.classList.add('button_border', 'product__button_buy');
	            item.innerText = "Товар в корзине";

	            _api2.default.addCart(productId);
	        }
	    }]);
	    return Product;
	})();

	module.exports = new Product();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(9);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(10), __esModule: true };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(11);
	var $Object = __webpack_require__(14).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(22), 'Object', {defineProperty: __webpack_require__(18).f});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(13)
	  , core      = __webpack_require__(14)
	  , ctx       = __webpack_require__(15)
	  , hide      = __webpack_require__(17)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(16);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(18)
	  , createDesc = __webpack_require__(26);
	module.exports = __webpack_require__(22) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(19)
	  , IE8_DOM_DEFINE = __webpack_require__(21)
	  , toPrimitive    = __webpack_require__(25)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(22) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(22) && !__webpack_require__(23)((function(){
	  return Object.defineProperty(__webpack_require__(24)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	}));

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(23)((function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	}));

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20)
	  , document = __webpack_require__(13).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(20);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(7);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(8);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _store = __webpack_require__(28);

	var _store2 = _interopRequireDefault(_store);

	var _cart = __webpack_require__(29);

	var _cart2 = _interopRequireDefault(_cart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Api = (function () {
	    function Api() {
	        (0, _classCallCheck3.default)(this, Api);
	    }

	    (0, _createClass3.default)(Api, [{
	        key: 'addCart',
	        value: function addCart(productId) {
	            _store2.default.addCart(productId);
	            _cart2.default.addProduct(productId);
	        }
	    }, {
	        key: 'fetch',
	        value: function fetch() {
	            // fetch()
	        }
	    }]);
	    return Api;
	})();

	exports.default = new Api();

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(7);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(8);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Store = (function () {
	    function Store() {
	        (0, _classCallCheck3.default)(this, Store);

	        this.actions = {};
	        this.data = JSON.parse(document.getElementById('store').innerHTML);
	    }

	    (0, _createClass3.default)(Store, [{
	        key: 'get',
	        value: function get(key) {
	            return this.data[key];
	        }
	    }, {
	        key: 'addCart',
	        value: function addCart(productId) {
	            this.data.cart.push({
	                productId: productId,
	                count: 1
	            });

	            this.subscribeUpdate('cart');
	        }
	    }, {
	        key: 'subscribe',
	        value: function subscribe(key, callback) {
	            if (!(key in this.actions)) this.actions[key] = [];
	            this.actions[key].push(callback);
	        }
	    }, {
	        key: 'subscribeUpdate',
	        value: function subscribeUpdate(key) {
	            if (!(key in this.actions)) return;
	            this.actions[key].map((function (item) {
	                item();
	            }));
	        }
	    }]);
	    return Store;
	})();

	exports.default = new Store();

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(7);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(8);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _scroll = __webpack_require__(30);

	var _scroll2 = _interopRequireDefault(_scroll);

	var _store = __webpack_require__(28);

	var _store2 = _interopRequireDefault(_store);

	var _counter = __webpack_require__(31);

	var _counter2 = _interopRequireDefault(_counter);

	var _cartMini = __webpack_require__(32);

	var _cartMini2 = _interopRequireDefault(_cartMini);

	var _price = __webpack_require__(33);

	var _price2 = _interopRequireDefault(_price);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Cart = (function () {
	    function Cart() {
	        var _this = this;

	        (0, _classCallCheck3.default)(this, Cart);

	        this.el = {
	            app: document.getElementsByClassName('app')[0],
	            bg: document.getElementsByClassName('app__shadow')[0],
	            close: document.getElementsByClassName('cart__close')[0],
	            list: document.getElementsByClassName('cart-list')[0]
	        };

	        this.data = {
	            productTemplate: document.getElementById('cart-product-template').innerHTML
	        };

	        this.el.bg.addEventListener('click', (function (e) {
	            _this.close();
	            e.preventDefault();
	        }));

	        this.el.close.addEventListener('click', (function (e) {
	            _this.close();
	            e.preventDefault();
	        }));

	        _store2.default.subscribe('cart', this.updatePrice);
	    }

	    /*
	     Открываю корзину
	     */


	    (0, _createClass3.default)(Cart, [{
	        key: 'open',
	        value: function open() {
	            this.el.app.classList.add('app_cart');
	            _scroll2.default.disabled();
	        }

	        /*
	         Закрываю корзину
	         */

	    }, {
	        key: 'close',
	        value: function close() {
	            this.el.app.classList.remove('app_cart');
	            _scroll2.default.enabled();
	        }

	        /*
	         Пересчёт количества
	         */

	    }, {
	        key: 'updatePrice',
	        value: function updatePrice() {
	            var cartProducts = _store2.default.get('cart');
	            var products = _store2.default.get('products');

	            var countProducts = 0;
	            var priceProducts = 0;

	            cartProducts.map((function (itemCart) {
	                var product = products.filter((function (itemProduct) {
	                    if (itemProduct.id == itemCart.productId) return itemProduct;
	                }))[0];

	                countProducts += itemCart.count;
	                priceProducts += itemCart.count * parseFloat(product.price);
	            }));

	            _cartMini2.default.update(countProducts, priceProducts);
	        }

	        /*
	         Добавляю товар в корзину
	         */

	    }, {
	        key: 'addProduct',
	        value: function addProduct(productId) {
	            var template = document.createElement('div');
	            template.innerHTML = this.data.productTemplate;
	            template = template.children[0];

	            var product = _store2.default.get('products').filter((function (item) {
	                if (item.id == productId) return item;
	            }))[0];

	            template.setAttribute('data-id', product.id);
	            template.getElementsByClassName('cart-item__name')[0].innerHTML = product.name;
	            template.getElementsByClassName('cart-item__price')[0].innerHTML = template.getElementsByClassName('cart-item__price')[1].innerHTML = (0, _price2.default)(product.price);
	            template.getElementsByClassName('counter__value')[0].value = 1;
	            template.querySelector('.cart-item__image img').setAttribute('src', product.image);

	            _counter2.default.build(template.getElementsByClassName('counter')[0]);

	            this.el.list.append(template);
	        }
	    }]);
	    return Cart;
	})();

	exports.default = new Cart();

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck2 = __webpack_require__(7);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(8);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Scroll = (function () {
	    function Scroll() {
	        (0, _classCallCheck3.default)(this, Scroll);

	        this.scrollWidth = window.innerWidth - document.body.scrollWidth;

	        this.el = {
	            body: document.children[0],
	            cart: document.getElementsByClassName('app__window')[0]
	        };
	    }

	    (0, _createClass3.default)(Scroll, [{
	        key: 'disabled',
	        value: function disabled() {
	            this.el.body.classList.add('disabled-scroll');
	            this.el.body.style.paddingRight = this.scrollWidth + 'px';

	            this.el.cart.style.right = '';
	        }
	    }, {
	        key: 'enabled',
	        value: function enabled() {
	            this.el.body.classList.remove('disabled-scroll');
	            this.el.body.style.paddingRight = '';

	            this.el.cart.style.right = '-' + this.scrollWidth / 2 + 'px';
	        }
	    }]);
	    return Scroll;
	})();

	module.exports = new Scroll();

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(7);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(8);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Counter = (function () {
	    function Counter() {
	        var _this = this;

	        (0, _classCallCheck3.default)(this, Counter);

	        this.el = [];

	        document.getElementsByClassName('counter').map((function (item) {
	            _this.build(item);
	        }));
	    }

	    (0, _createClass3.default)(Counter, [{
	        key: 'build',
	        value: function build(elem) {
	            var _this2 = this;

	            var item = {
	                block: elem,
	                input: elem.getElementsByClassName('counter__value')[0],
	                buttonPrev: elem.getElementsByClassName('counter__action_minus')[0],
	                buttonNext: elem.getElementsByClassName('counter__action_plus')[0]
	            };

	            item.block.addEventListener('click', (function (e) {
	                var parent = e.target.closest('.counter__action');
	                if (parent) {
	                    _this2.button(item, parent.classList.contains('counter__action_minus'));
	                }
	                e.preventDefault();
	            }));

	            item.input.addEventListener('keyup', (function () {
	                _this2.key(item);
	            }));

	            this.el.push(item);
	        }
	    }, {
	        key: 'button',
	        value: function button(el, isMinus) {
	            if (isMinus && el.buttonPrev.classList.contains('counter__action_disabled') || !isMinus && el.buttonNext.classList.contains('counter__action_disabled')) return;

	            var value = parseInt(el.input.value);
	            if (!isNaN(value)) {
	                value += isMinus ? -1 : 1;
	            } else {
	                value = el.input.getAttribute('min');
	            }

	            this.updateValue(el, value);

	            this.updateButton(el);
	        }
	    }, {
	        key: 'key',
	        value: function key(el) {
	            var value = parseInt(el.input.value);

	            if (isNaN(value)) {
	                this.updateValue(el, el.input.getAttribute('min'));
	            }

	            this.updateButton(el);
	        }
	    }, {
	        key: 'updateButton',
	        value: function updateButton(el) {
	            var minValue = parseInt(el.input.getAttribute('min'));
	            var maxValue = parseInt(el.input.getAttribute('max'));

	            if (parseInt(el.input.value) <= minValue) {
	                this.updateValue(el, minValue);
	            } else if (parseInt(el.input.value) >= maxValue) {
	                this.updateValue(el, maxValue);
	            }
	        }
	    }, {
	        key: 'updateValue',
	        value: function updateValue(el, value) {
	            if (parseInt(el.input.value) !== parseInt(value)) {
	                el.input.value = value;
	            }
	        }
	    }]);
	    return Counter;
	})();

	exports.default = new Counter();

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(7);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(8);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _price = __webpack_require__(33);

	var _price2 = _interopRequireDefault(_price);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CartMini = (function () {
	    function CartMini() {
	        (0, _classCallCheck3.default)(this, CartMini);

	        this.el = {
	            app: document.getElementsByClassName('app')[0],
	            block: document.getElementsByClassName('cart-mini')[0],
	            price: document.getElementsByClassName('cart-sum__price')[0]
	        };
	    }

	    (0, _createClass3.default)(CartMini, [{
	        key: 'update',
	        value: function update(countProducts, priceProducts) {
	            if (countProducts == 0) {
	                this.el.block.classList.remove('cart-mini_open');
	                this.el.app.classList.remove('app_cart-mini');
	            } else {
	                this.el.block.classList.add('cart-mini_open');
	                this.el.app.classList.add('app_cart-mini');
	            }

	            this.el.price.innerHTML = (0, _price2.default)(priceProducts);
	        }
	    }]);
	    return CartMini;
	})();

	exports.default = new CartMini();

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function Price(number, options) {
	    if (number >= 10000) {
	        number = ('' + number).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ').trim();
	    }

	    return number;
	}

	exports.default = Price;

/***/ })
/******/ ]);