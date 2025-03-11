# Created Home UI

This commit implements the Home screen UI, providing a list of notes with swipe-to-delete functionality and an "Add Notes" button.

<details>
<summary><strong>Changes</strong></summary>

* **Dependency Installation:**
    * Installed `react-native-swipe-list-view` and `react-native-gesture-handler` using `npm install`.
* **Home Screen Implementation (`index.tsx`):**
    * Imported necessary modules from React Native and installed libraries.
    * Used `GestureHandlerRootView` to wrap the screen for swipe functionality.
    * Implemented a header with the app title and search/info icons.
    * Utilized `SwipeListView` to display a list of notes, allowing swipe actions.
    * Implemented `renderItem` to display each note with dynamic background colors based on note color.
    * Implemented `renderHiddenItem` to display a delete button on swipe.
    * Added `handleDelete` function to remove notes from the list.
    * Added an "Add Notes" button with a plus icon.
    * Used data from `constants/data` and icons from `constants/icons`.
    * Used Tailwind CSS classes for styling.
    * Added type for note colors.

```typescript
import { notes } from "@/constants/data";
import icons from "@/constants/icons";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SwipeListView } from "react-native-swipe-list-view";
export default function Index() {
  type ColorType = "red" | "green" | "yellow" | "blue" | "purple";
  const colorStyles: Record<ColorType, { backgroundColor: string }> = {
    red: { backgroundColor: "#fca5a5" },
    green: { backgroundColor: "#86efac" },
    yellow: { backgroundColor: "#fde047" },
    blue: { backgroundColor: "#93c5fd" },
    purple: { backgroundColor: "#d8b4fe" },
  };
  const [notesList, setNotesList] = useState(notes);

  const handleDelete = (id: string) => {
    setNotesList((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex-1 bg-primary p-4">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-2xl font-nunito-bold text-white">📝Notes</Text>
          <View className="flex-row gap-4">
            <View className="bg-secondary p-2 rounded-xl">
              <Image
                source={icons.search}
                alt="search-icon"
                tintColor={"white"}
                className="size-5"
              />
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
        <SwipeListView
          data={notesList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              className={`p-4 my-2 rounded-lg`}
              style={colorStyles[item.color as ColorType]}>
              <Text className="text-lg font-nunito">{item.text}</Text>
            </View>
          )}
          renderHiddenItem={({ item }) => (
            <View className="justify-center items-center bg-red-500 rounded-lg m-2 px-4 py-[5px] absolute top-0 bottom-0 right-0">
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
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

        {/* Add Notes */}
        <View className="absolute bottom-6 right-6 bg-secondary p-4  rounded-full shadow-2xl">
          <Image source={icons.plus} className="size-8" tintColor={"white"} />
        </View>
      </View>
    </GestureHandlerRootView>
  );
}