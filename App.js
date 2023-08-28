import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Dashboard from "./src/screens/Dashboard";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";

export default function App() {
    const { Navigator, Screen } = createNativeStackNavigator();

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Navigator
                    screenOptions={{
                        headerShown: false,
                        animation: "slide_from_right",
                    }}>
                    <Screen name="Home" component={Home} />
                    <Screen name="Dashboard" component={Dashboard} />
                    <Screen name="Login" component={Login} />
                    <Screen name="Register" component={Register} />
                </Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
