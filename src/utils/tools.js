import {
    getAccessToken,
    removeAccessToken
} from "./localStorage";

export const isAuthorized = () => {
    return getAccessToken();
}

export const logout = () => {
    removeAccessToken();
}