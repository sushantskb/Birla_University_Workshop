# Created Add Notes UI

This commit implements the Add Notes screen UI, allowing users to create new notes with a title, content, and color selection.

<details>
<summary><strong>Changes</strong></summary>

* **Add Notes Screen Implementation (`add-notes.tsx`):**
    * Imported necessary modules from React Native and Expo Router.
    * Used `KeyboardAvoidingView` to handle keyboard interactions.
    * Implemented a header with a back button and save/preview icons.
    * Used a `TextEditor` component for title, content, and color input.
    * Added state variables for title, content, and color using `useState`.
    * Implemented `handleSave` function to log the note details (to be replaced with actual save logic).
    * Used Tailwind CSS classes for styling.

```typescript
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
```

```typescript
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";

export default function TextEditor({
  title,
  content,
  color,
  setTitle,
  setContent,
  setColor,
}: {
  title: string;
  content: string;
  color: string;
  setTitle: (text: string) => void;
  setContent: (text: string) => void;
  setColor: (text: string) => void;
}) {
  type colorType = "red" | "purple" | "yellow" | "blue" | "green";
  const colors: Record<colorType, string> = {
    red: "border-red-500",
    purple: "border-purple-500",
    yellow: "border-yellow-500",
    blue: "border-blue-500",
    green: "border-green-500",
  };

  return (
    <View className="flex-1">
      {/* Title Input */}
      <TextInput
        placeholder="Title"
        placeholderTextColor="#aaa"
        value={title}
        onChangeText={setTitle}
        className="text-3xl text-gray-100 font-semibold mb-2"
      />

      <TextInput
        placeholder="Type something..."
        placeholderTextColor="#666"
        multiline
        value={content}
        onChangeText={setContent}
        className="text-lg text-gray-300"
      />

      {/* Color */}
      <View className="absolute bottom-4">
        <View className="flex-row flex-wrap p-2 gap-2 justify-center items-center">
          {["red", "purple", "yellow", "blue", "green"].map((item, index) => (
            <TouchableOpacity key={index} onPress={() => setColor(item)}>
              <Text
                key={index}
                className={`border px-6 py-1 rounded-xl text-white ${
                  colors[item as colorType]
                } ${color === item ? "bg-black" : ""}`}>
                {item.toLocaleUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}
```