import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Note = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Note {id}</Text>
    </View>
  );
};

export default Note;
