import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorTag: {
        backgroundColor: theme.colors.primary,
        color: '#ffffff',
        alignSelf: 'flex-start', // keep background color to text area only
        padding: 5,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 10, 
        overflow: 'hidden',
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
    },
    fontSizeTitle: {
        fontSize: theme.fontSizes.title,
    },  
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
})

const Text = ({color, fontSize, fontWeight, style, ...props}) => {
    const textStyle = [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'primary' && styles.colorPrimary,
        color === 'tag' && styles.colorTag,
        fontSize === 'subheading' && styles.fontSizeSubheading,
        fontSize === 'title' && styles.fontSizeTitle,
        fontWeight === 'bold' && styles.fontWeightBold,
        style,
    ];

    return <NativeText style={textStyle} {...props} />
}

export default Text;