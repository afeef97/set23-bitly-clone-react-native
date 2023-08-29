import React from "react";
import WebView from "react-native-webview";

const Web = ({ link }) => {
    return (
        <WebView
            style={{ height: "100%", width: "100%" }}
            source={{ uri: link }}
        />
    );
};

export default Web;
