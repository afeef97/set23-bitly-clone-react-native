import React, { useContext } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../context";

const Links = () => {
    const { setJwt } = useContext(AuthContext);

    return (
        <SafeAreaView
            style={{
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100%",
            }}>
            <Text style={{ fontSize: 32 }}>Links</Text>
        </SafeAreaView>
    );
};

export default Links;
