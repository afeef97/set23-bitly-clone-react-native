import { Text, TouchableHighlight } from "react-native";
import React from "react";

const Button = ({
    underlay = "#fa8f50",
    textColor = "white",
    children = "Button",
    variant = "filled",
    ...props
}) => {
    let variantStyle = {};
    let textVariantStyle = {};
    switch (variant) {
        case "filled":
            variantStyle = {
                backgroundColor: "#fd8640",
            };
            textVariantStyle = {
                color: "white",
            };
            break;
        case "outlined":
            variantStyle = {
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: "#fd8640",
            };
            break;
        case "ghost":
            variantStyle = {
                backgroundColor: "transparent",
            };
            break;
        default:
            variantStyle = {
                backgroundColor: "#fd8640",
            };
            break;
    }

    return (
        <TouchableHighlight
            underlayColor={underlay}
            style={{
                ...variantStyle,
                ...props.buttonStyle,
            }}
            {...props}>
            <Text
                style={{
                    color: textColor,
                    textAlign: "center",
                    ...props.textStyle,
                }}>
                {children}
            </Text>
        </TouchableHighlight>
    );
};

export default Button;
