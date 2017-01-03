'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalFooter = exports.ModalBody = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _modal = require('./modal.css');

var _modal2 = _interopRequireDefault(_modal);

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
          style: buttonStyle },
        '+'
      );
    }
  }]);

  return CloseButton;
}(_react.Component);

var ModalBody = exports.ModalBody = function (_Component2) {
  _inherits(ModalBody, _Component2);

  function ModalBody() {
    _classCallCheck(this, ModalBody);

    return _possibleConstructorReturn(this, (ModalBody.__proto__ || Object.getPrototypeOf(ModalBody)).apply(this, arguments));
  }

  _createClass(ModalBody, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'bs-modal__body', style: _modal2.default.body },
        this.props.children
      );
    }
  }]);

  return ModalBody;
}(_react.Component);

var ModalFooter = exports.ModalFooter = function (_Component3) {
  _inherits(ModalFooter, _Component3);

  function ModalFooter() {
    _classCallCheck(this, ModalFooter);

    return _possibleConstructorReturn(this, (ModalFooter.__proto__ || Object.getPrototypeOf(ModalFooter)).apply(this, arguments));
  }

  _createClass(ModalFooter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'bs-modal__footer', style: _modal2.default.footer },
        this.props.children
      );
    }
  }]);

  return ModalFooter;
}(_react.Component);

var Modal = function (_Component4) {
  _inherits(Modal, _Component4);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this5 = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this5._handleCloseClick = _this5._handleCloseClick.bind(_this5);
    _this5._handleOverlayClick = _this5._handleOverlayClick.bind(_this5);
    _this5._handleKeyDown = _this5._handleKeyDown.bind(_this5);
    return _this5;
  }

  _createClass(Modal, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._addEvent('keydown', this._handleKeyDown);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._removeEvent('keydown', this._handleKeyDown);
    }
  }, {
    key: '_addEvent',
    value: function _addEvent(eventType, listener) {
      if (document.addEventListener) {
        document.addEventListener(eventType, listener, false);
      } else if (document.attachEvent) {
        document.attachEvent('on' + eventType, listener);
      }
    }
  }, {
    key: '_removeEvent',
    value: function _removeEvent(eventType, listener) {
      if (document.removeEventListener) {
        document.removeEventListener(eventType, listener, false);
      } else if (document.detachEvent) {
        document.detachEvent('on' + eventType, listener);
      }
    }
  }, {
    key: '_handleKeyDown',
    value: function _handleKeyDown(event) {
      if (event.which !== 27) {
        return true;
      }
      this._handleClose();
    }
  }, {
    key: '_handleCloseClick',
    value: function _handleCloseClick() {
      this._handleClose();
    }
  }, {
    key: '_handleOverlayClick',
    value: function _handleOverlayClick(event) {
      var classNames = event.target.className.split(' ');
      if (classNames.indexOf('bs-modal__overlay') === -1) {
        return;
      }
      this._handleClose();
    }
  }, {
    key: '_handleClose',
    value: function _handleClose() {
      if (!this.props.isOpen) {
        return;
      }
      this.props.onCloseRequest();
    }
  }, {
    key: 'render',
    value: function render() {
      var modalStyle = _modal2.default.container;
      if (this.props.width) {
        modalStyle = _extends({}, modalStyle, { width: this.props.width });
      }
      if (!this.props.isOpen) {
        modalStyle = _extends({}, modalStyle, _modal2.default.hidden);
      }

      return _react2.default.createElement(
        'div',
        { className: this.props.className, style: modalStyle },
        _react2.default.createElement(
          'div',
          { className: 'bs-modal__overlay', style: _modal2.default.overlay, onClick: this._handleOverlayClick },
          _react2.default.createElement(
            'div',
            { style: _modal2.default.modal },
            _react2.default.createElement(
              'div',
              { className: 'bs-modal__header', style: _modal2.default.header },
              _react2.default.createElement(CloseButton, { onClick: this._handleCloseClick }),
              _react2.default.createElement(
                'span',
                { className: 'bs-modal__title', style: _modal2.default.title },
                this.props.title
              )
            ),
            this.props.children
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  className: _react2.default.PropTypes.string,
  isOpen: _react2.default.PropTypes.bool,
  width: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  title: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node), _react2.default.PropTypes.node])
};
Modal.defaultProps = {
  isOpen: false,
  title: '',
  onCloseRequest: function onCloseRequest() {}
};
exports.default = Modal;