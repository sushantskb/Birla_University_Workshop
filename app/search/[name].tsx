import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Search = () => {
  const { name } = useLocalSearchParams();
  return (
    <View>
      <Text>Search {name}</Text>
    </View>
  );
};

export default Search;
