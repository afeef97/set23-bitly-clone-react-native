import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import Button from "../components/Button";
import { container } from "../styles";
import Input from "../components/Input";

const Register = () => {
    const {
        register,
        setValue,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");

    const onSubmit = (data) => {
        console.log(data);
    };

    const onError = (errors, e) => {
        console.log(errors);
    };

    handleRegister = () => {
        console.log({ email, password, fullName });
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
                    width: "80%",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <View
                    style={{
                        marginBottom: 16,
                    }}>
                    <Text style={{ fontSize: 40, textAlign: "center" }}>
                        Sign Up
                    </Text>
                    <Text style={{ fontSize: 16, textAlign: "center" }}>
                        Already have an account?{" "}
                        <Text style={{ color: "blue" }}>Sign In</Text>
                    </Text>
                </View>
                <View style={{ width: "80%", gap: 4 }}>
                    <Controller
                        control={control}
                        name="email"
                        rules={{
                            required: "Email is required",
                            validate: (value) =>
                                value.includes("@") || "Email is not valid",
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View>
                                <Text>Email</Text>
                                <TextInput
                                    label="Email"
                                    onBlur={onBlur}
                                    style={container.input}
                                    onChangeText={(value) => onChange(value)}
                                    value={value}
                                />
                                {errors.email && (
                                    <Text style={{ color: "red" }}>
                                        {errors?.email?.message}
                                    </Text>
                                )}
                            </View>
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        rules={{
                            required: "Password is required",
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View>
                                <Text>Password</Text>
                                <TextInput
                                    label="Password"
                                    onBlur={onBlur}
                                    style={container.input}
                                    onChangeText={(value) => onChange(value)}
                                    value={value}
                                />
                                {errors.password && (
                                    <Text style={{ color: "red" }}>
                                        {errors?.password?.message}
                                    </Text>
                                )}
                            </View>
                        )}
                    />
                    <Controller
                        control={control}
                        name="fullname"
                        rules={{
                            required: "Full name is required",
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View>
                                <Text>Full Name</Text>
                                <TextInput
                                    label="Full Name"
                                    onBlur={onBlur}
                                    style={container.input}
                                    onChangeText={(value) => onChange(value)}
                                    value={value}
                                />
                                {errors.fullname && (
                                    <Text style={{ color: "red" }}>
                                        {errors?.fullname?.message}
                                    </Text>
                                )}
                            </View>
                        )}
                    />
                    <Input />
                    {/* <View>
                        <Text>Full name</Text>
                        <View>
                            <TextInput
                                onChangeText={setFullName}
                                value={fullName}
                                style={container.input}
                                placeholder="e.g. Ahmad Farah"
                                placeholderTextColor="gray"
                            />
                        </View>
                    </View> */}
                    <Button onPress={handleSubmit(onSubmit, onError)}>
                        SIGN UP
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Register;
