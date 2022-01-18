import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const Input = ({ placeholder, onChange, secureTextEntry }) => {
    return (
        <TextInput
            autoCapitalize="none"
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            onChangeText={(value) => onChange(value)}
            style={styles.input}/>
    );
};

export default Input;