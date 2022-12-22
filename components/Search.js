import React, { useState } from "react";
import { TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const closeSearch = (bool) => {
        props.closeSearch(bool);
    };

    const makeSearch = () => {
        console.log(searchTerm);
    };

    return (
        <>
            <TouchableOpacity onPress={() => closeSearch(false)}>
                <Image style={styles.close} source={require("../assets/close.png")} />
            </TouchableOpacity>
            <TextInput
                style={styles.textInputStyle}
                value={searchTerm}
                onChangeText={setSearchTerm}
                autoCapitalize={false}
                autoCorrect={false}
                placeholder="Enter Search"
            />
            <TouchableOpacity onPress={makeSearch}>
                <Image source={require("../assets/confirm.png")} />
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    textInputStyle: {
        width: "80%",
        height: 50,
        textAlign: "center",
        fontSize: 25
    },
    close: {
        marginTop: 10
    }
});

export default Search;
