'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _modal = require('./modal.css');

var _modal2 = _interopRequireDefault(_modal);

var _closeIcon = require('./close-icon');

var _closeIcon2 = _interopRequireDefault(_closeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CloseButton = function (_Component) {
  _inherits(CloseButton, _Component);

  function CloseButton() {
    _classCallCheck(this, CloseButton);

    var _this = _possibleConstructorReturn(this, (CloseButton.__proto__ || Object.getPrototypeOf(CloseButton)).call(this));

    _this.state = { isHovered: false };
    return _this;
  }

  _createClass(CloseButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var buttonStyle = _modal2.default.close;
      if (this.state.isHovered) {
        buttonStyle = _extends({}, buttonStyle, _modal2.default.closeHover);
      }

      return _react2.default.createElement(
        'span',
        {
          className: 'bs-modal__close',
          onClick: this.props.onClick,
          onMouseEnter: function onMouseEnter() {
            return _this2.setState({ isHovered: true });
          },
          onMouseLeave: function onMouseLeave() {
            return _this2.setState({ isHovered: false });
          },
          style: buttonStyle
        },
        _react2.default.createElement(_closeIcon2.default, null)
      );
    }
  }]);

  return CloseButton;
}(_react.Component);

CloseButton.propTypes = {
  onClick: _propTypes2.default.func
};
exports.default = CloseButton;