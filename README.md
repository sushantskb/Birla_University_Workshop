# Created Modal Component

This commit introduces a reusable modal component for displaying overlay content.



* **Modal Component Implementation:**
    * Created a new component, likely named `Modal.tsx` or similar, within the `components` directory.
    * Implemented a modal overlay using `View` components with absolute positioning to cover the entire screen.
    * Added styling to create a semi-transparent background overlay.
    * Included a container within the modal to hold the content, styled with a white background and rounded corners.
    * Added a prop to control the modal's visibility (e.g., `visible: boolean`).
    * Added a prop or mechanism to close the modal (e.g., an `onClose` function).
    * Made the content of the modal dynamic using `children` prop.
    * Used Tailwind CSS classes for styling.
<details>
<summary><strong>Code:</strong></summary>
```typescript
// Modal.tsx 
import { View, Text, Modal, Image, TouchableOpacity } from "react-native";
import React from "react";
import icons from "@/constants/icons";
interface ModalProps {
  visible: boolean;
  onClose: () => void;
  onSave?: () => void;
  text: string;
}
export default function CustomModal({
  visible,
  onSave,
  onClose,
  text,
}: ModalProps) {
  return (
    <Modal transparent visible animationType="fade">
      <View className="flex-1 justify-center items-center bg-primary/50">
        <View className="bg-secondary rounded-lg p-5 w-80 items-center">
          <Image source={icons.info} className="size-10" tintColor={"white"} />
          <Text className="text-white font-nunito text-xl mt-2">{text}</Text>
          <View className="flex-row mt-4 gap-4">
            <TouchableOpacity
              className="bg-red-600 px-6 py-3 rounded-md"
              onPress={onClose}>
              <Text className="text-white font-nunito">Discard</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-green-600 px-6 py-3 rounded-md"
              onPress={onSave}>
              <Text className="text-white font-nunito">Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
```
</deatils>

* ***Changes in Add Notes Tab:**
<details>
<summary><strong>Code:</strong></summary>
```typescript
// AddNotes.tsx 
import CustomModal from "@/components/Modal";
import TextEditor from "@/components/TextEditor";
import icons from "@/constants/icons";
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
  const handleSave = () => {
    console.log("Title", title, "Content", content, "Color", color);
    router.push("/");
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

```
</deatils>