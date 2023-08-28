import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
    return (
        <SafeAreaView
            style={{
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100%",
            }}>
            <Text>Login</Text>
        </SafeAreaView>
    );
};

export default Login;
