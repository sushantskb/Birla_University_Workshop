import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import icons from "@/constants/icons";
import { router } from "expo-router";
import TextEditor from "@/components/TextEditor";

const AddNotes = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("");
  const handleSave = () => {
    console.log("Title", title, "Content", content, "Color", color);
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
            onPress={handleSave}>
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
    </KeyboardAvoidingView>
  );
};

export default AddNotes;
