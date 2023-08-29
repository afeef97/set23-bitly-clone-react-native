import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { container } from "../styles";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={container.mainCentered}>
            <Text style={{ fontSize: 40, marginBottom: 4 }}>Home</Text>

            <View style={{ width: "50%", alignItems: "center", gap: 4 }}>
                <Button onPress={() => navigation.navigate("Login")}>
                    Login
                </Button>
                <Button onPress={() => navigation.navigate("Register")}>
                    Register
                </Button>
            </View>
        </SafeAreaView>
    );
};

export default Home;
