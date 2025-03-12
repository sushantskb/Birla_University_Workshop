import { View, Text, Image } from "react-native";
import React from "react";
import images from "@/constants/images";

const Empty = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Image
        source={images.notesImg}
        className="w-56 h-56"
        resizeMode="contain"
      />
      <Text className="text-white text-lg mt-4 font-nunito">Create your first note</Text>
    </View>
  );
};

export default Empty;
