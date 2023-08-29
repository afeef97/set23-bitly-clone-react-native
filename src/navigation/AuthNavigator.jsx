import React from "react";
import Dashboard from "../screens/Dashboard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Links from "../screens/Links";
import Account from "../screens/Account";
import { Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const AuthNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                headerShown: false,
                tabBarStyle: { height: 64, paddingBottom: 6 },
            }}>
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                color: focused ? "orange" : "black",
                                fontSize: 12,
                            }}>
                            Dashboard
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons
                            name="dashboard"
                            size={26}
                            color={focused ? "orange" : "black"}
                            style={{ marginBottom: -6 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Links"
                component={Links}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                color: focused ? "orange" : "black",
                                fontSize: 12,
                            }}>
                            Links
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons
                            name="link"
                            size={28}
                            color={focused ? "orange" : "black"}
                            style={{ marginBottom: -6 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                color: focused ? "orange" : "black",
                                fontSize: 12,
                            }}>
                            Profile
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons
                            name="account-circle"
                            size={28}
                            color={focused ? "orange" : "black"}
                            style={{ marginBottom: -6 }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default AuthNavigator;
