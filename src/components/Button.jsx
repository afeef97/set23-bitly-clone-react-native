import { View, Text, TouchableHighlight } from "react-native";
import React from "react";

const Button = ({
    underlay = "#444",
    textColor = "white",
    children = "Button",
    ...props
}) => {
    return (
        <TouchableHighlight
            underlayColor={underlay}
            style={{
                backgroundColor: "black",
                padding: 10,
                borderRadius: 4,
                width: "100%",
                ...props.style,
            }}
            {...props}>
            <Text
                style={{
                    color: textColor,
                    textAlign: "center",
                }}>
                {children}
            </Text>
        </TouchableHighlight>
    );
};

export default Button;