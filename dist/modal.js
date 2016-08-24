'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _modal = require('./modal.css');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));

    _this.state = { isOpen: _this.props.isOpen };
    _this.close = _this.close.bind(_this);
    return _this;
  }

  _createClass(Modal, [{
    key: 'close',
    value: function close() {
      this.setState({ isOpen: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var modalStyle = _modal2.default.modal;

      if (!this.state.isOpen) {
        modalStyle = Object.assign({}, _modal2.default.modal, _modal2.default.hidden);
      }

      return _react2.default.createElement(
        'div',
        { className: this.props.className, style: modalStyle },
        _react2.default.createElement(
          'div',
          { className: 'modal-header', style: _modal2.default.header },
          _react2.default.createElement(
            'span',
            { className: 'modal-title', style: _modal2.default.title },
            this.props.title
          ),
          _react2.default.createElement(
            'span',
            { className: 'modal-close', onClick: this.close, style: _modal2.default.close },
            'x'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal-body', style: _modal2.default.body },
          this.props.children
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

exports.default = Modal;


Modal.propTypes = {
  className: _react2.default.PropTypes.string,
  isOpen: _react2.default.PropTypes.bool,
  title: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node), _react2.default.PropTypes.node])
};

Modal.defaultProps = {
  isOpen: false,
  title: ''
};