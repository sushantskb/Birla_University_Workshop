import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState<string>("");
  return (
    <View className="flex-1 bg-primary justify-center items-center px-4">
      <View className="w-full flex-row items-center bg-secondary rounded-full px-4 py-2">
        <TextInput
          className="flex-1 text-white text-xl font-nunito"
          placeholder="Search by title..."
          placeholderTextColor={"#a1a1a1"}
          value={search}
          onChangeText={setSearch}
        />
      </View>
    </View>
  );
}
