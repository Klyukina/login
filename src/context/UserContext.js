import React, { useState, useCallback } from 'react';
import { authAPI } from '../api/auth';

export const UserContext = React.createContext({});

export const UserContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    const [isError, setIsError] = useState(false)

    const login = useCallback(async (data) => {
        try {
            await authAPI.signInUser(data);
            setIsAuth(true);
            setIsError(false);
        } catch (e) {
            setIsError(true);
        }
    }, []);

    const authMe = useCallback(async () => {
        try {
            await authAPI.authUser();
        } catch (e) {
            console.log(e);
        }
    }, []);

    const logout = useCallback(async () => {
        try {
            await authAPI.logoutUser();
            setIsAuth(false);
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

