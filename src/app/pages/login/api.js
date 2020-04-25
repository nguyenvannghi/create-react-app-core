import handleResponse from 'app/services/fakeHandleResponse';

const login = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    };

    return fetch('/users/authenticate', requestOptions)
        .then(handleResponse)
        .then(user => {
            console.log(user);
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));

            return user;
        });
};

const logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
};

export { login, logout };
