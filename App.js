import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthContextProvider } from "./src/context";
import AppNavigator from "./src/navigation";

export default function App() {
    return (
        <SafeAreaProvider>
            <AuthContextProvider>
                <AppNavigator />
            </AuthContextProvider>
        </SafeAreaProvider>
    );
}
