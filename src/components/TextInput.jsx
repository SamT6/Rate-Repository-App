import React from 'react';
import { TextInput as NativeTextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    input: {
        height: 100,
        width: 300,
        fontSize: 30,
        borderWidth: 3,
        borderColor: 0x123456,
        borderRadius: 1,
        padding: 10
    },
    error:{
        borderWidth: 3,
        borderColor: "#d73a4a",
    }
});

const TextInput = ({ style, error, ...props}) => {
    const textInputStyle = [
        style, 
        styles.input, 
        error && styles.error
    ];

    return <NativeTextInput style={textInputStyle} {...props}/>;
};

export default TextInput;