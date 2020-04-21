export const parseResponse = resp => {
    if (!resp) {
        return {
            status: 500,
            errMess: 'Status: 500 (Internal server error), Backend or DevOps help me!',
        };
    }
    const { status, data } = resp;
    if (status === 200) {
        return data;
    }
    return {
        errMess: data.message || 'Empty',
    };
};

export const parseErr = err => {
    return { errMess: err.message || 'Empty' };
};
