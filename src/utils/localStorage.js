let localStorage = null;
export const assignLocalStorage = (storage) => localStorage = storage;

export const getAccessToken = () => {
    return localStorage ? localStorage.getItem("access_token") : null
};

export const removeAccessToken = () => {
    localStorage ? localStorage.removeItem("access_token") : null
}