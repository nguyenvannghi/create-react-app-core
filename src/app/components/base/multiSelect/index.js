import React, { memo, useRef, useEffect, useCallback } from 'react';
import { useImmer, useImmerReducer } from 'use-immer';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useOutsideClick from 'app/hooks/outsideClick';
import { SET_ABOVE, SET_DROPDOWN, RESET, FIELDS_STATE } from './const';
import multiSelectReducer, { initialState } from './reducer';

const CLASSLIST = {
    OPTION: 'multiselect_option',
    SELECTED: 'multiselect_option-selected',
    HIGHLIGHT: 'multiselect_option-highlight',
};

const MultiSelect = props => {
    const {
        className,
        tag: Element,
        name,
        tabIndex,
        onGetValues,
        options,
        placeholder,
        label,
        value,
        trackBy,
        disabled,
        searchable,
        selectLabel,
        selectedLabel,
        deselectLabel,
        noOptions,
        noResult,
    } = props;
    const dropdownRef = useRef(null);
    const optionHoveredRef = useRef(null);
    const [listSelected, setListSelected] = useImmer(value);
    const [optionBuilt, setOptionBuilt] = useImmer(options);
    const [state, dispatch] = useImmerReducer(multiSelectReducer, initialState);

    const handleDropdown = useCallback(() => {
        if (disabled) {
            return;
        }
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

    const onPopulateSuggestions = event => {
        const {
            target: { value },
        } = event;
        if (!options.length === 0 || !value) {
            setOptionBuilt(() => options);
        }
        if (value && value.length === 0) {
            return;
        }
        setOptionBuilt(draft => {
            const state = draft.filter(item => {
                let key = trackBy;
                if (label) {
                    key = label;
                }
                return item[key].toLowerCase().indexOf(value.toLowerCase()) > -1;
            });
            return state;
        });
    };

    const onPushOptionSelected = useCallback(
        data => {
            const target = document.getElementById(`${CLASSLIST.OPTION}-${data[trackBy]}`);
            setListSelected(draft => {
                const hasIndex = draft.findIndex(item => item[trackBy] === data[trackBy]);
                if (hasIndex !== -1) {
                    draft.splice(hasIndex, 1);
                    target &&
                        target.classList &&
                        Array.from(target.classList).indexOf(`${CLASSLIST.OPTION}-${data[trackBy]}`) > -1 &&
                        target.classList.remove(CLASSLIST.SELECTED);
                } else {
                    draft.push(data);
                    target &&
                        target.classList &&
                        Array.from(target.classList).indexOf(`${CLASSLIST.OPTION}-${data[trackBy]}`) > -1 &&
                        target.classList.add(CLASSLIST.SELECTED, CLASSLIST.HIGHLIGHT);
                }
                return draft;
            });
        },
        [setListSelected, trackBy],
    );

    const onSelect = (e, data) => {
        e.persist();
        onPushOptionSelected(data);
    };

    const onCheckSelected = data => value.findIndex(item => item[trackBy] === data);

    const onMouseOverEnter = (e, data) => {
        optionHoveredRef.current = data;
        Array.from(e.target.classList).indexOf(`${CLASSLIST.OPTION}-${data[trackBy]}`) > -1 &&
            Array.from(e.target.classList).indexOf(CLASSLIST.HIGHLIGHT) === -1 &&
            e.target.classList.add(CLASSLIST.HIGHLIGHT);
    };
    const onMouseLeave = (e, data) => {
        Array.from(e.target.classList).indexOf(`${CLASSLIST.OPTION}-${data[trackBy]}`) > -1 &&
            e.target.classList.remove(CLASSLIST.HIGHLIGHT);
    };

    const optionsRender = () => {
        return optionBuilt.length > 0 ? (
            optionBuilt.map((item, index) => (
                <li key={index} role="presentation" className="multiselect_element">
                    <span
                        data-select={selectLabel}
                        data-selected={selectedLabel}
                        data-deselect={deselectLabel}
                        onMouseEnter={event => onMouseOverEnter(event, item)}
                        onMouseLeave={event => onMouseLeave(event, item)}
                        onFocus={event => onMouseOverEnter(event, item)}
                        onMouseOver={event => onMouseOverEnter(event, item)}
                        onMouseDown={event => onMouseOverEnter(event, item)}
                        className={classNames(
                            CLASSLIST.OPTION,
                            `${CLASSLIST.OPTION}-${item[trackBy]}`,
                            onCheckSelected(item[trackBy]) > -1 && CLASSLIST.SELECTED,
                        )}
                        id={classNames(`${CLASSLIST.OPTION}-${item[trackBy]}`)}
                        onClick={event => onSelect(event, item)}>
                        {item[label]}
                    </span>
                </li>
            ))
        ) : (
            <li className="multiselect_element">
                <span className="multiselect_option">{noResult}</span>
            </li>
        );
    };
    const noOptionsRender = () => (
        <li className="multiselect_element">
            <span className="multiselect_option">{noOptions}</span>
        </li>
    );

    useEffect(() => {
        return () => {
            optionHoveredRef.current = null;
        };
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', e => {
            const code = e.keyCode || e.charCode;
            if (code === 13 && state[FIELDS_STATE.DROPDOWN] && optionHoveredRef) {
                onPushOptionSelected(optionHoveredRef.current);
            }
        });
        return () => {
            window.removeEventListener('keydown', () => {});
        };
    }, [dispatch, state, onPushOptionSelected]);

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
                disabled && 'disabled',
            )}
            ref={dropdownRef}
            tabIndex={tabIndex}>
            <div className="multiselect_select" />
            <div className="multiselect_tags" onClick={handleDropdown}>
                {state[FIELDS_STATE.DROPDOWN] ? (
                    <input
                        name={name}
                        type="text"
                        autoComplete="off"
                        readOnly={!searchable}
                        placeholder={placeholder}
                        onChange={onPopulateSuggestions}
                        tabIndex="0"
                        className={classNames('multiselect_input', searchable && 'allow')}
                    />
                ) : (
                    <span className="multiselect_single">
                        {listSelected.length > 0 ? `${listSelected.length} options selected` : placeholder}
                    </span>
                )}
            </div>
            <div className="multiselect_content-wrapper">
                <ul className="multiselect_content">{options.length > 0 ? optionsRender() : noOptionsRender()}</ul>
            </div>
        </Element>
    );
};

MultiSelect.defaultProps = {
    tag: 'div',
    tabIndex: 0,
    name: 'mutilselect_input',
    placeholder: 'Select option',
    trackBy: 'key',
    label: 'value',
    value: [],
    selectLabel: 'Press enter to select',
    selectedLabel: 'Selected',
    deselectLabel: 'Press enter to remove',
    noOptions: 'List is empty.',
    noResult: 'No elements found. Consider changing the search query.',
    disabled: false,
    searchable: true,
};

MultiSelect.propTypes = {
    className: PropTypes.string,
    tag: PropTypes.string,
    name: PropTypes.string,
    tabIndex: PropTypes.number,
    onGetValues: PropTypes.func,
    options: PropTypes.array,
    placeholder: PropTypes.string,
    trackBy: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
    selectLabel: PropTypes.string,
    selectedLabel: PropTypes.string,
    deselectLabel: PropTypes.string,
    noOptions: PropTypes.string,
    noResult: PropTypes.string,
    disabled: PropTypes.bool,
    searchable: PropTypes.bool,
};

export default memo(MultiSelect);
