import React, { useContext } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { deleteValueFor } from "../utils/helper/secureStore";
import { AuthContext } from "../context";
import Button from "../components/Button";

const Dashboard = () => {
    const { setJwt } = useContext(AuthContext);

    return (
        <SafeAreaView
            style={{
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100%",
            }}>
            <Text style={{ fontSize: 32 }}>Dashboard</Text>

            <Button
                buttonStyle={{
                    width: "50%",
                    marginTop: 16,
                    paddingVertical: 12,
                }}
                onPress={async () => {
                    setJwt(null);
                    await deleteValueFor("jwt");
                }}>
                Logout
            </Button>
        </SafeAreaView>
    );
};

export default Dashboard;
