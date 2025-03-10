import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const EditNotes = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Editor {id}</Text>
    </View>
  );
};

export default EditNotes;
