import React, { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authAPI } from '../api/auth';

export const UserContext = React.createContext({});

export const UserContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(null);
    const [isError, setIsError] = useState(false);

    const login = useCallback(async (data) => {
        try {
            const res = await authAPI.signInUser(data);
            const cookie = res.headers["set-cookie"][0];
            AsyncStorage.setItem('cookie', cookie);
            setIsAuth(cookie);
            setIsError(false);
        } catch (e) {
            setIsError(true);
        }
    }, []);

    const authMe = useCallback(async () => {
        try {
            await authAPI.authUser();
            const cookie = await AsyncStorage.getItem('cookie');
            setIsAuth(cookie)
        } catch (e) {
            console.log(e);
        }
    }, []);

    const logout = useCallback(async () => {
        try {
            await authAPI.logoutUser();
            await AsyncStorage.removeItem('cookie');
            setIsAuth(null);
        } catch (e) {
            console.log(e);
        }
    }, []);

    const authContextValue = {
        isAuth,
        login,
        isError,
        authMe,
        logout
    };

    return (
        <UserContext.Provider value={authContextValue}>
            {children}
        </UserContext.Provider>
    );
};

