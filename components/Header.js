import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";

const Header = (props) => {
    const [search, setSearch] = useState(false);

    const closeSearch = (bool) => {
        setSearch(bool);
        props.closeSearch();
    };

    const makeSearch = () => {
        props.makeSearch(props.searchTerm);
    };

    return (
        <View style={styles.container}>
            {!search ? (
                <>
                    <Text style={styles.textStyle}>Youtube</Text>
                    <TouchableOpacity onPress={() => setSearch(true)}>
                        <Image source={require("../assets/search.png")} />
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <TouchableOpacity onPress={() => closeSearch(false)}>
                        <Image
                            style={styles.close}
                            source={require("../assets/close.png")}
                        />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.textInputStyle}
                        value={props.searchTerm}
                        onChangeText={props.setSearchTerm}
                        autoCapitalize={false}
                        autoCorrect={false}
                        placeholder="Enter Search"
                    />
                    <TouchableOpacity onPress={makeSearch}>
                        <Image source={require("../assets/confirm.png")} />
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 15,
        marginRight: 15,
        borderBottomColor: "black",
        borderBottomWidth: 0.2,
    },
    textStyle: {
        fontSize: 36,
        fontWeight: "bold",
    },
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

export default Header;
