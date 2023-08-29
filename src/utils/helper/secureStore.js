import * as SecureStore from "expo-secure-store";

export const setValueFor = async (key, value) => {
    await SecureStore.setItemAsync(key, value).catch((error) =>
        console.log(error)
    );
};

export const getValueFor = async (key) => {
    return await SecureStore.getItemAsync(key);
};

export const deleteValueFor = async (key) => {
    await SecureStore.deleteItemAsync(key);
};
