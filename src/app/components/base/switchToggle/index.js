import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SwitchToggle = props => {
    const { className, tag: Element, size, variant, disabled, required, name, value, id, ref, onChange } = props;
    const classes = classNames('switch', className, variant && `switch-${variant}`, size && `switch-${size}`);
    const handleChange = event => {
        if (typeof onChange === 'function') {
            const {
                target: { checked },
            } = event;
            onChange(checked);
        }
    };

    return (
        <Element className={classes} htmlFor={id}>
            <input
                type="checkbox"
                ref={ref}
                id={id}
                name={name}
                value={value}
                disabled={disabled}
                required={required}
                onChange={handleChange}
            />
            <span className="slider round" />
        </Element>
    );
};

SwitchToggle.defaultProps = {
    tag: 'label',
    variant: 'success',
    disabled: undefined,
    required: undefined,
    id: 'switch-box',
};

SwitchToggle.propTypes = {
    className: PropTypes.string,
    tag: PropTypes.string,
    size: PropTypes.oneOf(['', 'lg', 'sm']),
    variant: PropTypes.oneOf(['', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light']),
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.any,
    id: PropTypes.string,
    ref: PropTypes.node,
    onChange: PropTypes.func,
};

export default memo(SwitchToggle);
