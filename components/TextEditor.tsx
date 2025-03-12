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
        className="text-3xl text-gray-100 font-nunito-semibold mb-2"
      />

      <TextInput
        placeholder="Type something..."
        placeholderTextColor="#666"
        multiline
        value={content}
        onChangeText={setContent}
        className="text-lg font-nunito text-gray-300"
      />

      {/* Color */}
      <View className="absolute bottom-4">
        <View className="flex-row flex-wrap p-2 gap-2 justify-center items-center">
          {["red", "purple", "yellow", "blue", "green"].map((item, index) => (
            <TouchableOpacity key={index} onPress={() => setColor(item)}>
              <Text
                key={index}
                className={`border px-6 py-1 rounded-xl font-nunito text-white ${
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
