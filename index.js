"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

var _utils = require("./utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Predefined constants
 * @type {Object}
 */
var constants = {
  orientation: {
    horizontal: {
      dimension: "width",
      direction: "left",
      reverseDirection: "right",
      coordinate: "x"
    },
    vertical: {
      dimension: "height",
      direction: "top",
      reverseDirection: "bottom",
      coordinate: "y"
    }
  }
};

var Slider =
/*#__PURE__*/
function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props, context) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, props, context));

    _this.handleFormat = function (value) {
      var format = _this.props.format;
      return format ? format(value) : value;
    };

    _this.handleUpdate = function () {
      if (!_this.slider) {
        // for shallow rendering
        return;
      }

      var orientation = _this.props.orientation;
      var dimension = (0, _utils.capitalize)(constants.orientation[orientation].dimension);

      var sliderPos = _this.slider["offset".concat(dimension)];

      var handlePos = _this.handle["offset".concat(dimension)];

      _this.setState({
        limit: sliderPos - handlePos,
        grab: handlePos / 2
      });
    };

    _this.handleStart = function (e) {
      var onChangeStart = _this.props.onChangeStart;
      document.addEventListener("mousemove", _this.handleDrag);
      document.addEventListener("mouseup", _this.handleEnd);

      _this.setState({
        active: true
      }, function () {
        onChangeStart && onChangeStart(e);
      });
    };

    _this.handleDrag = function (e) {
      e.stopPropagation();
      var onChange = _this.props.onChange;
      var _e$target = e.target,
          className = _e$target.className,
          classList = _e$target.classList,
          dataset = _e$target.dataset;
      if (!onChange || className === "rangeslider__labels") return;

      var value = _this.position(e);

      if (classList && classList.contains("rangeslider__label-item") && dataset.value) {
        value = parseFloat(dataset.value);
      }

      onChange && onChange(value, e);
    };

    _this.handleEnd = function (e) {
      var onChangeComplete = _this.props.onChangeComplete;

      _this.setState({
        active: false
      }, function () {
        onChangeComplete && onChangeComplete(e);
      });

      document.removeEventListener("mousemove", _this.handleDrag);
      document.removeEventListener("mouseup", _this.handleEnd);
    };

    _this.handleKeyDown = function (e) {
      e.preventDefault();
      var keyCode = e.keyCode;
      var _this$props = _this.props,
          value = _this$props.value,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step,
          onChange = _this$props.onChange;
      var sliderValue;

      switch (keyCode) {
        case 38:
        case 39:
          sliderValue = value + step > max ? max : value + step;
          onChange && onChange(sliderValue, e);
          break;

        case 37:
        case 40:
          sliderValue = value - step < min ? min : value - step;
          onChange && onChange(sliderValue, e);
          break;
      }
    };

    _this.getPositionFromValue = function (value) {
      var limit = _this.state.limit;
      var _this$props2 = _this.props,
          min = _this$props2.min,
          max = _this$props2.max;
      var diffMaxMin = max - min;
      var diffValMin = value - min;
      var percentage = diffValMin / diffMaxMin;
      var pos = Math.round(percentage * limit);
      return pos;
    };

    _this.getValueFromPosition = function (pos) {
      var limit = _this.state.limit;
      var _this$props3 = _this.props,
          orientation = _this$props3.orientation,
          min = _this$props3.min,
          max = _this$props3.max,
          step = _this$props3.step;
      var percentage = (0, _utils.clamp)(pos, 0, limit) / (limit || 1);
      var baseVal = step * Math.round(percentage * (max - min) / step);
      var value = orientation === "horizontal" ? baseVal + min : max - baseVal;
      return (0, _utils.clamp)(value, min, max);
    };

    _this.position = function (e) {
      var grab = _this.state.grab;
      var _this$props4 = _this.props,
          orientation = _this$props4.orientation,
          reverse = _this$props4.reverse;
      var node = _this.slider;
      var coordinateStyle = constants.orientation[orientation].coordinate;
      var directionStyle = reverse ? constants.orientation[orientation].reverseDirection : constants.orientation[orientation].direction;
      var clientCoordinateStyle = "client".concat((0, _utils.capitalize)(coordinateStyle));
      var coordinate = !e.touches ? e[clientCoordinateStyle] : e.touches[0][clientCoordinateStyle];
      var direction = node.getBoundingClientRect()[directionStyle];
      var pos = reverse ? direction - coordinate - grab : coordinate - direction - grab;

      var value = _this.getValueFromPosition(pos);

      return value;
    };

    _this.coordinates = function (pos) {
      var _this$state = _this.state,
          limit = _this$state.limit,
          grab = _this$state.grab;
      var orientation = _this.props.orientation;

      var value = _this.getValueFromPosition(pos);

      var position = _this.getPositionFromValue(value);

      var handlePos = orientation === "horizontal" ? position + grab : position;
      var fillPos = orientation === "horizontal" ? handlePos : limit - handlePos;
      return {
        fill: fillPos,
        handle: handlePos,
        label: handlePos
      };
    };

    _this.renderLabels = function (labels) {
      return _react["default"].createElement("ul", {
        ref: function ref(sl) {
          _this.labels = sl;
        },
        className: (0, _classnames["default"])("rangeslider__labels")
      }, labels);
    };

    _this.state = {
      active: false,
      limit: 0,
      grab: 0
    };
    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleUpdate();
      var resizeObserver = new _resizeObserverPolyfill["default"](this.handleUpdate);
      resizeObserver.observe(this.slider);
    }
    /**
     * Format label/tooltip value
     * @param  {Number} - value
     * @return {Formatted Number}
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          value = _this$props5.value,
          orientation = _this$props5.orientation,
          className = _this$props5.className,
          tooltip = _this$props5.tooltip,
          tooltip4ever = _this$props5.tooltip4ever,
          reverse = _this$props5.reverse,
          labels = _this$props5.labels,
          min = _this$props5.min,
          max = _this$props5.max,
          handleLabel = _this$props5.handleLabel;
      var active = this.state.active;
      var dimension = constants.orientation[orientation].dimension;
      var direction = reverse ? constants.orientation[orientation].reverseDirection : constants.orientation[orientation].direction;
      var position = this.getPositionFromValue(value);
      var coords = this.coordinates(position);

      var fillStyle = _defineProperty({}, dimension, "".concat(coords.fill, "px"));

      var handleStyle = _defineProperty({}, direction, "".concat(coords.handle, "px"));

      var showTooltip = tooltip && active || tooltip4ever && active;
      var labelItems = [];
      var labelKeys = Object.keys(labels);

      if (labelKeys.length > 0) {
        labelKeys = labelKeys.sort(function (a, b) {
          return reverse ? a - b : b - a;
        });
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = labelKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;
            var labelPosition = this.getPositionFromValue(key);
            var labelCoords = this.coordinates(labelPosition);

            var labelStyle = _defineProperty({}, direction, "".concat(labelCoords.label, "px"));

            labelItems.push(_react["default"].createElement("li", {
              key: key,
              className: (0, _classnames["default"])("rangeslider__label-item"),
              "data-value": key,
              onMouseDown: this.handleDrag,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              style: labelStyle
            }, this.props.labels[key]));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      return _react["default"].createElement("div", {
        ref: function ref(s) {
          _this2.slider = s;
        },
        className: (0, _classnames["default"])("rangeslider", "rangeslider-".concat(orientation), {
          "rangeslider-reverse": reverse
        }, className),
        onMouseDown: this.handleDrag,
        onMouseUp: this.handleEnd,
        onTouchStart: this.handleStart,
        onTouchEnd: this.handleEnd,
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value,
        "aria-orientation": orientation
      }, _react["default"].createElement("div", {
        className: "rangeslider__fill",
        style: fillStyle
      }), _react["default"].createElement("div", {
        ref: function ref(sh) {
          _this2.handle = sh;
        },
        className: "rangeslider__handle",
        onMouseDown: this.handleStart,
        onTouchMove: this.handleDrag,
        onTouchEnd: this.handleEnd,
        onKeyDown: this.handleKeyDown,
        style: handleStyle,
        tabIndex: 0
      }, showTooltip ? _react["default"].createElement("div", {
        ref: function ref(st) {
          _this2.tooltip = st;
        },
        className: "rangeslider__handle-tooltip"
      }, _react["default"].createElement("span", null, this.handleFormat(value))) : null, _react["default"].createElement("div", {
        className: "rangeslider__handle-label"
      }, handleLabel)), labels ? this.renderLabels(labelItems) : null);
    }
  }]);

  return Slider;
}(_react.Component);

Slider.propTypes = {
  min: _propTypes["default"].number,
  max: _propTypes["default"].number,
  step: _propTypes["default"].number,
  value: _propTypes["default"].number,
  orientation: _propTypes["default"].string,
  tooltip: _propTypes["default"].bool,
  tooltip4ever: _propTypes["default"].bool,
  reverse: _propTypes["default"].bool,
  labels: _propTypes["default"].object,
  handleLabel: _propTypes["default"].string,
  format: _propTypes["default"].func,
  onChangeStart: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onChangeComplete: _propTypes["default"].func
};
Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  value: 0,
  orientation: "horizontal",
  tooltip: true,
  reverse: false,
  labels: {},
  handleLabel: "",
  tooltip4ever: false
};
var _default = Slider;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Rangeslider = _interopRequireDefault(require("./Rangeslider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _Rangeslider["default"];
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalize = capitalize;
exports.clamp = clamp;

/**
 * Capitalize first letter of string
 * @private
 * @param  {string} - String
 * @return {string} - String with first letter capitalized
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}
/**
 * Clamp position between a range
 * @param  {number} - Value to be clamped
 * @param  {number} - Minimum value in range
 * @param  {number} - Maximum value in range
 * @return {number} - Clamped value
 */


function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
