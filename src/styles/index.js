import { StyleSheet } from "react-native";

export const container = StyleSheet.create({
    main: {
        height: "100%",
        backgroundColor: "#fd8640",
    },
    authPanel: {
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fef8f1",
        paddingVertical: 32,
        borderRadius: 16,
    },
    input: {
        backgroundColor: "#fcfcfc",
        borderWidth: 1,
        borderColor: "#e3e3e3",
        padding: 10,
        borderRadius: 4,
        width: "100%",
        marginBottom: 4,
    },
});
