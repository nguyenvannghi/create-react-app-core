import handleResponse from 'app/services/fakeHandleResponse';

const loginApi = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    };

    return fetch('/users/authenticate', requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        });
};

const logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
};

export { loginApi, logout };
