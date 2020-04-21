import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SelectMulti = props => {
    const { className, tag: Element, size, variant, disabled, required, name, value, id, onChange } = props;
    const classes = classNames('select-multiple', className);

    return <Element className={classes}></Element>;
};

SelectMulti.defaultProps = {
    tag: 'dv',
};

SelectMulti.propTypes = {
    className: PropTypes.string,
    tag: PropTypes.string,
};

export default memo(SelectMulti);
