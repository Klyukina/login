import React, { useState, useContext } from 'react';
import {
    Button,
    Text,
    View
} from 'react-native';
import Input from '../../components/Input';
import { UserContext } from '../../context/UserContext';
import styles from './styles';

const LoginScreen = () => {
    const userContext = useContext(UserContext);
    const isError = userContext.isError;

    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handleEmailChange = (value) => {
        setData({
            ...data,
            email: value,
        });
    };

    const handlePasswordChange = (value) => {
        setData({
            ...data,
            password: value,
        });
    };

    const handleSubmit = async () => {
      await userContext.login(data);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Form</Text>
            <Text style={[styles.error,
                isError ? { display: 'flex'} : { display: 'none' }]}>
                try again
            </Text>
            <Input
                placeholder={'email'}
                onChange={handleEmailChange}
                secureTextEntry={false}
            />
            <Input
                placeholder={'password'}
                onChange={handlePasswordChange}
                secureTextEntry={true}
            />
            <Button title={'log in'} onPress={handleSubmit}/>
        </View>
    );
};

export default LoginScreen;