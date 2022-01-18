import React, { useContext, useEffect } from 'react';
import {
    Button,
    Text,
    View
} from 'react-native';
import { UserContext } from '../../context/UserContext';
import styles from './styles';

const SuccessScreen = () => {
    const userContext = useContext(UserContext);

    useEffect(() => {
         userContext.authMe();
    }, []);

    const handleLogout = () => {
        userContext.logout();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <Button title={'logout'} onPress={handleLogout}/>
        </View>
    );
};

export default SuccessScreen;