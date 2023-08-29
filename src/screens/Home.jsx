import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { container } from "../styles";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{
                ...container.main,
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Text style={{ fontSize: 64, marginBottom: 4, color: "white" }}>
                bitly
            </Text>

            <View
                style={{
                    width: "50%",
                    alignItems: "center",
                    gap: 4,
                    backgroundColor: "white",
                    padding: 24,
                    borderRadius: 8,
                }}>
                <Button
                    variant="filled"
                    buttonStyle={{
                        width: "100%",
                        backgroundColor: "#fd8640",
                        borderRadius: 8,
                        padding: 8,
                        margin: 8,
                        textAlign: "center",
                        color: "white",
                    }}
                    onPress={() => navigation.navigate("Login")}>
                    Login
                </Button>
                <Button
                    variant="filled"
                    buttonStyle={{
                        width: "100%",
                        backgroundColor: "#fd8640",
                        borderRadius: 8,
                        padding: 8,
                        margin: 8,
                        textAlign: "center",
                        color: "white",
                    }}
                    onPress={() => navigation.navigate("Register")}>
                    Register
                </Button>
            </View>
        </SafeAreaView>
    );
};

export default Home;
