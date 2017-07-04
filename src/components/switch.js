import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ControlCommon from './controls/control-common';
import ComponentCommon from './component-common';
import ErrorMessages from './error-messages';
import Help from './help';
import Row from './row';

class Switch extends Component {

    handleChange = (event) => {
        const value = event.currentTarget.checked;
        this.props.onSetValue(value);
        this.props.onChange(this.props.name, value);
    }

    initElementRef = (element) => {
        this.element = element;
    }

    renderElement = () => {
        let inputProps = Object.assign({}, this.props);
        Object.keys(ComponentCommon.propTypes).forEach((key) => {
            delete inputProps[key];
        });
        delete inputProps.valueLabel;
        delete inputProps.label;
        return (
            <div className="checkbox switch">
                <span className="pre-text">{this.props.valueLabel}</span>
                <label>
                    <input
                        {...inputProps}
                        type="checkbox"
                        checked={this.props.value === true}
                        onChange={this.handleChange}
                        ref={this.initElementRef}
                    /> <div className="slider round"></div>
                </label>
            </div>
        );
    }

    render() {

        let element = this.renderElement();

        if (this.props.layout === 'elementOnly') {
            return element;
        }

        return (
            <Row
                {...this.props}
                fakeLabel={true}
                htmlFor={this.props.id}
            >
                {element}
                {this.props.help ? <Help help={this.props.help} /> : null}
                {this.props.showErrors ? <ErrorMessages messages={this.props.errorMessages} /> : null}
            </Row>
        );
    }
}

Switch.propTypes = {
    ...ControlCommon.propTypes,
    ...ComponentCommon.propTypes,
    value: PropTypes.bool,
    valueLabel: PropTypes.string
};

Switch.defaultProps = {
    ...ComponentCommon.defaultProps,
    value: false,
    valueLabel: ''
};

export default Switch;
