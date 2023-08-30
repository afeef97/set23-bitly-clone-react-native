import { View, Modal, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

const LinkModal = ({ modalVisible, setModalVisible, title, children }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View
                style={{
                    backgroundColor: "black",
                    height: "100%",
                    opacity: 0.9,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <View
                    style={{
                        backgroundColor: "white",
                        padding: 16,
                        borderRadius: 8,
                        marginBottom: 8,
                        opacity: 1,
                        width: "80%",
                        justifyContent: "space-between",
                    }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}>
                        <Text
                            style={{
                                fontSize: 20,
                            }}>
                            {title}
                        </Text>
                        <Pressable
                            onPress={() => setModalVisible(!modalVisible)}>
                            <MaterialIcons
                                name="close"
                                size={24}
                                color="black"
                            />
                        </Pressable>
                    </View>
                    {children}
                </View>
            </View>
        </Modal>
    );
};

export default LinkModal;
