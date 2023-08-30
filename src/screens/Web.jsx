import React from "react";
import WebView from "react-native-webview";

const Web = ({ route }) => {
    const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;
    const { slug } = route.params;

    return (
        <WebView
            style={{ height: "100%", width: "100%" }}
            source={{ uri: `${BASE_URL}/${slug}` }}
        />
    );
};

export default Web;
