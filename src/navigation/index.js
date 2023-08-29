import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../context";
import { getValueFor, setValueFor } from "../utils/helper/secureStore";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import AuthNavigator from "./AuthNavigator";

const AppNavigator = () => {
    const { Navigator, Screen } = createNativeStackNavigator();
    const { jwt, setJwt } = useContext(AuthContext);

    const fetchSecureStore = async () => {
        try {
            const jwtSecureStore = await getValueFor("jwt");
            if (jwtSecureStore) setJwt(jwtSecureStore);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (jwt) setValueFor("jwt", jwt);
        else fetchSecureStore();
    }, [jwt]);

    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    headerShown: false,
                    animation: "slide_from_right",
                }}>
                {jwt ? (
                    <Screen name="AuthStack" component={AuthNavigator} />
                ) : (
                    <>
                        <Screen name="Home" component={Home} />
                        <Screen name="Login" component={Login} />
                        <Screen name="Register" component={Register} />
                    </>
                )}
            </Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
