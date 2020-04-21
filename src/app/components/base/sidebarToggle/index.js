import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { onSidebarToggle } from 'app/redux/common/actions';
import { makeSelectSidebarToggle } from 'app/redux/common/selector';

const SidebarToggle = ({ className, tag: Element }) => {
    const classes = classNames('button-toggle', className);
    const dispatch = useDispatch();
    const isToogle = useSelector(makeSelectSidebarToggle());

    const onToggle = () => {
        dispatch(onSidebarToggle(!isToogle));
    };

    return (
        <Element className={classes} role="button" onClick={onToggle}>
            <i className="icon icon-menu align-self-center" />
        </Element>
    );
};

SidebarToggle.defaultProps = {
    className: 'd-flex mr-2',
    tag: 'a',
};

SidebarToggle.propTypes = {
    className: PropTypes.string,
    tag: PropTypes.string,
};

export default memo(SidebarToggle);
