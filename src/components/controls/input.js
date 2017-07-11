import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateTime from 'react-datetime';
import ControlCommon from './control-common';

class InputControl extends Component {

    initElementRef = (element) => {
        this.element = element;
    }

    render() {
        let { className } = this.props;
        if (['hidden', 'range'].indexOf(this.props.type) !== -1) {
            className = null;
        }
        if (this.props.type === 'date') {
            //TODO: Add some bootstrap date control
            return <Datetime
                {...this.props}
                className={className}
                ref={this.initElementRef}
                closeOnSelect={true}
                timeFormat={false}
            />;
        }
        return (
            <input
                {...this.props}
                className={className}
                ref={this.initElementRef}
            />
        );
    }
}

InputControl.propTypes = {
    ...ControlCommon.propTypes,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string
}

InputControl.defaultProps = {
    className: 'form-control',
    type: 'text'
}

export default InputControl;
