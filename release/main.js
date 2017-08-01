'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _checkbox = require('./components/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _switch = require('./components/switch');

var _switch2 = _interopRequireDefault(_switch);

var _checkboxGroup = require('./components/checkbox-group');

var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

var _icon = require('./components/icon');

var _icon2 = _interopRequireDefault(_icon);

var _input = require('./components/input');

var _input2 = _interopRequireDefault(_input);

var _inputFile = require('./components/input-file');

var _inputFile2 = _interopRequireDefault(_inputFile);

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

var _radioGroup = require('./components/radio-group');

var _radioGroup2 = _interopRequireDefault(_radioGroup);

var _row = require('./components/row');

var _row2 = _interopRequireDefault(_row);

var _select = require('./components/select');

var _select2 = _interopRequireDefault(_select);

var _textarea = require('./components/textarea');

var _textarea2 = _interopRequireDefault(_textarea);

var _optionsProvider = require('./hoc/options-provider');

var _optionsProvider2 = _interopRequireDefault(_optionsProvider);

var _component = require('./hoc/component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FRC = {
    Checkbox: (0, _component2.default)(_checkbox2.default),
    CheckboxGroup: (0, _component2.default)(_checkboxGroup2.default),
    Switch: (0, _component2.default)(_switch2.default),
    Input: (0, _component2.default)(_input2.default),
    File: (0, _component2.default)(_inputFile2.default),
    RadioGroup: (0, _component2.default)(_radioGroup2.default),
    Select: (0, _component2.default)(_select2.default),
    Textarea: (0, _component2.default)(_textarea2.default),
    Form: _form2.default,
    Icon: _icon2.default,
    OptionsProvider: _optionsProvider2.default,
    Row: _row2.default
};

exports.default = FRC;