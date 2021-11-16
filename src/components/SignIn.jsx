import React from 'react';
import Text from './Text';
import { Formik, useField } from 'formik';
import FormikTextInput from './FormikTextInput';
import { Pressable, View, StyleSheet } from 'react-native';
import * as yup from 'yup';

const initialValues = {
    username: '',
    password: '',
};

const validationSchema = yup.object().shape({
    username: yup.string().required('username is required'),
    password: yup.string().required("password is required"),
});

const styles = StyleSheet.create({
    containter: {
        flexDirection: "column",
        alignItems: 'center',
        padding: 10,
    },
});

const SignInForm = ({onSubmit}) => {
    return(
        <View style={styles.containter}>
            <FormikTextInput name="username" placeholder="username" />
            <FormikTextInput name="password" placeholder="password" secureTextEntry={true}/>
            <Pressable onPress={onSubmit}>
                <Text color="tag" >sign in</Text>
            </Pressable>
        </View>
    );
}

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <Formik initialValues={initialValues} 
                onSubmit={onSubmit}
                validationSchema={validationSchema}
        >
            { ({handleSubmit}) =>  <SignInForm onSubmit={handleSubmit}/> }
        </Formik>
    );
};

export default SignIn;