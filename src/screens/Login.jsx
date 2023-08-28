import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm } from "react-hook-form";
import { container } from "../styles";
import { StackActions } from "@react-navigation/native";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = ({ navigation }) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (data) => {
        setIdentifier(data.identifier);
        setPassword(data.password);
        handleLogin();
    };

    const onError = (errors, e) => {
        console.log(errors);
    };

    const handleLogin = () => {
        console.log(identifier, password);
    };

    const toRegister = () => {
        navigation.dispatch(StackActions.replace("Register"));
    };

    return (
        <SafeAreaView
            style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}>
            <View
                style={{
                    width: "90%",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    paddingVertical: 32,
                    borderRadius: 16,
                }}>
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
                        <Pressable onPress={() => toRegister()}>
                            <Text style={{ color: "blue", fontSize: 16 }}>
                                Sign Up
                            </Text>
                        </Pressable>
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
                        onPress={handleSubmit(onSubmit, onError)}>
                        SIGN IN
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;
