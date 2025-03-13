import CustomModal from "@/components/Modal";
import TextEditor from "@/components/TextEditor";
import icons from "@/constants/icons";
import { addNote } from "@/lib/appwrite";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";

const AddNotes = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("");
  const [modalText, setModalText] = useState("");
  const [modal, setModal] = useState<boolean>(false);
  const handlePress = () => {
    setModalText("Save Changes");
    setModal(true);
  };
  const handleSave = async () => {
    // console.log("Title", title, "Content", content, "Color", color);
    try {
      await addNote(title, content, color);
      router.push("/");
    } catch (error) {
      console.log("Error in adding notes:", error);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-primary p-4">
      <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity
          className="p-2 bg-secondary rounded-full"
          onPress={() => router.push("/")}>
          <Image
            source={icons.backArrow}
            className="size-8"
            tintColor={"white"}
          />
        </TouchableOpacity>
        <View className="flex-row gap-4">
          <TouchableOpacity className="bg-secondary p-2 rounded-full">
            <Image source={icons.eye} className="size-6" tintColor="white" />
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-secondary p-2 rounded-full"
            onPress={handlePress}>
            <Image source={icons.save} className="size-6" tintColor="white" />
          </TouchableOpacity>
        </View>
      </View>

      <TextEditor
        title={title}
        content={content}
        color={color}
        setTitle={setTitle}
        setContent={setContent}
        setColor={setColor}
      />

      {modal && (
        <CustomModal
          visible={modal}
          text={modalText}
          onClose={() => setModal(false)}
          onSave={handleSave}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default AddNotes;
