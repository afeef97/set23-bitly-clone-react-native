import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { container } from "../styles";
import Input from "../components/Input";
import { StackActions } from "@react-navigation/native";
import { registerUser } from "../utils/api";

const Register = ({ navigation }) => {
    const [registerState, setRegisterState] = useState("idle"); // ["idle", "loading", "success", "error"
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        handleRegister(data);
    };

    const onError = (errors, e) => {
        console.log(errors);
    };

    handleRegister = async (data) => {
        try {
            setRegisterState("loading");
            const registerRes = await registerUser({
                email: data.email,
                password: data.password,
                username: data.username,
            });
            console.log(registerRes);
            setRegisterState("success");
        } catch (error) {
            const errorRes = error.response?.data;
            console.error(errorRes);
            setRegisterState("error");
        }
    };

    toLogin = () => {
        navigation.dispatch(StackActions.replace("Login"));
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
                        Sign Up
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 16, textAlign: "center" }}>
                            Already have an account?{" "}
                        </Text>
                        <Pressable onPress={() => toLogin()}>
                            <Text style={{ color: "blue", fontSize: 16 }}>
                                Sign In
                            </Text>
                        </Pressable>
                    </View>
                </View>
                <View style={{ width: "80%", gap: 4 }}>
                    <Input
                        control={control}
                        name="username"
                        label="Username"
                        error={errors.username}
                        inputStyle={container.input}
                    />
                    <Input
                        control={control}
                        name="email"
                        label="Email"
                        error={errors.email}
                        inputStyle={container.input}
                        validate={{
                            validate: (value) =>
                                value.includes("@") || "Email is not valid",
                        }}
                    />
                    <Input
                        control={control}
                        name="password"
                        label="Password"
                        error={errors.password}
                        inputStyle={container.input}
                        secure
                        validate={{
                            validate: (value) =>
                                value.length >= 8 ||
                                "Password should be at least 8 characters",
                        }}
                    />

                    <Button
                        buttonStyle={{ marginTop: 16, paddingVertical: 14 }}
                        onPress={handleSubmit(onSubmit, onError)}>
                        {registerState === "loading"
                            ? "Registering..."
                            : "Sign Up"}
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Register;
