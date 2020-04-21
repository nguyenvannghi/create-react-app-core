import React, { memo, useRef, useEffect, useCallback } from 'react';
import { useImmer, useImmerReducer } from 'use-immer';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useOutsideClick from 'app/hooks/outsideClick';
import { SET_ABOVE, SET_DROPDOWN, RESET, FIELDS_STATE } from './const';
import multiSelectReducer, { initialState } from './reducer';

const CLASSLIST = {
    SELECTED: 'multiselect_option-selected',
    HIGHLIGHT: 'multiselect_option-highlight',
};

const MultiSelect = props => {
    const { className, tag: Element, tabIndex, onGetValues, options, placeholder, label, value, trackBy, attributes } = props;
    const dropdownRef = useRef(null);
    const [listSelected, setListSelected] = useImmer(value);
    const [state, dispatch] = useImmerReducer(multiSelectReducer, initialState);

    const handleDropdown = useCallback(() => {
        dispatch({ type: SET_DROPDOWN, [FIELDS_STATE.DROPDOWN]: !state[FIELDS_STATE.DROPDOWN] });
        handleAbove();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAbove = useCallback(() => {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        const topOffset = dropdownRef.current.getBoundingClientRect().top;
        const relativeOffset = topOffset - scrollTop;
        const windowHeight = document.body.clientHeight;
        dispatch({ type: SET_ABOVE, [FIELDS_STATE.ABOVE]: !state[FIELDS_STATE.DROPDOWN] && relativeOffset > windowHeight / 2 });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useOutsideClick(dropdownRef, () => {
        dispatch({ type: RESET });
    });

    const onSelect = (event, data) => {
        // Array.from(event.target.classList).indexOf(className) > -1
        //     ? event.target.classList.remove(className)
        //     : event.target.classList.add(className);
        event.persist();
        setListSelected(draft => {
            const hasIndex = draft.findIndex(item => item[trackBy] === data[trackBy]);

            if (hasIndex !== -1) {
                draft.splice(hasIndex, 1);
                event.target.classList.remove(CLASSLIST.SELECTED);
            } else {
                draft.push(data);
                event.target.classList.add(CLASSLIST.SELECTED);
            }
            return draft;
        });
    };

    const onCheckSelected = data => listSelected.findIndex(item => item[trackBy] === data);

    const onMouseOver = event => {
        Array.from(event.target.classList).indexOf(CLASSLIST.HIGHLIGHT) === -1 && event.target.classList.add(CLASSLIST.HIGHLIGHT);
    };
    const onMouseOut = event => {
        Array.from(event.target.classList).indexOf(CLASSLIST.HIGHLIGHT) > -1 && event.target.classList.remove(CLASSLIST.HIGHLIGHT);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleAbove);
        return () => {
            window.removeEventListener('scroll', handleAbove);
        };
    }, [handleAbove]);

    useEffect(() => {
        onGetValues(listSelected);
    }, [listSelected, onGetValues]);

    return (
        <Element
            className={classNames(
                'multiselect',
                className,
                state[FIELDS_STATE.DROPDOWN] && 'multiselect-active',
                state[FIELDS_STATE.ABOVE] && 'multiselect-above',
            )}
            ref={dropdownRef}
            tabIndex={tabIndex}>
            <div className="multiselect_select" />
            <div className="multiselect_tags" onClick={handleDropdown}>
                {state[FIELDS_STATE.DROPDOWN] ? (
                    <input name="" type="text" autoComplete="off" placeholder={placeholder} tabIndex="0" className="multiselect_input" />
                ) : (
                    <span className="multiselect_single">
                        {listSelected.length > 0 ? `${listSelected.length} options selected` : placeholder}
                    </span>
                )}
            </div>
            <div className="multiselect_content-wrapper">
                <ul className="multiselect_content">
                    {options ? (
                        options.map((item, index) => (
                            <li key={index} role="presentation" className="multiselect_element">
                                <span
                                    data-select={attributes?.select}
                                    data-selected={attributes?.selected}
                                    data-deselect={attributes?.deselect}
                                    onFocus={onMouseOver}
                                    onMouseEnter={onMouseOver}
                                    onBlur={onMouseOut}
                                    onMouseLeave={onMouseOut}
                                    className={classNames('multiselect_option', onCheckSelected(item[trackBy]) > -1 && CLASSLIST.SELECTED)}
                                    onClick={event => onSelect(event, item)}>
                                    {item[label]}
                                </span>
                            </li>
                        ))
                    ) : (
                        <li>
                            <span className="multiselect_option">List is empty.</span>
                        </li>
                    )}
                </ul>
            </div>
        </Element>
    );
};

MultiSelect.defaultProps = {
    tag: 'div',
    tabIndex: 0,
    placeholder: 'Select option',
    value: [],
    attributes: {
        select: 'Press enter to select',
        selected: 'Selected',
        deselect: 'Press enter to remove',
    },
};

MultiSelect.propTypes = {
    className: PropTypes.string,
    tag: PropTypes.string,
    tabIndex: PropTypes.number,
    onGetValues: PropTypes.func,
    options: PropTypes.array,
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired, // Label from option Object, that will be visible in the dropdown.
    // value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.array,
    trackBy: PropTypes.string.isRequired, // Used to compare objects
    attributes: PropTypes.shape({
        select: PropTypes.string,
        selected: PropTypes.string,
        deselect: PropTypes.string,
    }),
};

export default memo(MultiSelect);
