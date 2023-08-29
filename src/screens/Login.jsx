import React, { useContext, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm } from "react-hook-form";
import { container } from "../styles";
import { StackActions } from "@react-navigation/native";
import Input from "../components/Input";
import Button from "../components/Button";
import { loginUser } from "../utils/api";
import { AuthContext } from "../context";

const Login = ({ navigation }) => {
    const [loginState, setLoginState] = useState("idle");
    const { setJwt } = useContext(AuthContext);
    const {
        handleSubmit,
        control,
        setError,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        handleLogin(data);
    };

    const onError = (errors, e) => {
        console.log(errors);
    };

    const handleLogin = async (data) => {
        try {
            setLoginState("loading");
            const loginRes = await loginUser({
                identifier: data.identifier,
                password: data.password,
            });
            console.log(loginRes);
            setJwt(loginRes.jwt);
            setLoginState("success");
        } catch (error) {
            const errorRes = error.response?.data;
            console.log(errorRes);
            setLoginState("error");
            setError("identifier", {
                message: errorRes.error || errorRes.message,
            });
            setError("password", {
                message: errorRes.error || errorRes.message,
            });
        }
    };

    const toRegister = () => {
        navigation.dispatch(StackActions.replace("Register"));
    };

    return (
        <SafeAreaView
            style={{
                ...container.main,
                justifyContent: "center",
                alignItems: "center",
            }}>
            <View style={container.authPanel}>
                <View
                    style={{
                        marginBottom: 16,
                    }}>
                    <Text style={{ fontSize: 40, textAlign: "center" }}>
                        Sign In
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 16, textAlign: "center" }}>
                            Don't have an account yet?{" "}
                        </Text>
                        <Button
                            variant="ghost"
                            onPress={() => toRegister()}
                            textStyle={{ fontSize: 16 }}>
                            Sign Up
                        </Button>
                    </View>
                </View>
                <View style={{ width: "80%", gap: 4 }}>
                    <Input
                        control={control}
                        name="identifier"
                        label="Username or Email"
                        error={errors.identifier}
                        inputStyle={container.input}
                    />
                    <Input
                        control={control}
                        name="password"
                        label="Password"
                        error={errors.password}
                        inputStyle={container.input}
                        secure
                    />

                    <Button
                        buttonStyle={{ marginTop: 16, paddingVertical: 14 }}
                        onPress={handleSubmit(onSubmit, onError)}
                        disabled={loginState === "loading"}>
                        {loginState === "loading" ? "Signing in" : "SIGN IN"}
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;
