import { instance } from './instance';

export const authAPI = {
    async signInUser(userData) {
        return await instance.post('login', userData).then(response => response);
    },
    async authUser() {
        return await instance.get('dashboard').then(response => response);
    },
    async logoutUser() {
        return await instance.get('logout').then(response => response);
    }
};