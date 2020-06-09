import { baseUrl } from '../config';

export const TOKEN_KEY = "justcamp/authentication/token";
export const SET_TOKEN = "justcamp/authentication/SET_TOKEN";
export const REMOVE_TOKEN = "justcamp/authentication/REMOVE_TOKEN";

const removeToken = token => ({ type: REMOVE_TOKEN });
const setToken = token => ({ type: SET_TOKEN, token });

export const loadToken = () => async dispatch => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
        dispatch(setToken(token));
    }
};

export const login = (email, password) => async dispatch => {
    const response = await fetch(`${baseUrl}/session`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
        const { token } = await response.json();
        window.localStorage.setItem(TOKEN_KEY, token);
        dispatch(setToken(token));
    }
};

export const logout = () => async (dispatch, getState) => {
    const { authentication: { token } } = getState();
    const response = await fetch(`${baseUrl}/session`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
    });

    if (response.ok) {
        window.localStorage.removeItem(TOKEN_KEY);
        dispatch(removeToken());
    }
};
