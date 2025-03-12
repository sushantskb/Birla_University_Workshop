import { View, Text, Image } from "react-native";
import React from "react";
import images from "@/constants/images";

const NotFound = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Image
        source={images.notFound}
        className="w-56 h-56"
        resizeMode="contain"
      />
      <Text className="text-white text-lg mt-4 font-nunito">
        Could'nt found any results
      </Text>
    </View>
  );
};

export default NotFound;
