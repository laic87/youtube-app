import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const MovieList = (props) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ url: props.item.snippet.thumbnails.standard.url }}
                style={styles.image}
            />
            <View style={{ textAlign: "left" }}>
                <Text style={styles.titleStyle}>
                    {props.item.snippet.title}
                </Text>
                <Text style={{ color: "gray", fontSize: 17 }}>
                    {props.item.snippet.channelTitle}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-stretch",
        justifyContent: "center",
        marginBottom: 10,
    },
    image: {
        height: 200,
        width: "100%",
    },
    titleStyle: {
        fontSize: 15,
        fontWeight: "bold",
    },
});

export default MovieList;
