import { View, Text, TextInput } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

const Input = ({
    control,
    name,
    label,
    error,
    autoCapitalize = "none",
    ...props
}) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={{
                required: `${label} is required`,
                ...props.validate,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
                <View>
                    <Text style={{ ...props.textStyle }}>{label}</Text>
                    <TextInput
                        label={label}
                        onBlur={onBlur}
                        style={{ ...props.inputStyle }}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                        autoCapitalize={autoCapitalize}
                        secureTextEntry={props.secure}
                    />
                    {error && (
                        <Text style={{ color: "red" }}>{error?.message}</Text>
                    )}
                </View>
            )}
        />
    );
};

export default Input;
