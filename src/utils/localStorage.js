let localStorage = null;
export const assignLocalStorage = (storage) => localStorage = storage;

export const getAccessToken = () => {
    return localStorage ? localStorage.getItem("access_token") : null
};

export const removeAccessToken = () => {
    localStorage ? localStorage.removeItem("access_token") : null
}

export const setDataToLocalStorage = (name, data) => {
    localStorage ? localStorage.setItem(name, data) : null;
}

export const getDataFromLocalStorage = (name) => {
   return localStorage ? localStorage.getItem(name) : null;
}

export const removeDataFromLocalStorage = (name) => {
   return localStorage ? localStorage.removeItem(name) : null;
}