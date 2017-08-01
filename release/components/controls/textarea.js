'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _controlCommon = require('./control-common');

var _controlCommon2 = _interopRequireDefault(_controlCommon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextareaControl = function TextareaControl(props) {
    return _react2.default.createElement('textarea', props);
};

TextareaControl.propTypes = _extends({}, _controlCommon2.default.propTypes, {
    className: _propTypes2.default.string,
    value: _propTypes2.default.string
});

TextareaControl.defaultProps = {
    className: 'form-control',
    cols: 0, // React doesn't render the cols attribute if it is zero
    rows: 3,
    value: ''
};

exports.default = TextareaControl;