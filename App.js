import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Button, FlatList, StyleSheet } from "react-native";

import Header from "./components/Header";
import MovieList from "./components/MovieList";

const App = () => {
    const BASE_URL =
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyByXooPkP4wbdK0ZJphq9p6BLSLUMVpu_s";
    const [items, setItems] = useState([]);
    const [loadFeed, setLoadFeed] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");

    const makeApiCall = () => {
        setLoadFeed(true);
        fetch(BASE_URL)
            .then((response) => response.json())
            .then((data) => setItems(data.items));
    };

    const closeSearch = () => {
        makeApiCall();
    };

    const makeSearch = (text) => {
        setSearchTerm(text);
        console.log(searchTerm);
        const search = items.filter((task) =>
            task.snippet.title.includes(searchTerm)
        );
        setItems(search);
    };

    return (
        <SafeAreaView
            style={[
                styles.container,
                {
                    flexDirection: "column",
                },
            ]}
        >
            <View style={styles.header}>
                <Header
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    makeSearch={makeSearch}
                    closeSearch={closeSearch}
                />
            </View>
            <View style={styles.body}>
                {loadFeed ? (
                    <FlatList
                        keyExtractor={(items) => items.id}
                        data={items}
                        renderItem={({ item }) => {
                            return <MovieList item={item} />;
                        }}
                    />
                ) : (
                    <Button title="Load Feed" onPress={makeApiCall} />
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
    },
    body: {
        flex: 15,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
});

export default App;
