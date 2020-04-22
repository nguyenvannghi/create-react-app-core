import { useCallback, useState } from 'react';

const useDebounce = (fnToDebounce, durationInMs = 400) => {
    if (fnToDebounce == null) {
        throw new Error('fnToDebounce cannot be null');
    }

    if (typeof fnToDebounce !== 'function') {
        throw new Error('fnToDebounce should be a function');
    }

    return useCallback(
        setTimeout(() => {
            return fnToDebounce;
        }, durationInMs),
        [fnToDebounce, durationInMs],
    );
};

const useDebouncedState = (initialState, durationInMs = 400) => {
    const [internalState, setInternalState] = useState(initialState);
    const debouncedFunction = useDebounce(setInternalState, durationInMs);
    return [internalState, debouncedFunction];
};

export { useDebounce, useDebouncedState };
