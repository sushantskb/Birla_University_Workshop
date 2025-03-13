import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import icons from "@/constants/icons";
import TextEditor from "@/components/TextEditor";
import CustomModal from "@/components/Modal";
import { useAppwrite } from "@/lib/useAppwrite";
import { editNote, getAllNotes, getNotesById } from "@/lib/appwrite";

const EditNotes = () => {
  const { id } = useLocalSearchParams();

  const { data: noteData, loading: noteLoading } = useAppwrite({
    fn: getNotesById,
    params: {
      id: id!,
    },
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("");
  const [modalText, setModalText] = useState("");

  useEffect(() => {
    if (noteData) {
      setTitle(noteData.title);
      setContent(noteData.content);
      setColor(noteData.color);
    }
  }, [noteData]);

  const [modal, setModal] = useState(false);
  const handlePress = () => {
    setModalText("Save Changes");
    setModal(true);
  };

  const handleSave = async () => {
    // console.log("Title", title, "Content", content, "Color", color);
    try {
      await editNote(id, title, content, color);
      router.push("/");
    } catch (error) {
      console.log("Error in editing the note:", error);
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

export default EditNotes;
