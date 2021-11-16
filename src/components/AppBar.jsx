import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from "./Text";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBar,
        padding: 20,
    },
    insideContainer: {
        flexDirection: "row",
    }
});

const AppBar = () => {
    return <View style={styles.container}>
        <ScrollView style={styles.insideContainer} horizontal> 
                <Pressable>
                    <Link to="/"> 
                        <Text color="primary" fontWeight="bold" 
                            fontSize="title" style={{ paddingBottom: 10 }}>
                            Repositories
                        </Text>
                    </Link>
                </Pressable>
                <Text>  </Text>
                <Pressable>
                    <Link to="/signin"> 
                        <Text color="primary" fontWeight="bold" 
                            fontSize="title" style={{ paddingBottom: 10 }}>
                            Sign in
                        </Text>
                    </Link>
                </Pressable>
        </ScrollView>
    </View>
};

export default AppBar;