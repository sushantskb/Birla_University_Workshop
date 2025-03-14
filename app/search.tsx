import NotFound from "@/components/NotFound";
import { searchNotes } from "@/lib/appwrite";
import { useAppwrite } from "@/lib/useAppwrite";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDebouncedCallback } from "use-debounce";
export default function Search() {
  type ColorType = "red" | "green" | "yellow" | "blue" | "purple";
  const colorStyles: Record<ColorType, { backgroundColor: string }> = {
    red: { backgroundColor: "#fca5a5" },
    green: { backgroundColor: "#86efac" },
    yellow: { backgroundColor: "#fde047" },
    blue: { backgroundColor: "#93c5fd" },
    purple: { backgroundColor: "#d8b4fe" },
  };

  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState<string>(params.query || "");
  const debouncedSearch = useDebouncedCallback(
    (text: string) => router.setParams({ query: text }),
    500
  );
  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  const { data, refetch } = useAppwrite({
    fn: searchNotes,
    params: { query: params.query || "" },
    skip: !!params.query,
  });
  useEffect(() => {
    refetch({
      query: params.query || "",
    });
  }, [params.query]);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <View
          className={`p-4 my-2 rounded-lg`}
          style={colorStyles[item.color as ColorType]}>
          <TouchableOpacity>
            <Text className="text-lg font-nunito">{item.title}</Text>
          </TouchableOpacity>
        </View>
      )}
      contentContainerClassName="flex-1 bg-primary justify-center items-center px-4 "
      ListHeaderComponent={
        <View className="w-full">
          <View className="w-full flex-row items-center bg-secondary rounded-full px-4 py-2">
            <TextInput
              className="flex-1 text-white text-xl font-nunito"
              placeholder="Search by title..."
              placeholderTextColor={"#a1a1a1"}
              value={search}
              onChangeText={handleSearch}
            />
          </View>
        </View>
      }
      ListEmptyComponent={
        params.query && data?.length === 0 ? <NotFound /> : null
      }
    />
  );
}
