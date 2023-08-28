import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Dashboard = () => {
    return (
        <SafeAreaView
            style={{
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100%",
            }}>
            <Text>Dashboard</Text>
        </SafeAreaView>
    );
};

export default Dashboard;
