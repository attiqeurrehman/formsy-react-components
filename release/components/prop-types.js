'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.styleClassNames = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// JedWatson/classnames
// --------------------
//
// This is a PropType definition that is suitable for converting to a HTML 'class' attribute value.
// See: https://github.com/JedWatson/classnames
var styleClassName = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array, _propTypes2.default.object]);

var styleClassNames = exports.styleClassNames = {
    rowClassName: styleClassName,
    labelClassName: styleClassName,
    elementWrapperClassName: styleClassName
};