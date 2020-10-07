import { getAccessToken } from "./localStorage";

export const isAuthorized =() => {
    return getAccessToken();
}