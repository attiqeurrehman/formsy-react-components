'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionsProvider = function (_Component) {
    _inherits(OptionsProvider, _Component);

    function OptionsProvider() {
        _classCallCheck(this, OptionsProvider);

        return _possibleConstructorReturn(this, (OptionsProvider.__proto__ || Object.getPrototypeOf(OptionsProvider)).apply(this, arguments));
    }

    _createClass(OptionsProvider, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                layout: this.props.layout,
                validateOnSubmit: this.props.validateOnSubmit,
                validatePristine: this.props.validatePristine,
                rowClassName: this.props.rowClassName,
                labelClassName: this.props.labelClassName,
                elementWrapperClassName: this.props.elementWrapperClassName
            };
        }
    }, {
        key: 'render',
        value: function render() {
            return _react.Children.only(this.props.children);
        }
    }]);

    return OptionsProvider;
}(_react.Component);

var classNamesType = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array, _propTypes2.default.object]);

var propTypes = {
    layout: _propTypes2.default.string,
    validateOnSubmit: _propTypes2.default.bool,
    validatePristine: _propTypes2.default.bool,
    elementWrapperClassName: classNamesType,
    labelClassName: classNamesType,
    rowClassName: classNamesType
};

OptionsProvider.propTypes = _extends({}, propTypes, {
    children: _propTypes2.default.node
});

OptionsProvider.defaultProps = {
    layout: 'horizontal',
    validateOnSubmit: false,
    validatePristine: false,
    rowClassName: '',
    labelClassName: '',
    elementWrapperClassName: ''
};

OptionsProvider.childContextTypes = propTypes;

exports.default = OptionsProvider;