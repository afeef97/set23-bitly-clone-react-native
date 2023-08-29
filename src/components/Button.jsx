import { Text, TouchableHighlight } from "react-native";
import React from "react";

const Button = ({
    underlay = "#fa8f50",
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
                borderRadius: 8,
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
            textVariantStyle = {
                color: "#fd8640",
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
                    ...textVariantStyle,
                    textAlign: "center",
                    ...props.textStyle,
                }}>
                {children}
            </Text>
        </TouchableHighlight>
    );
};

export default Button;
