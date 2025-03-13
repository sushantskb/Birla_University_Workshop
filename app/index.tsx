import Empty from "@/components/Empty";
import icons from "@/constants/icons";
import { deleteNote, getAllNotes } from "@/lib/appwrite";
import { useAppwrite } from "@/lib/useAppwrite";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SwipeListView } from "react-native-swipe-list-view";

type Note = {
  $id: string;
  title: string;
  content: string;
  color: string;
};

export default function Index() {
  type ColorType = "red" | "green" | "yellow" | "blue" | "purple";
  const colorStyles: Record<ColorType, { backgroundColor: string }> = {
    red: { backgroundColor: "#fca5a5" },
    green: { backgroundColor: "#86efac" },
    yellow: { backgroundColor: "#fde047" },
    blue: { backgroundColor: "#93c5fd" },
    purple: { backgroundColor: "#d8b4fe" },
  };
  const { data: notesData } = useAppwrite({
    fn: getAllNotes,
  });

  const [notesList, setNotesList] = useState<Note[]>([]);
  useEffect(() => {
    if (notesData) {
      const formatNotes: Note[] = notesData.map((doc) => ({
        $id: doc.$id,
        title: doc.title ?? "",
        content: doc.content ?? "",
        color: doc.color ?? "",
      }));
      setNotesList(formatNotes);
    }
  }, [notesData]);

  const handleDelete = async (id: string) => {
    await deleteNote(id);
    setNotesList((prevNotes) => prevNotes.filter((note) => note.$id !== id));
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex-1 bg-primary p-4">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-2xl font-nunito-bold text-white">📝Notes</Text>
          <View className="flex-row gap-4">
            <View className="bg-secondary p-2 rounded-xl">
              <TouchableOpacity onPress={() => router.push("/search")}>
                <Image
                  source={icons.search}
                  alt="search-icon"
                  tintColor={"white"}
                  className="size-5"
                />
              </TouchableOpacity>
            </View>
            <View className="bg-secondary p-2 rounded-xl">
              <Image
                source={icons.info}
                alt="search-icon"
                tintColor={"white"}
                className="size-5"
              />
            </View>
          </View>
        </View>

        {/* Notes List */}
        {notesList.length === 0 ? (
          <Empty />
        ) : (
          <SwipeListView
            data={notesList}
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => (
              <View
                className={`p-4 my-2 rounded-lg`}
                style={colorStyles[item.color as ColorType]}>
                <TouchableOpacity
                  onPress={() => router.push(`/edit-notes/${item.$id}`)}>
                  <Text className="text-lg font-nunito">{item.title}</Text>
                </TouchableOpacity>
              </View>
            )}
            renderHiddenItem={({ item }) => (
              <View className="justify-center items-center bg-red-500 rounded-lg m-2 px-4 py-[5px] absolute top-0 bottom-0 right-0">
                <TouchableOpacity onPress={() => handleDelete(item.$id)}>
                  <Image
                    source={icons.trash}
                    className="size-12"
                    tintColor="white"
                  />
                </TouchableOpacity>
              </View>
            )}
            rightOpenValue={-75}
          />
        )}

        {/* Add Notes */}
        <View className="absolute bottom-6 right-6 bg-secondary p-4  rounded-full shadow-2xl">
          <TouchableOpacity onPress={() => router.push("/add-notes")}>
            <Image source={icons.plus} className="size-8" tintColor={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}
