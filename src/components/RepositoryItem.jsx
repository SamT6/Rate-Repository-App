import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';


const cardHeaderStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        padding: 3
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 45 / 2,
    },
    avatarContainer: {
        flexGrow: 0,
        paddingRight: 15,
    },
    infoContainer: {
        flexGrow: 1,
        flexShrink: 1, 
        flexBasis: 'auto',
    },
});

const cardFooterStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-around',
    },
    itemContainer: {
        flexGrow: 1,
        alignItems:'center',
    },
});

const cardStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
        backgroundColor: "#FFFFFF",
    }
})



const RepositoryItem = ({item}) => {

    const numberFormat = (num) => {
        if (num > 999) {
            return (num / 1000).toFixed(1) + 'k'; 
        }
        else{
            return num + '';
        }
    };

    return(
        <View style={cardStyles.container}>
            <View style={cardHeaderStyles.container}>
                <View style={cardHeaderStyles.avatarContainer}>
                    <Image style={cardHeaderStyles.avatar} source={{
                        uri: item.imageURL,
                    }}/>
                </View>
                <View style={cardHeaderStyles.infoContainer}>
                    <Text fontWeight="bold" fontSize="subheading">{item.fullName}</Text>
                    <Text color="textSecondary">{item.description}</Text>
                    <Text color="tag" style={{paddingVertical: 15}}>{item.language}</Text>
                </View>
            </View>


            <View style={cardFooterStyles.container}>
                <View style={cardFooterStyles.itemContainer}>
                    <Text fontWeight="bold">{numberFormat(parseInt(item.stargazersCount, 10))}</Text>
                    <Text color="textSecondary">Stars</Text>
                </View>
                <View style={cardFooterStyles.itemContainer}>
                    <Text fontWeight="bold">{numberFormat(parseInt(item.forksCount, 10))}</Text>
                    <Text color="textSecondary">Forks</Text>
                </View>
                <View style={cardFooterStyles.itemContainer}>
                    <Text fontWeight="bold">{numberFormat(parseInt(item.reviewCount, 10))}</Text>
                    <Text color="textSecondary">Reviews</Text>
                </View>
                <View style={cardFooterStyles.itemContainer}>
                    <Text fontWeight="bold">{numberFormat(parseInt(item.ratingAverage, 10))}</Text>
                    <Text color="textSecondary">Rating</Text>
                </View>                
            </View>
        </View>
    );
}

export default RepositoryItem;

