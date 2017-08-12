'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalFooter = exports.ModalBody = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactPortalStateless = require('react-portal-stateless');

var _reactPortalStateless2 = _interopRequireDefault(_reactPortalStateless);

var _modal = require('./modal.css');

var _modal2 = _interopRequireDefault(_modal);

var _closeButton = require('./close-button.js');

var _closeButton2 = _interopRequireDefault(_closeButton);

var _modalBody = require('./modal-body.js');

var _modalBody2 = _interopRequireDefault(_modalBody);

var _modalFooter = require('./modal-footer.js');

var _modalFooter2 = _interopRequireDefault(_modalFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.ModalBody = _modalBody2.default;
exports.ModalFooter = _modalFooter2.default;

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.handleOverlayClick = _this.handleOverlayClick.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    return _this;
  }

  _createClass(Modal, [{
    key: 'handleOverlayClick',
    value: function handleOverlayClick(event) {
      var classNames = event.target.classList;
      if (classNames.contains('bs-modal__overlay') === false) {
        return;
      }
      this.handleClose();
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      if (!this.props.isOpen) {
        return;
      }
      this.props.onCloseRequest();
    }
  }, {
    key: 'render',
    value: function render() {
      var modalStyle = _modal2.default.modal;
      if (this.props.width) {
        modalStyle = _extends({}, modalStyle, { width: this.props.width });
      }
      if (this.props.height) {
        modalStyle = _extends({}, modalStyle, { height: this.props.height });
      }

      var classNames = 'bs-modal ' + (this.props.className || '');

      return _react2.default.createElement(
        _reactPortalStateless2.default,
        { isOpen: this.props.isOpen, closeOnEsc: true, onClose: this.handleClose },
        _react2.default.createElement(
          'div',
          { onKeyDown: this.handleKeyDown, className: classNames, style: _modal2.default.container },
          _react2.default.createElement(
            'div',
            {
              className: 'bs-modal__overlay',
              style: _modal2.default.overlay,
              onClick: this.handleOverlayClick
            },
            _react2.default.createElement(
              'div',
              { style: modalStyle },
              _react2.default.createElement(
                'div',
                { className: 'bs-modal__header', style: _modal2.default.header },
                _react2.default.createElement(
                  'span',
                  {
                    className: 'bs-modal__title',
                    style: _modal2.default.title
                  },
                  this.props.title
                ),
                _react2.default.createElement(_closeButton2.default, { onClick: this.handleClose })
              ),
              this.props.children
            )
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  className: _propTypes2.default.string,
  isOpen: _propTypes2.default.bool,
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  title: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
  onCloseRequest: _propTypes2.default.func
};
Modal.defaultProps = {
  isOpen: false,
  title: '',
  onCloseRequest: function onCloseRequest() {}
};
exports.default = Modal;