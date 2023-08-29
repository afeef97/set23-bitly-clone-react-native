import React, { useContext, useEffect, useState } from "react";
import { FlatList, Linking, Modal, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../context";
import useGetAllLinks from "../utils/hooks/useGetAllLinks";
import { container } from "../styles";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import { addLink, deleteLink } from "../utils/api";
import Input from "../components/Input";
import Button from "../components/Button";

const Links = () => {
    const { jwt } = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(false);
    const { links, fetchLinks } = useGetAllLinks(jwt);
    const [deleteLinkState, setDeleteLinkState] = useState("idle");

    useEffect(() => {
        if (!modalVisible || deleteLinkState === "success") {
            fetchLinks();
        }
    }, [modalVisible, deleteLinkState]);

    return (
        <SafeAreaView style={{ ...container.main, paddingHorizontal: 16 }}>
            <FlatList
                ListHeaderComponent={() => (
                    <>
                        <View
                            style={{
                                height: 64,
                                paddingVertical: 8,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}>
                            <Text style={{ fontSize: 32, color: "white" }}>
                                Links
                            </Text>
                            <Pressable
                                onPress={() => setModalVisible(!modalVisible)}>
                                <MaterialIcons
                                    name="add-circle"
                                    size={32}
                                    color="white"
                                />
                            </Pressable>
                        </View>
                        <View
                            style={{
                                position: "absolute",
                            }}>
                            <AddLinkModal
                                token={jwt}
                                modalVisible={modalVisible}
                                setModalVisible={setModalVisible}
                            />
                        </View>
                    </>
                )}
                data={links}
                renderItem={({ item }) => (
                    <LinkCard
                        deleteLinkState={deleteLinkState}
                        setDeleteLinkState={setDeleteLinkState}
                        link={item}
                    />
                )}
            />
        </SafeAreaView>
    );
};

const LinkCard = ({ deleteLinkState, setDeleteLinkState, link }) => {
    const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;
    const { jwt } = useContext(AuthContext);

    const handleDeleteLink = async (id) => {
        try {
            setDeleteLinkState("loading");
            let deleteRes = await deleteLink(id, jwt);
            console.log(deleteRes.data.message);
            setDeleteLinkState("success");
        } catch (error) {
            setDeleteLinkState("error");
            console.log(error);
        }
    };

    const handleOpenLink = async (slug) => {
        Linking.openURL(`${BASE_URL}/${slug}`);
    };

    return (
        <View
            style={{
                backgroundColor: "white",
                padding: 16,
                borderRadius: 8,
                marginBottom: 8,
                flexDirection: "row",
                justifyContent: "space-between",
            }}
            onPress={() => {}}
            underlayColor="#fd8640"
            activeOpacity={0.8}>
            <View>
                <View>
                    <Pressable onPress={() => handleOpenLink(link.slug)}>
                        <Text
                            style={{
                                fontSize: 20,
                                color: "#fd8640",
                            }}>{`${link.slug}`}</Text>
                    </Pressable>
                </View>
                <Text>{link.link}</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 12 }}>
                <Text>Clicks: {link.visit_counter}</Text>
                <Pressable
                    disabled={deleteLinkState === "loading"}
                    onPress={() => handleDeleteLink(link.id)}>
                    <FontAwesome name="trash" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    );
};

const AddLinkModal = ({ token, modalVisible, setModalVisible }) => {
    const [addLinkState, setAddLinkState] = useState("idle");
    const {
        handleSubmit,
        control,
        setError,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        handleAddLink(data);
    };

    const onError = (errors, e) => {
        console.log(errors);
    };

    const handleAddLink = async (data) => {
        try {
            setAddLinkState("loading");
            await addLink(data, token);
            setAddLinkState("success");
            setModalVisible(!modalVisible);
        } catch (error) {
            const errorRes = error.response?.data;
            console.log(errorRes);
            setAddLinkState("error");
        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View
                style={{
                    backgroundColor: "white",
                    padding: 16,
                    borderRadius: 8,
                    marginBottom: 8,
                    width: "100%",
                    height: "100%",
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
                        Add a new link
                    </Text>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <MaterialIcons name="close" size={24} color="black" />
                    </Pressable>
                </View>

                <View style={{ marginTop: 16 }}>
                    <Input
                        control={control}
                        label={"URL"}
                        name="link"
                        placeholder="https://example.com"
                        inputStyle={{
                            backgroundColor: "#f0f0f0",
                            padding: 8,
                        }}
                        textStyle={{
                            fontSize: 24,
                        }}
                        rules={{
                            required: {
                                value: true,
                                message: "Link is required",
                            },
                        }}
                        error={errors.link}
                    />
                    <Button
                        disabled={addLinkState === "loading"}
                        variant="filled"
                        buttonStyle={{
                            marginTop: 16,
                            padding: 12,
                            borderRadius: 8,
                        }}
                        textStyle={{
                            fontSize: 16,
                        }}
                        onPress={handleSubmit(onSubmit, onError)}>
                        Add Link
                    </Button>
                </View>

                <View></View>
            </View>
        </Modal>
    );
};

export default Links;
